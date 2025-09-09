
# 自定义访问函数遍历 AST 对象示例

定义访问变量声明节点的行为：继承 [Visitor](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-visitor) 并重写访问函数，找到未定义变量，将其变量词法单元存起来。
    
    __
    
    import std.ast.*
    
    class MyVisitor <: Visitor {
        public var uninitializedVars = Tokens() // 存储变量词法单元
        override public func visit(varDecl: VarDecl) {
            try {
                varDecl.expr
            } catch (e: ASTException) {
                uninitializedVars.append(varDecl.identifier)
            }
            breakTraverse() // 不会继续遍历 varDecl 的子节点
            return
        }
    }
    
    main(): Int64 {
        let input = quote(
            var a : Int64
        )
        let varDecl = parseDecl(input)
        let visitor = MyVisitor() // MyVisitor中定义了对 varDecl 节点的处理
        varDecl.traverse(visitor) // 实现对 varDecl 节点的处理
        println("Uninitialized VarDecl size is ${visitor.uninitializedVars.size}")
        0
    }
    
运行结果：
    
    __
    
    Uninitialized VarDecl size is 1