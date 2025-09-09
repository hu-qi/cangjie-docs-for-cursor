
# 类

## class Annotation
    
    __
    
    public class Annotation <: Node {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示编译器内置的注解节点。

一个 [Annotation](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-annotation) 节点：`@CallingConv[xxx]`, `@Attribute[xxx]`, `@When[condition]`等。

父类型：

  * Node

### prop arguments
    
    __
    
    public mut prop arguments: ArrayList\<Argument\>
    
功能：获取或设置 [Annotation](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-annotation) 中的参数序列，如 `@CallingConv[xxx]` 中的 `xxx`。

类型：[ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)<[Argument](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-argument)>

### prop at
    
    __
    
    public mut prop at: Token
    
功能：获取或设置 [Annotation](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-annotation) 节点中的 `@` 操作符或 `@!` 操作符。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 `@` 操作符或 `@!` 操作符时，抛出异常。

### prop attributes
    
    __
    
    public mut prop attributes: Tokens
    
功能：获取或设置 `Attribute` 中设置的属性值，仅用于 `@Attribute`，如 `@Attribute[xxx]` 中的 `xxx`。

类型：[Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)

### prop condition
    
    __
    
    public mut prop condition: Expr
    
功能：获取或设置条件编译中的条件表达式，用于 `@When`，如 `@When[xxx]` 中的 `xxx`。

类型：[Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当 [Annotation](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-annotation) 节点中没有条件表达式时，抛出异常。

### prop identifier
    
    __
    
    public mut prop identifier: Token
    
功能：获取或设置 [Annotation](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-annotation) 节点的标识符，如 `@CallingConv[xxx]` 中的 `CallingConv`。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [Annotation](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-annotation) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：根据输入的词法单元，构造一个 [Annotation](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-annotation) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [Annotation](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-annotation) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [Annotation](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-annotation) 节点时，抛出异常。

## class Argument
    
    __
    
    public class Argument <: Node {
        public init()
    }
    
功能：表示函数调用的实参节点。

例如 `foo(arg:value)` 中的 `arg:value`。

父类型：

  * Node

### prop colon
    
    __
    
    public mut prop colon: Token
    
功能：获取或设置 [Argument](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-argument) 节点中的操作符 ":"，可能为 [ILLEGAL](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_enums.html#illegal) 的词法单元。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 ":" 操作符时，抛出异常。

### prop expr
    
    __
    
    public mut prop expr: Expr
    
功能：获取或设置 [Argument](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-argument) 节点中的表达式，如 `arg:value` 中的 `value`。

类型：[Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr)

### prop identifier
    
    __
    
    public mut prop identifier: Token
    
功能：获取或设置 [Argument](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-argument) 节点中的标识符，如 `arg:value` 中的 `arg`，可能为 [ILLEGAL](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_enums.html#illegal) 的词法单元。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当获取和设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 类型不是 [IDENTIFIER](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_enums.html#identifier) 标识符或 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 的字面量值是空时，抛出异常。

### prop keyword
    
    __
    
    public mut prop keyword: Token
    
功能：获取或设置 [Argument](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-argument) 节点中的关键字 `inout`，可能为 [ILLEGAL](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_enums.html#illegal) 的词法单元。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [Argument](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-argument) 对象。

## class ArrayLiteral
    
    __
    
    public class ArrayLiteral <: Expr {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示 [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt) 字面量节点。

[ArrayLiteral](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-arrayliteral) 节点：使用格式 `[element1, element2, ... , elementN]` 表示， 每个 `element` 是一个表达式。

父类型：

  * Expr

### prop elements
    
    __
    
    public mut prop elements: ArrayList\<Expr\>
    
功能：获取或设置 [ArrayLiteral](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-arrayliteral) 中的表达式列表。

类型：[ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)<[Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr)>

### prop lSquare
    
    __
    
    public mut prop lSquare: Token
    
功能：获取或设置 [ArrayLiteral](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-arrayliteral) 中的 "\["。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\[" 时，抛出异常。

### prop rSquare
    
    __
    
    public mut prop rSquare: Token
    
功能：获取或设置 [ArrayLiteral](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-arrayliteral) 中的 "\]"。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\]" 时，抛出异常。

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [ArrayLiteral](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-arrayliteral) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [ArrayLiteral](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-arrayliteral) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [ArrayLiteral](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-arrayliteral) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [ArrayLiteral](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-arrayliteral) 节点时，抛出异常。

## class AsExpr
    
    __
    
    public class AsExpr <: Expr {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示一个类型检查表达式。

一个 [AsExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-asexpr) 表达式：`e as T`，类型为 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)\<T\>。其中 e 可以是任何类型的表达式，T 可以是任何类型。

父类型：

  * Expr

### prop expr
    
    __
    
    public mut prop expr: Expr
    
功能：获取或设置 [AsExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-asexpr) 节点中的表达式节点。

类型：[Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr)

### prop keyword
    
    __
    
    public mut prop keyword: Token
    
功能：获取或设置 [AsExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-asexpr) 节点中的 `as` 操作符。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 `as` 操作符时，抛出异常。

### prop shiftType
    
    __
    
    public mut prop shiftType: TypeNode
    
功能：获取或设置 [AsExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-asexpr) 节点中的目标类型。

类型：[TypeNode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typenode)

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [AsExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-asexpr) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [AsExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-asexpr) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [AsExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-asexpr) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [AsExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-asexpr) 节点时，抛出异常。

## class AssignExpr
    
    __
    
    public class AssignExpr <: Expr {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示赋值表达式节点。

用于将左操作数的值修改为右操作数的值。一个 [AssignExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-assignexpr) 节点：`a = b`。

父类型：

  * Expr

### prop assign
    
    __
    
    public mut prop assign: Token
    
功能：获取或设置 [AssignExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-assignexpr) 节点中的赋值操作符（如 `=` 等）。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是赋值操作符时，抛出异常。

### prop leftExpr
    
    __
    
    public mut prop leftExpr: Expr
    
功能：获取或设置 [AssignExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-assignexpr) 节点中的左操作数。

类型：[Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr)

### prop rightExpr
    
    __
    
    public mut prop rightExpr: Expr
    
功能：获取或设置 [AssignExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-assignexpr) 节点中的右操作数。

类型：[Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr)

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [AssignExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-assignexpr) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [AssignExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-assignexpr) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [AssignExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-assignexpr) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [AssignExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-assignexpr) 节点时，抛出异常。

## class BinaryExpr
    
    __
    
    public class BinaryExpr <: Expr {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示一个二元操作表达式节点。

一个 [BinaryExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-binaryexpr) 节点：`a + b`, `a - b` 等。

父类型：

  * Expr

### prop leftExpr
    
    __
    
    public mut prop leftExpr: Expr
    
功能：获取或设置 [BinaryExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-binaryexpr) 节点中操作符左侧的表达式节点。

类型：[Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr)

### prop op
    
    __
    
    public mut prop op: Token
    
功能：获取或设置 [BinaryExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-binaryexpr) 节点中的二元操作符。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

### prop rightExpr
    
    __
    
    public mut prop rightExpr: Expr
    
功能：获取或设置 [BinaryExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-binaryexpr) 节点中操作符右侧的表达式节点。

类型：[Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr)

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [BinaryExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-binaryexpr) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [BinaryExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-binaryexpr) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [BinaryExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-binaryexpr) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [BinaryExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-binaryexpr) 节点时，抛出异常。

## class Block
    
    __
    
    public class Block <: Expr {
        public init()
    }
    
功能：表示块节点。

[Block](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-block) 由一对匹配的大括号及其中可选的表达式声明序列组成的结构，简称 “块”。

父类型：

  * Expr

### prop lBrace
    
    __
    
    public mut prop lBrace: Token
    
功能：获取或设置 [Block](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-block) 的 "\{"。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\{" 时，抛出异常。

### prop nodes
    
    __
    
    public mut prop nodes: ArrayList\<Node\>
    
功能：获取或设置 [Block](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-block) 中的表达式或声明序列。

类型：[ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)<[Node](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-node)>

### prop rBrace
    
    __
    
    public mut prop rBrace: Token
    
功能：获取或设置 [Block](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-block) 的 "\}"。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\}" 时，抛出异常。

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [Block](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-block) 对象。

> **说明：**
> 
> [Block](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-block) 节点无法脱离表达式或声明节点单独存在，因此不提供其他的构造函数。

## class Body
    
    __
    
    public class Body <: Node {
        public init()
        public init(decls: ArrayList\<Decl\>)
    }
    
功能：表示 Class 类型、 Struct 类型、 Interface 类型以及扩展中由 `{}` 和内部的一组声明节点组成的结构。

父类型：

  * Node

### prop decls
    
    __
    
    public mut prop decls: ArrayList\<Decl\>
    
功能：获取或设置 [Body](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-body) 内的声明节点集合。

类型：[ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)<[Decl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-decl)>

### prop lBrace
    
    __
    
    public mut prop lBrace: Token
    
功能：获取或设置 `{` 词法单元。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 `{` 词法单元时，抛出异常。

### prop rBrace
    
    __
    
    public mut prop rBrace: Token
    
功能：获取或设置 `}` 词法单元。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 `}` 词法单元时，抛出异常。

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [Body](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-body) 对象。

### init\(ArrayList\<Decl\>\)
    
    __
    
    public init(decls: ArrayList\<Decl\>)
    
功能：构造一个 [Body](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-body) 对象。

参数：

  * decls: [ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)<[Decl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-decl)> \- 将要构造 [Body](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-body) 类型的声明列表。

## class CallExpr
    
    __
    
    public class CallExpr <: Expr {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示函数调用节点节点。

一个 [CallExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-callexpr) 节点包括一个表达式后面紧跟参数列表，例如 `foo(100)`。

父类型：

  * Expr

### prop arguments
    
    __
    
    public mut prop arguments: ArrayList\<Argument\>
    
功能：获取或设置 [CallExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-callexpr) 节点中函数参数。

类型：[ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)<[Argument](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-argument)>

### prop callFunc
    
    __
    
    public mut prop callFunc: Expr
    
功能：获取或设置 [CallExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-callexpr) 节点中的函数调用节点。

类型：[Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr)

### prop lParen
    
    __
    
    public mut prop lParen: Token
    
功能：获取或设置 [CallExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-callexpr) 节点中的 "\("。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\(" 时，抛出异常。

### prop rParen
    
    __
    
    public mut prop rParen: Token
    
功能：获取或设置 [CallExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-callexpr) 节点中的 "\)"。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\)" 时，抛出异常。

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [CallExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-callexpr) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [CallExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-callexpr) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [CallExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-callexpr) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [CallExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-callexpr) 节点时，抛出异常。

## class ClassDecl
    
    __
    
    public class ClassDecl <: Decl {
        public init()
        public init(inputs: Tokens)
    }
    
功能：类定义节点。

类的定义使用 `class` 关键字，定义依次为：可缺省的修饰符、class 关键字、class 名、可选的类型参数、是否指定父类或父接口、可选的泛型约束、类体的定义。

父类型：

  * Decl

### prop body
    
    __
    
    public mut prop body: Body
    
功能：获取或设置 [ClassDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-classdecl) 节点的类体。

类型：[Body](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-body)

### prop superTypeBitAnds
    
    __
    
    public mut prop superTypeBitAnds: Tokens
    
功能：获取或设置 [ClassDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-classdecl) 节点的父类或父接口声明中的 `&` 操作符的词法单元序列，可能为空。

类型：[Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 不是 `&` 词法单元序列时，抛出异常。

### prop superTypes
    
    __
    
    public mut prop superTypes: ArrayList\<TypeNode\>
    
功能：获取或设置 [ClassDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-classdecl) 节点的父类或者父接口。

类型：[ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)<[TypeNode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typenode)>

### prop upperBound
    
    __
    
    public mut prop upperBound: Token
    
功能：获取或设置 `<:` 操作符。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 `<:` 操作符时，抛出异常。

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [ClassDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-classdecl) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [ClassDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-classdecl) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [ClassDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-classdecl) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [ClassDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-classdecl) 节点时，抛出异常。

## class ConstPattern
    
    __
    
    public class ConstPattern <: Pattern {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示常量模式节点。

常量模式可以是整数字面量、字符字节字面量、浮点数字面量、字符字面量、布尔字面量、字符串字面量等字面量，如 `case 1 => 0` 中的 `1`。

父类型：

  * Pattern

### prop litConstExpr
    
    __
    
    public mut prop litConstExpr: LitConstExpr
    
功能：获取或设置 [ConstPattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-constpattern) 节点中的字面量表达式。

类型：[LitConstExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-litconstexpr)

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [ConstPattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-constpattern) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [ConstPattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-constpattern) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [ConstPattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-constpattern) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [ConstPattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-constpattern) 节点时，抛出异常。

## class Constructor
    
    __
    
    public class Constructor <: Node {
        public init()
    }
    
功能：表示 `enum` 类型中的 [Constructor](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-constructor) 节点。

一个 [Constructor](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-constructor) 节点：enum TimeUnit \{ Year | Month\([Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32), [Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32)\)\} 中的 Year 和 Month\([Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32), [Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32)\)。

> **说明：**
> 
> [Constructor](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-constructor) 可以没有参数，也可以有一组不同类型的参数。

父类型：

  * Node

### prop identifier
    
    __
    
    public mut prop identifier: Token
    
功能：获取或设置 [Constructor](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-constructor) 的标识符词法单元。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

### prop lParen
    
    __
    
    public mut prop lParen: Token
    
功能：获取或设置 [Constructor](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-constructor) 节点中的 "\(" 词法单元。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\(" 时，抛出异常。

### prop rParen
    
    __
    
    public mut prop rParen: Token
    
功能：获取或设置 [Constructor](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-constructor) 节点中的 "\)" 词法单元。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\)" 时，抛出异常。

### prop typeArguments
    
    __
    
    public mut prop typeArguments: ArrayList\<TypeNode\>
    
功能：获取或设置 [Constructor](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-constructor) 节点可选的参数类型节点的集合。

类型：[ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)<[TypeNode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typenode)>

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [Constructor](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-constructor) 对象。

## class Decl
    
    __
    
    public open class Decl <: Node
    
功能：所有声明节点的父类，继承自 [Node](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-node) 节点，提供了所有声明节点的通用接口。

> **说明：**
> 
> 类定义、接口定义、函数定义、变量定义、枚举定义、结构体定义、扩展定义、类型别名定义、宏定义等都属于 [Decl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-decl) 节点。

父类型：

  * Node

### prop annotations
    
    __
    
    public mut prop annotations: ArrayList\<Annotation\>
    
功能：获取或设置作用于 [Decl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-decl) 节点的注解列表。

类型：[ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)<[Annotation](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-annotation)>

### prop constraintCommas
    
    __
    
    public mut prop constraintCommas: Tokens
    
功能：获取或设置 [Decl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-decl) 节点中的 "," 词法单元序列，可能为空。

类型：[Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 不是 "," 词法单元序列时，抛出异常。

### prop genericConstraint
    
    __
    
    public mut prop genericConstraint: ArrayList\<GenericConstraint\>
    
功能：获取或设置定义节点的泛型约束，可能为空，如 `func foo<T>() where T <: Comparable<T> {}` 中的 `where T <: Comparable<T>`。

类型：[ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)<[GenericConstraint](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-genericconstraint)>

### prop genericParam
    
    __
    
    public mut prop genericParam: GenericParam
    
功能：获取或设置形参列表，类型形参列表由 `<>` 括起，多个类型形参之间用逗号分隔。

类型：[GenericParam](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-genericparam)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当节点未定义类型形参列表时，抛出异常。

### prop identifier
    
    __
    
    public mut open prop identifier: Token
    
功能：获取或设置定义节点的标识符，如 `class foo {}` 中的 `foo`。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

### prop isGenericDecl
    
    __
    
    public mut prop isGenericDecl: Bool
    
功能：判断是否是一个泛型节点。

类型：[Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 是一个泛型节点为 true；反之为 false。

### prop keyword
    
    __
    
    public mut prop keyword: Token
    
功能：获取或设置定义节点的关键字。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

### prop modifiers
    
    __
    
    public mut prop modifiers: ArrayList\<Modifier\>
    
功能：获取或设置修饰节点的修饰符列表。

类型：[ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)<[Modifier](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-modifier)>

### func getAttrs\(\)
    
    __
    
    public func getAttrs(): Tokens
    
功能：获取当前节点的属性（一般通过内置的 `Attribute` 来设置某个声明设置属性值）。

返回值：

  * [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 当前节点的属性。

### func hasAttr\(String\)
    
    __
    
    public func hasAttr(attr: String): Bool
    
功能：判断当前节点是否具有某个属性（一般通过内置的 `Attribute` 来设置某个声明的属性值）。

参数：

  * attr: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 将要判断是否存在于该节点的属性。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 当前节点具有该属性时，返回 true；反之，返回 false。

## class DoWhileExpr
    
    __
    
    public class DoWhileExpr <: Expr {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示 `do-while` 表达式。

父类型：

  * Expr

### prop block
    
    __
    
    public mut prop block: Block
    
功能：获取或设置 [DoWhileExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-dowhileexpr) 中的块表达式。

类型：[Block](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-block)

### prop condition
    
    __
    
    public mut prop condition: Expr
    
功能：获取或设置关键字 [DoWhileExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-dowhileexpr) 中的条件表达式。

类型：[Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr)

### prop keywordD
    
    __
    
    public mut prop keywordD: Token
    
功能：获取或设置 [DoWhileExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-dowhileexpr) 节点中 `do` 关键字，其中 keywordD 中的 D 为关键字 `do` 的首字母大写，代表关键字 `do` 。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 `do` 关键字时，抛出异常。

### prop keywordW
    
    __
    
    public mut prop keywordW: Token
    
功能：获取或设置 [DoWhileExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-dowhileexpr) 节点中 `while` 关键字，其中 keywordW 中的 W 为关键字 `while` 的首字母大写，代表关键字 `while` 。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 `while` 关键字时，抛出异常。

### prop lParen
    
    __
    
    public mut prop lParen: Token
    
功能：获取或设置 [DoWhileExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-dowhileexpr) 中 `while` 关键字之后的 "\("。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\(" 时，抛出异常。

### prop rParen
    
    __
    
    public mut prop rParen: Token
    
功能：获取或设置 [DoWhileExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-dowhileexpr) 中 `while` 关键字之后的 "\)"。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\)" 时，抛出异常。

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [DoWhileExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-dowhileexpr) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [DoWhileExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-dowhileexpr) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [DoWhileExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-dowhileexpr) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [DoWhileExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-dowhileexpr) 节点时，抛出异常。

## class EnumDecl
    
    __
    
    public class EnumDecl <: Decl {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示一个 `Enum` 定义节点。

Enum 的定义使用 `enum` 关键字，定义依次为：可缺省的修饰符、enum 关键字、enum 名、可选的类型参数、是否指定父接口、可选的泛型约束、enum 体的定义。

父类型：

  * Decl

### prop constructors
    
    __
    
    public mut prop constructors: ArrayList\<Constructor\>
    
功能：获取或设置 [EnumDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-enumdecl) 节点内 constructor 的成员。

类型：[ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)<[Constructor](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-constructor)>

### prop annotations
    
    __
    
    public mut prop annotations: ArrayList\<Annotation\>
    
功能：获取或设置作用于 [EnumDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-enumdecl) 节点的注解列表。

类型：[ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)<[Annotation](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-annotation)>

### prop decls
    
    __
    
    public mut prop decls: ArrayList\<Decl\>
    
功能：获取或设置 [EnumDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-enumdecl) 节点内除 constructor 的其他成员。

类型：[ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)<[Decl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-decl)>

### prop ellipsis
    
    __
    
    public mut prop ellipsis: Token
    
功能：获取或设置 [EnumDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-enumdecl) 节点中可选的 `...` 词法单元，可能为 [ILLEGAL](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_enums.html#illegal) 的词法单元类型。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 `...` 词法单元时，抛出异常。

### prop lBrace
    
    __
    
    public mut prop lBrace: Token
    
功能：获取或设置 [EnumDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-enumdecl) 节点的 `{` 词法单元类型。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 `{` 词法单元类型时，抛出异常。

### prop rBrace
    
    __
    
    public mut prop rBrace: Token
    
功能：获取或设置 [EnumDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-enumdecl) 节点的 `}` 词法单元类型。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 `}` 词法单元类型时，抛出异常。

### prop superTypeBitAnds
    
    __
    
    public mut prop superTypeBitAnds: Tokens
    
功能：获取或设置 [EnumDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-enumdecl) 节点的父接口声明中的 `&` 操作符的词法单元序列，可能为空。

类型：[Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 不是 `&` 词法单元序列时，抛出异常。

### prop superTypes
    
    __
    
    public mut prop superTypes: ArrayList\<TypeNode\>
    
功能：获取或设置 [EnumDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-enumdecl) 节点的父接口。

类型：[ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)<[TypeNode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typenode)>

### prop upperBound
    
    __
    
    public mut prop upperBound: Token
    
功能：获取或设置 `<:` 操作符。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 `<:` 操作符时，抛出异常。

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [EnumDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-enumdecl) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [EnumDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-enumdecl) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [EnumDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-enumdecl) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [EnumDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-enumdecl) 节点时，抛出异常。

## class EnumPattern
    
    __
    
    public class EnumPattern <: Pattern {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示 enum 模式节点。

用于匹配 enum 的 `constructor`， 如 `case Year(n) => 1` 中的 `Year(n)`。

父类型：

  * Pattern

### prop commas
    
    __
    
    public mut prop commas: Tokens
    
功能：获取或设置 [EnumPattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-enumpattern) 节点中的 "," 词法单元序列，可能为空。

类型：[Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 不是 "," 词法单元序列时，抛出异常。

### prop constructor
    
    __
    
    public mut prop constructor: Expr
    
功能：获取或设置 [EnumPattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-enumpattern) 节点中的构造器表达式节点。

类型：[Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr)

### prop lParen
    
    __
    
    public mut prop lParen: Token
    
功能：获取或设置 [EnumPattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-enumpattern) 节点中的 "\(" 的词法单元。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\(" 时，抛出异常。

### prop patterns
    
    __
    
    public mut prop patterns: ArrayList\<Pattern\>
    
功能：获取或设置 [EnumPattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-enumpattern) 节点中有参构造器内的模式节点列表。

类型：[ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)<[Pattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-pattern)>

### prop rParen
    
    __
    
    public mut prop rParen: Token
    
功能：获取或设置 [EnumPattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-enumpattern) 节点中的 "\)" 的词法单元。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\)" 时，抛出异常。

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [EnumPattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-enumpattern) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [EnumPattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-enumpattern) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [EnumPattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-enumpattern) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [EnumPattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-enumpattern) 节点时，抛出异常。

## class ExceptTypePattern
    
    __
    
    public class ExceptTypePattern <: Pattern {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示一个用于异常模式状态下的节点。

例如 `e: Exception1 | Exception2`。

父类型：

  * Pattern

### prop colon
    
    __
    
    public mut prop colon: Token
    
功能：获取或设置 [ExceptTypePattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-excepttypepattern) 节点中的 ":" 操作符的词法单元。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 ":" 操作符时，抛出异常。

### prop pattern
    
    __
    
    public mut prop pattern: Pattern
    
功能：获取或设置 [ExceptTypePattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-excepttypepattern) 节点中的模式节点。

类型：[Pattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-pattern)

### prop types
    
    __
    
    public mut prop types: ArrayList\<TypeNode\>
    
功能：获取或设置 [ExceptTypePattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-excepttypepattern) 节点中有类型列表。

类型：[ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)<[TypeNode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typenode)>

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [ExceptTypePattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-excepttypepattern) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [ExceptTypePattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-excepttypepattern) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [ExceptTypePattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-excepttypepattern) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [ExceptTypePattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-excepttypepattern) 节点时，抛出异常。

## class Expr
    
    __
    
    public open class Expr <: Node
    
功能：所有表达式节点的父类，继承自 [Node](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-node) 节点。

表达式节点的 `toTokens` 方法会根据操作符优先级添加括号，例如已有一个 [BinaryExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-binaryexpr) 节点 a \* b, 用户将左表达式内容 a 修改为 a + 1，修改后 `toTokens` 方法会为左表达式添加括号，`toTokens` 输出为 \(a + 1\) \* b。

父类型：

  * Node

## class ExtendDecl
    
    __
    
    public class ExtendDecl <: Decl {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示一个扩展定义节点。

扩展的定义使用 `extend` 关键字，扩展定义依次为：extend 关键字、扩展类型、是否指定父接口、可选的泛型约束、扩展体的定义。

父类型：

  * Decl

### prop body
    
    __
    
    public mut prop body: Body
    
功能：获取或设置 [ExtendDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-extenddecl) 节点的类体。

类型：[Body](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-body)

### prop extendType
    
    __
    
    public mut prop extendType: TypeNode
    
功能：获取或设置被扩展的类型。

类型：[TypeNode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typenode)

### prop identifier
    
    __
    
    public mut override prop identifier: Token
    
功能：[ExtendDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-extenddecl) 节点继承 [Decl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-decl) 节点，但是不支持 `identifier` 属性，使用时会抛出异常。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当使用 `identifier` 属性时，抛出异常。

### prop superTypeBitAnds
    
    __
    
    public mut prop superTypeBitAnds: Tokens
    
功能：获取或设置 [ExtendDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-extenddecl) 节点的父接口声明中的 `&` 操作符的词法单元序列，可能为空。

类型：[Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 不是 `&` 词法单元序列时，抛出异常。

### prop superTypes
    
    __
    
    public mut prop superTypes: ArrayList\<TypeNode\>
    
功能：获取或设置 [ExtendDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-extenddecl) 节点的父接口。

类型：[ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)<[TypeNode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typenode)>

### prop upperBound
    
    __
    
    public mut prop upperBound: Token
    
功能：获取或设置 `<:` 操作符。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 `<:` 操作符时，抛出异常。

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [ExtendDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-extenddecl) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [ExtendDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-extenddecl) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [ExtendDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-extenddecl) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [ExtendDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-extenddecl) 节点时，抛出异常。

## class ForInExpr
    
    __
    
    public class ForInExpr <: Expr {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示 `for-in` 表达式。

[ForInExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-forinexpr) 类型中，关键字 `for` 之后是 [Pattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-pattern), 此后是一个 `in` 关键字和表达式节点，最后是一个执行循环体 [Block](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-block)。

父类型：

  * Expr

### prop block
    
    __
    
    public mut prop block: Block
    
功能：获取或设置 [ForInExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-forinexpr) 中的循环体。

类型：[Block](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-block)

### prop expr
    
    __
    
    public mut prop expr: Expr
    
功能：获取或设置 [ForInExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-forinexpr) 中的表达式。

类型：[Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr)

### prop keywordF
    
    __
    
    public mut prop keywordF: Token
    
功能：获取或设置 [ForInExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-forinexpr) 中的关键字 `for`。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 `for` 关键字时，抛出异常。

### prop keywordI
    
    __
    
    public mut prop keywordI: Token
    
功能：获取或设置 [ForInExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-forinexpr) 中的关键字 `in`。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 `in` 关键字时，抛出异常。

### prop keywordW
    
    __
    
    public mut prop keywordW: Token
    
功能：获取或设置 [ForInExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-forinexpr) 中的关键字 `where`。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 `where` 关键字时，抛出异常。

### prop lParen
    
    __
    
    public mut prop lParen: Token
    
功能：获取或设置 [ForInExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-forinexpr) 中关键字 `for` 后的 "\("。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\(" 时，抛出异常。

### prop pattern
    
    __
    
    public mut prop pattern: Pattern
    
功能：获取或设置 [ForInExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-forinexpr) 中的 [Pattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-pattern) 节点。

类型：[Pattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-pattern)

### prop patternGuard
    
    __
    
    public mut prop patternGuard: Expr
    
功能：获取或设置 [ForInExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-forinexpr) 中的 `patternGuard` 条件表达式。

类型：[Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当 [ForInExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-forinexpr) 节点中不存在 `patternGuard` 表达式时，抛出异常。

### prop rParen
    
    __
    
    public mut prop rParen: Token
    
功能：获取或设置 [ForInExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-forinexpr) 中的 "\)"。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\)" 时，抛出异常。

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [ForInExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-forinexpr) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [ForInExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-forinexpr) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [ForInExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-forinexpr) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [ForInExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-forinexpr) 节点时，抛出异常。

## class FuncDecl
    
    __
    
    public class FuncDecl <: Decl {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示一个函数定义节点。

由可选的函数修饰符，关键字 `func` ，函数名，可选的类型形参列表，函数参数，可缺省的函数返回类型来定义一个函数，函数定义时必须有函数体，函数体是一个块。

父类型：

  * Decl

### prop block
    
    __
    
    public mut prop block: Block
    
功能：获取或设置 [FuncDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-funcdecl) 节点的函数体。

类型：[Block](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-block)

### prop colon
    
    __
    
    public mut prop colon: Token
    
功能：获取或设置 [FuncDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-funcdecl) 节点的冒号。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是冒号时，抛出异常。

### prop declType
    
    __
    
    public mut prop declType: TypeNode
    
功能：获取或设置 [FuncDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-funcdecl) 节点的函数返回类型。

类型：[TypeNode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typenode)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当 [FuncDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-funcdecl) 节点的函数返回类型是一个缺省值时，抛出异常。

### prop funcParams
    
    __
    
    public mut prop funcParams: ArrayList\<FuncParam\>
    
功能：获取或设置 [FuncDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-funcdecl) 节点的函数参数。

类型：[ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)<[FuncParam](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-funcparam)>

### prop lParen
    
    __
    
    public mut prop lParen: Token
    
功能：获取或设置 [FuncDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-funcdecl) 节点的 "\("。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\(" 时，抛出异常。

### prop overloadOp
    
    __
    
    public mut prop overloadOp: Tokens
    
功能：获取或设置 [FuncDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-funcdecl) 节点的重载操作符。

类型：[Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)

### prop rParen
    
    __
    
    public mut prop rParen: Token
    
功能：获取或设置 [FuncDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-funcdecl) 节点的 "\)"。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\)" 时，抛出异常。

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [FuncDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-funcdecl) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [FuncDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-funcdecl) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [FuncDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-funcdecl) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [FuncDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-funcdecl) 节点时，抛出异常。

### func isConst\(\)
    
    __
    
    public func isConst(): Bool
    
功能：判断是否是一个 `Const` 类型的节点。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 是一个 `Const` 类型的节点返回 true；反之，返回 false。

## class FuncParam
    
    __
    
    public open class FuncParam <: Decl {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示函数参数节点，包括非命名参数和命名参数。

一个 [FuncParam](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-funcparam) 节点： `func foo(a: Int64, b: Float64) {...}` 中的 `a: Int64` 和 `b: Float64`。

父类型：

  * Decl

### prop assign
    
    __
    
    public mut prop assign: Token
    
功能：获取或设置具有默认值的函数参数中的 `=`。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 `=` 时，抛出异常。

### prop colon
    
    __
    
    public mut prop colon: Token
    
功能：获取或设置置形参中的 ":"。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 ":" 时，抛出异常。

### prop expr
    
    __
    
    public mut prop expr: Expr
    
功能：获取或设置具有默认值的函数参数的变量初始化节点。

类型：[Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当函数参数没有进行初始化时，抛出异常。

### prop not
    
    __
    
    public mut prop not: Token
    
功能：获取或设置命名形参中的 `!`。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 `!` 时，抛出异常。

### prop paramType
    
    __
    
    public mut prop paramType: TypeNode
    
功能：获取或设置函数参数的类型。

类型：[TypeNode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typenode)

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [FuncParam](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-funcparam) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [FuncParam](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-funcparam) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [FuncParam](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-funcparam) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [FuncParam](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-funcparam) 节点时，抛出异常。

### func isMemberParam\(\)
    
    __
    
    public func isMemberParam(): Bool
    
功能：当前的函数参数是否是主构造函数中的参数。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 布尔类型，如果是主构造函数中的参数，返回 `true`。

## class FuncType
    
    __
    
    public class FuncType <: TypeNode {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示函数类型节点。

由函数的参数类型和返回类型组成，参数类型与返回类型之间用 `->` 分隔，如：`(Int32) -> Unit`。

父类型：

  * TypeNode

### prop arrow
    
    __
    
    public mut prop arrow: Token
    
功能：获取或设置 [FuncType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-functype) 节点参数类型与返回类型之间的 `->`的词法单元。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 `->`的词法单元时，抛出异常。

### prop commas
    
    __
    
    public mut prop commas: Tokens
    
功能：获取或设置 [FuncType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-functype) 节点中的 "," 词法单元序列，可能为空。

类型：[Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 不是 "," 词法单元序列时，抛出异常。

### prop keyword
    
    __
    
    public mut prop keyword: Token
    
功能：获取或设置 [FuncType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-functype) 节点的中的关键字 `CFunc` 的词法单元，若不是一个 `CFunc` 类型，则获取一个 [ILLEGAL](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_enums.html#illegal) 的词法单元。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

### prop lParen
    
    __
    
    public mut prop lParen: Token
    
功能：获取或设置 [FuncType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-functype) 节点的 "\(" 的词法单元。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\(" 时，抛出异常。

### prop rParen
    
    __
    
    public mut prop rParen: Token
    
功能：获取或设置 [FuncType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-functype) 节点的 "\)" 的词法单元。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\)" 时，抛出异常。

### prop returnType
    
    __
    
    public mut prop returnType: TypeNode
    
功能：获取或设置 [FuncType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-functype) 返回类型节点。

类型：[TypeNode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typenode)

### prop types
    
    __
    
    public mut prop types: ArrayList\<TypeNode\>
    
功能：获取或设置 [FuncType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-functype) 节点中函数的参数类型列表。

类型：[ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)<[TypeNode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typenode)>

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [FuncType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-functype) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [FuncType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-functype) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [FuncType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-functype) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [FuncType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-functype) 节点时，抛出异常。

## class GenericConstraint
    
    __
    
    public class GenericConstraint <: Node {
        public init()
    }
    
功能：表示一个泛型约束节点。

一个 [GenericConstraint](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-genericconstraint) 节点：`interface Enumerable<U> where U <: Bounded {}` 中的 `where U <: Bounded`。

> **说明：**
> 
> 通过 `where` 之后的 `<:` 运算符来声明，由一个下界与一个上界来组成。其中 `<:` 左边称为约束的下界，下界只能为类型变元。`<:` 右边称为约束上界，约束上界可以为类型。

父类型：

  * Node

### prop bitAnds
    
    __
    
    public mut prop bitAnds: Tokens
    
功能：获取或设置 [GenericConstraint](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-genericconstraint) 节点中的 `&` 操作符的词法单元序列，可能为空。

类型：[Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 不是 `&` 词法单元序列时，抛出异常。

### prop keyword
    
    __
    
    public mut prop keyword: Token
    
功能：获取或设置 [GenericConstraint](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-genericconstraint) 节点中关键字 `where` 词法单元，可能为 [ILLEGAL](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_enums.html#illegal) 的词法单元。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 `where` 关键字时，抛出异常。

### prop typeArgument
    
    __
    
    public mut prop typeArgument: TypeNode
    
功能：获取或设置 [GenericConstraint](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-genericconstraint) 节点中的约束下界。

类型：[TypeNode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typenode)

### prop upperBound
    
    __
    
    public mut prop upperBound: Token
    
功能：获取或设置 [GenericConstraint](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-genericconstraint) 节点中的 `<:` 运算符。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 `<:` 运算符时，抛出异常。

### prop upperBounds
    
    __
    
    public mut prop upperBounds: ArrayList\<TypeNode\>
    
功能：获取或设置 [GenericConstraint](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-genericconstraint) 节点约束上界的 [TypeNode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typenode) 类型节点的集合。

类型：[ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)<[TypeNode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typenode)>

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [GenericConstraint](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-genericconstraint) 对象。

## class GenericParam
    
    __
    
    public class GenericParam <: Node {
        public init()
        public init(parameters: Tokens)
    }
    
功能：表示一个类型形参节点。

一个 [GenericParam](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-genericparam) 节点：`<T1, T2, T3>`。

> **说明：**
> 
> 类型形参用 `<>` 括起并用 "," 分隔多个类型形参名称。

父类型：

  * Node

### prop lAngle
    
    __
    
    public mut prop lAngle: Token
    
功能：获取或设置 [GenericParam](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-genericparam) 节点中的左尖括号词法单元。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是左尖括号时，抛出异常。

### prop parameters
    
    __
    
    public mut prop parameters: Tokens
    
功能：获取或设置 [GenericParam](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-genericparam) 节点中的类型形参的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型，可能为空，如 `<T1, T2, T3>` 中的 `T1` `T2` 和 `T3`。

类型：[Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)

### prop rAngle
    
    __
    
    public mut prop rAngle: Token
    
功能：获取或设置 [GenericParam](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-genericparam) 节点中的右尖括号词法单元。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是右尖括号时，抛出异常。

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [GenericParam](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-genericparam) 对象。

### init\(Tokens\)
    
    __
    
    public init(parameters: Tokens)
    
功能：构造一个 [GenericParam](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-genericparam) 对象。

参数：

  * parameters: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [GenericParam](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-genericparam) 的类型形参的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

## class IfExpr
    
    __
    
    public class IfExpr <: Expr {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示条件表达式。

可以根据判定条件是否成立来决定执行哪条代码分支。一个 [IfExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-ifexpr) 节点中 `if` 是关键字，`if` 之后是一个小括号，小括号内可以是一个表达式或者一个 `let` 声明的解构匹配，接着是一个 [Block](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-block)，[Block](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-block) 之后是可选的 `else` 分支。 `else` 分支以 `else` 关键字开始，后接新的 `if` 表达式或一个 [Block](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-block)。

父类型：

  * Expr

### prop condition
    
    __
    
    public mut prop condition: Expr
    
功能：获取或设置 [IfExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-ifexpr) 节点中的 `if` 后的条件表达式。

类型：[Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr)

### prop elseExpr
    
    __
    
    public mut prop elseExpr: Expr
    
功能：获取或设置 [IfExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-ifexpr) 节点中 `else` 分支节点。

类型：[Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当前 [IfExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-ifexpr) 节点没有 else 分支节点。

### prop ifBlock
    
    __
    
    public mut prop ifBlock: Block
    
功能：获取或设置 [IfExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-ifexpr) 节点中的 `if` 后的 block 节点。

类型：[Block](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-block)

### prop keywordE
    
    __
    
    public mut prop keywordE: Token
    
功能：获取或设置 [IfExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-ifexpr) 节点中 `else` 关键字。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 `else` 关键字时，抛出异常。

### prop keywordI
    
    __
    
    public mut prop keywordI: Token
    
功能：获取或设置 [IfExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-ifexpr) 节点中的 `if` 关键字。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 `if` 关键字时，抛出异常。

### prop lParen
    
    __
    
    public mut prop lParen: Token
    
功能：获取或设置 [IfExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-ifexpr) 节点中的 `if` 后的 "\("。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\(" 时，抛出异常。

### prop rParen
    
    __
    
    public mut prop rParen: Token
    
功能：获取或设置 [IfExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-ifexpr) 节点中的 `if` 后的 "\)"。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\)" 时，抛出异常。

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [IfExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-ifexpr) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [IfExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-ifexpr) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [IfExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-ifexpr) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [IfExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-ifexpr) 节点时，抛出异常。

## class ImportContent
    
    __
    
    public class ImportContent <: Node {
        public init()
    }
    
父类型：

  * Node

### prop importKind
    
    __
    
    public mut prop importKind: ImportKind
    
功能：获取或设置 [ImportContent](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-importcontent) 节点中导入类型。

类型：[ImportKind](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_enums.html#enum-importkind)

### prop prefixPaths
    
    __
    
    public mut prop prefixPaths: Tokens
    
功能：获取或设置 [ImportContent](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-importcontent) 节点中完整包名的前缀部分的词法单元序列，可能为空。如 `import a.b.c` 中的 `a` 和 `b`。

类型：[Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)

### prop prefixDots
    
    __
    
    public mut prop prefixDots: Tokens
    
功能：获取或设置 [ImportContent](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-importcontent) 节点中完整包名中用于分隔每层子包的词法单元序列，可能为空。如 `import a.b.c` 中的两个 "."。

类型：[Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 不是 "." 词法单元序列时，抛出异常。

### prop identifier
    
    __
    
    public mut prop identifier: Token
    
功能：获取或设置 [ImportContent](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-importcontent) 节点中被导入的项，它可能是包中的顶层定义或声明，也可能是子包的名字。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

### prop importAlias
    
    __
    
    public mut prop importAlias: Tokens
    
功能：获取或设置 [ImportContent](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-importcontent) 节点中导入的定义或声明的别名词法单元序列，只有 `importKind` 为 `ImportKind.Alias` 时非空。如：`import packageName.xxx as yyy` 中的 `as yyy`。

类型：[Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)

### prop lBrace
    
    __
    
    public mut prop lBrace: Token
    
功能：获取或设置 [ImportContent](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-importcontent) 节点中的 `{` 操作符词法单元，只有 `importKind` 为 `ImportKind.Multi` 时非空。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 `{` 操作符时，抛出异常。

### prop items
    
    __
    
    public mut prop items: ArrayList\<ImportContent\>
    
功能：获取或设置 [ImportContent](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-importcontent) 节点中被导入的所有项，只有 `importKind` 为 `ImportKind.Multi` 时非空。

类型：ArrayList<[ImportContent](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-importcontent)>

### prop commas
    
    __
    
    public mut prop commas: Tokens
    
功能：获取或设置 [ImportContent](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-importcontent) 节点中的 "," 词法单元序列，只有 `importKind` 为 `ImportKind.Multi` 时非空。

类型：[Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 不是 "," 词法单元序列时，抛出异常。

### prop rBrace
    
    __
    
    public mut prop rBrace: Token
    
功能：获取或设置 [ImportContent](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-importcontent) 节点中的 `}` 操作符词法单元，只有 `importKind` 为 `ImportKind.Multi` 时非空。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 `}` 操作符时，抛出异常。

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [ImportContent](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-importcontent) 对象。

### func isImportAlias\(\)
    
    __
    
    public func isImportAlias(): Bool
    
功能：判断 [ImportContent](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-importcontent) 节点是否对导入项取了别名。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- [ImportContent](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-importcontent) 节点是否对导入项取了别名。

### func isImportAll\(\)
    
    __
    
    public func isImportAll(): Bool
    
功能：判断 [ImportContent](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-importcontent) 节点是否为全导入。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- [ImportContent](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-importcontent) 节点是否为全导入。

### func isImportMulti\(\)
    
    __
    
    public func isImportMulti(): Bool
    
功能：判断 [ImportContent](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-importcontent) 节点是否导入了多个顶级定义或声明。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- [ImportContent](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-importcontent) 节点是否导入了多个顶级定义或声明。

### func isImportSingle\(\)
    
    __
    
    public func isImportSingle(): Bool
    
功能：判断 [ImportContent](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-importcontent) 节点是否为单导入。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- [ImportContent](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-importcontent) 节点是否为单导入。

## class ImportList
    
    __
    
    public class ImportList <: Node {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示包导入节点。

一个 [ImportList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-importlist) 节点: `import moduleName.packageName.foo as bar`。

> **说明：**
> 
> 导入节点以可选的访问性修饰符（`public/protected/internal/private`）加关键字 `import` 开头。以 `import pkga.pkgb.item` 为例，`pkga.pkgb` 为导入的顶级定义或声明所在的包的名字，`item` 为导入的顶级定义或声明。

父类型：

  * Node

### prop modifier
    
    __
    
    public mut prop modifier: Token
    
功能：获取或设置 [ImportList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-importlist) 节点中的修饰符，可能为 [ILLEGAL](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_enums.html#illegal) 的词法单元。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

### prop keywordI
    
    __
    
    public mut prop keywordI: Token
    
功能：获取或设置 [ImportList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-importlist) 节点中的 `import` 关键字的词法单元，`I` 为关键字首字母。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

### prop content
    
    __
    
    public mut prop content: ImportContent
    
功能：获取或设置 [ImportList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-importlist) 节点中的被导入的具体项。如 `import a.b.c` 中的 `a.b.c` 部分。

类型：[ImportContent](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-importcontent)

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [ImportList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-importlist) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [ImportList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-importlist) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [ImportList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-importlist) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\) 序列。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [ImportList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-importlist) 节点时，抛出异常。

### func isImportMulti\(\)
    
    __
    
    public func isImportMulti(): Bool
    
功能：判断 [ImportList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-importlist) 节点是否导入了多个顶级定义或声明。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果 [ImportList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-importlist) 节点导入了多个顶级定义或声明，返回 true；反之，返回 false。

## class IncOrDecExpr
    
    __
    
    public class IncOrDecExpr <: Expr {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示包含自增操作符（`++`）或自减操作符（`--`）的表达式。

父类型：

  * Expr

### prop expr
    
    __
    
    public mut prop expr: Expr
    
功能：获取或设置 [IncOrDecExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-incordecexpr) 中的表达式。

类型：[Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr)

### prop op
    
    __
    
    public mut prop op: Token
    
功能：获取或设置 [IncOrDecExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-incordecexpr) 中的操作符。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [IncOrDecExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-incordecexpr) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [IncOrDecExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-incordecexpr) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [IncOrDecExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-incordecexpr) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [IncOrDecExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-incordecexpr) 节点时，抛出异常。

## class InterfaceDecl
    
    __
    
    public class InterfaceDecl <: Decl {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示接口定义节点。

接口的定义使用 `interface` 关键字，接口定义依次为：可缺省的修饰符、interface 关键字、接口名、可选的类型参数、是否指定父接口、可选的泛型约束、接口体的定义。

父类型：

  * Decl

### prop body
    
    __
    
    public mut prop body: Body
    
功能：获取或设置 [InterfaceDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-interfacedecl) 节点的类体。

类型：[Body](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-body)

### prop superTypeBitAnds
    
    __
    
    public mut prop superTypeBitAnds: Tokens
    
功能：获取或设置 [InterfaceDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-interfacedecl) 节点的父接口声明中的 `&` 操作符的词法单元序列，可能为空。

类型：[Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 不是 `&` 词法单元序列时，抛出异常。

### prop superTypes
    
    __
    
    public mut prop superTypes: ArrayList\<TypeNode\>
    
功能：获取或设置 [InterfaceDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-interfacedecl) 节点的父接口。

类型：[ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)<[TypeNode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typenode)>

### prop upperBound
    
    __
    
    public mut prop upperBound: Token
    
功能：获取或设置 `<:` 操作符。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 `<:` 操作符时，抛出异常。

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [InterfaceDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-interfacedecl) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [InterfaceDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-interfacedecl) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [InterfaceDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-interfacedecl) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [InterfaceDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-interfacedecl) 节点时，抛出异常。

## class IsExpr
    
    __
    
    public class IsExpr <: Expr {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示一个类型检查表达式。

一个 [IsExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-isexpr) 表达式：`e is T`，类型为 [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool)。其中 e 可以是任何类型的表达式，T 可以是任何类型。

父类型：

  * Expr

### prop expr
    
    __
    
    public mut prop expr: Expr
    
功能：获取或设置 [IsExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-isexpr) 节点中的表达式节点。

类型：[Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr)

### prop keyword
    
    __
    
    public mut prop keyword: Token
    
功能：获取或设置 [IsExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-isexpr) 节点中的 `is` 操作符。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 `is` 操作符时，抛出异常。

### prop shiftType
    
    __
    
    public mut prop shiftType: TypeNode
    
功能：获取或设置 [IsExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-isexpr) 节点中的目标类型。

类型：[TypeNode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typenode)

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [IsExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-isexpr) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [IsExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-isexpr) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [IsExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-isexpr) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [IsExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-isexpr) 节点时，抛出异常。

## class JumpExpr
    
    __
    
    public class JumpExpr <: Expr {
        public init()
        public init(kind: Tokens)
    }
    
功能：表示循环表达式的循环体中的 `break` 和 `continue`。

父类型：

  * Expr

### prop keyword
    
    __
    
    public mut prop keyword: Token
    
功能：获取或设置关键字。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [JumpExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-jumpexpr) 对象。

### init\(Tokens\)
    
    __
    
    public init(kind: Tokens)
    
功能：构造一个 [JumpExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-jumpexpr) 对象。

参数：

  * kind: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [JumpExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-jumpexpr) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [JumpExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-jumpexpr) 节点时，抛出异常。

## class LambdaExpr
    
    __
    
    public class LambdaExpr <: Expr {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示 `Lambda` 表达式，是一个匿名的函数。

一个 [LambdaExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-lambdaexpr) 节点有两种形式，一种是有形参的，例如 `{a: Int64 => e1; e2 }`，另一种是无形参的，例如 `{ => e1; e2 }`。

父类型：

  * Expr

### prop doubleArrow
    
    __
    
    public mut prop doubleArrow: Token
    
功能：获取或设置 [LambdaExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-lambdaexpr) 中的 `=>`。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 `=>` 操作符时，抛出异常。

### prop funcParams
    
    __
    
    public mut prop funcParams:  ArrayList\<FuncParam\>
    
功能：获取或设置 [LambdaExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-lambdaexpr) 中的参数列表。

类型：[ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)<[FuncParam](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-funcparam)>

### prop lBrace
    
    __
    
    public mut prop lBrace: Token
    
功能：获取或设置 [LambdaExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-lambdaexpr) 中的 "\{"。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\{" 时，抛出异常。

### prop nodes
    
    __
    
    public mut prop nodes: ArrayList\<Node\>
    
功能：获取或设置 [LambdaExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-lambdaexpr) 中的表达式或声明节点。

类型：[ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)<[Node](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-node)>

### prop rBrace
    
    __
    
    public mut prop rBrace: Token
    
功能：获取或设置 [LambdaExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-lambdaexpr) 中的 "\}"。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\}" 时，抛出异常。

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [LambdaExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-lambdaexpr) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [LambdaExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-lambdaexpr) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [LambdaExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-lambdaexpr) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [LambdaExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-lambdaexpr) 节点时，抛出异常。

## class LetPatternExpr
    
    __
    
    public class LetPatternExpr <: Expr {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示 `let` 声明的解构匹配节点。

一个 [LetPatternExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-letpatternexpr) 节点：`if (let Some(v) <- x)` 中的 `let Some(v) <- x`。

父类型：

  * Expr

### prop backArrow
    
    __
    
    public mut prop backArrow: Token
    
功能：获取或设置 [LetPatternExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-letpatternexpr) 节点中 `<-` 操作符。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 `<-` 操作符时，抛出异常。

### prop expr
    
    __
    
    public mut prop expr: Expr
    
功能：获取或设置 [LetPatternExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-letpatternexpr) 节点中 `<-` 操作符之后的表达式。

类型：[Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr)

### prop keyword
    
    __
    
    public mut prop keyword: Token
    
功能：获取或设置 [LetPatternExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-letpatternexpr) 节点中 `let` 关键字。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 `let` 关键字时，抛出异常。

### prop pattern
    
    __
    
    public mut prop pattern: Pattern
    
功能：获取或设置 [LetPatternExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-letpatternexpr) 节点中 `let` 之后的 pattern。

类型：[Pattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-pattern)

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [LetPatternExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-letpatternexpr) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [LetPatternExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-letpatternexpr) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [LetPatternExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-letpatternexpr) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [LetPatternExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-letpatternexpr) 节点时，抛出异常。

## class LitConstExpr
    
    __
    
    public class LitConstExpr <: Expr {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示一个常量表达式节点。

一个 [LitConstExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-litconstexpr) 表达式：`"abc"`，`123` 等。

父类型：

  * Expr

### prop literal
    
    __
    
    public mut prop literal: Token
    
功能：获取或设置 [LitConstExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-litconstexpr) 节点中的字面量。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [LitConstExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-litconstexpr) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [LitConstExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-litconstexpr) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [LitConstExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-litconstexpr) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [ParenExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-parenexpr) 节点时，抛出异常。

## class MacroDecl
    
    __
    
    public class MacroDecl <: Decl {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示一个宏定义节点。

一个 [MacroDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macrodecl) 节点：`public macro M(input: Tokens): Tokens {...}`。

父类型：

  * Decl

### prop block
    
    __
    
    public mut prop block: Block
    
功能：获取或设置 [MacroDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macrodecl) 节点的函数体。

类型：[Block](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-block)

### prop colon
    
    __
    
    public mut prop colon: Token
    
功能：获取或设置 [MacroDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macrodecl) 节点的冒号。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是冒号时，抛出异常。

### prop declType
    
    __
    
    public mut prop declType: TypeNode
    
功能：获取或设置 [MacroDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macrodecl) 节点的函数返回类型。

类型：[TypeNode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typenode)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当 [MacroDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macrodecl) 节点的函数返回类型是一个缺省值时，抛出异常。

### prop funcParams
    
    __
    
    public mut prop funcParams: ArrayList\<FuncParam\>
    
功能：获取或设置 [MacroDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macrodecl) 节点的参数。

类型：[ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)<[FuncParam](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-funcparam)>

### prop lParen
    
    __
    
    public mut prop lParen: Token
    
功能：获取或设置 [MacroDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macrodecl) 节点的 "\("。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\(" 时，抛出异常。

### prop rParen
    
    __
    
    public mut prop rParen: Token
    
功能：获取或设置 [MacroDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macrodecl) 节点的 "\)"。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\)" 时，抛出异常。

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [MacroDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macrodecl) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [MacroDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macrodecl) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [MacroDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macrodecl) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [MacroDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macrodecl) 节点时，抛出异常。

## class MacroExpandDecl
    
    __
    
    public class MacroExpandDecl <: Decl {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示宏调用节点。

一个 [MacroExpandDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macroexpanddecl) 节点： `@M class A {}`。

父类型：

  * Decl

### prop fullIdentifier
    
    __
    
    public mut prop fullIdentifier: Token
    
功能：获取或设置宏调用节点的完整标识符。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

### prop lParen
    
    __
    
    public mut prop lParen: Token
    
功能：获取或设置 [MacroExpandDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macroexpanddecl) 宏调用的 "\("。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\(" 时，抛出异常。

### prop lSquare
    
    __
    
    public mut prop lSquare: Token
    
功能：获取或设置 [MacroExpandDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macroexpanddecl) 属性宏调用的 "\["。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\[" 时，抛出异常。

### prop macroAttrs
    
    __
    
    public mut prop macroAttrs: Tokens
    
功能：获取或设置 [MacroExpandDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macroexpanddecl) 属性宏调用的输入。

类型：[Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)

### prop macroInputDecl
    
    __
    
    public mut prop macroInputDecl: Decl
    
功能：获取或设置 [MacroExpandDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macroexpanddecl) 中的声明节点。

类型：[Decl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-decl)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当 [MacroExpandDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macrodecl) 节点中没有声明节点时，抛出异常。

### prop macroInputs
    
    __
    
    public mut prop macroInputs: Tokens
    
功能：获取或设置 [MacroExpandDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macroexpanddecl) 宏调用的输入。

类型：[Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)

### prop rParen
    
    __
    
    public mut prop rParen: Token
    
功能：获取或设置 [MacroExpandDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macroexpanddecl) 宏调用的 "\)"。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\)" 时，抛出异常。

### prop rSquare
    
    __
    
    public mut prop rSquare: Token
    
功能：获取或设置 [MacroExpandDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macroexpanddecl) 属性宏调用的 "\]"。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\]" 时，抛出异常。

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [MacroExpandDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macroexpanddecl) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [MacroExpandDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macroexpanddecl) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [MacroExpandDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macroexpanddecl) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [MacroExpandDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macroexpanddecl) 节点时，抛出异常。

## class MacroExpandExpr
    
    __
    
    public class MacroExpandExpr <: Expr {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示宏调用节点。

一个 [MacroExpandExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macroexpandexpr) 节点： `@M (a is Int64)`。

父类型：

  * Expr

### prop at
    
    __
    
    public mut prop at: Token
    
功能：获取或设置 [MacroExpandExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macroexpandexpr) 节点中的 `@` 操作符。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 `@` 操作符时，抛出异常。

### prop identifier
    
    __
    
    public mut prop identifier: Token
    
功能：获取或设置宏调用节点的标识符。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

### prop lParen
    
    __
    
    public mut prop lParen: Token
    
功能：获取或设置 [MacroExpandExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macroexpandexpr) 宏调用的 "\("。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\(" 时，抛出异常。

### prop lSquare
    
    __
    
    public mut prop lSquare: Token
    
功能：获取或设置 [MacroExpandExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macroexpandexpr) 属性宏调用的 "\["。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\[" 时，抛出异常。

### prop macroAttrs
    
    __
    
    public mut prop macroAttrs: Tokens
    
功能：获取或设置 [MacroExpandExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macroexpandexpr) 属性宏调用的输入。

类型：[Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)

### prop macroInputs
    
    __
    
    public mut prop macroInputs: Tokens
    
功能：获取或设置 [MacroExpandExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macroexpandexpr) 宏调用的输入。

类型：[Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)

### prop rParen
    
    __
    
    public mut prop rParen: Token
    
功能：获取或设置 [MacroExpandExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macroexpandexpr) 宏调用的 "\)"。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\)" 时，抛出异常。

### prop rSquare
    
    __
    
    public mut prop rSquare: Token
    
功能：获取或设置 [MacroExpandExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macroexpandexpr) 属性宏调用的 "\]"。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\]" 时，抛出异常。

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [MacroExpandExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macroexpandexpr) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [MacroExpandExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macroexpandexpr) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [MacroExpandExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macroexpandexpr) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [MacroExpandExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macroexpandexpr) 节点时，抛出异常。

## class MacroExpandParam
    
    __
    
    public class MacroExpandParam <: FuncParam {
        public init()
    }
    
功能：表示宏调用节点。

一个 [MacroExpandDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macroexpanddecl) 节点： `func foo (@M a: Int64)` 中的 `@M a: Int64`。

父类型：

  * FuncParam

### prop fullIdentifier
    
    __
    
    public mut prop fullIdentifier: Token
    
功能：获取或设置宏调用节点的完整标识符。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

### prop lParen
    
    __
    
    public mut prop lParen: Token
    
功能：获取或设置 [MacroExpandParam](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macroexpandparam) 宏调用的 "\("。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\(" 时，抛出异常。

### prop lSquare
    
    __
    
    public mut prop lSquare: Token
    
功能：获取或设置 [MacroExpandParam](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macroexpandparam) 属性宏调用的 "\["。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\[" 时，抛出异常。

### prop macroAttrs
    
    __
    
    public mut prop macroAttrs: Tokens
    
功能：获取或设置 [MacroExpandParam](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macroexpandparam) 属性宏调用的输入。

类型：[Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)

### prop macroInputDecl
    
    __
    
    public mut prop macroInputDecl: Decl
    
功能：获取或设置 [MacroExpandParam](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macroexpandparam) 中的声明节点。

类型：[Decl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-decl)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当 [MacroExpandParam](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macroexpandparam) 节点中没有声明节点时，抛出异常。

### prop macroInputs
    
    __
    
    public mut prop macroInputs: Tokens
    
功能：获取或设置 [MacroExpandParam](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macroexpandparam) 宏调用的输入。

类型：[Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)

### prop rParen
    
    __
    
    public mut prop rParen: Token
    
功能：获取或设置 [MacroExpandParam](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macroexpandparam) 宏调用的 "\)"。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\)" 时，抛出异常。

### prop rSquare
    
    __
    
    public mut prop rSquare: Token
    
功能：获取或设置 [MacroExpandParam](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macroexpandparam) 属性宏调用的 "\]"。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\]" 时，抛出异常。

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [MacroExpandParam](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macroexpandparam) 对象。

## class MacroMessage
    
    __
    
    public class MacroMessage
    
功能：记录内层宏发送的信息。

### func getBool\(String\)
    
    __
    
    public func getBool(key: String): Bool
    
功能：获取对应 key 值的 [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) 类型信息。

参数：

  * key: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 用于检索的关键字的名字。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 返回存在 key 值对应的 [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) 类型的信息。

异常：

  * [Exception](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-exception) \- 当不存在 key 值对应的 [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) 类型的信息时，抛出异常。

### func getInt64\(String\)
    
    __
    
    public func getInt64(key: String): Int64
    
功能：获取对应 key 值的 [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) 类型信息。

参数：

  * key: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 用于检索的关键字的名字。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 返回存在 key 值对应的 [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) 类型的信息。

异常：

  * [Exception](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-exception) \- 当不存在 key 值对应的 [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) 类型的信息时，抛出异常。

### func getString\(String\)
    
    __
    
    public func getString(key: String): String
    
功能：获取对应 key 值的 [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) 类型信息。

参数：

  * key: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 用于检索的关键字的名字。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 返回存在 key 值对应的 [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) 类型的信息。

异常：

  * [Exception](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-exception) \- 当不存在 key 值对应的 [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) 类型的信息时，抛出异常。

### func getTokens\(String\)
    
    __
    
    public func getTokens(key: String): Tokens
    
功能：获取对应 key 值的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型信息。

参数：

  * key: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 用于检索的关键字的名字。

返回值：

  * [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 返回存在 key 值对应的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型的信息。

异常：

  * [Exception](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-exception) \- 当不存在 key 值对应的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型的信息时，抛出异常。

### func hasItem\(String\)
    
    __
    
    public func hasItem(key: String): Bool
    
功能：检查是否有 key 值对应的相关信息。

参数：

  * key: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 用于检索的关键字名字。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 若存在 key 值对应的相关信息，返回 true；反之，返回 false。

## class MainDecl
    
    __
    
    public class MainDecl <: Decl {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示一个 `main` 函数定义节点。

一个 [MainDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-maindecl) 节点：`main() {}`。

父类型：

  * Decl

### prop block
    
    __
    
    public mut prop block: Block
    
功能：获取或设置 [MainDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-maindecl) 节点的函数体。

类型：[Block](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-block)

### prop colon
    
    __
    
    public mut prop colon: Token
    
功能：获取或设置 [MainDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-maindecl) 节点的冒号。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是冒号时，抛出异常。

### prop declType
    
    __
    
    public mut prop declType: TypeNode
    
功能：获取或设置 [MainDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-maindecl) 节点的函数返回类型。

类型：[TypeNode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typenode)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当 [MainDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-maindecl) 节点的函数返回类型是一个缺省值时，抛出异常。

### prop funcParams
    
    __
    
    public mut prop funcParams: ArrayList\<FuncParam\>
    
功能：获取或设置 [MainDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-maindecl) 节点的函数参数。

类型：[ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)<[FuncParam](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-funcparam)>

### prop lParen
    
    __
    
    public mut prop lParen: Token
    
功能：获取或设置 [MainDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-maindecl) 节点的 "\("。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\(" 时，抛出异常。

### prop rParen
    
    __
    
    public mut prop rParen: Token
    
功能：获取或设置 [MainDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-maindecl) 节点的 "\)"。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\)" 时，抛出异常。

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [MainDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-maindecl) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [MainDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-maindecl) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [MainDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-maindecl) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [MainDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-maindecl) 节点时，抛出异常。

## class MatchCase
    
    __
    
    public class MatchCase <: Node {
        public init()
    }
    
功能：表示 `match` 表达式中的一个 `case` 节点。

一个 [MatchCase](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-matchcase) 节点：`case failScore where score > 0 => 0`。

> **说明：**
> 
>   * [MatchCase](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-matchcase) 以关键字 `case` 开头，后跟 [Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr) 或者一个或多个由 `|` 分隔的相同种类的 `pattern`，一个可选的 `patternguard`，一个 `=>` 和一系列声明或表达式。
>   * 该节点与 [MatchExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-matchexpr) 存在强绑定关系。
> 

父类型：

  * Node

### prop arrow
    
    __
    
    public mut prop arrow: Token
    
功能：获取或设置 [MatchCase](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-matchcase) 中的 `=>` 操作符的词法单元。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 `=>` 操作符时，抛出异常。

### prop bitOrs
    
    __
    
    public mut prop bitOrs: Tokens
    
功能：获取或设置 [MatchCase](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-matchcase) 中的 `|` 操作符的词法单元序列，可能为空。

类型：[Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 不是 `|` 词法单元序列时，抛出异常。

### prop block
    
    __
    
    public mut prop block: Block
    
功能：获取或设置 [MatchCase](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-matchcase) 中的一系列声明或表达式节点。

类型：[Block](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-block)

### prop expr
    
    __
    
    public mut prop expr: Expr
    
功能：获取或设置 [MatchCase](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-matchcase) 中位于 case 后的表达式节点。

类型：[Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当 [MatchCase](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-matchcase) 节点中不存在表达式节点时，抛出异常。

### prop keywordC
    
    __
    
    public mut prop keywordC: Token
    
功能：获取或设置 [MatchCase](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-matchcase) 内的 `case` 关键字的词法单元。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 `case` 关键字时，抛出异常。

### prop keywordW
    
    __
    
    public mut prop keywordW: Token
    
功能：获取或设置 [MatchCase](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-matchcase) 中可选的关键字 `where` 的词法单元，可能为 [ILLEGAL](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_enums.html#illegal) 的词法单元。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 `where` 关键字时，抛出异常。

### prop patternGuard
    
    __
    
    public mut prop patternGuard: Expr
    
功能：获取或设置 [MatchCase](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-matchcase) 中可选的 pattern guard 表达式节点。

类型：[Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当 [MatchCase](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-matchcase) 节点中不存在 pattern guard 表达式时，抛出异常。

### prop patterns
    
    __
    
    public mut prop patterns: ArrayList\<Pattern\>
    
功能：获取或设置 [MatchCase](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-matchcase) 中位于 case 后的 `pattern` 列表。

类型：[ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)<[Pattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-pattern)>

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [MatchCase](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-matchcase) 对象。

## class MatchExpr
    
    __
    
    public class MatchExpr <: Expr {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示模式匹配表达式实现模式匹配。

模式匹配表达式分为带 selector 的 `match` 表达式和不带 selector 的 `match` 表达式。

父类型：

  * Expr

### prop keyword
    
    __
    
    public mut prop keyword: Token
    
功能：获取或设置 [MatchExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-matchexpr) 节点中 `match` 关键字。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 `matcch` 关键字时，抛出异常。

### prop lBrace
    
    __
    
    public mut prop lBrace: Token
    
功能：获取或设置 [MatchExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-matchexpr) 之后的 "\{"。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\{" 时，抛出异常。

### prop lParen
    
    __
    
    public mut prop lParen: Token
    
功能：获取或设置 [MatchExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-matchexpr) 之后的 "\("。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\(" 时，抛出异常。

### prop matchCases
    
    __
    
    public mut prop matchCases: ArrayList\<MatchCase\>
    
功能：获取或设置 [MatchExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-matchexpr) 内的 `matchCase`, `matchCase` 以关键字 `case` 开头，后跟一个或者多个由 [Pattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-pattern) 或 [Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr)节点，具体见 [MatchCase](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-matchcase)。

类型：[ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)<[MatchCase](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-matchcase)>

### prop rBrace
    
    __
    
    public mut prop rBrace: Token
    
功能：获取或设置 [MatchExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-matchexpr) 之后的 "\}"。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\}" 时，抛出异常。

### prop rParen
    
    __
    
    public mut prop rParen: Token
    
功能：获取或设置 [MatchExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-matchexpr) 之后的 "\)"。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\)" 时，抛出异常。

### prop selector
    
    __
    
    public mut prop selector: Expr
    
功能：获取或设置关键字 `match` 之后的 [Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr)。

类型：[Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当该表达式是一个不带 selector 的 `match` 表达式时，抛出异常。

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [MatchExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-matchexpr) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [MatchExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-matchexpr) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [MatchExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-matchexpr) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [MatchExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-matchexpr) 节点时，抛出异常。

## class MemberAccess
    
    __
    
    public class MemberAccess <: Expr {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示成员访问表达式。

可以用于访问 class、interface、struct 等类型的成员。一个 [MemberAccess](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-memberaccess) 节点的形式为 `T.a`，`T` 为成员访问表达式的主体，`a` 表示成员的名字。

父类型：

  * Expr

### prop baseExpr
    
    __
    
    public mut prop baseExpr: Expr
    
功能：获取或设置 [MemberAccess](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-memberaccess) 节点的成员访问表达式主体。

类型：[Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr)

### prop commas
    
    __
    
    public mut prop commas: Tokens
    
功能：获取或设置 [MemberAccess](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-memberaccess) 节点中的 "," 词法单元序列，可能为空。

类型：[Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 不是 "," 词法单元序列时，抛出异常。

### prop dot
    
    __
    
    public mut prop dot: Token
    
功能：获取或设置 [MemberAccess](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-memberaccess) 节点中的 "."。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "." 词法单元类型时，抛出异常。

### prop field
    
    __
    
    public mut prop field: Token
    
功能：获取或设置 [MemberAccess](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-memberaccess) 节点成员的名字。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

### prop lAngle
    
    __
    
    public mut prop lAngle: Token
    
功能：获取或设置 [MemberAccess](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-memberaccess) 节点中的左尖括号。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是左尖括号时，抛出异常。

### prop rAngle
    
    __
    
    public mut prop rAngle: Token
    
功能：获取或设置 [MemberAccess](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-memberaccess) 节点中的右尖括号。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是右尖括号时，抛出异常。

### prop typeArguments
    
    __
    
    public mut prop typeArguments: ArrayList\<TypeNode\>
    
功能：获取或设置 [MemberAccess](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-memberaccess) 节点中的实例化类型。

类型：[ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)<[TypeNode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typenode)>

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [MemberAccess](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-memberaccess) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [MemberAccess](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-memberaccess) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [MemberAccess](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-memberaccess) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [MemberAccess](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-memberaccess) 节点时，抛出异常。

## class Modifier
    
    __
    
    public class Modifier <: Node {
        public init()
        public init(keyword: Token)
    }
    
功能：表示该定义具备某些特性，通常放在定义处的最前端。

一个 [Modifier](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-modifier) 节点：`public func foo()` 中的 `public`。

父类型：

  * Node

### prop keyword\(Token\)
    
    __
    
    public mut prop keyword: Token
    
功能：获取或设置 [Modifier](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-modifier) 节点中的修饰符词法单元。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [Modifier](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-modifier) 对象。

### init\(Token\)
    
    __
    
    public init(keyword: Token)
    
功能：构造一个 [Modifier](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-modifier) 对象。

参数：

  * keyword: [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) \- 将要构造 [Modifier](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-modifier) 类型的词法单元。

## class Node
    
    __
    
    abstract sealed class Node <: ToTokens
    
功能：所有仓颉语法树节点的父类。

该类提供了所有数据类型通用的操作接口。

父类型：

  * [ToTokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_interfaces.html#interface-totokens)

### prop beginPos
    
    __
    
    public mut prop beginPos: Position
    
功能：获取或设置当前节点的起始的位置信息。

类型：[Position](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-position)

### prop endPos
    
    __
    
    public mut prop endPos: Position
    
功能：获取或设置当前节点的终止的位置信息。

类型：[Position](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-position)

### func dump\(\)
    
    __
    
    public func dump(): Unit
    
功能：将当前语法树节点转化为树形结构的形态并进行打印。

语法树节点的树形结构将按照以下形式进行输出：

  * `-` 字符串：表示当前节点的公共属性， 如 `-keyword` , `-identifier`。
  * 节点属性后紧跟该节点的具体类型， 如 `-declType: PrimitiveType` 表示节点类型是一个 [PrimitiveType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-primitivetype) 节点。
  * 每个类型使用大括号表示类型的作用区间。

语法树输出的详细格式请参见[语法树节点打印](./libs/std/ast/ast_samples/dump.md)。

### func toTokens\(\)
    
    __
    
    public func toTokens(): Tokens
    
功能：将语法树节点转化为 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型。

返回值：

  * [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 转化后的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型节点。

### func traverse\(Visitor\)
    
    __
    
    public func traverse(v: Visitor): Unit
    
功能：遍历当前语法树节点及其子节点。若提前终止遍历子节点的行为，可重写 `visit` 函数并调用 `breakTraverse` 函数提前终止遍历行为，请参见[自定义访问函数遍历 AST 对象示例](./libs/std/ast/ast_samples/traverse.md)。

参数：

  * v: [Visitor](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-visitor) \- [Visitor](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-visitor) 类型的实例。

## class OptionalExpr
    
    __
    
    public class OptionalExpr <: Expr {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示一个带有问号操作符的表达式节点。

一个 [OptionalExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-optionalexpr) 节点：`a?.b, a?(b), a?[b]` 中的 `a?`。

父类型：

  * Expr

### prop baseExpr
    
    __
    
    public mut prop baseExpr: Expr
    
功能：获取或设置 [OptionalExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-optionalexpr) 的表达式节点。

类型：[Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr)

### prop quest
    
    __
    
    public mut prop quest: Token
    
功能：获取或设置 [OptionalExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-optionalexpr) 中的问号操作符。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是问号操作符时，抛出异常。

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [OptionalExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-optionalexpr) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [OptionalExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-optionalexpr) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [OptionalExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-optionalexpr) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [OptionalExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-optionalexpr) 节点时，抛出异常。

## class PackageHeader
    
    __
    
    public class PackageHeader <: Node {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示包声明节点。

一个 [PackageHeader](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-packageheader) 节点: `package define` 或者 `macro package define`。

> **说明：**
> 
> 包声明以关键字 `package` 或 `macro package` 开头，后面紧跟包名，且包声明必须在源文件的首行。

父类型：

  * Node

### prop accessible
    
    __
    
    public mut prop accessible: Token
    
功能：获取或设置 [PackageHeader](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-packageheader) 节点中的访问性修饰符的词法单元，可能为 [ILLEGAL](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_enums.html#illegal) 的词法单元。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

### prop keywordM
    
    __
    
    public mut prop keywordM: Token
    
功能：获取或设置 [PackageHeader](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-packageheader) 节点中的 `macro` 关键字的词法单元（`M` 为关键字首字母，下同），可能为 [ILLEGAL](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_enums.html#illegal) 的词法单元。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 `macro` 关键字时，抛出异常。

### prop keywordP
    
    __
    
    public mut prop keywordP: Token
    
功能：获取或设置 [PackageHeader](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-packageheader) 节点中的 `package` 关键字的词法单元。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 `package` 关键字时，抛出异常。

### prop prefixPaths
    
    __
    
    public mut prop prefixPaths: Tokens
    
功能：获取或设置 [PackageHeader](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-packageheader) 节点中完整包名的前缀部分的词法单元序列，可能为空。如 `package a.b.c` 中的 `a` 和 `b`。

类型：[Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)

### prop prefixDots
    
    __
    
    public mut prop prefixDots: Tokens
    
功能：获取或设置 [PackageHeader](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-packageheader) 节点中完整包名中用于分隔每层子包的词法单元序列，可能为空。如 `package a.b.c` 中的两个 "."。

类型：[Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 不是 "." 词法单元序列时，抛出异常。

### prop packageIdentifier
    
    __
    
    public mut prop packageIdentifier: Token
    
功能：获取或设置 [PackageHeader](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-packageheader) 节点中当前包的名字，如果当前包为 root 包，即为完整包名，若当前包为子包，则为最后一个 "." 后的名字。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [PackageHeader](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-packageheader) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [PackageHeader](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-packageheader) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [PackageHeader](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-packageheader) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\) 序列。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [PackageHeader](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-packageheader) 节点时，抛出异常。

## class ParenExpr
    
    __
    
    public class ParenExpr <: Expr {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示一个括号表达式节点，是指使用圆括号括起来的表达式。

一个 [ParenExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-parenexpr) 节点：`(1 + 2)`。

父类型：

  * Expr

### prop lParen
    
    __
    
    public mut prop lParen: Token
    
功能：获取或设置 [ParenExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-parenexpr) 节点中的 "\("。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\(" 时，抛出异常。

### prop parenthesizedExpr
    
    __
    
    public mut prop parenthesizedExpr: Expr
    
功能：获取或设置 [ParenExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-parenexpr) 节点中由圆括号括起来的子表达式。

类型：[Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr)

### prop rParen
    
    __
    
    public mut prop rParen: Token
    
功能：获取或设置 [ParenExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-parenexpr) 节点中的 "\)"。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\)" 时，抛出异常。

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [ParenExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-parenexpr) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [ParenExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-parenexpr) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [ParenExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-parenexpr) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [ParenExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-parenexpr) 节点时，抛出异常。

## class ParenType
    
    __
    
    public class ParenType <: TypeNode {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示括号类型节点。

例如 `var a: (Int64)` 中的 `(Int64)`。

父类型：

  * TypeNode

### prop lParen
    
    __
    
    public mut prop lParen: Token
    
功能：获取或设置 [ParenType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-parentype) 节点中的 "\(" 词法单元。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\(" 时，抛出异常。

### prop parenthesizedType
    
    __
    
    public mut prop parenthesizedType: TypeNode
    
功能：获取或设置 [ParenType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-parentype) 节点中括起来的类型，如 `(Int64)` 中的 [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)。

类型：[TypeNode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typenode)

### prop rParen
    
    __
    
    public mut prop rParen: Token
    
功能：获取或设置 [ParenType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-parentype) 节点中的 "\)" 词法单元。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\)" 时，抛出异常。

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [ParenType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-parentype) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [ParenType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-parentype) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [ParenType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-parentype) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [ParenType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-parentype) 节点时，抛出异常。

## class Pattern
    
    __
    
    public open class Pattern <: Node
    
功能：所有模式匹配节点的父类，继承自 [Node](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-node) 节点。

父类型：

  * Node

## class PrefixType
    
    __
    
    public class PrefixType <: TypeNode {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示带问号的前缀类型节点。

例如 `var a : ?A` 中的 `?A`。

父类型：

  * TypeNode

### prop baseType
    
    __
    
    public mut prop baseType: TypeNode
    
功能：获取或设置 [PrefixType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-prefixtype) 节点中的类型节点，如 `var a: ?A` 中的 `A`。

类型：[TypeNode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typenode)

### prop prefixOps
    
    __
    
    public mut prop prefixOps: Tokens
    
功能：获取或设置 [PrefixType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-prefixtype) 节点中前缀操作符集合。

类型：[Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [PrefixType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-prefixtype) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [PrefixType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-prefixtype) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [PrefixType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-prefixtype) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [PrefixType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-prefixtype) 节点时，抛出异常。

## class PrimaryCtorDecl
    
    __
    
    public class PrimaryCtorDecl <: Decl {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示一个主构造函数节点。

主构造函数节点由修饰符，主构造函数名，形参列表和主构造函数体构成。

父类型：

  * Decl

### prop block
    
    __
    
    public mut prop block: Block
    
功能：获取或设置 [PrimaryCtorDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-primaryctordecl) 节点的主构造函数体。

类型：[Block](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-block)

### prop funcParams
    
    __
    
    public mut prop funcParams: ArrayList\<FuncParam\>
    
功能：获取或设置 [PrimaryCtorDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-primaryctordecl) 节点的参数。

类型：[ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)<[FuncParam](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-funcparam)>

### prop lParen
    
    __
    
    public mut prop lParen: Token
    
功能：获取或设置 [PrimaryCtorDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-primaryctordecl) 节点的 "\("。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\(" 时，抛出异常。

### prop rParen
    
    __
    
    public mut prop rParen: Token
    
功能：获取或设置 [PrimaryCtorDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-primaryctordecl) 节点的 "\)"。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\)" 时，抛出异常。

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [PrimaryCtorDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-primaryctordecl) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [PrimaryCtorDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-primaryctordecl) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [PrimaryCtorDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-primaryctordecl) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [PrimaryCtorDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-primaryctordecl) 节点时，抛出异常。

### func isConst\(\)
    
    __
    
    public func isConst(): Bool
    
功能：判断是否是一个 `Const` 类型的节点。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 当前节点为 `Const` 类型的节点时，返回 true；反之，返回 false。

## class PrimitiveType
    
    __
    
    public class PrimitiveType <: TypeNode {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示一个基本类型节点。

例如数值类型，[Rune](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#rune) 类型，布尔类型等。

父类型：

  * TypeNode

### prop keyword
    
    __
    
    public mut prop keyword: Token
    
功能：获取或设置构造 [PrimitiveType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-primitivetype) 类型的关键字，如 [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8)。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [PrimitiveType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-primitivetype) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [PrimitiveType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-primitivetype) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [PrimitiveType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-primitivetype) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [PrimitiveType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-primitivetype) 节点时，抛出异常。

## class PrimitiveTypeExpr
    
    __
    
    public class PrimitiveTypeExpr <: Expr {
        public init()
        public init(kind: Tokens)
    }
    
功能：表示基本类型表达式节点。

[PrimitiveTypeExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-primitivetypeexpr) 节点：编译器内置的基本类型作为表达式出现在节点中。如 [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64).toSting\(\) 中的 [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)。

父类型：

  * Expr

### prop keyword
    
    __
    
    public mut prop keyword: Token
    
功能：获取或设置 [PrimitiveTypeExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-primitivetypeexpr) 中的基本类型关键字。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [PrimitiveTypeExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-primitivetypeexpr) 对象。

### init\(Tokens\)
    
    __
    
    public init(kind: Tokens)
    
功能：构造一个 [PrimitiveTypeExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-primitivetypeexpr) 对象。

参数：

  * kind: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [PrimitiveTypeExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-primitivetypeexpr) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [PrimitiveTypeExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-primitivetypeexpr) 节点时，抛出异常。

## class Program
    
    __
    
    public class Program <: Node {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示一个仓颉源码文件节点。

一个仓颉源码文件节点主要包括包定义节点，包导入节点和 TopLevel 作用域内的所有声明节点。

> **说明：**
> 
> 任何一个仓颉源码文件都可以被解析为一个 [Program](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-program) 类型。

父类型：

  * Node

### prop decls
    
    __
    
    public mut prop decls: ArrayList\<Decl\>
    
功能：获取或设置仓颉源码文件中 TopLevel 作用域内定义的声明节点列表。

类型：[ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)<[Decl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-decl)>

### prop importLists
    
    __
    
    public mut prop importLists: ArrayList\<ImportList\>
    
功能：获取或设置仓颉源码文件中包导入节点 [ImportList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-importlist) 的列表。

类型：[ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)<[ImportList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-importlist)>

### prop packageHeader
    
    __
    
    public mut prop packageHeader: PackageHeader
    
功能：获取或设置仓颉源码文件中包的声明节点 [PackageHeader](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-packageheader)。

类型：[PackageHeader](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-packageheader)

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [Program](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-program) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [Program](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-program) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [Program](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-program) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\) 序列。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为一个文件节点时，抛出异常。

## class PropDecl
    
    __
    
    public class PropDecl <: Decl {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示一个属性定义节点。

一个 [PropDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-propdecl) 节点：`prop X: Int64 { get() { 0 } }`。

父类型：

  * Decl

### prop colon
    
    __
    
    public mut prop colon: Token
    
功能：获取或设置 [PropDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-propdecl) 节点的冒号。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是冒号时，抛出异常。

### prop declType
    
    __
    
    public mut prop declType : TypeNode
    
功能：获取或设置 [PropDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-propdecl) 节点的返回类型。

类型：[TypeNode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typenode)

### prop getter
    
    __
    
    public mut prop getter: FuncDecl
    
功能：获取或设置 [PropDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-propdecl) 节点的 getter 函数。

类型：[FuncDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-funcdecl)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当 [PropDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-propdecl) 节点不存在 getter 函数时，抛出异常。

### prop lBrace
    
    __
    
    public mut prop lBrace: Token
    
功能：获取或设置 [PropDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-propdecl) 节点的 "\{"。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\{" 时，抛出异常。

### prop rBrace
    
    __
    
    public mut prop rBrace: Token
    
功能：获取或设置 [PropDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-propdecl) 节点的 "\}"。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\}" 时，抛出异常。

### prop setter
    
    __
    
    public mut prop setter: FuncDecl
    
功能：获取或设置 [PropDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-propdecl) 节点的 setter 函数。

类型：[FuncDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-funcdecl)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当 [PropDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-propdecl) 节点不存在 setter 函数时，抛出异常。

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [PropDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-propdecl) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [PropDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-propdecl) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [PropDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-propdecl) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [PropDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-propdecl) 节点时，抛出异常。

## class QualifiedType
    
    __
    
    public class QualifiedType <: TypeNode {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示一个用户自定义成员类型。

例如 `var a : T.a` 中的 `T.a`, 其中 T 是包名，a 是从 T 包中导入的类型。

父类型：

  * TypeNode

### prop baseType
    
    __
    
    public mut prop baseType: TypeNode
    
功能：获取或设置 [QualifiedType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-qualifiedtype) 节点的成员访问类型主体，如 `var a : T.a` 中的 `T`。

类型：[TypeNode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typenode)

### prop commas
    
    __
    
    public mut prop commas: Tokens
    
功能：获取或设置 [QualifiedType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-qualifiedtype) 节点中的 "," 词法单元序列，可能为空。

类型：[Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 不是 "," 词法单元序列时，抛出异常。

### prop dot
    
    __
    
    public mut prop dot: Token
    
功能：获取或设置 [QualifiedType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-qualifiedtype) 节点中的 "." 。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 不是 "." 词法单元时，抛出异常。

### prop identifier
    
    __
    
    public mut prop identifier: Token
    
功能：获取或设置 [QualifiedType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-qualifiedtype) 节点成员的标识符，如 `var a : T.a` 中的 `a`。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

### prop lAngle
    
    __
    
    public mut prop lAngle: Token
    
功能：获取或设置 [QualifiedType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-qualifiedtype) 节点中的左尖括号词法单元，可能为 [ILLEGAL](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_enums.html#illegal) 的词法单元。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是左尖括号时，抛出异常。

### prop rAngle
    
    __
    
    public mut prop rAngle: Token
    
功能：获取或设置 [QualifiedType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-qualifiedtype) 节点中的右尖括号词法单元，可能为 [ILLEGAL](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_enums.html#illegal) 的词法单元。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是右尖括号时，抛出异常。

### prop typeArguments
    
    __
    
    public mut prop typeArguments: ArrayList\<TypeNode\>
    
功能：获取或设置 [QualifiedType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-qualifiedtype) 节点中的实例化类型的列表，如 `T.a<Int32>` 中的 [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)，列表可能为空。

类型：[ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)<[TypeNode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typenode)>

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [QualifiedType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-qualifiedtype) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [QualifiedType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-qualifiedtype) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [QualifiedType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-qualifiedtype) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [QualifiedType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-qualifiedtype) 节点时，抛出异常。

## class QuoteExpr
    
    __
    
    public class QuoteExpr <: Expr {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示 `quote` 表达式节点。

一个 [QuoteExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-quoteexpr) 节点： `quote(var ident = 0)`。

父类型：

  * Expr

### prop exprs
    
    __
    
    public mut prop exprs: ArrayList\<Expr\>
    
功能：获取或设置 [QuoteExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-quoteexpr) 中由 `()` 括起的内部引用表达式节点。

类型：[ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)<[Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr)>

### prop keyword
    
    __
    
    public mut prop keyword: Token
    
功能：获取或设置 [QuoteExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-quoteexpr) 的 `quote` 关键字。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 `quote` 关键字时，抛出异常。

### prop lParen
    
    __
    
    public mut prop lParen: Token
    
功能：获取或设置 [QuoteExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-quoteexpr) 中的 "\("。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\(" 时，抛出异常。

### prop rParen
    
    __
    
    public mut prop rParen: Token
    
功能：获取或设置 [QuoteExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-quoteexpr) 中的 "\)"。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\)" 时，抛出异常。

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [QuoteExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-quoteexpr) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [QuoteExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-quoteexpr) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [QuoteExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-quoteexpr) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [QuoteExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-quoteexpr) 节点。

## class QuoteToken
    
    __
    
    public class QuoteToken <: Expr
    
功能：表示 `quote` 表达式节点内任意合法的 `token`。

父类型：

  * Expr

### prop tokens
    
    __
    
    public mut prop tokens: Tokens
    
功能：获取 [QuoteToken](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-quotetoken) 内的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)。

类型：[Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)

## class RangeExpr
    
    __
    
    public class RangeExpr <: Expr {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示包含区间操作符的表达式。

[RangeExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-rangeexpr) 节点：存在两种 [Range](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-ranget-where-t--countablet--comparablet--equatablet) 操作符：`..` 和 `..=`，分别用于创建左闭右开和左闭右闭的 [Range](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-ranget-where-t--countablet--comparablet--equatablet) 实例。它们的使用方式分别为 `start..end:step` 和 `start..=end:step`。

父类型：

  * Expr

### prop colon
    
    __
    
    public mut prop colon: Token
    
功能：获取或设置 [RangeExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-rangeexpr) 中的 ":" 操作符。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 ":" 操作符时，抛出异常。

### prop end
    
    __
    
    public mut prop end: Expr
    
功能：获取或设置 [RangeExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-rangeexpr) 中的终止值。

类型：[Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 终止表达式省略。只有在 [Range](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-ranget-where-t--countablet--comparablet--equatablet)<[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)> 类型的实例用在下标操作符 `[]` 为空的场景。

### prop op
    
    __
    
    public mut prop op: Token
    
功能：获取或设置 [RangeExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-rangeexpr) 中的 [Range](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-ranget-where-t--countablet--comparablet--equatablet) 的操作符。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

### prop start
    
    __
    
    public mut prop start: Expr
    
功能：获取或设置 [RangeExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-rangeexpr) 中的起始值。

类型：[Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 起始表达式省略。只有在 [Range](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-ranget-where-t--countablet--comparablet--equatablet)<[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)> 类型的实例用在下标操作符 `[]` 为空的场景。

### prop step
    
    __
    
    public mut prop step: Expr
    
功能：获取或设置 [RangeExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-rangeexpr) 中序列中前后两个元素之间的差值。

类型：[Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当 [RangeExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-rangeexpr) 中未设置序列前后两个元素之间的差值时，抛出异常。

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [RangeExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-rangeexpr) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [RangeExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-rangeexpr) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [RangeExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-rangeexpr) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [RangeExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-rangeexpr) 节点时，抛出异常。

## class RefExpr
    
    __
    
    public class RefExpr <: Expr {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示引用一个声明的表达式节点。

一个 [RefExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-refexpr) 节点：`var b = a + 1` 中的 `a` 是一个 [RefExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-refexpr)。

父类型：

  * Expr

### prop commas
    
    __
    
    public mut prop commas: Tokens
    
功能：获取或设置 [RefExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-refexpr) 节点中的 "," 词法单元序列，可能为空。

类型：[Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 不是 "," 词法单元序列时，抛出异常。

### prop identifier
    
    __
    
    public mut prop identifier: Token
    
功能：获取或设置 [RefExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-refexpr) 节点中的自定义类型的标识符。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

### prop lAngle
    
    __
    
    public mut prop lAngle: Token
    
功能：获取或设置 [RefExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-refexpr) 节点中的左尖括号。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是左尖括号时，抛出异常。

### prop rAngle
    
    __
    
    public mut prop rAngle: Token
    
功能：获取或设置 [RefExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-refexpr) 节点中的右尖括号。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是右尖括号时，抛出异常。

### prop typeArguments
    
    __
    
    public mut prop typeArguments: ArrayList\<TypeNode\>
    
功能：获取或设置 [RefExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-refexpr) 节点中的实例化类型。

类型：[ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)<[TypeNode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typenode)>

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [RefExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-refexpr) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [RefExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-refexpr) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [RefExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-refexpr) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [RefExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-refexpr) 节点时，抛出异常。

## class RefType
    
    __
    
    public class RefType <: TypeNode {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示一个非基础类型节点。

例如用户通过 `class`、`struct`、`enum` 等定义的自定义类型，以及 [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)、[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) 等内置类型都可以使用 [RefType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-reftype) 表示。例如 `var a : A` 中的 `A`。

父类型：

  * TypeNode

### prop commas
    
    __
    
    public mut prop commas: Tokens
    
功能：获取或设置 [RefType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-reftype) 节点中的 "," 词法单元序列，可能为空。

类型：[Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 不是 "," 词法单元序列时，抛出异常。

### prop identifier
    
    __
    
    public mut prop identifier: Token
    
功能：获取或设置构造 [RefType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-reftype) 类型的关键字，如 `var a : A = A()` 中的 `A`。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

### prop lAngle
    
    __
    
    public mut prop lAngle: Token
    
功能：获取或设置 [RefType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-reftype) 节点中的左尖括号词法单元，可能为 [ILLEGAL](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_enums.html#illegal) 的词法单元。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是左尖括号时，抛出异常。

### prop rAngle
    
    __
    
    public mut prop rAngle: Token
    
功能：获取或设置 [RefType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-reftype) 节点中的右尖括号词法单元，可能为 [ILLEGAL](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_enums.html#illegal) 的词法单元。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是右尖括号时，抛出异常。

### prop typeArguments
    
    __
    
    public mut prop typeArguments: ArrayList\<TypeNode\>
    
功能：获取或设置 [RefType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-reftype) 节点中的实例化类型的列表，可能为空，如 `var a : Array<Int32>` 中的 [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)。

类型：[ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)<[TypeNode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typenode)>

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [RefType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-reftype) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [RefType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-reftype) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [RefType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-reftype) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [RefType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-reftype) 节点时，抛出异常。

## class ReturnExpr
    
    __
    
    public class ReturnExpr <: Expr {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示 `return` 表达式节点。

一个 [ReturnExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-returnexpr) 节点：`return 1`。

父类型：

  * Expr

### prop expr
    
    __
    
    public mut prop expr: Expr
    
功能：获取或设置 [ReturnExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-returnexpr) 节点中的表达式节点。

类型：[Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当 [ReturnExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-returnexpr) 节点没有表达式时，抛出异常。

### prop keyword
    
    __
    
    public mut prop keyword: Token
    
功能：获取或设置 [ReturnExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-returnexpr) 节点中的关键字。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 `return` 关键字时，抛出异常。

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [ReturnExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-returnexpr) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [ReturnExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-returnexpr) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [ReturnExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-returnexpr) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [ReturnExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-returnexpr) 节点时，抛出异常。

## class SpawnExpr
    
    __
    
    public class SpawnExpr <: Expr {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示 `Spawn` 表达式。

一个 [SpawnExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-spawnexpr) 节点由 `spawn` 关键字和一个不包含形参的闭包组成，例如：`spawn { add(1, 2) }`。

父类型：

  * Expr

### prop keyword
    
    __
    
    public mut prop keyword: Token
    
功能：获取或设置 [SpawnExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-spawnexpr) 中的 `spawn` 关键字。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 `spawn` 关键字时，抛出异常。

### prop lParen
    
    __
    
    public mut prop lParen: Token
    
功能：获取或设置 [SpawnExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-spawnexpr) 中的 "\("。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\(" 时，抛出异常。

### prop lambdaExpr
    
    __
    
    public mut prop lambdaExpr: LambdaExpr
    
功能：获取或设置 [SpawnExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-spawnexpr) 中的不含形参的闭包。

类型：[LambdaExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-lambdaexpr)

### prop rParen
    
    __
    
    public mut prop rParen: Token
    
功能：获取或设置 [SpawnExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-spawnexpr) 中的 "\)"。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\)" 时，抛出异常。

### prop threadContext
    
    __
    
    public mut prop threadContext: Expr
    
功能：获取或设置 [SpawnExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-spawnexpr) 中的线程上下文环境表达式。

类型：[Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当 [SpawnExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-spawnexpr) 中不含有上下文表达式时，抛出异常。

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [SpawnExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-spawnexpr) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [SpawnExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-spawnexpr) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [SpawnExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-spawnexpr) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [SpawnExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-spawnexpr) 节点时，抛出异常。

## class StructDecl
    
    __
    
    public class StructDecl <: Decl {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示一个 `Struct` 节点。

Struct 的定义使用 `struct` 关键字，定义依次为：可缺省的修饰符、struct 关键字、struct 名、可选的类型参数、是否指定父接口、可选的泛型约束、struct 体的定义。

父类型：

  * Decl

### prop body
    
    __
    
    public mut prop body: Body
    
功能：获取或设置 [StructDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-structdecl) 节点的类体。

类型：[Body](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-body)

### prop superTypeBitAnds
    
    __
    
    public mut prop superTypeBitAnds: Tokens
    
功能：获取或设置 [StructDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-structdecl) 节点的父接口声明中的 `&` 操作符的词法单元序列，可能为空。

类型：[Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 不是 `&` 词法单元序列时，抛出异常。

### prop superTypes
    
    __
    
    public mut prop superTypes: ArrayList\<TypeNode\>
    
功能：获取或设置 [StructDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-structdecl) 节点的父接口。

类型：[ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)<[TypeNode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typenode)>

### prop upperBound
    
    __
    
    public mut prop upperBound: Token
    
功能：获取或设置 `<:` 操作符。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 `<:` 操作符时，抛出异常。

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [StructDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-structdecl) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [StructDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-structdecl) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [StructDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-structdecl) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [StructDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-structdecl) 节点时，抛出异常。

## class SubscriptExpr
    
    __
    
    public class SubscriptExpr <: Expr {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示索引访问表达式。

[SubscriptExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-subscriptexpr) 节点：用于那些支持索引访问的类型（包括 [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt) 类型和 `Tuple` 类型）通过下标来访问其具体位置的元素，如 `arr[0]`。

父类型：

  * Expr

### prop baseExpr
    
    __
    
    public mut prop baseExpr: Expr
    
功能：获取或设置 [SubscriptExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-subscriptexpr) 中的表达式。

类型：[Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr)

### prop indexList
    
    __
    
    public mut prop indexList: ArrayList\<Expr\>
    
功能：获取或设置 [SubscriptExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-subscriptexpr) 中的索引表达式序列。

类型：[ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)<[Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr)>

### prop lSquare
    
    __
    
    public mut prop lSquare: Token
    
功能：获取或设置 [SubscriptExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-subscriptexpr) 中的 "\["。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\[" 时，抛出异常。

### prop rSquare
    
    __
    
    public mut prop rSquare: Token
    
功能：获取或设置 [SubscriptExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-subscriptexpr) 中的 "\]"。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\]" 时，抛出异常。

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [SubscriptExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-subscriptexpr) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [SubscriptExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-subscriptexpr) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [SubscriptExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-subscriptexpr) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [SubscriptExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-subscriptexpr) 节点时，抛出异常。

## class SynchronizedExpr
    
    __
    
    public class SynchronizedExpr <: Expr {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示 `synchronized` 表达式。

一个 [SynchronizedExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-synchronizedexpr) 节点由 `synchronized` 关键字和 `StructuredMutex` 对以及后面的代码块组成, 例如 `synchronized(m) { foo() }`。

父类型：

  * Expr

### prop block
    
    __
    
    public mut prop block: Block
    
功能：获取或设置 [SynchronizedExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-synchronizedexpr) 修饰的代码块。

类型：[Block](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-block)

### prop keyword
    
    __
    
    public mut prop keyword: Token
    
功能：获取或设置 [SynchronizedExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-synchronizedexpr) 中的 `synchronized` 关键字。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 `synchronized` 关键字时，抛出异常。

### prop lParen
    
    __
    
    public mut prop lParen: Token
    
功能：获取或设置 [SynchronizedExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-synchronizedexpr) 中的 "\("。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\(" 时，抛出异常。

### prop rParen
    
    __
    
    public mut prop rParen: Token
    
功能：获取或设置 [SynchronizedExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-synchronizedexpr) 中的 "\)"。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\)" 时，抛出异常。

### prop structuredMutex
    
    __
    
    public mut prop structuredMutex: Expr
    
功能：获取或设置 [SynchronizedExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-synchronizedexpr) 中的 `StructuredMutex` 的对象。

类型：[Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr)

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [SynchronizedExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-synchronizedexpr) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [SynchronizedExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-synchronizedexpr) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [SynchronizedExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-synchronizedexpr) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [SynchronizedExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-synchronizedexpr) 节点时，抛出异常。

## class ThisType
    
    __
    
    public class ThisType <: TypeNode {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示 `This` 类型节点。

父类型：

  * TypeNode

### prop keyword
    
    __
    
    public mut prop keyword: Token
    
功能：获取或设置 [ThisType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-thistype) 节点关键字 `This` 的词法单元。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [ThisType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-thistype) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [ThisType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-thistype) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [ThisType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-thistype) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [ThisType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-thistype) 节点时，抛出异常。

## class ThrowExpr
    
    __
    
    public class ThrowExpr <: Expr {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示 `throw` 表达式节点。

一个 [ThrowExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-throwexpr) 节点：`throw Exception()`。

父类型：

  * Expr

### prop expr
    
    __
    
    public mut prop expr: Expr
    
功能：获取或设置 [ThrowExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-throwexpr) 节点中的表达式节点。

类型：[Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr)

### prop keyword
    
    __
    
    public mut prop keyword: Token
    
功能：获取或设置 [ThrowExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-throwexpr) 节点中的关键字。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 `throw` 关键字时，抛出异常。

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [ThrowExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-throwexpr) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [ThrowExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-throwexpr) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [ThrowExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-throwexpr) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [ThrowExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-throwexpr) 节点时，抛出异常。

## class Tokens
    
    __
    
    public open class Tokens <: ToString & Iterable\<Token\> & ToBytes {
        public init()
        public init(tokArray: Array\<Token\>)
        public init(tokArrayList: ArrayList\<Token\>)
    }
    
功能：对 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 序列进行封装的类型。

父类型：

  * [ToString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-tostring)
  * [Iterable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-iterablee)<[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)>
  * [ToBytes](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_interfaces.html#interface-tobytes)

### prop size
    
    __
    
    public open prop size: Int64
    
功能：获取 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 对象中 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 类型的数量。

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 对象。

### init\(Array\<Token\>\)
    
    __
    
    public init(tokArray: Array\<Token\>)
    
功能：构造一个 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 对象。

参数：

  * tokArray: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)> \- 一组包含 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 的 [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt) 类型。

### init\(ArrayList\<Token\>\)
    
    __
    
    public init(tokArrayList: ArrayList\<Token\>)
    
功能：构造一个 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 对象。

参数：

  * tokArrayList: [ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)<[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)> \- 一组包含 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 的 [ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt) 类型。

### func append\(Node\)
    
    __
    
    public func append(node: Node): Tokens
    
功能：将当前的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 与传入节点所转换得到的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 进行拼接。

参数：

  * node: [Node](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-node) \- 待拼接的 [Node](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-node) 对象。

返回值：

  * [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 拼接后的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型。

### func append\(Token\)
    
    __
    
    public open func append(token: Token): Tokens
    
功能：将当前的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 与传入的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 进行拼接。

参数：

  * token: [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) \- 待拼接的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 对象。

返回值：

  * [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 拼接后的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型。

### func append\(Tokens\)
    
    __
    
    public open func append(tokens: Tokens): Tokens
    
功能：在当前的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 后追加传入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 进行拼接（该接口性能较其他拼接函数表现更好）。

参数：

  * tokens: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 待拼接的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 对象。

返回值：

  * [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 拼接后的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型。

### func concat\(Tokens\)
    
    __
    
    public func concat(tokens: Tokens): Tokens
    
功能：将当前的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 与传入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 进行拼接。

参数：

  * tokens: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 待拼接的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 对象。

返回值：

  * [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 拼接后的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)。

### func dump\(\)
    
    __
    
    public func dump(): Unit
    
功能：将 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 内所有 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 的信息打印出来。

### func get\(Int64\)
    
    __
    
    public open func get(index: Int64): Token
    
功能：通过索引值获取 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 元素。

参数：

  * index: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 待索引的数值。

返回值：

  * [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) \- 指定索引的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)。

异常：

  * [IndexOutOfBoundsException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-indexoutofboundsexception) \- 当 `index` 无效时，抛出异常。

### func iterator\(\)
    
    __
    
    public func iterator(): TokensIterator
    
功能：获取 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 对象中的一个迭代器对象。

返回值：

  * [TokensIterator](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokensiterator) \- [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 对象的迭代器对象。

### func remove\(Int64\)
    
    __
    
    public func remove(index: Int64): Tokens
    
功能：删除指定位置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 对象。

参数：

  * index: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 被删除的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 的索引。

返回值：

  * [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 删除指定位置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 后的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 对象。

### func toBytes\(\)
    
    __
    
    public func toBytes(): Array\<UInt8\>
    
功能：Tokens 类型的序列化。

返回值：

  * [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8)> \- 序列化后的字节序列。

### func toString\(\)
    
    __
    
    public func toString(): String
    
功能：将 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 转化为 [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) 类型。

### operator func +\(Token\)
    
    __
    
    public operator func +(r: Token): Tokens
    
功能：使用当前 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 与另一个 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 相加以获取新的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)。

参数：

  * r: [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) \- 待操作的另一个 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 对象。

返回值：

  * [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 新拼接 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 后的词法单元集合。

### operator func +\(Tokens\)
    
    __
    
    public operator func +(r: Tokens): Tokens
    
功能：使用当前 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 与 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 相加以获取新的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型。

参数：

  * r: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 待操作的一组 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 对象。

返回值：

  * [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 新拼接 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 后的词法单元集合。

### operator func \[\]\(Int64\)
    
    __
    
    public operator func [](index: Int64): Token
    
功能：操作符重载，通过索引值获取对应 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)。

参数：

  * index: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 待索引的数值。

返回值：

  * [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) \- 返回索引对应的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)。

异常：

  * [IndexOutOfBoundsException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-indexoutofboundsexception) \- 当 `index` 无效时，抛出异常。

### operator func \[\]\(Range\<Int64\>\)
    
    __
    
    public open operator func [](range: Range\<Int64\>): Tokens
    
功能：操作符重载，通过 `range` 获取对应 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 切片。

参数：

  * range: [Range](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-ranget-where-t--countablet--comparablet--equatablet)<[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)> \- 待索引的切片范围。

返回值：

  * [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 返回切片索引对应的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当 `range.step` 不等于 1 时，抛出异常。
  * [IndexOutOfBoundsException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-indexoutofboundsexception) \- 当 range 无效时，抛出异常。

## class TokensIterator
    
    __
    
    public class TokensIterator <: Iterator\<Token\> {
        public init(tokens: Tokens)
    }
    
功能：实现 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 的迭代器功能。

父类型：

  * [Iterator](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_classes.html#class-iteratort)<[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)>

### init\(Tokens\)
    
    __
    
    public init(tokens: Tokens)
    
功能：构造一个 [TokensIterator](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokensiterator) 对象。

参数：

  * tokens: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 传入 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)。

### func iterator\(\)
    
    __
    
    public func iterator(): Iterator\<Token\>
    
功能：获取当前迭代器实例。

返回值：

  * [Iterator](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_classes.html#class-iteratort)<[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)> \- 当前迭代器实例。

### func next\(\)
    
    __
    
    public func next(): Option\<Token\>
    
功能：获取迭代器中的下一个值。

返回值：

  * [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)<[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)> \- 返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)<[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)> 类型，当遍历结束后，返回 None。

### func peek\(\)
    
    __
    
    public func peek(): Option\<Token\>
    
功能：获取迭代器中的当前值。

返回值：

  * [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)<[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)> \- 返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)<[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)> 类型，当遍历结束后，返回 None。

### func seeing\(TokenKind\)
    
    __
    
    public func seeing(kind: TokenKind): Bool
    
功能：判断当前节点的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 类型是否是传入的类型。

参数：

  * kind: [TokenKind](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_enums.html#enum-tokenkind) \- 需要判断的 [TokenKind](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_enums.html#enum-tokenkind) 类型。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果当前节点的 [TokenKind](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_enums.html#enum-tokenkind) 与传入类型相同，返回 true，否则返回 false。

## class TrailingClosureExpr
    
    __
    
    public class TrailingClosureExpr <: Expr {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示尾随 `Lambda` 节点。

一个 [TrailingClosureExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-trailingclosureexpr) 节点将 lambda 表达式放在函数调用的尾部，括号外面，如 `f(a){ i => i * i }`。

父类型：

  * Expr

### prop expr
    
    __
    
    public mut prop expr: Expr
    
功能：获取或设置 [TrailingClosureExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-trailingclosureexpr) 中的表达式。

类型：[Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr)

### prop lambdaExpr
    
    __
    
    public mut prop lambdaExpr: LambdaExpr
    
功能：获取或设置 [TrailingClosureExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-trailingclosureexpr) 中的尾随 lambda。

类型：[LambdaExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-lambdaexpr)

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [TrailingClosureExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-trailingclosureexpr) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [TrailingClosureExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-trailingclosureexpr) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [TrailingClosureExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-trailingclosureexpr) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [TrailingClosureExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-trailingclosureexpr) 节点。

## class TryExpr
    
    __
    
    public class TryExpr <: Expr {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示 `try` 表达式节点。

`try` 表达式包括三个部分：`try` 块，`catch` 块和 `finally` 块。

父类型：

  * Expr

### prop catchBlocks
    
    __
    
    public mut prop catchBlocks: ArrayList\<Block\>
    
功能：获取或设置 [TryExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tryexpr) 中的 Catch 块。

类型：[ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)<[Block](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-block)>

### prop catchPatterns
    
    __
    
    public mut prop catchPatterns: ArrayList\<Pattern\>
    
功能：获取或设置 [TryExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tryexpr) 中通过模式匹配的方式匹配待捕获的异常序列。

类型：[ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)<[Pattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-pattern)>

### prop finallyBlock
    
    __
    
    public mut prop finallyBlock: Block
    
功能：获取或设置 [TryExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tryexpr) 中的关键字 `Finally` 块。

类型：[Block](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-block)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当 [TryExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tryexpr) 节点无 `Finally` 块节点时，抛出异常。

### prop keywordF
    
    __
    
    public mut prop keywordF: Token
    
功能：获取或设置 [TryExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tryexpr) 中的 `finally` 关键字。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 `finally` 关键字时，抛出异常。

### prop keywordT
    
    __
    
    public mut prop keywordT: Token
    
功能：获取或设置 [TryExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tryexpr) 中的 `try` 关键字。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 `try` 关键字时，抛出异常。

### prop keywordsC
    
    __
    
    public mut prop keywordsC: Tokens
    
功能：获取或设置 [TryExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tryexpr) 中的关键字 `catch`。

类型：[Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 `catch` 关键字时，抛出异常。

### prop resourceSpec
    
    __
    
    public mut prop resourceSpec: ArrayList\<VarDecl\>
    
功能：获取或设置 [TryExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tryexpr) 中 Try-with-resources 类型表达式的实例化对象序列。

类型：[ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)<[VarDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-vardecl)>

### prop tryBlock
    
    __
    
    public mut prop tryBlock: Block
    
功能：获取或设置 [TryExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tryexpr) 中由表达式与声明组成的块。

类型：[Block](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-block)

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [TryExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tryexpr) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [TryExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tryexpr) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [TryExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tryexpr) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [TryExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tryexpr) 节点时，抛出异常。

## class TupleLiteral
    
    __
    
    public class TupleLiteral <: Expr {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示元组字面量节点。

[TupleLiteral](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tupleliteral) 节点：使用格式 `(expr1, expr2, ... , exprN)` 表示，每个 `expr` 是一个表达式。

父类型：

  * Expr

### prop elements
    
    __
    
    public mut prop elements: ArrayList\<Expr\>
    
功能：获取或设置 [TupleLiteral](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tupleliteral) 中的表达式列表。

类型：[ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)<[Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr)>

### prop lParen
    
    __
    
    public mut prop lParen: Token
    
功能：获取或设置 [TupleLiteral](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tupleliteral) 中的 "\("。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\(" 时，抛出异常。

### prop rParen
    
    __
    
    public mut prop rParen: Token
    
功能：获取或设置 [TupleLiteral](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tupleliteral) 中的 "\)"。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\)" 时，抛出异常。

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [TupleLiteral](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tupleliteral) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [TupleLiteral](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tupleliteral) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [TupleLiteral](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tupleliteral) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [TupleLiteral](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tupleliteral) 节点时，抛出异常。

## class TuplePattern
    
    __
    
    public class TuplePattern <: Pattern {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示 Tuple 模式节点。

用于 `tuple` 值的匹配，如 `case ("Bob", age) => 1` 中的 `("Bob", age)`。

父类型：

  * Pattern

### prop commas
    
    __
    
    public mut prop commas: Tokens
    
功能：获取或设置 [TuplePattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tuplepattern) 节点中的 "," 词法单元序列，可能为空。

类型：[Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 不是 "," 词法单元序列时，抛出异常。

### prop lParen
    
    __
    
    public mut prop lParen: Token
    
功能：获取或设置 [TuplePattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tuplepattern) 节点中的 "\(" 的词法单元。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\(" 时，抛出异常。

### prop patterns
    
    __
    
    public mut prop patterns: ArrayList\<Pattern\>
    
功能：获取或设置 [TuplePattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tuplepattern) 节点中的一组 [Pattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-pattern) 节点。

类型：[ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)<[Pattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-pattern)>

### prop rParen
    
    __
    
    public mut prop rParen: Token
    
功能：获取或设置 [TuplePattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tuplepattern) 节点中的 "\)" 的词法单元。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\)" 时，抛出异常。

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [TuplePattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tuplepattern) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [TuplePattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tuplepattern) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [TuplePattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tuplepattern) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [TuplePattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tuplepattern) 节点时，抛出异常。

## class TupleType
    
    __
    
    public class TupleType <: TypeNode {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示元组类型节点。

例如 `var a : (Int64, Int32)` 中的 `(Int64, Int32)`。

父类型：

  * TypeNode

### prop lParen
    
    __
    
    public mut prop lParen: Token
    
功能：获取或设置 [TupleType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tupletype) 节点中的 "\(" 词法单元。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\(" 时，抛出异常。

### prop rParen
    
    __
    
    public mut prop rParen: Token
    
功能：获取或设置 [TupleType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tupletype) 节点中的 "\)" 词法单元。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\)" 时，抛出异常。

### prop types
    
    __
    
    public mut prop types: ArrayList\<TypeNode\>
    
功能：获取或设置 [TupleType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tupletype) 节点中的类型节点列表。

类型：[ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)<[TypeNode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typenode)>

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [TupleType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tupletype) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [TupleType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tupletype) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [TupleType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tupletype) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [TupleType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tupletype) 节点时，抛出异常。

## class TypeAliasDecl
    
    __
    
    public class TypeAliasDecl <: Decl {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示类型别名节点。

一个 [TypeAliasDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typealiasdecl) 节点： `type Point2D = Float64`。

> **说明：**
> 
> 该节点中 `type` 作为关键字，紧跟任意的合法标识符，其后的 `type` 是任意的 top-level 可见的类型，标识符和 `type` 之间使用 `=` 进行连接。

父类型：

  * Decl

### prop aliasType
    
    __
    
    public mut prop aliasType: TypeNode
    
功能：获取或设置将要别名的类型。

类型：[TypeNode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typenode)

### prop assign
    
    __
    
    public mut prop assign: Token
    
功能：获取或设置标识符和 `type` 之间的 `=`。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 `=` 时，抛出异常。

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [TypeAliasDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typealiasdecl) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [TypeAliasDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typealiasdecl) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [TypeAliasDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typealiasdecl) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [TypeAliasDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typealiasdecl) 节点时，抛出异常。

## class TypeConvExpr
    
    __
    
    public class TypeConvExpr <: Expr {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示类型转换表达式。

用于实现若干数值类型间的转换。一个 [TypeConvExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typeconvexpr) 节点：`Int8(32)`。

父类型：

  * Expr

### prop expr
    
    __
    
    public mut prop expr: Expr
    
功能：获取或设置 [TypeConvExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typeconvexpr) 中进行类型转化的原始表达式。

类型：[Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr)

### prop lParen
    
    __
    
    public mut prop lParen: Token
    
功能：获取或设置 [TypeConvExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typeconvexpr) 中的 "\("。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\(" 时，抛出异常。

### prop rParen
    
    __
    
    public mut prop rParen: Token
    
功能：获取或设置 [TypeConvExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typeconvexpr) 中的 "\)"。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\)" 时，抛出异常。

### prop targetType
    
    __
    
    public mut prop targetType: PrimitiveType
    
功能：获取或设置 [TypeConvExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typeconvexpr) 中将要转换到的目标类型。

类型：[PrimitiveType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-primitivetype)

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [TypeConvExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typeconvexpr) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [TypeConvExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typeconvexpr) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [TypeConvExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typeconvexpr) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [TypeConvExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typeconvexpr) 节点时，抛出异常。

## class TypeNode
    
    __
    
    public open class TypeNode <: Node
    
功能：所有类型节点的父类，继承自 [Node](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-node)。

父类型：

  * Node

### prop typeParameterName
    
    __
    
    public mut prop typeParameterName: Token
    
功能：获取或设置类型节点的参数，如：`(p1:Int64, p2:Int64)` 中的 `p1` 和 `p2`，可能为 [ILLEGAL](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_enums.html#illegal) 的词法单元。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

### prop colon
    
    __
    
    public mut prop colon: Token
    
功能：获取或设置 [TypeNode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typenode) 节点中的操作符 ":"，可能为 [ILLEGAL](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_enums.html#illegal) 的词法单元。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 ":" 操作符时，抛出异常。

## class TypePattern
    
    __
    
    public class TypePattern <: Pattern {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示类型模式节点。

用于判断一个值的运行时类型是否是某个类型的子类型，如 `case b: Base => 0` 中的 `b: Base`。

父类型：

  * Pattern

### prop colon
    
    __
    
    public mut prop colon: Token
    
功能：获取或设置 [TypePattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typepattern) 节点中的 ":" 操作符的词法单元节点。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 ":" 操作符时，抛出异常。

### prop pattern
    
    __
    
    public mut prop pattern: Pattern
    
功能：获取或设置 [TypePattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typepattern) 节点中的模式节点。

类型：[Pattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-pattern)

### prop patternType
    
    __
    
    public mut prop patternType: TypeNode
    
功能：获取或设置 [TypePattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typepattern) 节点中的待匹配的模式类型节点。

类型：[TypeNode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typenode)

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [TypePattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typepattern) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [TypePattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typepattern) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [TypePattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typepattern) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [TypePattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typepattern) 节点时，抛出异常。

## class UnaryExpr
    
    __
    
    public class UnaryExpr <: Expr {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示一个一元操作表达式节点。

父类型：

  * Expr

### prop expr
    
    __
    
    public mut prop expr: Expr
    
功能：获取或设置 [UnaryExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-unaryexpr) 节点中的操作数。

类型：[Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr)

### prop op
    
    __
    
    public mut prop op: Token
    
功能：获取或设置 [UnaryExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-unaryexpr) 节点中的一元操作符。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [UnaryExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-unaryexpr) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [UnaryExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-unaryexpr) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [UnaryExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-unaryexpr) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [UnaryExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-unaryexpr) 节点时，抛出异常。

## class VArrayExpr
    
    __
    
    public class VArrayExpr <: Expr {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示 `VArray` 的实例节点。

一个 [VArrayExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-varrayexpr) 节点：`let arr: VArray<Int64, $5> = VArray<Int64, $5>({ i => i })` 中的 `VArray<Int64, $5>({ i => i })`。

父类型：

  * Expr

### prop arguments
    
    __
    
    public mut prop arguments: ArrayList\<Argument\>
    
功能：获取或设置 [VArrayExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-varrayexpr) 中的中的初始化参数序列。

类型：[ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)<[Argument](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-argument)>

### prop lParen
    
    __
    
    public mut prop lParen: Token
    
功能：获取或设置 [VArrayExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-varrayexpr) 中的 "\("。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\(" 时，抛出异常。

### prop rParen
    
    __
    
    public mut prop rParen: Token
    
功能：获取或设置 [VArrayExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-varrayexpr) 中的 "\)"。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\)" 时，抛出异常。

### prop vArrayType
    
    __
    
    public mut prop vArrayType: VArrayType
    
功能：获取或设置 [VArrayExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-varrayexpr) 的 VArray 类型节点。

类型：[VArrayType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-varraytype)

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [VArrayExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-varrayexpr) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [VArrayExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-varrayexpr) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [VArrayExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-varrayexpr) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [VArrayExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-varrayexpr) 节点时，抛出异常。

## class VArrayType
    
    __
    
    public class VArrayType <: TypeNode {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示 `VArray` 类型节点。

使用泛型 `VArray<T, size: Int64>` 表示 `VArray` 类型。

父类型：

  * TypeNode

### prop dollar
    
    __
    
    public mut prop dollar: Token
    
功能：获取或设置 [VArrayType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-varraytype) 节点中的操作符 `$` 的词法单元。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 `$` 词法单元时，抛出异常。

### prop elementTy
    
    __
    
    public mut prop elementTy: TypeNode
    
功能：获取或设置 [VArrayType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-varraytype) 节点中的类型变元节点，如 `VArray<Int16, $0>` 中的 [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16)。

类型：[TypeNode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typenode)

### prop keyword
    
    __
    
    public mut prop keyword: Token
    
功能：获取或设置 [VArrayType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-varraytype) 节点的关键字 `VArray` 的词法单元。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

### prop lAngle
    
    __
    
    public mut prop lAngle: Token
    
功能：获取或设置 [VArrayType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-varraytype) 节点左尖括号的词法单元。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是左尖括号时，抛出异常。

### prop rAngle
    
    __
    
    public mut prop rAngle: Token
    
功能：获取或设置 [VArrayType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-varraytype) 节点右尖括号的词法单元。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是右尖括号时，抛出异常。

### prop size
    
    __
    
    public mut prop size: Token
    
功能：获取或设置 [VArrayType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-varraytype) 节点中类型长度的词法单元。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [VArrayType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-varraytype) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [VArrayType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-varraytype) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [VArrayType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-varraytype) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [VArrayType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-varraytype) 节点时，抛出异常。

## class VarDecl
    
    __
    
    public class VarDecl <: Decl {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示变量定义节点。

一个 [VarDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-vardecl) 节点: `var a: String`，`var b: Int64 = 1`。

> **说明：**
> 
> 变量的定义主要包括如下几个部分：修饰符、关键字、patternsMaybeIrrefutable、变量类型和变量初始值。

父类型：

  * Decl

### prop assign
    
    __
    
    public mut prop assign: Token
    
功能：获取或设置 [VarDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-vardecl) 节点中的赋值操作符的位置信息。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是赋值操作符时，抛出异常。

### prop colon
    
    __
    
    public mut prop colon: Token
    
功能：获取或设置 [VarDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-vardecl) 节点中的冒号位置信息。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是冒号时，抛出异常。

### prop declType
    
    __
    
    public mut prop declType: TypeNode
    
功能：获取或设置 [VarDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-vardecl) 节点的变量类型。

类型：[TypeNode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typenode)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当 [VarDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-vardecl) 节点没有声明变量类型时，抛出异常。

### prop expr
    
    __
    
    public mut prop expr: Expr
    
功能：获取或设置 [VarDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-vardecl) 节点的变量初始化节点。

类型：[Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当 [VarDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-vardecl) 节点没有对变量进行初始化时，抛出异常。

### prop pattern
    
    __
    
    public mut prop pattern: Pattern
    
功能：获取或设置 [VarDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-vardecl) 节点的 pattern 节点。

类型：[Pattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-pattern)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当 [VarDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-vardecl) 节点没有声明 pattern 节点时，抛出异常。

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [VarDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-vardecl) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [VarDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-vardecl) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [VarDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-vardecl) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [VarDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-vardecl) 节点时，抛出异常。

### func isConst\(\)
    
    __
    
    public func isConst(): Bool
    
功能：判断是否是一个 `Const` 类型的节点。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 是一个 `Const` 类型的节点返回 true；反之，返回 false。

## class VarOrEnumPattern
    
    __
    
    public class VarOrEnumPattern <: Pattern {
        public init()
        public init(identifier: Token)
    }
    
功能：表示当模式的标识符为 `Enum` 构造器时的节点。

例如 `case RED` 中的 `RED` 为 `Enum` 构造器。

父类型：

  * Pattern

### prop identifier
    
    __
    
    public mut prop identifier: Token
    
功能：获取或设置 [VarOrEnumPattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-varorenumpattern) 节点中的标识符的词法单元。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [VarOrEnumPattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-varorenumpattern) 对象。

### init\(Tokens\)
    
    __
    
    public init(identifier: Token)
    
功能：构造一个 [VarOrEnumPattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-varorenumpattern) 对象。

参数：

  * identifier: [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) \- 将要构造 [VarOrEnumPattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-varorenumpattern) 类型的词法单元。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [VarOrEnumPattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-varorenumpattern) 节点时，抛出异常。

## class VarPattern
    
    __
    
    public class VarPattern <: Pattern {
        public init()
        public init(identifier: Token)
    }
    
功能：表示绑定模式节点。

使用一个合法的标识符表示，如 `for (i in 1..10)` 中的 `i`。

父类型：

  * Pattern

### prop identifier
    
    __
    
    public mut prop identifier: Token
    
功能：获取或设置 [VarPattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-varpattern) 节点中的标识符符的词法单元。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [VarPattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-varpattern) 对象。

### init\(Tokens\)
    
    __
    
    public init(identifier: Token)
    
功能：构造一个 [VarPattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-varpattern) 对象。

参数：

  * identifier: [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) \- 将要构造 [VarPattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-varpattern) 类型的词法单元。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [VarPattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-varpattern) 节点时，抛出异常。

## class Visitor
    
    __
    
    public abstract class Visitor
    
功能：一个抽象类，其内部默认定义了访问不同类型 AST 节点访问（`visit`）函数。

> **说明：**
> 
>   * `visit` 函数搭配 `traverse` 一起使用，可实现对节点的访问和修改, 所有 `visit` 函数都有默认为空的实现，可以按需实现需要的 `visit` 方法。
>   * 该类需要被继承使用，并允许子类重新定义访问函数。
> 

### func breakTraverse\(\)
    
    __
    
    public func breakTraverse(): Unit
    
功能：用于重写 `visit` 函数中，通过调用该函数来终止继续遍历子节点的行为。

## class WhileExpr
    
    __
    
    public class WhileExpr <: Expr {
        public init()
        public init(inputs: Tokens)
    }
    
功能：表示 `while` 表达式。

`while` 是关键字，`while` 之后是一个小括号，小括号内可以是一个表达式或者一个 `let` 声明的解构匹配，接着是一个 [Block](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-block) 节点。

父类型：

  * Expr

### prop block
    
    __
    
    public mut prop block: Block
    
功能：获取或设置 [WhileExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-whileexpr) 中的块节点。

类型：[Block](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-block)

### prop condition
    
    __
    
    public mut prop condition: Expr
    
功能：获取或设置关键字 [WhileExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-whileexpr) 中的条件表达式。

类型：[Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr)

### prop keyword
    
    __
    
    public mut prop keyword: Token
    
功能：获取或设置 [WhileExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-whileexpr) 节点中 `while` 关键字。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 `while` 关键字时，抛出异常。

### prop lParen
    
    __
    
    public mut prop lParen: Token
    
功能：获取或设置 [WhileExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-whileexpr) 中 `while` 关键字之后的 "\("。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\(" 时，抛出异常。

### prop rParen
    
    __
    
    public mut prop rParen: Token
    
功能：获取或设置 [WhileExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-whileexpr) 中 `while` 关键字之后的 "\)"。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\)" 时，抛出异常。

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [WhileExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-whileexpr) 对象。

### init\(Tokens\)
    
    __
    
    public init(inputs: Tokens)
    
功能：构造一个 [WhileExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-whileexpr) 对象。

参数：

  * inputs: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [WhileExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-whileexpr) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [WhileExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-whileexpr) 节点时，抛出异常。

## class WildcardExpr
    
    __
    
    public class WildcardExpr <: Expr {
        public init()
        public init(keyword: Tokens)
    }
    
功能：表示通配符表达式节点。

父类型：

  * Expr

### prop keyword
    
    __
    
    public mut prop keyword: Token
    
功能：获取 [WildcardExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-wildcardexpr) 的 "\_" 关键字。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\_" 关键字时，抛出异常。

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [WildcardExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-wildcardexpr) 对象。

### init\(Tokens\)
    
    __
    
    public init(keyword: Tokens)
    
功能：构造一个 [WildcardExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-wildcardexpr) 对象。

参数：

  * keyword: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [WildcardExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-wildcardexpr) 类型的词法单元集合 \([Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)\)。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [WildcardExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-wildcardexpr) 节点时，抛出异常。

## class WildcardPattern
    
    __
    
    public class WildcardPattern <: Pattern {
        public init()
        public init(keyword: Tokens)
    }
    
功能：表示通配符模式节点。

使用下划线 "\_" 表示，可以匹配任意值。

父类型：

  * Pattern

### prop wildcard
    
    __
    
    public mut prop wildcard: Token
    
功能：获取或设置 [WildcardPattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-wildcardpattern) 节点中的 "\_" 操作符的词法单元。

类型：[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当设置的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 不是 "\_" 操作符时，抛出异常。

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [WildcardPattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-wildcardpattern) 对象。

### init\(Tokens\)
    
    __
    
    public init(keyword: Tokens)
    
功能：构造一个 [WildcardPattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-wildcardpattern) 对象。

参数：

  * keyword: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 将要构造 [WildcardPattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-wildcardpattern) 类型的词法单元集合（[Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)）。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [WildcardPattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-wildcardpattern) 节点时，抛出异常。