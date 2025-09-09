
# 异常类

## class ASTException
    
    __
    
    public class ASTException <: Exception {
        public init()
        public init(message: String)
    }
    
功能：ast 库的异常类，在 ast 库调用过程中发生异常时使用。

父类型：

  * [Exception](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-exception)

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) 对象。

### init\(String\)
    
    __
    
    public init(message: String)
    
功能：根据异常信息构造一个 [ASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-astexception) 对象。

参数：

  * message: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 异常信息。

## class MacroContextException
    
    __
    
    public class MacroContextException <: Exception {
        public init()
        public init(message: String)
    }
    
功能：ast库的上下文宏异常类，在上下文宏的相关接口中发生异常时使用。

父类型：

  * [Exception](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-exception)

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [MacroContextException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-macrocontextexception) 对象。

### init\(String\)
    
    __
    
    public init(message: String)
    
功能：根据异常信息构造一个 [MacroContextException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-macrocontextexception) 对象。

参数：

  * message: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 异常信息。

## class ParseASTException
    
    __
    
    public class ParseASTException <: Exception {
        public init()
        public init(message: String)
    }
    
功能：ast 库的解析异常类，在节点解析过程中发生异常时使用。

父类型：

  * [Exception](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-exception)

### init\(\)
    
    __
    
    public init()
    
功能：构造一个默认的 [ParseASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-parseastexception) 对象。

### init\(String\)
    
    __
    
    public init(message: String)
    
功能：根据异常信息构造一个 [ParseASTException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions.html#class-parseastexception) 对象。

参数：

  * message: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 异常信息。