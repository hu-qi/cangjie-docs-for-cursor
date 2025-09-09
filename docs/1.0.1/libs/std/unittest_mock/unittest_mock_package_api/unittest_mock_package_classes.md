
# 类

## class ActionSelector
    
    __
    
    public sealed abstract class ActionSelector {}
    
功能：此抽象类提供了为成员函数指定一个[操作 API](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_samples/mock_framework_basics.html#%E6%93%8D%E4%BD%9C-api) ，并允许链式调用的方法。

入参为 `mock object` 或 `spy object` 的某个成员函数的调用表达式的 `@On` 宏调用表达式，将返回 ActionSelector 的实例。即，此类或其子类中的 API 可为成员函数插入桩代码。

### func fails\(\)
    
    __
    
    func fails(): Unit
    
功能：定义调用桩签名将导致测试失败，执行至桩签名即抛出 [AssertionException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest/unittest_package_api/unittest_package_exceptions.html#class-assertexception) 异常的行为。

## class AnyMatcher
    
    __
    
    public class AnyMatcher <: ArgumentMatcher {}
    
功能：任意参数匹配器，即桩签名允许任意的参数。

父类型：

  * ArgumentMatcher

### func matchesAny\(Any\)
    
    __
    
    public func matchesAny(_: Any)
    
功能：匹配任意类型的任意值。

参数：

  * \_: [Any](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-any) \- 被检查的输入参数。任意类型的任意值。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 固定为 `true` 。

### extend AnyMatcher
    
    __
    
    extend AnyMatcher {}
    
功能：扩展 AnyMatcher 。

#### func value\<T\>\(\)
    
    __
    
    public func value\<T\>(): T
    
功能：框架需要调用的参数匹配器的返回值。

返回值：

  * T - 与实际入参类型匹配的值。

## class ArgumentMatcher
    
    __
    
    public abstract class ArgumentMatcher {}
    
功能：参数匹配器抽象类，该类与其子类可作为桩签名的入参类型。

### func withDescription\(String\)
    
    __
    
    public func withDescription(description: String): ArgumentMatcher
    
功能：配置参数匹配器抛出异常时的描述信息。

参数：

  * description: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 描述信息。

返回值：

  * ArgumentMatcher - 被配置的参数匹配器。

### func forParameter\(String\)
    
    __
    
    public func forParameter(name: String): ArgumentMatcher
    
功能：配置所匹配的参数名称。

参数：

  * name: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 所匹配的参数名称。

返回值：

  * ArgumentMatcher - 被配置的参数匹配器。

### func matchesAny\(Any\)
    
    __
    
    public func matchesAny(arg: Any)
    
功能：匹配任意类型的任意值。

参数：

  * arg: [Any](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-any) \- 被检查的输入参数。任意类型的任意值。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 匹配结果 。

## class CardinalitySelector\<A\>
    
    __
    
    public class CardinalitySelector\<A\> where A <: ActionSelector {}
    
功能：此类提供了可定义桩签名的最近一次行为的执行次数的 API 。 例如：`@On(foo.bar()).returns("Predefined value").atLeastOnce()` 。 为方便表达，后文将桩签名的最近一次行为称为“桩行为”。 此接口提供的 API 提供的验证能力如下：

  * 桩签名的调用次数超过指定次数将立即抛出 [ExpectationFailedException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_exceptions.html#class-expectationfailedexception) 。
  * 桩签名的调用次数不足时，框架将在测试用例执行完成后抛出 [ExceptionFailedException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_exceptions.html#class-expectationfailedexception) 。

### func anyTimes\(\)
    
    __
    
    func anyTimes(): Unit
    
功能：定义“桩行为”可以执行任意次数。此函数对桩签名的调用次数不做任何校验。

### func atLeastOnce\(\)
    
    __
    
    func atLeastOnce(): Unit
    
功能：定义“桩行为”最少被执行一次。验证不到一次时，抛出异常。

异常：

  * [ExceptionFailedException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_exceptions.html#class-expectationfailedexception) \- 验证“桩行为”执行次数不到一次时，抛出异常。

### func atLeastTimes\(Int64\)
    
    __
    
    func atLeastTimes(minTimesExpected: Int64): Unit
    
功能：定义“桩行为”最少被执行指定次数的行为。验证实际执行次数低于最少指定次数时，抛出异常。

参数：

  * minTimesExpected: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 预期“桩行为”最少被执行的次数。

异常：

  * [ExceptionFailedException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_exceptions.html#class-expectationfailedexception) \- 验证“桩行为”执行少于指定次数时，抛出异常。
  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当作为`minTimesExpected`参数传递的数字为负数时，抛出异常。

### func once\(\)
    
    __
    
    func once(): Continuation\<R\>
    
功能：定义“桩行为”仅被执行一次。此函数将在验证桩签名执行次数超出一次时，抛出异常。

返回值：

  * Continuation\<R\> \- 对象实例可调用方法继续生成 ActionSelector 对象。

异常：

  * [ExceptionFailedException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_exceptions.html#class-expectationfailedexception) \- 验证“桩行为”执行次数超过一次时，立即抛出异常。

### func times\(Int64\)
    
    __
    
    func times(expectedTimes: Int64): Continuation\<R\>
    
功能：定义“桩行为”被执行指定次数。验证不是指定次数时，抛出异常。

参数：

  * expectedTimes: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 预期“桩行为”被执行的次数。

返回值：

  * Continuation\<R\> \- 对象实例可调用方法继续生成 ActionSelector 对象。

异常：

  * [ExceptionFailedException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_exceptions.html#class-expectationfailedexception) \- 验证“桩行为”执行次数不是指定次数时，抛出异常。
  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当作为`expectedTimes`参数传递的数字为负数时，抛出异常。

### func times\(Int64, Int64\)
    
    __
    
    func times(min!: Int64, max!: Int64): Unit
    
功能：定义“桩行为”执行指定次数范围。验证超出指定次数范围时，抛出异常。

参数：

  * min\!: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 预期“桩行为”被执行的最小次数。
  * max\!: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 预期“桩行为”被执行的最大次数。

异常：

  * [ExceptionFailedException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_exceptions.html#class-expectationfailedexception) \- 验证“桩行为”执行次数不是指定次数范围时，抛出异常。
  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当传入的`min`或`max`参数为负数时，抛出异常。

## class ConfigureMock
    
    __
    
    public class ConfigureMock {}
    
功能：配置 `mock object` 。

### static func stubGetter\<TObj, TRet\>\(\(\) -> TRet,TObj,String,String,String,Int64\)
    
    __
    
    public static func stubGetter\<TObj, TRet\>(
        stubCall: () -> TRet,
        objectReference: TObj,
        objectName: String,
        fieldOrPropertyName: String,
        callDescription: String,
        lineNumber: Int64
    ): GetterActionSelector\<TRet\>
    
功能：创建针对属性的 Getter 方法插入桩代码的操作器对象。

参数：

  * stubCall: \(\) -> TRet - 桩签名对应的调用表达式。
  * objectReference: TObj - 被插桩的对象的引用。
  * objectName: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 被插桩的对象的名称。
  * fieldOrPropertyName: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 被插桩的字段或属性名称。
  * callDescription: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 桩签名对应的调用表达式的字符串表达。
  * lineNumber: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 对应的调用表达式的行号。

返回值：

  * GetterActionSelector\<TRet\> \- 针对属性的 Getter 方法插入桩代码的操作器对象。

### static func stubMethod\<TObj, TRet\>\(\(\) -> TRet,Array\<ArgumentMatcher\>,TObj,String,String,String,Int64\)
    
    __
    
    public static func stubMethod\<TObj, TRet\>(
        stubCall: () -> TRet,
        matchers: Array\<ArgumentMatcher\>,
        objectReference: TObj,
        objectName: String,
        methodName: String,
        callDescription: String,
        lineNumber: Int64
    ): MethodActionSelector\<TRet\>
    
功能：创建针对普通成员方法插入桩代码的操作器对象。

参数：

  * stubCall: \(\) -> TRet - 桩签名对应的调用表达式。
  * matchers: Array\<ArgumentMatcher\> \- 对应入参的参数匹配器。
  * objectReference: TObj - 被插桩的对象的引用。
  * objectName: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 被插桩的对象的名称。
  * methodName: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 被插桩的方法名称。
  * callDescription: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 桩签名对应的调用表达式的字符串表达。
  * lineNumber: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 对应的调用表达式的行号。

返回值：

  * MethodActionSelector\<TRet\> \- 针对普通成员方法插入桩代码的操作器对象。

### static func stubSetter\<TObj, TRet\>\(\(\) -> Unit, \(\) -> TArg,ArgumentMatcher,TObj,String,String,String,Int64\)
    
    __
    
    public static func stubSetter\<TObj, TArg\>(
        stubCall: () -> Unit,
        _: () -> TArg,
        matcher: ArgumentMatcher,
        objectReference: TObj,
        objectName: String,
        fieldOrPropertyName: String,
        callDescription: String,
        lineNumber: Int64
    ): SetterActionSelector\<TArg\>
    
功能：创建针对属性 Setter 方法插入桩代码的操作器对象。

参数：

  * stubCall: \(\) -> Unit - 桩签名对应的调用表达式。
  * \_: \(\) -> TArg - 用于捕获属性或者字段的类型。
  * matcher: ArgumentMatcher \- 入参的参数匹配器。
  * objectReference: TObj - 被插桩的对象的引用。
  * objectName: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 被插桩的对象的名称。
  * fieldOrPropertyName: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 被插桩的属性或字段的名称。
  * callDescription: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 桩签名对应的调用表达式的字符串表达。
  * lineNumber: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 对应的调用表达式的行号。

返回值：

  * MethodActionSelector\<TRet\> \- 针对普通成员方法插入桩代码的操作器对象。

## class Continuation\<A\>
    
    __
    
    public class Continuation\<A\> where A <: ActionSelector {}
    
功能：此类提供了可继续定义桩签名的行为的 API 。 此类提供的方法能力如下：

  * 允许当先前的操作得到满足时，桩签名将执行额外的操作。仅当后面跟着一个行为定义时，`Continuation` 实例才有意义。
  * 当先前的操作未得到满足时，将抛出 [MockFrameworkException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_exceptions.html#class-mockframeworkexception) 异常。并不保证抛出此异常的确切位置。

### func then\(\)
    
    __
    
    func then(): A
    
功能：当链中的先前操作完成时，返回 [ActionSelector](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_classes.html#class-actionselector) 的子类对象。

返回值：

  * A - [ActionSelector](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_classes.html#class-actionselector)的子类对象实例。

异常：

  * [MockFrameworkException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_exceptions.html#class-mockframeworkexception) \- 当先前的操作未得到满足时，将抛出异常。

## class GetterActionSelector\<TRet\>
    
    __
    
    public class GetterActionSelector\<TRet\> <: ActionSelector {}
    
功能：此类提供了为属性 `Getter` 函数指定一个[操作 API](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_samples/mock_framework_basics.html#%E6%93%8D%E4%BD%9C-api) ，并允许链式调用的方法。 入参为 `mock object` 或 `spy object` 的某个成员函数的调用表达式的 `@On` 宏调用表达式，将返回 ActionSelector 的实例。即，此类或其子类中的 API 可为成员函数插入桩代码。

父类型：

  * ActionSelector

### func getsField\(SyntheticField\<TRet\>\)
    
    __
    
    public func getsField(field: SyntheticField\<TRet\>): CardinalitySelector<GetterActionSelector\<TRet\>>
    
功能：读取[合成字段](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_samples/mock_framework_stubs.html#%E8%AE%BE%E7%BD%AE%E5%B1%9E%E6%80%A7%E5%92%8C%E5%AD%97%E6%AE%B5%E5%92%8C%E9%A1%B6%E5%B1%82%E5%8F%98%E9%87%8F)。

参数：

  * field: SyntheticField\<TRet\> \- 合成字段，处理可变属性。

返回值：

  * CardinalitySelector<GetterActionSelector\<TRet\>> \- 预期执行次数的操作器。

### func getsOriginal\(\)
    
    __
    
    public func getsOriginal(): CardinalitySelector<GetterActionSelector\<TRet\>>
    
功能：读取原始属性或获取原始实例中的字段值。

返回值：

  * CardinalitySelector<GetterActionSelector\<TRet\>> \- 预期执行次数的操作器。

### func returns\(TRet\)
    
    __
    
    public func returns(value: TRet): CardinalitySelector<GetterActionSelector\<TRet\>>
    
功能：指定返回值。

参数：

  * value: TRet - 指定的返回的值。

返回值：

  * CardinalitySelector<GetterActionSelector\<TRet\>> \- 预期执行次数的操作器。

### func returns\(\(\) -> TRet\)
    
    __
    
    public func returns(valueFactory: () -> TRet): CardinalitySelector<GetterActionSelector\<TRet\>>
    
功能：指定返回值。

参数：

  * valueFactory: \(\) -> TRet - 指定的返回的值生成器。

返回值：

  * CardinalitySelector<GetterActionSelector\<TRet\>> \- 预期执行次数的操作器。

### func returnsConsecutively\(Array\<TRet\>\)
    
    __
    
    public func returnsConsecutively(values: Array\<TRet\>)
    
功能：指定返回多个值。

参数：

  * values: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<TRet\> \- 指定的返回的多个值。

返回值：

  * CardinalitySelector<GetterActionSelector\<TRet\>> \- 预期执行次数的操作器。

### func returnsConsecutively\(ArrayList\<TRet\>\)
    
    __
    
    public func returnsConsecutively(values: ArrayList\<TRet\>)
    
功能：指定返回多个值。

参数：

  * values: [ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)\<TRet\> \- 指定的返回的多个值。

返回值：

  * CardinalitySelector<GetterActionSelector\<TRet\>> \- 预期执行次数的操作器。

### func throws\(Exception\)
    
    __
    
    public func throws(exception: Exception): CardinalitySelector<GetterActionSelector\<TRet\>>
    
功能：指定抛出异常。

参数：

  * exception: [Exception](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-exception) \- 指定的抛出的异常。

返回值：

  * CardinalitySelector<GetterActionSelector\<TRet\>> \- 预期执行次数的操作器。

### func throws\(\(\) -> Exception\)
    
    __
    
    public func throws(exceptionFactory: () -> Exception): CardinalitySelector<GetterActionSelector\<TRet\>>
    
功能：指定抛出异常。

参数：

  * exceptionFactory: \(\) -> [Exception](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-exception) \- 指定的抛出的异常的生成器。

返回值：

  * CardinalitySelector<GetterActionSelector\<TRet\>> \- 预期执行次数的操作器。

### extend MethodActionSelector\<Unit\>
    
    __
    
    extend MethodActionSelector\<Unit\> {}
    
功能：扩展 MethodActionSelector 。

#### func returns\(\)
    
    __
    
    public func returns(): CardinalitySelector<MethodActionSelector\<TRet\>>
    
功能：指定桩函数什么都不做。

返回值：

  * CardinalitySelector<GetterActionSelector\<TRet\>> \- 预期执行次数的操作器。

## class Matchers
    
    __
    
    public class Matchers {}
    
功能：该类提供生成[匹配器](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_samples/mock_framework_basics.html#%E5%8F%82%E6%95%B0%E5%8C%B9%E9%85%8D%E5%99%A8)的静态函数。匹配器对象仅可通过此处的静态函数生成。匹配器可在[桩链](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_samples/mock_framework_basics.html#%E6%A1%A9%E9%93%BE)中使用。

例如：`@On(foo.bar(ofType<Int64>())).returns(1)`

参数匹配器可以在 `@On` 宏调用表达式入参处使用，来描述期望将哪些参数传递到[桩签名](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_samples/mock_framework_basics.html#%E6%A1%A9%E7%AD%BE%E5%90%8D)中。参数匹配器有两个最常见的用途：

  * 为不同的参数指定不同的行为。例如：
    
        __
    
    // 当 bar 的入参为 5 时，返回某个值
    @On(foo.bar(eq(5))).returns(...)
    // 当 bar 的入参为 6 时，抛出异常
    @On(foo.bar(eq(6))).throws(...)
    
  * 确保只有某些参数被传递到某些桩签名中。
    
        __
    
    let foo = mock\<Foo\>()
    // bar 的入参只能为正数，否则将抛出 UnhandledCallException 异常
    @On(foo.bar(argThat\<Int64\> { arg => arg > 0 })).returns(...)
    
> **注意：**
> 
> 上例仅适用于 `mock object` 。`spy object` 的行为不同。
    
        __
    
    let foo = spy(Foo())
    // 当 bar 的入参不为正数时，将调用 Foo() 对象的成员函数。
    @On(foo.bar(argThat\<Int64\> { arg => arg <= 0 })).fails()
    
### static func any\(\)
    
    __
    
    public static func any(): AnyMatcher
    
功能：允许将任何值作为参数。

返回值：

  * AnyMatcher \- 允许任意值的参数匹配器。

### static func argThat\<T\>\(ValueListener\<T\>, \(T\) -> Bool\)
    
    __
    
    public static func argThat\<T\>(listener: ValueListener\<T\>, predicate: (T) -> Bool): TypedMatcher\<T\>
    
功能：通过传入的 predicate 闭包函数过滤传入的参数值，允许 listener 值监听器对满足条件的传入参数值进行处理。

参数：

  * listener: [ValueListener](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_interfaces.html#interface-valuelistenert)\<T\> \- 值监听器。
  * predicate: \(T\) ->[Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 过滤器，可通过此函数定义过滤参数值的匹配条件。

返回值：

  * TypedMatcher\<T\> \- 拥有值监听器和过滤器的类型匹配器。

### static func argThat\<T\>\(\(T\) -> Bool\)
    
    __
    
    public static func argThat\<T\>(predicate: (T) -> Bool): TypedMatcher\<T\>
    
功能：根据提供的过滤器闭包过滤输入值。

参数：

  * predicate: \(T\) ->[Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 过滤器。

返回值：

  * TypedMatcher\<T\> \- 参数过滤类型匹配器实例。

### static func argThatNot\<T\>\(\(T\) -> Bool\)
    
    __
    
    public static func argThatNot\<T\>(predicate: (T) -> Bool): TypedMatcher\<T\>
    
功能：根据提供的过滤器闭包过滤输入值。

参数：

  * predicate: \(T\) ->[Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 过滤器。

返回值：

  * TypedMatcher\<T\> \- 参数过滤类型匹配器实例。

### static func capture\<T\>\(ValueListener\<T\>\)
    
    __
    
    public static func capture\<T\>(listener: ValueListener\<T\>): TypedMatcher\<T\>
    
允许 listener 值监听器对类型为 T 的传入参数值进行处理。当 capture 的类型参数未指定时，将使用值监听器的类型参数值。

参数：

  * listener: [ValueListener](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_interfaces.html#interface-valuelistenert)\<T\> \- 值监听器。

返回值：

  * TypedMatcher\<T\> \- 拥有值监听器的类型匹配器。

注意：值监听器不允许在 @Called 的参数范围内使用。

### static func default\<T\>\(T\)
    
    __
    
    public static func default\<T\>(target: T): TypedMatcher\<T\>
    
功能：根据结构（更高优先级）或引用相等性来匹配值。如果传入的参数既不是 [Equatable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-equatablet)\<T\> 也不是引用类型，则会在运行时抛出异常（编译期不做检查）。

参数：

  * target: T - 必须通过结构或引用相等来匹配的匹配对象。

返回值：

  * TypedMatcher\<T\> \- 默认类型匹配器。

异常：

  * [MockFrameworkException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_exceptions.html#class-mockframeworkexception) \- 如果参数 target 既不是 [Equatable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-equatablet)\<T\> 类型也不是引用类型，则抛出异常。

### static func eq\<T\>\(T\)
    
    __
    
    public static func eq\<T\>(target: T): TypedMatcher\<T\> where T <: Equatable\<T\>
    
功能：根据与提供的值的结构相等性过滤输入值。

参数：

  * target: T - 匹配对象。

返回值：

  * TypedMatcher\<T\> \- 仅允许结构上等于给定值的参数匹配器。

### static func ofType\<T\>\(\)
    
    __
    
    public static func ofType\<T\>(): TypedMatcher\<T\>
    
功能：根据类型过滤输入值。

返回值：

  * TypedMatcher\<T\> \- 仅允许特定类型的类型匹配器。

### static func same\<T\>\(T\) where T <: Object
    
    __
    
    public static func same\<T\>(target: T): TypedMatcher\<T\> where T <: Object
    
功能：根据与所提供对象的引用相等性来过滤输入值。

参数：

  * target: T - 匹配对象。

返回值：

  * TypedMatcher\<T\> \- 仅允许与给定对象引用相等的参数的参数匹配器。

### extend Matchers
    
    __
    
    extend Matchers {}
    
功能：扩展 Matchers 。

#### static func none\(\)
    
    __
    
    public static func none(): NoneMatcher
    
功能：过滤值为 `None` 的入参值。

返回值：

  * NoneMatcher \- `None` 值匹配器。

## class MethodActionSelector\<TRet\>
    
    __
    
    public class MethodActionSelector\<TRet\> <: ActionSelector {}
    
功能：此类提供了为成员函数指定一个[操作 API](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_samples/mock_framework_basics.html#%E6%93%8D%E4%BD%9C-api) ，并允许链式调用。 入参为 `mock object` 或 `spy object` 的某个成员函数的调用表达式的 `@On` 宏调用表达式，将返回 ActionSelector\<R\> 的实例（其中 `R` 代表正在配置的函数成员的返回值类型）。 即，此类中的 API 可为成员函数插入桩代码。

父类型：

  * ActionSelector

### func callsOriginal\(\)
    
    __
    
    func callsOriginal(): CardinalitySelector\<R\>
    
功能：定义桩签名执行原始代码逻辑的行为。

返回值：

  * [CardinalitySelector](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_classes.html#class-cardinalityselectora)\<R\> \- 定义了桩签名执行原始代码逻辑的 [CardinalitySelector](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_classes.html#class-cardinalityselectora)\<R\> 对象实例。

### func returns\(\(\) -> R\)
    
    __
    
    func returns(valueFactory: () -> R): CardinalitySelector\<R\>
    
功能：定义桩签名返回指定的值的行为，该值由传入的闭包生成。

参数：

  * valueFactory: \(\) ->R - 生成预期返回值的闭包函数（生成器）。

返回值：

  * [CardinalitySelector](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_classes.html#class-cardinalityselectora)\<R\> \- 定义了桩签名返回指定值的行为的 [CardinalitySelector](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_classes.html#class-cardinalityselectora)\<R\> 对象实例。

### func returns\(R\)
    
    __
    
    func returns(value: R): CardinalitySelector\<R\>
    
功能：定义[桩签名](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_samples/mock_framework_basics.html#%E6%A1%A9%E7%AD%BE%E5%90%8D)返回指定值的行为。

参数：

  * value: R - 预期桩签名的返回值。

返回值：

  * [CardinalitySelector](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_classes.html#class-cardinalityselectora)\<R\> \- 定义了桩签名返回行为的 [CardinalitySelector](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_classes.html#class-cardinalityselectora)\<R\> 对象实例。

### func returnsConsecutively\(Array\<R\>\)
    
    __
    
    func returnsConsecutively(values: Array\<R\>): Continuation\<R\>
    
功能：定义桩签名按列表顺序返回指定的值的行为。桩签名将被调用多次，次数与数组内值的个数相同。

参数：

  * values: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<R\> \- 桩签名的返回值列表。

返回值：

  * Continuation\<R\> \- 定义了桩签名按序返回指定值的行为的 Continuation\<R\> 对象实例。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当参数列表为空时，抛出异常。

### func returnsConsecutively\(ArrayList\<R\>\)
    
    __
    
    func returnsConsecutively(values: ArrayList\<R\>): Continuation\<R\>
    
功能：定义桩签名按列表顺序返回指定的值的行为。桩签名将被连续调用多次，次数与数组列表内值的个数相同。

参数：

  * values: [ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)\<R\> \- 桩签名的返回值列表。

返回值：

  * Continuation\<R\> \- 定义了桩签名按序返回指定值的 Continuation\<R\> 对象实例。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当参数列表为空时，抛出异常。

### func throws\(\(\) -> Exception\)
    
    __
    
    func throws(exceptionFactory: () -> Exception): CardinalitySelector\<R\>
    
功能：定义桩签名抛出异常的行为，异常由参数闭包函数生成。

> **说明：**
> 
> throws vs fails
> 
> throws 意味着测试桩签名抛出异常后的行为是测试的目的。例如，当某些服务不可用时，系统是否可以正确恢复等。 fails 意味着调用桩签名将导致测试失败。即，如果系统行为正确，则永远不应调用该桩签名。

参数：

  * exceptionFactory: \(\) ->[Exception](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-exception) \- 构造预期桩签名抛出的异常对象的闭包函数（生成器）。

返回值：

  * [CardinalitySelector](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_classes.html#class-cardinalityselectora)\<R\> \- 定义了桩签名抛出异常行为的 [CardinalitySelector](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_classes.html#class-cardinalityselectora)\<R\> 对象实例。

### func throws\(Exception\)
    
    __
    
    func throws(exception: Exception): CardinalitySelector\<R\>
    
功能：定义桩签名抛出异常的行为。

参数：

  * exception: [Exception](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-exception) \- 预期桩签名抛出的异常对象。

返回值：

  * [CardinalitySelector](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_classes.html#class-cardinalityselectora)\<R\> \- 定义了桩签名抛出异常的行为的 [CardinalitySelector](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_classes.html#class-cardinalityselectora)\<R\> 对象实例。

## class MockFramework
    
    __
    
    public class MockFramework {}
    
功能：提供用例执行所需的框架准备与结束回收阶段的函数。

### static func openSession
    
    __
    
    public static func openSession(name: String, sessionKind: MockSessionKind): Unit
    
功能：打开一个新会话。会话形成一个类似堆栈的结构。 会话关闭的顺序与开始时的顺序相反。 在给定会话期间创建的 `mock object` 只能在该会话或其任何内部会话内部访问。 每个会话都保留自己的调用日志，因此对最新打开会话内进行的调用执行任何验证， 只有在会议结束时才能验证期望。

参数：

  * name: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 会话的名称。
  * sessionKind: [MockSessionKind](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_enums.html#enum-mocksessionkind) \- 指定允许的桩类型。

### static func closeSession
    
    __
    
    public static func closeSession(): Unit
    
功能：打开一个新会话。会话形成一个类似堆栈的结构。 会话关闭的顺序与开始时的顺序相反。 在给定会话期间创建的 `mock object` 只能在该会话或其任何内部会话内部访问。 每个会话都保留自己的调用日志，因此对最新打开会话内进行的调用执行任何验证， 只有在会议结束时才能验证期望。

异常：

  * [MockFrameworkException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_exceptions.html#class-mockframeworkexception) \- 检测到错误的配置信息的时候，抛出异常。
  * [ExpectationFailedException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_exceptions.html#class-expectationfailedexception) \- 当预期未被满足时，抛出异常。

## class NoneMatcher
    
    __
    
    public class NoneMatcher <: ArgumentMatcher {}
    
功能：参数值为 `None` 的匹配器。

父类型：

  * ArgumentMatcher

### func matchesAny
    
    __
    
    public override func matchesAny(arg: Any): Bool
    
功能：匹配任意输入值，值为 None 时返回 `true` 。

参数：

  * arg: [Any](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-any) \- 待匹配的入参值。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 当输入为 None 时返回 `true` ，否则返回 `false` 。

### extend NoneMatcher
    
    __
    
    extend NoneMatcher {}
    
功能：扩展 NoneMatcher 。

#### func value\<T\>\(\)
    
    __
    
    public func value\<T\>(): Option\<T\>
    
功能：框架需要调用的参数匹配器的返回值。

返回值：

  * Option\<T\> \- 与实际入参值类型匹配的值。

## class OrderedVerifier
    
    __
    
    public class OrderedVerifier {}
    
功能：此类型用于收集 “验证语句”，可在 ordered 函数中动态传入验证行为。

### func checkThat\(VerifyStatement\)
    
    __
    
    public func checkThat(statement: VerifyStatement): OrderedVerifier
    
功能：添加一条 “验证语句”。

参数：

  * statement: [VerifyStatement](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_classes.html#class-verifystatement) \- 待被添加的“验证语句”。

返回值：

  * [OrderedVerifier](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_classes.html#class-orderedverifier) \- 返回对象自身。

## class SetterActionSelector\<TRet\>
    
    __
    
    public class SetterActionSelector\<TRet\> <: ActionSelector {}
    
功能：此类提供了为属性 `Setter` 函数指定一个[操作 API](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_samples/mock_framework_basics.html#%E6%93%8D%E4%BD%9C-api) ，并允许链式调用的方法。 入参为 `mock object` 或 `spy object` 的某个成员函数的调用表达式的 `@On` 宏调用表达式，将返回 ActionSelector 的实例。即，此类或其子类中的 API 可为成员函数插入桩代码。

父类型：

  * ActionSelector

### func doesNothing\(\)
    
    __
    
    public func doesNothing(): CardinalitySelector<SetterActionSelector\<TArg\>>
    
功能：指定该属性或字段不做任何动作。

返回值：

  * CardinalitySelector<GetterActionSelector\<TRet\>> \- 预期执行次数的操作器。

### func setsOriginal\(\)
    
    __
    
    public func setsOriginal(): CardinalitySelector<SetterActionSelector\<TArg\>>
    
功能：设置原始属性或获取原始实例中的字段值。

返回值：

  * CardinalitySelector<GetterActionSelector\<TRet\>> \- 预期执行次数的操作器。

### func setsField\(SyntheticField\<TRet\>\)
    
    __
    
    public func setsField(field: SyntheticField\<TArg\>): CardinalitySelector<SetterActionSelector\<TArg\>>
    
功能：设置[合成字段](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_samples/mock_framework_stubs.html#%E8%AE%BE%E7%BD%AE%E5%B1%9E%E6%80%A7%E5%92%8C%E5%AD%97%E6%AE%B5%E5%92%8C%E9%A1%B6%E5%B1%82%E5%8F%98%E9%87%8F)。

参数：

  * field: SyntheticField\<TRet\> \- 合成字段，处理可变属性。

返回值：

  * CardinalitySelector<GetterActionSelector\<TRet\>> \- 预期执行次数的操作器。

### func throws\(Exception\)
    
    __
    
    public func throws(exception: Exception): CardinalitySelector<GetterActionSelector\<TRet\>>
    
功能：指定抛出异常。

参数：

  * exception: [Exception](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-exception) \- 指定的抛出的异常。

返回值：

  * CardinalitySelector<GetterActionSelector\<TRet\>> \- 预期执行次数的操作器。

### func throws\(\(\) -> Exception\)
    
    __
    
    public func throws(exceptionFactory: () -> Exception): CardinalitySelector<GetterActionSelector\<TRet\>>
    
功能：指定抛出异常。

参数：

  * exceptionFactory: \(\) -> [Exception](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-exception) \- 指定的抛出的异常的生成器。

返回值：

  * CardinalitySelector<GetterActionSelector\<TRet\>> \- 预期执行次数的操作器。

## class SyntheticField\<T\>
    
    __
    
    public class SyntheticField\<T\> {}
    
功能：合成字段。用于处理可变属性和字段。

### static func create\(T\)
    
    __
    
    public static func create(initialValue!: T): SyntheticField\<T\>
    
功能：创建合成字段。

参数：

  * initialValue\!: T - 初始值。

返回值：

  * SyntheticField\<T\> \- 合成字段。

## class TypedMatcher\<T\>
    
    __
    
    public abstract class TypedMatcher\<T\> <: ArgumentMatcher {}
    
功能：参数类型匹配器。

父类型：

  * ArgumentMatcher

### func matches\(T\)
    
    __
    
    public func matches(arg: T): Bool
    
功能：检查入参类型是否与预期相符。

参数：

  * arg: T - 待检查的入参。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 若类型匹配则返回 `true` ，否则返回 `false` 。

### func matchesAny\(Any\)
    
    __
    
    public func matchesAny(arg: Any): Bool
    
功能：检查入参类型是否与预期相符。

参数：

  * arg: [Any](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-any) \- 待检查的入参。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 若类型匹配则返回 `true` ，否则返回 `false` 。

### extend\<T\> TypedMatcher\<T\>
    
    __
    
    extend \<T\> TypedMatcher\<T\> {}
    
功能：扩展 TypedMatcher 。

#### func value\<T\>\(\)
    
    __
    
    public func value\<T\>(): T
    
功能：框架需要调用的参数匹配器的返回值。

返回值：

  * T - 与实际入参值类型匹配的值。

## class UnorderedVerifier
    
    __
    
    public class UnorderedVerifier{}
    
功能：此类型用于收集 “验证语句”， 可在 unordered 函数中动态传入验证行为。

### func checkThat\(VerifyStatement\)
    
    __
    
    public func checkThat(statement: VerifyStatement):UnorderedVerifier
    
功能：添加一条 “验证语句”。

参数：

  * statement: [VerifyStatement](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_classes.html#class-verifystatement) \- 待被添加的“验证语句”。

返回值：

  * [UnorderedVerifier](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_classes.html#class-unorderedverifier) \- 返回对象自身。

## class Verify
    
    __
    
    public class Verify {}
    
功能：[Verify](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_classes.html#class-verify) 提供了一系列静态方法来支持定义所需验证的动作，如 `that` 、 `ordered` 以及 `unorder` 。

一个验证动作可以包含多个由 `@Called` 生成的[验证语句](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_samples/mock_framework_verification.html#%E9%AA%8C%E8%AF%81%E8%AF%AD%E5%8F%A5%E5%92%8C-called-%E5%AE%8F)，来描述需要验证的动作。 通常验证的范围为所在测试用例的函数体，但 [Verify](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_classes.html#class-verify) 提供了 `clearInvocationLog` 函数来清除此前的执行记录，以缩小验证范围。 行为验证是指，验证“桩签名”的操作是否按所定义的方式执行，当验证实际执行与定义不一致时，将抛出异常。

具体支持验证的行为如下：

  * 所指定的“桩签名”是否被执行。
  * 所指定的“桩签名”是否执行指定的次数。
  * 所指定的“桩签名”在执行时，被传入的参数是否满足要求。
  * 所指定的多个“桩签名”的调用顺序是否满足要求。

行为验证主要通过以下两个步骤完成：

  * 通过调用 [Verify](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_classes.html#class-verify) 的静态方法定义一个验证动作。
  * 通过 `@Called` 宏调用表达式定义所需验证的 “桩签名”的执行动作。为简化表达，后文将其称为“验证语句”。

举例来说：
    
    __
    
    let foo = mock\<Foo\>()
    // 定义“桩签名”的“桩行为”
    @On(foo.bar().returns(1))
    // 实际“桩签名”在用例中的执行情况
    foo.bar()
    // 验证“桩签名”的执行情况：foo.bar() 至少执行了一次
    Verify.that(@Called(foo.bar()))
    
值得注意的是， [CardinalitySelector](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_classes.html#class-cardinalityselectora)\<R\> 提供了一些 API ，其支持验证一些行为 。因此，用户可自由选择不同的方式进行行为验证。

### static func clearInvocationLog\(\)
    
    __
    
    public static func clearInvocationLog(): Unit
    
功能：清除前序的执行记录，以缩小验证范围。

### static func noInteractions\(Array\<Object\>\)
    
    __
    
    public static func noInteractions(mocks: Array\<Object\>): Unit
    
功能：在验证范围内，对象没有任何执行动作时，验证通过。

参数：

  * mocks: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Object](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_classes.html#class-object)> \- 被验证的对象列表。

异常：

  * [VerificationFailedException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_exceptions.html#class-verificationfailedexception) \- 验证不通过时，抛出异常。

### static func ordered\(\(OrderedVerifier\) -> Unit\)
    
    __
    
    public static func ordered( collectStatements: (OrderedVerifier) -> Unit): Unit
    
功能：此函数支持验证“验证语句”是否被执行或执行的次数是否符合定义，并且校验执行顺序。默认情况下，“验证语句”的执行次数为一次。 传入列表中的“验证语句”必须是不相交的（即当单个调用行为，可以匹配多个“验证语句”时，将抛出异常）。 “验证语句”通过入参中的闭包动态增加。 验证模式为 `exhaustive` \(全量匹配，验证范围内的所有执行情况都应在验证动作中被指定\)。

参数：

  * collectStatements: \([OrderedVerifier](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_classes.html#class-orderedverifier)\) ->[Unit](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#unit) \- 支持可动态增加“验证语句”的闭包。

异常：

  * [VerificationFailedException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_exceptions.html#class-verificationfailedexception) \- 验证不通过时，抛出异常。

### static func ordered\(Array\<VerifyStatement\>\)
    
    __
    
    public static func ordered(statements: Array\<VerifyStatement\>): Unit
    
功能：此函数支持验证“验证语句”是否被执行或执行的次数是否符合定义，并且校验执行顺序。默认情况下，“验证语句”的执行次数为一次。 传入列表中的“验证语句”必须是不相交的（即当单个调用行为，可以匹配多个“验证语句”时，将抛出异常）。 验证模式为 `exhaustive` \(全量匹配，验证范围内的所有执行情况都应在验证动作中被指定\)。

举例来说:
    
    __
    
    for (i in 0..4) {
        foo.bar(i % 2)
    }
    
    Verify.ordered(
        @Called(foo.bar(0)),
        @Called(foo.bar(1)),
        @Called(foo.bar(0)),
        @Called(foo.bar(1)),
    )
    
    // 将抛出异常，验证范围内有 4 次 foo.bar() 表达式的执行动作，此处只验证了2次执行。
    Verify.ordered(
        @Called(foo.bar(0)),
        @Called(foo.bar(_)),
    )
    
参数：

  * statements: Array<[VerifyStatement](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_classes.html#class-verifystatement)> \- 所需验证的“验证语句”。

异常：

  * [VerificationFailedException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_exceptions.html#class-verificationfailedexception) \- 验证不通过时，将抛出异常。

### static func that\(VerifyStatement\)
    
    __
    
    public static func that(statement: VerifyStatement): Unit
    
功能：验证是否正确执行了传入的单个“验证语句”。

参数：

  * statement: [VerifyStatement](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_classes.html#class-verifystatement) \- 所需验证的“验证语句”。

异常：

  * [VerificationFailedException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_exceptions.html#class-verificationfailedexception) \- 验证不通过时，将抛出异常。

### static func unordered\(\(UnorderedVerifier\) -> Unit\)
    
    __
    
    public static func unordered(collectStatements: (UnorderedVerifier) -> Unit): Unit
    
功能：此函数支持验证“验证语句”是否被执行或执行的次数是否符合定义，并且不校验执行顺序。默认情况下，“验证语句”的执行次数为至少一次。 传入列表中的“验证语句”必须是不相交的（即当单个调用行为，可以匹配多个“验证语句”时，将抛出异常）。 验证模式为 `exhaustive` \(全量匹配，验证范围内的所有执行情况都应在验证动作中被指定\)。 “验证语句”通过入参中的闭包动态增加。举例来说：
    
    __
    
     let totalTimes = getTimes()
    for (i in 0..totalTimes) {
        foo.bar(i % 2)
    }
    // 通过闭包使得“验证语句”可以通过 totalTimes 的值确定内容
    Verify.unordered { v =>
        for (j in 0..totalTimes) {
            v.checkThat(@Called(foo.bar(eq(j % 2))))
        }
    }
    
参数：

  * collectStatements: \([UnorderedVerifier](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_classes.html#class-unorderedverifier)\) ->[Unit](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#unit) \- 支持可动态增加“验证语句”的闭包。

异常：

  * [VerificationFailedException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_exceptions.html#class-verificationfailedexception) \- 验证不通过时，抛出异常。

### static func unordered\(Array\<VerifyStatement\>\)
    
    __
    
    public static func unordered(statements: Array\<VerifyStatement\>): Unit
    
功能：此函数支持验证“验证语句”是否被执行或执行的次数是否符合定义，并且不校验执行顺序。默认情况下，“验证语句”的执行次数为至少一次。 传入列表中的“验证语句”必须是不相交的（即当单个调用行为，可以匹配多个“验证语句”时，将抛出异常）。 验证模式为 `exhaustive` \(全量匹配，验证范围内的所有执行情况都应在验证动作中被指定\)。

举例来说:
    
    __
    
    let foo = mock\<Foo\>()
    for (i in 0..4) {
        foo.bar(i % 2)
    }
    
    // 验证 bar() 在传入参数为 0 或 1 的情况下均至少执行一次
    Verify.unordered(
        @Called(foo.bar(0)),
        @Called(foo.bar(1))
    )
    
    // 此处的验证动作将抛出异常，因为 `foo.bar(_)` 包含了 `foo.bar(1)`
    Verify.unordered(
        @Called(foo.bar(_)).times(2),
        @Called(foo.bar(1)).times(2)
    )
    // 可以通过如下方式进行验证
    // 验证入参为 1 的调用表达式执行了2次
    Verify.that(@Called(foo.bar(1)).times(2))
    // 验证任意入参的调用表达式执行了2次
    Verify.that(@Called(foo.bar(_)).times(2)) // called four times in total
    
参数：

  * statements: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[VerifyStatement](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_classes.html#class-verifystatement)> \- 待验证的多条“验证语句”，变长参数语法支持参数省略 `[]` 。

异常：

  * [VerificationFailedException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_exceptions.html#class-verificationfailedexception) \- 验证不通过时，抛出异常。

### static func unordered\(Exhaustiveness, \(UnorderedVerifier\) -> Unit\)
    
    __
    
    public static func unordered(exhaustive: Exhaustiveness, collectStatements: (UnorderedVerifier) -> Unit): Unit
    
功能：此函数支持验证“验证语句”是否被执行或执行的次数是否符合定义，并且不校验执行顺序。默认情况下，“验证语句”的执行次数为至少一次。 传入列表中的“验证语句”必须是不相交的（即当单个调用行为，可以匹配多个“验证语句”时，将抛出异常）。 “验证语句”通过入参中的闭包动态增加。

参数：

  * collectStatements: \([UnorderedVerifier](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_classes.html#class-unorderedverifier)\) ->[Unit](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#unit) \- 支持可动态增加“验证语句”的闭包。
  * exhaustive: [Exhaustiveness](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_enums.html#enum-exhaustiveness) \- 验证模式。

异常：

  * [VerificationFailedException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_exceptions.html#class-verificationfailedexception) \- 验证不通过时，抛出异常。

### static func unordered\(Exhaustiveness, Array\<VerifyStatement\>\)
    
    __
    
    public static func unordered(exhaustive: Exhaustiveness, statements: Array\<VerifyStatement\>): Unit
    
功能：此函数支持验证“验证语句”是否被执行或执行的次数是否符合定义，并且不校验执行顺序。默认情况下，“验证语句”的执行次数为至少一次。 传入列表中的“验证语句”必须是不相交的（即当单个调用行为，可以匹配多个“验证语句”时，将抛出异常）。

参数：

  * statements: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[VerifyStatement](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_classes.html#class-verifystatement)> \- 待验证的多条“验证语句”，变长参数语法支持参数省略 `[]` 。
  * exhaustive: [Exhaustiveness](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_enums.html#enum-exhaustiveness) \- 验证模式。

异常：

  * [VerificationFailedException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_exceptions.html#class-verificationfailedexception) \- 验证不通过时，抛出异常。

## class VerifyStatement
    
    __
    
    public class VerifyStatement {}
    
功能：此类型表示对“桩签名”在验证范围内的单个验证验证语句（即上文中的“验证语句”），提供了成员函数指定“桩签名”的执行次数。 该类型的对象仅可通过 `@Called` 宏调用表达式创建。 对一个对象连续调用多个成员函数没有意义，并且会抛出异常。即，执行次数仅可被指定一次。 当未调用成员函数指定执行次数时，将基于语句所在的验证动作类型定义默认的执行次数验证值。例如在 [Verify](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_classes.html#class-verify).ordered\(\) 中的“验证语句”默认为验证执行一次。

### func atLeastOnce\(\)
    
    __
    
    public func atLeastOnce(): VerifyStatement
    
功能：指定此“验证语句”验证在验证范围内“桩签名”最少被执行一次。

返回值：

  * [VerifyStatement](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_classes.html#class-verifystatement) \- 返回对象自身。

异常：

  * [MockFrameworkException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_exceptions.html#class-mockframeworkexception) \- 当对象已被指定过执行次数或已被传入过“验证动作”中时，将抛出异常。

### func atLeastTimes\(Int64\)
    
    __
    
    public func atLeastTimes(minTimesExpected: Int64): VerifyStatement
    
功能：指定此“验证语句”验证在验证范围内“桩签名”最少执行指定的次数。

参数：

  * minTimesExpected: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 预期验证的执行最少次数。

返回值：

  * [VerifyStatement](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_classes.html#class-verifystatement) \- 返回对象自身。

异常：

  * [MockFrameworkException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_exceptions.html#class-mockframeworkexception) \- 当对象已被指定过执行次数或已被传入过“验证动作”中时，将抛出异常。
  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当作为`minTimesExpected`参数传递的数字为负数时，抛出异常。

### func once\(\)
    
    __
    
    public func once(): VerifyStatement
    
功能：指定此“验证语句”验证在验证范围内“桩签名”仅被执行一次。

返回值：

  * [VerifyStatement](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_classes.html#class-verifystatement) \- 返回对象自身。

异常：

  * [MockFrameworkException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_exceptions.html#class-mockframeworkexception) \- 当对象已被指定过执行次数或已被传入过“验证动作”中时，将抛出异常。

### func times\(Int64\)
    
    __
    
    public func times(expectedTimes: Int64): VerifyStatement
    
功能：指定此“验证语句”验证在验证范围内“桩签名”被执行指定次数。

参数：

  * expectedTimes: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 预期验证的执行次数。

返回值：

  * [VerifyStatement](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_classes.html#class-verifystatement) \- 返回对象自身。

异常：

  * [MockFrameworkException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_exceptions.html#class-mockframeworkexception) \- 当对象已被指定过执行次数或已被传入过“验证动作”中时，将抛出异常。
  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当作为`expectedTimes`参数传递的数字为负数时，抛出异常。

### func times\(Int64, Int64\)
    
    __
    
    public func times(min!: Int64, max!: Int64): VerifyStatement
    
功能：指定此“验证语句”验证在验证范围内“桩签名”的执行次数在指定范围内。

参数：

  * min\!: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 预期验证的最小执行次数。
  * max\!: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 预期验证的最大执行次数。

返回值：

  * [VerifyStatement](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_classes.html#class-verifystatement) \- 返回对象自身。

异常：

  * [MockFrameworkException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_exceptions.html#class-mockframeworkexception) \- 当对象已被指定过执行次数或已被传入过“验证动作”中时，将抛出异常。
  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当传入的`min`或`max`参数为负数时，抛出异常。