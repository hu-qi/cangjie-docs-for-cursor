
# 函数

## func assertParentContext\(String\)
    
    __
    
    public func assertParentContext(parentMacroName: String): Unit
    
功能：检查当前宏调用是否在特定的宏调用内。若检查不符合预期，编译器出现一个错误提示。

> **注意：**
> 
> 该函数只能作为函数被直接调用，不能作为赋值给变量，不能作为实参或返回值使用。

参数：

  * parentMacroName: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 待检查的外层宏调用的名字。

## func cangjieLex\(String\)
    
    __
    
    public func cangjieLex(code: String): Tokens
    
功能：将字符串转换为 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 对象。

参数：

  * code: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 待词法解析的字符串。

返回值：

  * [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 词法解析得到的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)。

异常：

  * [IllegalMemoryException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalmemoryexception) \- 当申请内存失败时，抛出异常。
  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当输入的 code 无法被正确的解析为 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 时，抛出异常。

## func cangjieLex\(String, Bool\)
    
    __
    
    public func cangjieLex(code: String, truncated: Bool): Tokens
    
功能：将字符串转换为 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 对象。

参数：

  * code: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 待词法解析的字符串。
  * truncated: [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 是否删减解析后 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 中的 Token\([END](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_enums.html#end)\)。

返回值：

  * [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 词法解析得到的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)。

异常：

  * [IllegalMemoryException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalmemoryexception) \- 当申请内存失败，抛出异常时，抛出异常。
  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当输入的 code 无法被正确的解析为 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 时，抛出异常。

## func compareTokens\(Tokens, Tokens\)
    
    __
    
    public func compareTokens(tokens1: Tokens, tokens2: Tokens): Bool
    
功能：用于比较两个[Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)是否一致。

参数：

  * tokens1: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 需要比较的第一个 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)。
  * tokens2: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 需要比较的第二个 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果两个 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 内容相同（除了换行符、结束符和位置信息）则返回 `true`。

## func diagReport\(DiagReportLevel, Tokens, String, String\)
    
    __
    
    public func diagReport(level: DiagReportLevel, tokens: Tokens, message: String, hint: String): Unit
    
功能：报错接口，在编译过程的宏展开阶段输出错误提示信息，支持 `WARNING` 和 `ERROR` 两个等级的报错。

> **注意：**
> 
>   * 该接口在 错误等级为 `ERROR` 时会终止编译过程，但不会终止宏展开过程，建议用户调用接口后直接 return 或者抛出异常来终止宏展开过程。
>   * 该接口会按照 cjc 标准报错的接口，将传入的 tokens 所在行的代码列出，并对 tokens 的内容用波浪线进行标注， message 信息将展示在首行， hint 信息将紧跟波浪线进行展示。
>   * 报错引用的源码内容目前仅依据第一个 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 的开始位置和最后一个 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 的结束位置确定，不校验中间 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 位置信息的一致性。
>   * 该接口在非宏展开过程中调用无效，参见[示例代码](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_samples/report.html#%E9%9D%9E%E5%AE%8F%E5%B1%95%E5%BC%80%E8%BF%87%E7%A8%8B%E4%B8%AD%E8%B0%83%E7%94%A8%E7%A4%BA%E4%BE%8B)。
> 

参数：

  * level: [DiagReportLevel](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_enums.html#enum-diagreportlevel) \- 报错信息等级。
  * tokens: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 报错信息中所引用源码内容对应的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)。
  * message: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 报错的主信息。
  * hint: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 辅助提示信息。

异常：

  * [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 存在以下错误时，抛出异常。

    * 输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 为空；
    * 输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 中的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 来自于不同的源文件；
    * 输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 中首位 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 位置早于末位 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 位置；
    * 输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 中的 [Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token) 位置范围超出了宏调用的位置范围。

## func getChildMessages\(String\)
    
    __
    
    public func getChildMessages(children:String): ArrayList\<MacroMessage\>
    
功能：获取特定内层宏发送的信息。

> **注意：**
> 
> 该函数只能作为函数被直接调用，不能作为赋值给变量，不能作为实参或返回值使用。

参数：

  * children: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 待接收信息的内层宏名称。

返回值：

  * [ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)<[MacroMessage](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macromessage)> \- 返回一组 [MacroMessage](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macromessage) 的对象。

## func getTokenKind\(UInt16\)
    
    __
    
    public func getTokenKind(no: UInt16): TokenKind
    
功能：将词法单元种类序号转化为 [TokenKind](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_enums.html#enum-tokenkind)。

参数：

  * no: [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 需要转换的序号。

返回值：

  * [TokenKind](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_enums.html#enum-tokenkind) \- 词法单元种类序号对应的 [TokenKind](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_enums.html#enum-tokenkind)。

> **注意：**
> 
> 当前 [SINGLE\_QUOTED\_STRING\_LITERAL](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_enums.html#SINGLE_QUOTED_STRING_LITERAL) 和 [STRING\_LITERAL](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_enums.html#STRING_LITERAL) 共用序号 147，输入序号 147 只能获得 [STRING\_LITERAL](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_enums.html#STRING_LITERAL)，其他 [TokenKind](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_enums.html#enum-tokenkind) 无共用序号情况。

## func insideParentContext\(String\)
    
    __
    
    public func insideParentContext(parentMacroName: String): Bool
    
功能：检查当前宏调用是否在特定的宏调用内，返回一个布尔值。

> **注意：**
> 
>   * 在嵌套宏场景下，内层宏也可以通过发送键/值对的方式与外层宏通信。当内层宏执行时，通过调用标准库函数 [setItem](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_funcs.html#func-setitemstring-bool) 向外层宏发送信息；随后，当外层宏执行时，调用标准库函数 [getChildMessages](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_funcs.html#func-getchildmessagesstring) 接收每一个内层宏发送的信息（一组键/值对映射）。
>   * 该函数只能作为函数被直接调用，不能作为赋值给变量，不能作为实参或返回值使用。
> 

参数：

  * parentMacroName: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 待检查的外层宏调用的名字。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 若当前宏嵌套在特定的宏调用内，返回 true。

## func parseDecl\(Tokens, String\)
    
    __
    
    public func parseDecl(input: Tokens, astKind!: String = ""): Decl
    
功能：用于解析一组词法单元，获取一个 [Decl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-decl) 类型的节点。

> **注意：**
> 
> 该函数不支持解析 [FuncParam](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-funcparam) 类型。

参数：

  * input: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 待解析源码的词法单元。
  * astKind\!: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 用于指定解析特定的节点类型，有效支持的值为：`PrimaryCtorDecl` 和 `PropMemberDecl`。 
    * `PrimaryCtorDecl`: 解析主构造函数。
    * `PropMemberDecl`: 解析prop声明的getter和setter函数。

返回值：

  * [Decl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-decl) \- 一个 [Decl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-decl) 类型的节点。

异常：

  * [ParseASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-parseastexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [Decl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-decl) 节点时，抛出异常，异常中包含报错提示信息。

示例：

  1. 以下代码展示 `astKind` 设为 `PropMemberDecl` 的案例。在这个参数下，可以使用 `parseDecl` 解析 `prop` 的getter和setter函数，解析结果为 `FuncDecl` 类型（如果不设置`astKind`，则会因为没有 `func` 关键字而无法解析）。
    
        __
    
    import std.ast.*
    
    main() {
        let getter = quote( get() { _val } )
        let setter = quote( set(v) { _val = v })
        let getterDecl = parseDecl(getter, astKind: "PropMemberDecl")
        let setterDecl = parseDecl(setter, astKind: "PropMemberDecl")
        println((getterDecl as FuncDecl).getOrThrow().block.toTokens())
        println((setterDecl as FuncDecl).getOrThrow().block.toTokens())
    }
    
运行结果：
    
        __
    
    {
        _val
    }
    
    {
        _val = v
    }

  2. 以下代码展示 `astKind` 设为 `PrimaryCtorDecl` 的案例。在这个参数下，可以使用 `parseDecl` 解析主构造函数节点，解析结果为 `PrimaryCtorDecl` 类型（如果不设置 `astKind`，则会因为没有 `func` 关键字而无法解析）。
    
        __
    
    import std.ast.*
    
    main() {
        let ctor = quote(
            Point(var x: Int32, var y: Int32) {}
        )
        let ctorDecl = parseDecl(ctor, astKind: "PrimaryCtorDecl")
        println(ctorDecl is PrimaryCtorDecl)
        println(ctorDecl.toTokens())
    }
    
运行结果：
    
        __
    
    true
    Point(var x: Int32, var y: Int32) {
    }

## func parseDeclFragment\(Tokens, Int64\)
    
    __
    
    public func parseDeclFragment(input: Tokens, startFrom !: Int64 = 0): (Decl, Int64)
    
功能：用于解析一组词法单元，获取一个 [Decl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-decl) 类型的节点和继续解析节点的索引。

> **注意：**
> 
> 该函数不支持解析 [FuncParam](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-funcparam)、 [PropDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-propdecl)、[PrimaryCtorDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-primaryctordecl) 类型。

参数：

  * input: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 待解析源码的词法单元。
  * startFrom\!: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 起始位置。

返回值：

  * \([Decl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-decl), [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)\) - 语法树节点，继续解析的位置。

异常：

  * [ParseASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-parseastexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [Decl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-decl) 节点时，抛出异常，异常中包含报错提示信息。

## func parseExpr\(Tokens\)
    
    __
    
    public func parseExpr(input: Tokens): Expr
    
功能：用于解析一组词法单元，获取一个 [Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr) 类型的节点。

参数：

  * input: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 待解析源码的词法单元。

返回值：

  * [Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr) \- 一个 [Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr) 类型的节点。

异常：

  * [ParseASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-parseastexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr) 节点时，抛出异常，异常中包含报错提示信息。

## func parseExprFragment\(Tokens, Int64\)
    
    __
    
    public func parseExprFragment(input: Tokens, startFrom !: Int64 = 0): (Expr, Int64)
    
功能：用于解析一组词法单元，获取一个 [Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr) 类型的节点和继续解析节点的索引。

参数：

  * input: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 待解析源码的词法单元。
  * startFrom\!: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 起始位置。

返回值：

  * \([Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr), [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)\) - 语法树节点，继续解析的位置。

异常：

  * [ParseASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-parseastexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr) 节点时，抛出异常，异常中包含报错提示信息。

## func parsePattern\(Tokens\)
    
    __
    
    public func parsePattern(input: Tokens): Pattern
    
功能：用于解析一组词法单元，获取一个 [Pattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-pattern) 类型的节点。

参数：

  * input: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 待解析源码的词法单元。

返回值：

  * [Pattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-pattern) \- 一个 [Pattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-pattern) 类型的节点。

异常：

  * [ParseASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-parseastexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [Pattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-pattern) 节点时，抛出异常，异常中包含报错提示信息。

## func parsePatternFragment\(Tokens, Int64\)
    
    __
    
    public func parsePatternFragment(input: Tokens, startFrom !: Int64 = 0): (Pattern, Int64)
    
功能：用于解析一组词法单元，获取一个 [Pattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-pattern) 类型的节点和继续解析节点的索引。

参数：

  * input: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 待解析源码的词法单元。
  * startFrom\!: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 起始位置。

返回值：

  * \([Pattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-pattern), [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)\) - 语法树节点，继续解析的位置。

异常：

  * [ParseASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-parseastexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [Pattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-pattern) 节点时，抛出异常，异常中包含报错提示信息。

## func parseProgram\(Tokens\)
    
    __
    
    public func parseProgram(input: Tokens): Program
    
功能：用于解析单个仓颉文件的源码，获取一个 [Program](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-program) 类型的节点。

参数：

  * input: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 待解析源码的词法单元。

返回值：

  * [Program](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-program) \- 一个 [Program](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-program) 类型的节点。

异常：

  * [ParseASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-parseastexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [Program](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-program) 节点时，抛出异常，异常中包含报错提示信息。

## func parseType\(Tokens\)
    
    __
    
    public func parseType(input: Tokens): TypeNode
    
功能：用于解析一组词法单元，获取一个 [TypeNode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typenode) 类型的节点。

参数：

  * input: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 待解析源码的词法单元。

返回值：

  * [TypeNode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typenode) \- 一个 [TypeNode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typenode) 类型的节点。

异常：

  * [ParseASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-parseastexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [TypeNode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typenode) 节点时，抛出异常。

## func parseTypeFragment\(Tokens, Int64\)
    
    __
    
    public func parseTypeFragment(input: Tokens, startFrom !: Int64 = 0): (TypeNode, Int64)
    
功能：用于解析一组词法单元，获取一个 [TypeNode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typenode) 类型的节点和继续解析节点的索引。

参数：

  * input: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 待解析源码的词法单元。
  * startFrom\!: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 起始位置。

返回值：

  * \([TypeNode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typenode), [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)\) - 语法树节点，继续解析的位置。

异常：

  * [ParseASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-parseastexception) \- 当输入的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型无法构造为 [TypeNode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typenode) 节点时，抛出异常。

## func setItem\(String, Bool\)
    
    __
    
    public func setItem(key: String, value: Bool): Unit
    
功能：内层宏通过该接口发送 [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) 类型的信息到外层宏。

> **注意：**
> 
> 该函数只能作为函数被直接调用，不能作为赋值给变量，不能作为实参或返回值使用。

参数：

  * key: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 发送的关键字，用于检索信息。
  * value: [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 要发送的 [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) 类型的信息。

## func setItem\(String, Int64\)
    
    __
    
    public func setItem(key: String, value: Int64): Unit
    
功能：内层宏通过该接口发送 [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) 类型的信息到外层宏。

> **注意：**
> 
> 该函数只能作为函数被直接调用，不能作为赋值给变量，不能作为实参或返回值使用。

参数：

  * key: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 发送的关键字，用于检索信息。
  * value: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 要发送的 [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) 类型的信息。

## func setItem\(String, String\)
    
    __
    
    public func setItem(key: String, value: String): Unit
    
功能：内层宏通过该接口发送 [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) 类型的信息到外层宏。

> **注意：**
> 
> 该函数只能作为函数被直接调用，不能作为赋值给变量，不能作为实参或返回值使用。

参数：

  * key: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 发送的关键字，用于检索信息。
  * value: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 要发送的 [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) 类型的信息。

## func setItem\(String, Tokens\)
    
    __
    
    public func setItem(key: String, value: Tokens): Unit
    
功能：内层宏通过该接口发送 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型的信息到外层宏。

> **注意：**
> 
> 该函数只能作为函数被直接调用，不能作为赋值给变量，不能作为实参或返回值使用。

参数：

  * key: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 发送的关键字，用于检索信息。
  * value: [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) \- 要发送的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 类型的信息。