
# 函数

## func parseParameterTypes\(String\)
    
    __
    
    public func parseParameterTypes(parameters: String): Array\<TypeInfo\>
    
功能：从字符串中解析出参数类型，并将其转换为类型数组，以便`getStaticFunction`等函数使用。

函数参数类型限定名称为函数类型的参数类型部分，不包含参数名、默认值，也不包含最外层的 `()`。 因此对于下面的一个仓颉函数：
    
    __
    
    import m1.p1.T1
    func f(a: Int64, b: T1, c!: Int64 = 0, d!: Int64 = 0): Int64 { ... }
    
其限定名称应该为`"Int64, p1.T1, Int64, Int64"`。对于无参函数的限定名称应该为 `""`。

参数：

  * parameters: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 函数参数类型限定名称。

返回值：

  * [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[TypeInfo](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_classes.html#class-typeinfo)> \- 字符串对应的参数类型信息。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 字符串格式错误，则会抛出异常。
  * [InfoNotFoundException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_exceptions.html#class-infonotfoundexception) \- 如果无法获得参数中的类型信息，则会抛出异常。

示例：
    
    __
    
    import std.reflect.*
    
    class A {
    }
    
    main(): Unit {
      println(parseParameterTypes("Int64, String, default.A"))
    }
    
运行结果：
    
    __
    
    [Int64, String, default.A]