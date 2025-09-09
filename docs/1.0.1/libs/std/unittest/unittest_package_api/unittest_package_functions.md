
# 函数

## func assertCaughtUnexpectedE\(String, String, String, Option\<AssertionCtx\>\)
    
    __
    
    public func assertCaughtUnexpectedE(
        message: String,
        expectedExceptions: String,
        caughtException: String,
        optParentCtx!: ?AssertionCtx = None
    ): Nothing
    
功能：捕获的异常不符合预期，记录信息，抛出异常。

参数：

  * message: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 不符合预期时的提示信息。
  * expectedExceptions: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 期望的捕获的异常。
  * caughtException: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 实际捕获的异常。
  * optParentCtx\!: [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)<[AssertionCtx](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest/unittest_package_api/unittest_package_classes.html#class-assertionctx)> \- 存储嵌套断言失败消息的上下文。

## func assertEqual\<T\>\(String, String, T, T, Option\<AssertionCtx\>\): Unit where T <: Equatable\<T\>
    
    __
    
    public func assertEqual\<T\>(
        leftStr: String,
        rightStr: String,
        expected: T,
        actual: T,
        optParentCtx!: ?AssertionCtx = None): Unit where T <: Equatable\<T\>
    
功能：比较 `expected` 和 `actual` 值是否相等。若不等，直接抛出异常。

参数：

  * leftStr: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 期望的表达式的字符串。
  * rightStr: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 实际的表达式的字符串。
  * expected: T - 期望的值。
  * actual: T - 实际值。
  * optParentCtx\!: [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)<[AssertionCtx](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest/unittest_package_api/unittest_package_classes.html#class-assertionctx)> \- 存储嵌套断言失败消息的上下文。

## func defaultConfiguration\(\)
    
    __
    
    public func defaultConfiguration(): Configuration
    
功能：生成默认的配置信息。

返回值：

  * [Configuration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_classes.html#class-configuration) \- 配置信息。

## func entryMain\(TestPackage\)
    
    __
    
    public func entryMain(testPackage: TestPackage): Int64
    
功能：提供给 `cjc --test` 使用，框架执行测试用例的入口函数。

参数：

  * testPackage: [TestPackage](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest/unittest_package_api/unittest_package_classes.html#class-testpackage) \- 测试包对象。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 执行结果。

## func expectCaughtUnexpectedE\(String, String, String, Option\<AssertionCtx\>\)
    
    __
    
    public func expectCaughtUnexpectedE(
        message: String,
        expectedExceptions: String,
        caughtException: String,
        optParentCtx!: ?AssertionCtx = None
    ): Unit
    
功能：捕获的异常不符合预期，记录信息，不抛出异常。

参数：

  * message: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 不符合预期时的提示信息。
  * expectedExceptions: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 期望的捕获的异常。
  * caughtException: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 实际捕获的异常。
  * optParentCtx\!: [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)<[AssertionCtx](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest/unittest_package_api/unittest_package_classes.html#class-assertionctx)> \- 存储嵌套断言失败消息的上下文。

## func expectEqual\<T\>\(String, String, T, T, Option\<AssertionCtx\>\): Unit where T <: Equatable\<T\>
    
    __
    
    public func expectEqual\<T\>(
        leftStr: String,
        rightStr: String,
        expected: T,
        actual: T,
        optParentCtx!: ?AssertionCtx
    ): Unit where T <: Equatable\<T\>
    
功能：比较 `expected` 和 `actual` 值是否相等。记录比较结果，不抛出异常。

参数：

  * leftStr: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 期望的表达式的字符串。
  * rightStr: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 实际的表达式的字符串。
  * expected: T - 期望的值。
  * actual: T - 实际值。
  * optParentCtx\!: [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)<[AssertionCtx](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest/unittest_package_api/unittest_package_classes.html#class-assertionctx)> \- 存储嵌套断言失败消息的上下文。

## func fail\(String\)
    
    __
    
    public func fail(message: String): Nothing
    
功能：使该用例失败，直接抛出异常。

参数：

  * message: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 失败信息。

## func failExpect\(String\)
    
    __
    
    public func failExpect(message: String): Unit
    
功能：使该用例失败，记录信息，不抛出异常。

参数：

  * message: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 失败信息。

## func invokeCustomAssert\<T\>\(Array\<String\>, String, \(AssertionCtx\) -> T, Option\<AssertionCtx\>\)
    
    __
    
    public func invokeCustomAssert\<T\>(
        passerdArgs: Array\<String\>,
        caller: String,
        assert: (AssertionCtx) -> T,
        optParentCtx!: ?AssertionCtx = None
    ): T
    
功能：运行在 [`@Test`](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_testmacro/unittest_testmacro_package_api/unittest_testmacro_package_macros.html#test-%E5%AE%8F), [`@TestCase`](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_testmacro/unittest_testmacro_package_api/unittest_testmacro_package_macros.html#testcase-%E5%AE%8F)，或 [`@CustomAssertion`](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_testmacro/unittest_testmacro_package_api/unittest_testmacro_package_macros.html#customassertion-%E5%AE%8F) 宏中使用的 [`@Assert\[caller\](passerArgs)`](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_testmacro/unittest_testmacro_package_api/unittest_testmacro_package_macros.html#assert-%E5%AE%8F) 指定的用户定义断言函数。

参数：

  * passedArgs: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)> \- 未处理的已传递参数。
  * caller: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 调用的自定义断言的名称。
  * assert: \([AssertionCtx](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest/unittest_package_api/unittest_package_classes.html#class-assertionctx)\) -> T - 捕获带有正确参数的断言调用。
  * optParentCtx\!: [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)<[AssertionCtx](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest/unittest_package_api/unittest_package_classes.html#class-assertionctx)> \- 存储嵌套断言失败消息的上下文。

返回值：

  * `T` \- 由用户定义的断言返回的值。

## func invokeCustomExpect\(Array\<String\>, String, \(AssertionCtx\) -> Any, Option\<AssertionCtx\>\)
    
    __
    
    public func invokeCustomExpect(
        passerdArgs: Array\<String\>,
        caller: String,
        expect: (AssertionCtx) -> Any,
        optParentCtx!: ?AssertionCtx = None
    ): Unit
    
功能：运行在 [`@Test`](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_testmacro/unittest_testmacro_package_api/unittest_testmacro_package_macros.html#test-%E5%AE%8F), [`@TestCase`](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_testmacro/unittest_testmacro_package_api/unittest_testmacro_package_macros.html#testcase-%E5%AE%8F), 或 [`@CustomAssertion`](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_testmacro/unittest_testmacro_package_api/unittest_testmacro_package_macros.html#customassertion-%E5%AE%8F) 宏中使用的 [`@Expect\[caller\](passerArgs)`](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_testmacro/unittest_testmacro_package_api/unittest_testmacro_package_macros.html#expect-%E5%AE%8F) 指定的用户定义断言函数。

参数：

  * passedArgs: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)> \- 未处理的已传递参数。
  * caller: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 调用的自定义断言的名称。
  * expect: \([AssertionCtx](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest/unittest_package_api/unittest_package_classes.html#class-assertionctx)\) -> [Any](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-any) \- 捕获带有正确参数的断言调用。
  * optParentCtx\!: [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)<[AssertionCtx](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest/unittest_package_api/unittest_package_classes.html#class-assertionctx)> \- 存储嵌套断言失败消息的上下文。