
# std.ast

## 功能介绍

ast 包主要包含了仓颉源码的语法解析器和仓颉语法树节点，提供语法解析函数。可将仓颉源码的词法单元（[Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)）解析为抽象语法树（Abstract Syntax Tree）节点对象。

仓颉 ast 包提供了 `Macro With Context` 的相关函数，用于在宏展开时获取展开过程中的上下文相关信息。在嵌套宏场景下，内层宏可以调用库函数 [assertParentContext\(String\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_funcs.html#func-assertparentcontextstring) 来保证内层宏调用一定嵌套在特定的外层宏调用中。如果内层宏调用这个函数时没有嵌套在给定的外层宏调用中，该函数将抛出一个错误。同时，函数 [insideParentContext\(String\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_funcs.html#func-insideparentcontextstring) 也用于检查内层宏调用是否嵌套在特定的外层宏调用中，但是返回一个布尔值。`Macro With Context` 的相关函数只能作为函数被直接调用，不能赋值给变量，不能作为实参或返回值使用。

`Macro With Context` 相关函数如下：

  * [assertParentContext\(String\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_funcs.html#func-assertparentcontextstring)
  * [getChildMessages\(String\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_funcs.html#func-getchildmessagesstring)
  * [insideParentContext\(String\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_funcs.html#func-insideparentcontextstring)
  * [setItem\(String, Bool\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_funcs.html#func-setitemstring-bool)
  * [setItem\(String, Int64\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_funcs.html#func-setitemstring-int64)
  * [setItem\(String, String\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_funcs.html#func-setitemstring-string)
  * [setItem\(String, Tokens\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_funcs.html#func-setitemstring-tokens)

## API 列表

### 函数

函数名| 功能  
---|---  
[assertParentContext\(String\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_funcs.html#func-assertparentcontextstring) | 检查当前宏调用是否在特定的宏调用内。若检查不符合预期，编译器出现一个错误提示。  
[cangjieLex\(String\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_funcs.html#func-cangjielexstring) | 将字符串转换为 `Tokens` 类型。  
[cangjieLex\(String, Bool\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_funcs.html#func-cangjielexstring-bool) | 将字符串转换为 `Tokens` 类型。  
[compareTokens\(Tokens, Tokens\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_funcs.html#func-comparetokenstokens-tokens) | 用于比较两个 `Tokens` 是否一致。  
[diagReport\(DiagReportLevel, Tokens, String, String\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_funcs.html#func-diagreportdiagreportlevel-tokens-string-string) | 报错接口，在编译过程的宏展开阶段输出错误提示信息，支持 `WARNING` 和 `ERROR` 两个等级的报错。  
[getChildMessages\(String\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_funcs.html#func-getchildmessagesstring) | 获取特定内层宏发送的信息。  
[getTokenKind\(UInt16\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_funcs.html#func-gettokenkinduint16) | 将词法单元种类序号转化为 `TokenKind`。  
[insideParentContext\(String\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_funcs.html#func-insideparentcontextstring) | 检查当前宏调用是否在特定的宏调用内，返回一个布尔值。  
[parseDecl\(Tokens, String\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_funcs.html#func-parsedecltokens-string) | 用于解析一组词法单元，获取一个 `Decl` 类型的节点。  
[parseDeclFragment\(Tokens, Int64\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_funcs.html#func-parsedeclfragmenttokens-int64) | 用于解析一组词法单元，获取一个 `Decl` 类型的节点和继续解析节点的索引。  
[parseExpr\(Tokens\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_funcs.html#func-parseexprtokens) | 用于解析一组词法单元，获取一个 `Expr` 类型的节点。  
[parseExprFragment\(Tokens, Int64\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_funcs.html#func-parseexprfragmenttokens-int64) | 用于解析一组词法单元，获取一个 `Expr` 类型的节点和继续解析节点的索引。  
[parsePattern\(Tokens\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_funcs.html#func-parsepatterntokens) | 用于解析一组词法单元，获取一个 `Pattern` 类型的节点。  
[parsePatternFragment\(Tokens, Int64\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_funcs.html#func-parsepatternfragmenttokens-int64) | 用于解析一组词法单元，获取一个 `Pattern` 类型的节点和继续解析节点的索引。  
[parseProgram\(Tokens\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_funcs.html#func-parseprogramtokens) | 用于解析单个仓颉文件的源码，获取一个 `Program` 类型的节点。  
[parseType\(Tokens\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_funcs.html#func-parsetypetokens) | 用于解析一组词法单元，获取一个 `TypeNode` 类型的节点。  
[parseTypeFragment\(Tokens, Int64\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_funcs.html#func-parsetypefragmenttokens-int64) | 用于解析一组词法单元，获取一个 `TypeNode` 类型的节点和继续解析节点的索引。  
[setItem\(String, Bool\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_funcs.html#func-setitemstring-bool) | 内层宏通过该接口发送 `Bool` 类型的信息到外层宏。  
[setItem\(String, Int64\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_funcs.html#func-setitemstring-int64) | 内层宏通过该接口发送 `Int64` 类型的信息到外层宏。  
[setItem\(String, String\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_funcs.html#func-setitemstring-string) | 内层宏通过该接口发送 `String` 类型的信息到外层宏。  
[setItem\(String, Tokens\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_funcs.html#func-setitemstring-tokens) | 内层宏通过该接口发送 `Tokens` 类型的信息到外层宏。  
  
### 接口

接口名| 功能  
---|---  
[ToBytes](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_interfaces.html#interface-tobytes)| 提供对应类型的序列化功能。  
[ToTokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_interfaces.html#interface-totokens)| 实现对应类型的实例到 `Tokens` 类型转换的接口，作为支持 quote 插值操作必须实现的接口。  
  
### 类

类名| 功能  
---|---  
[Annotation](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-annotation)| 表示编译器内置的注解节点。  
[Argument](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-argument)| 表示函数调用的实参节点。  
[ArrayLiteral](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-arrayliteral)| 表示 `Array` 字面量节点。  
[AsExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-asexpr)| 表示一个类型检查表达式。  
[AssignExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-assignexpr)| 表示赋值表达式节点。  
[BinaryExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-binaryexpr)| 表示一个二元操作表达式节点。  
[Block](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-block)| 表示块节点。  
[Body](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-body)| 表示 Class 类型、 Struct 类型、 Interface 类型以及扩展中由 `{}` 和内部的一组声明节点组成的结构。  
[CallExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-callexpr)| 表示函数调用节点节点。  
[ClassDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-classdecl)| 类定义节点。  
[ConstPattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-constpattern)| 表示常量模式节点。  
[Constructor](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-constructor)| 表示 `enum` 类型中的 `Constructor` 节点。  
[Decl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-decl)| 所有声明节点的父类，继承自 `Node` 节点，提供了所有声明节点的通用接口。  
[DoWhileExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-dowhileexpr)| 表示 `do-while` 表达式。  
[EnumDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-enumdecl)| 表示一个 `Enum` 定义节点。  
[EnumPattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-enumpattern)| 表示 enum 模式节点。  
[ExceptTypePattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-excepttypepattern)| 表示一个用于异常模式状态下的节点。  
[Expr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-expr)| 所有表达式节点的父类，继承自 `Node` 节点。  
[ExtendDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-extenddecl)| 表示一个扩展定义节点。  
[ForInExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-forinexpr)| 表示 `for-in` 表达式。  
[FuncDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-funcdecl)| 表示一个函数定义节点。  
[FuncParam](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-funcparam)| 表示函数参数节点，包括非命名参数和命名参数。  
[FuncType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-functype)| 表示函数类型节点。  
[GenericConstraint](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-genericconstraint)| 表示一个泛型约束节点。  
[GenericParam](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-genericparam)| 表示一个类型形参节点。  
[IfExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-ifexpr)| 表示条件表达式。  
[ImportContent](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-importcontent)| 表示包导入节点中的导入项。  
[ImportList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-importlist)| 表示包导入节点。  
[IncOrDecExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-incordecexpr)| 表示包含自增操作符（`++`）或自减操作符（`--`）的表达式。  
[InterfaceDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-interfacedecl)| 表示接口定义节点。  
[IsExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-isexpr)| 表示一个类型检查表达式。  
[JumpExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-jumpexpr)| 表示循环表达式的循环体中的 `break` 和 `continue`。  
[LambdaExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-lambdaexpr)| 表示 `Lambda` 表达式，是一个匿名的函数。  
[LetPatternExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-letpatternexpr)| 表示 `let` 声明的解构匹配节点。  
[LitConstExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-litconstexpr)| 表示一个常量表达式节点。  
[MacroDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macrodecl)| 表示一个宏定义节点。  
[MacroExpandDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macroexpanddecl)| 表示宏调用节点。  
[MacroExpandExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macroexpandexpr)| 表示宏调用节点。  
[MacroExpandParam](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macroexpandparam)| 表示宏调用节点。  
[MacroMessage](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-macromessage)| 记录内层宏发送的信息。  
[MainDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-maindecl)| 表示一个 `main` 函数定义节点。  
[MatchCase](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-matchcase)| 表示 `match` 表达式中的一个 `case` 节点。  
[MatchExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-matchexpr)| 表示模式匹配表达式实现模式匹配。  
[MemberAccess](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-memberaccess)| 表示成员访问表达式。  
[Modifier](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-modifier)| 表示该定义具备某些特性，通常放在定义处的最前端。  
[Node](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-node)| 所有仓颉语法树节点的父类。  
[OptionalExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-optionalexpr)| 表示一个带有问号操作符的表达式节点。  
[PackageHeader](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-packageheader)| 表示包声明节点。  
[ParenExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-parenexpr)| 表示一个括号表达式节点，是指使用圆括号括起来的表达式。  
[ParenType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-parentype)| 表示括号类型节点。  
[Pattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-pattern)| 所有模式匹配节点的父类，继承自 `Node` 节点。  
[PrefixType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-prefixtype)| 表示带问号的前缀类型节点。  
[PrimaryCtorDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-primaryctordecl)| 表示一个主构造函数节点。  
[PrimitiveType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-primitivetype)| 表示一个基本类型节点。  
[PrimitiveTypeExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-primitivetypeexpr)| 表示基本类型表达式节点。  
[Program](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-program)| 表示一个仓颉源码文件节点。  
[PropDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-propdecl)| 表示一个属性定义节点。  
[QualifiedType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-qualifiedtype)| 表示一个用户自定义成员类型。  
[QuoteExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-quoteexpr)| 表示 `quote` 表达式节点。  
[QuoteToken](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-quotetoken)| 表示 `quote` 表达式节点内任意合法的 `token`。  
[RangeExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-rangeexpr)| 表示包含区间操作符的表达式。  
[RefExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-refexpr)| 表示一个使用自定义类型节点相关的表达式节点。  
[RefType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-reftype)| 表示一个用户自定义类型节点。  
[ReturnExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-returnexpr)| 表示 `return` 表达式节点。  
[SpawnExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-spawnexpr)| 表示 `Spawn` 表达式。  
[StructDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-structdecl)| 表示一个 `Struct` 节点。  
[SubscriptExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-subscriptexpr)| 表示索引访问表达式。  
[SynchronizedExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-synchronizedexpr)| 表示 `synchronized` 表达式。  
[ThisType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-thistype)| 表示 `This` 类型节点。  
[ThrowExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-throwexpr)| 表示 `throw` 表达式节点。  
[Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens)| 对 `Token` 序列进行封装的类型。  
[TokensIterator](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokensiterator)| 实现 `Tokens` 的迭代器功能。  
[TrailingClosureExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-trailingclosureexpr)| 表示尾随 `Lambda` 节点。  
[TryExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tryexpr)| 表示 `try` 表达式节点。  
[TupleLiteral](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tupleliteral)| 表示元组字面量节点。  
[TuplePattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tuplepattern)| 表示 Tuple 模式节点。  
[TupleType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tupletype)| 表示元组类型节点。  
[TypeAliasDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typealiasdecl)| 表示类型别名节点。  
[TypeConvExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typeconvexpr)| 表示类型转换表达式。  
[TypeNode](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typenode)| 所有类型节点的父类，继承自 `Node`。  
[TypePattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-typepattern)| 表示类型模式节点。  
[UnaryExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-unaryexpr)| 表示一个一元操作表达式节点。  
[VArrayExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-varrayexpr)| 表示 `VArray` 的实例节点。  
[VArrayType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-varraytype)| 表示 `VArray` 类型节点。  
[VarDecl](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-vardecl)| 表示变量定义节点。  
[VarOrEnumPattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-varorenumpattern)| 表示当模式的标识符为 `Enum` 构造器时的节点。  
[VarPattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-varpattern)| 表示绑定模式节点。  
[Visitor](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-visitor)| 一个抽象类，其内部默认定义了访问不同类型 AST 节点访问（`visit`）函数。  
[WhileExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-whileexpr)| 表示 `while` 表达式。  
[WildcardExpr](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-wildcardexpr)| 表示通配符表达式节点。  
[WildcardPattern](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-wildcardpattern)| 表示通配符模式节点。  
  
### 枚举

枚举名| 功能  
---|---  
[DiagReportLevel](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_enums.html#enum-diagreportlevel)| 表示报错接口的信息等级，支持 `ERROR` 和 `WARNING` 两种格式。  
[ImportKind](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_enums.html#enum-importkind)| 表示导入语句的类型，包括单导入、别名导入、全导入和多导入四种类型。  
[TokenKind](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_enums.html#enum-tokenkind)| 表示仓颉编译内部所有的词法结构，包括符号、关键字、标识符、换行等。  
  
### 结构体

结构体名| 功能  
---|---  
[Position](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-position)| 表示位置信息的数据结构，包含文件ID，行号和列号。  
[Token](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_structs.html#struct-token)| 词法单元类型。  
  
### 异常类

异常类名| 功能  
---|---  
[ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception)| ast 库的异常类，在 ast 库调用过程中发生异常时使用。  
[MacroContextException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-macrocontextexception)| ast 库的上下文宏异常类，在上下文宏的相关接口中发生异常时使用。  
[ParseASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-parseastexception)| ast 库的解析异常类，在节点解析过程中发生异常时使用。