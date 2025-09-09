
# 宏

## `@AfterAll` 宏

功能：声明测试类中的函数为[测试生命周期](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest/unittest_samples/unittest_basics.html#%E6%B5%8B%E8%AF%95%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F)函数。被该宏修饰的函数在所有测试用例之后运行一次。

## `@AfterEach` 宏

功能：声明测试类中的函数为[测试生命周期](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest/unittest_samples/unittest_basics.html#%E6%B5%8B%E8%AF%95%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F)函数。被该宏修饰的函数在每个测试用例之后运行一次。

## `@Assert` 宏

功能：`@Assert` 声明 Assert 断言，测试函数内部使用，断言失败停止用例。

  1. `@Assert(leftExpr, rightExpr)` ，比较 `leftExpr` 和 `rightExpr` 值是否相同。
  2. `@Assert(condition: Bool)` ，比较 `condition` 是否为 `true` ，即 `@Assert(condition: Bool)` 等同于 `@Assert(condition: Bool, true)` 。
  3. `@Assert[customAssertion](arguments...)`, 使用指定的参数 `arguments` 调用 `customAssertion` 函数，详见 `@CustomAssertion`。

## `@AssertThrows` 宏

功能：声明[预期异常的断言](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest/unittest_samples/unittest_basics.html#%E9%A2%84%E6%9C%9F%E5%BC%82%E5%B8%B8%E7%9A%84%E6%96%AD%E8%A8%80)，测试函数内部使用，断言失败停止用例。

## `@BeforeAll` 宏

功能：声明测试类中的函数为[测试生命周期](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest/unittest_samples/unittest_basics.html#%E6%B5%8B%E8%AF%95%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F)函数。被该宏修饰的函数在所有测试用例之前运行一次。

## `@BeforeEach` 宏

功能：声明测试类中的函数为[测试生命周期](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest/unittest_samples/unittest_basics.html#%E6%B5%8B%E8%AF%95%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F)函数。被该宏修饰的函数在每个测试用例之前运行一次。

## `@Bench` 宏

功能：`@Bench` 宏用于标记要执行多次的函数并计算该函数的预期执行时间。

此类函数将分批执行，并针对整个批次测量执行时间。这种测量将重复多次以获得结果的统计分布，并将计算该分布的各种统计参数。 当前支持的参数如下:

  * 中位数
  * 用作误差估计的中位数 99% 置信区间的绝对值
  * 中位数 99% 置信区间的相对值
  * 平均值

参数化的 DSL 与 `@Bench` 结合的示例如下，具体语法与规则详见`@TestCase` 宏章节：
    
    __
    
    func sortArray\<T\>(arr: Array\<T\>): Unit
            where T <: Comparable\<T\> {
        if (arr.size < 2) { return }
        var minIndex = 0
        for (i in 1..arr.size) {
            if (arr[i] < arr[minIndex]) {
                minIndex = i
            }
        }
        (arr[0], arr[minIndex]) = (arr[minIndex], arr[0])
        sortArray(arr[1..])
    }
    
    @Test
    @Configure[baseline: "test1"]
    class ArrayBenchmarks{
        @Bench
        func test1(): Unit
        {
            let arr = Array(10) { i: Int64 => i }
            sortArray(arr)
        }
    
        @Bench[x in 10..20]
        func test2(x:Int64): Unit
        {
            let arr = Array(x) { i: Int64 => i.toString() }
            sortArray(arr)
        }
    }
    
输出如下， 增加 `Args` 列，列举不同参数下的测试数据，每个参数值将作为一个性能测试用例输出测试结果，多个参数时将列举全组合场景：
    
    __
    
    --------------------------------------------------------------------------------------------------
    TP: default, time elapsed: 68610430659 ns, Result:
        TCS: ArrayBenchmarks, time elapsed: 68610230100 ns, RESULT:
        | Case   | Args   |   Median |       Err |   Err% |     Mean |
        |:-------|:-------|---------:|----------:|-------:|---------:|
        | test1  | -      | 4.274 us | ±2.916 ns |  ±0.1% | 4.507 us |
        |        |        |          |           |        |          |
        | test2  | 10     | 6.622 us | ±5.900 ns |  ±0.1% | 6.670 us |
        | test2  | 11     | 7.863 us | ±5.966 ns |  ±0.1% | 8.184 us |
        | test2  | 12     | 9.087 us | ±10.74 ns |  ±0.1% | 9.918 us |
        | test2  | 13     | 10.34 us | ±6.363 ns |  ±0.1% | 10.28 us |
        | test2  | 14     | 11.63 us | ±9.219 ns |  ±0.1% | 11.67 us |
        | test2  | 15     | 13.05 us | ±7.520 ns |  ±0.1% | 13.24 us |
        | test2  | 16     | 14.66 us | ±11.59 ns |  ±0.1% | 15.53 us |
        | test2  | 17     | 16.21 us | ±8.972 ns |  ±0.1% | 16.35 us |
        | test2  | 18     | 17.73 us | ±6.288 ns |  ±0.0% | 17.88 us |
        | test2  | 19     | 19.47 us | ±5.819 ns |  ±0.0% | 19.49 us |
        Summary: TOTAL: 11
        PASSED: 11, SKIPPED: 0, ERROR: 0
        FAILED: 0
    --------------------------------------------------------------------------------------------------

## `@Configure` 宏

功能：`@Configure` 宏为测试类或测试函数提供配置参数。它可以放置在测试类或测试函数上。

语法规则为 `@Configure[parameter1: <value1>,parameter2: <value2>]` 其中 `parameter1` 是仓颉标识符，`value` 是任何有效的仓颉表达式。均大小写敏感。 `value` 可以是常量或在标有 `@Configure` 的声明范围内有效的任何仓颉表达式。 如果多个参数具有不同的类型，则它们可以有相同的名称。如果指定了多个具有相同名称和类型的参数，则使用最新的一个。

目前支持的配置参数有：

  * `randomSeed`: 类型为 [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)， 为所有使用随机生成的函数设置起始随机种子。
  * `generationSteps`: 类型为 [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) ：参数化测试算法中的生成值的最大步数。
  * `reductionSteps` ：类型为 [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64): 参数化测试算法中的缩减值的最大步数。

以下参数一般用于被 `@Bench` 修饰的 Benchmark 测试函数:

  * `explicitGC` ：类型为 [ExplicitGcType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest/unittest_package_api/unittest_package_enums.html#enum-explicitgctype): Benchmark 函数测试期间如何调用 [GC](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_funcs.html#func-gcbool)。默认值为 [ExplicitGcType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest/unittest_package_api/unittest_package_enums.html#enum-explicitgctype).Light 。
  * `baseline` ：类型为 [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) : 参数值为 Benchmark 函数的名称，作为比较 Benchmark 函数执行结果的基线。该结果值将作为附加列添加到输出中，其中将包含比较结果。
  * `batchSize` ：类型为 [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) 或者 [Range](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-ranget-where-t--countablet--comparablet--equatablet)<[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)> : 为 Benchmark 函数配置批次大小。默认值是由框架在预热期间计算得到。
  * `minBatches` ：类型为 [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) : 配置 Benchmark 函数测试执行期间将执行多少个批次。默认值为 `10` 。
  * `minDuration` ：类型为 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) : 配置重复执行 Benchmark 函数以获得更好结果的时间。默认值为 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration).second \* 5 。
  * `warmup` ：类型为 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 或者 [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) : 配置在收集结果之前重复执行 Benchmark 函数的时间或次数。默认值为 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration).second 。当值为 0 时，表示没有 warmup ， 此时执行次数按用户输入的 `batchSize` 乘 `minBatches` 计算得到，当 `batchSize` 未指定时将抛出异常。

用户可以在 `@Configure` 宏中指定其他配置参数，这些参数将来可能会用到。 如果测试类使用 `@Configure` 宏指定配置，则该类中的所有测试函数都会继承此配置参数。 如果此类中的测试函数也标有 `@Configure` 宏，则配置参数将从类和函数合并，其中函数级宏优先。

## `@CustomAssertion` 宏

功能：`@CustomAssertions` 将函数指定为用户自定义断言。

该宏修饰的函数应满足两个要求：

  1. 顶层函数
  2. 首个入参为 [`AssertionCtx`](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest/unittest_package_api/unittest_package_classes.html#class-assertionctx) 类型。

示例如下：
    
    __
    
    @ CustomAssertion
    public func checkNotNone\<T\>(ctx: AssertionCtx, value: ?T): T {
        if (let Some(res) <- value) {
            return res
        }
        ctx.fail("Expected ${ctx.arg("value")} to be Some(_) but got None")
    }
    
`@CustomAssertion` 的输出为树状结构，以提高 嵌套断言 的可读性。

例如：
    
    __
    
    @ Test
    func customTest() {
        @Assert[checkNotNone](Option\<Bool\>.None)
    }
    
    __
    
    [ FAILED ] CASE: customTest (120812 ns)
    Assert Failed: @Assert[checkNotNone](Option< Bool >.None)
    └── Assert Failed: `('Option < Bool >.None' was expected to be Some(_) but got None)`
    
### 返回值

`@CustomAssertion` 修饰的函数存在返回值时，它将被 `@Assert` 宏返回。

示例如下:
    
    __
    
    @ Test
    func testfunc() {
        let maybeValue: Option\<SomeObject\> = maybeReturnsSomeObject()
        let value = @Assert[checkNotNone](maybeValue)
    
        @Assert[otherAssertion](value)
    }
    
> 注意: 自定义 `@Expect` 将总是返回 `Unit` ，不论 `@CustomAssertion` 修饰的函数返回值为什么类型。

### 嵌套断言

在 `@CustomAssertion` 定义中， `@Assert`/`@Expect` \(包括自定义断言\), `@AssertThrows`/`@ExpectThrows`, `@Fail`/`@FailExpect`宏均可被调用，形成嵌套。

例如:
    
    __
    
    @ CustomAssertion
    func iterableWithoutNone\<T\>(ctx: AssertionCtx, iter: Interable<?T>): Array\<T\> {
        iter |> map { it: ?T => @Assert[checkNotNone](it)} |> collectArray
    }
    
    __
    
    @ Test
    func customTest() {
        @Assert[iterWithoutNone]([true, false, Option\<Bool\>.None])
    }
    
    __
    
    [ FAILED ] CASE: customTest
    Assert Failed: @Assert[iterWithoutNone]([true, false, Option< Bool >.None])
    └── @Assert[checkNotNone](it):
        └── Assert Failed: `('it' was expected to be Some(_) but got None)`
    
如果用户自定义的断言在被 `@Expect` 宏调用时抛出 [`AssertException`](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest/unittest_package_api/unittest_package_exceptions.html#class-assertexception) 。它会被捕获，不会往外传递。 同样，如果用户自定义的断言失败在被 `@Assert` 宏调用时不引发异常，异常将被创建并抛出。

### 指定泛型类型

当指定泛型类型参数时，可使用与常规语法来完成。

例如:
    
    __
    
    @ CustomAssertion
    public func doesThrow\<E\>(ctx: AssertionCtx, codeblock: () -> Any): E where E <: Excepiton {
        ...
    }
    
    @Test
    func customTest() {
        let e = @Assert[doesThrow\<NoneValueException\>]({ => Option\<Bool\>.None.getOrThrow()})
    }
    
## `@Expect` 宏

功能：`@Expect` 声明 Expect 断言，测试函数内部使用，断言失败继续执行用例。

  1. `@Expect(leftExpr, rightExpr)` ，比较 `leftExpr` 和 `rightExpr` 是否相同。
  2. `@Expect(condition: Bool)` ，比较 `condition` 是否为 `true` ，即 `@Expect(condition: Bool)` 等同于 `@Expect(condition: Bool, true)` 。
  3. `@Expect[customAssertion](arguments...)`, 使用指定的参数 `arguments` 调用 `customAssertion` 函数。详见 `@CustomAssertion`。

## `@ExpectThrows` 宏

功能：声明[预期异常的断言](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest/unittest_samples/unittest_basics.html#%E9%A2%84%E6%9C%9F%E5%BC%82%E5%B8%B8%E7%9A%84%E6%96%AD%E8%A8%80)，测试函数内部使用，断言失败继续执行用例。

## `@Fail` 宏

功能：声明[预期失败的断言](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest/unittest_samples/unittest_basics.html#%E5%A4%B1%E8%B4%A5%E6%96%AD%E8%A8%80)，测试函数内部使用，断言失败停止用例。

## `@FailExpect` 宏

功能：声明[预期失败的断言](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest/unittest_samples/unittest_basics.html#%E5%A4%B1%E8%B4%A5%E6%96%AD%E8%A8%80)，测试函数内部使用，断言失败继续执行用例。

## `@Measure` 宏

功能：用于为性能测试指定 [Measurement](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest/unittest_package_api/unittest_package_interfaces.html#interface-measurement) 实例。只能应用于标有 `@Test` 宏的类或顶级函数的范围内。 对于每个 `Measurement`，都会进行不同的测量。因此，指定更多 `Measurement` 实例，将花费更多时间进行性能测试。 默认值为 [TimeNow](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest/unittest_package_api/unittest_package_structs.html#struct-timenow)\(\) ，它在内部使用 [DateTime](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/time/time_package_api/time_package_structs.html#struct-datetime).now\(\) 进行测量。

例如：
    
    __
    
    @ Test
    @Measure[TimeNow(), TimeNow(Nanos)]
    class BenchClass {
        @Bench
        func someBench() {
            for (i in 0..1000) {
                1e3 * Float64(i)
            }
        }
    }
    
输出的测试报告如下：
    
    __
    
    | Case      | Measurement  |   Median |         Err |   Err% |     Mean |
    |:----------|:-------------|---------:|------------:|-------:|---------:|
    | someBench | Duration     | 6.319 us | ±0.00019 us |  ±0.0% | 6.319 us |
    |           |              |          |             |        |          |
    | someBench | Duration(ns) |  6308 ns |   ±0.147 ns |  ±0.0% |  6308 ns |

`CSV` 报告如下：
    
    __
    
    Case,Args,Median,Err,Err%,Mean,Unit,Measurement
    "someBench",,"6319","0.185632","0.0","6319","ns","Duration"
    "someBench",,"6308","0.146873","0.0","6308","ns","Duration(ns)"

## `@Parallel` 宏

功能：`@Parallel` 宏可以修饰测试类。被 `@Parallel` 修饰的测试类中的测试用例可并行执行。该配置仅在 `--parallel` 运行模式下生效。

  1. 所有相关的测试用例应该各自独立，不依赖于任何可变的共享的状态值。
  2. `beforeAll()` 和 `afterAll()` 应该是可重入的，以便可以在不同的进程中多次运行。
  3. 需要并行化的测试用例本身应耗时较长。否则并行化引入的多次 `beforeAll()` 和 `afterAll()` 可能会超过并行化的收益。
  4. 不允许与 `@Bench` 同时使用。由于性能用例对底层资源敏感，用例是否并行执行，将影响性能用例的结果，因此禁止与 `@Bench` 同时使用。

## `@PowerAssert` 宏

  1. `@PowerAssert(leftExpr, rightExpr)` ，比较 `leftExpr` 和 `rightExpr` 值是否相同。
  2. `@PowerAssert(condition: Bool)` ，比较 `condition` 是否为 `true` ，即 `@PowerAssert(condition: Bool)` 等同于 `@PowerAssert(condition: Bool, true)` 。

`@PowerAssert` 宏对比 `@Assert` ，可显示表达式各个可被计算的子表达式的值的详细图表，包括步骤中的异常。

其打印的详细信息如下：
    
    __
    
    Assert Failed: `(foo(10, y: "test" + s) == foo(s.size, y: s) + bar(a))`
                    |          |        |_||  |   |_|    |   |_|| |   |_||
                    |          |       "123"  |  "123"   |  "123" |    1 |
                    |          |__________||  |   |______|      | |______|
                    |            "test123" |  |       3         |    33  |
                    |______________________|  |_________________|        |
                                0             |        1                 |
                                              |__________________________|
                                                            34
    --------------------------------------------------------------------------------------------------

请注意，返回的 [Tokens](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/ast/ast_package_api/ast_package_classes.html#class-tokens) 是初始表达式，但包装到一些内部包装器中，这些包装器允许进一步打印中间值和异常。

## `@Skip` 宏

功能：`@Skip` 修饰已经被 `@TestCase` / `@Bench` 修饰的函数，使该测试用例被跳过。

语法规则为 `@Skip[expr]` 。

  1. `expr` 暂只支持 `true` ，表达式为 `true` 时，跳过该测试，其他均为 `false` 。
  2. 默认 `expr` 为 `true` 即 `@Skip[true]` == `@Skip` 。

## `@Strategy` 宏

功能：在函数上使用 `@Strategy` 可从该函数创建新的 [DataStrategy](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_interfaces.html#interface-datastrategy) 。它是一个用于组合、映射和重用策略的便捷 API。

标记为 `@Strategy` 的函数必须满足以下条件：

  1. 必须显式指定返回类型。
  2. 参数必须与宏参数中指定的 DSL 相对应。
  3. 可以在 `@Test` 标记的类的外部和内部使用。

> 实现说明：宏展开的结果是一个具有函数名称和 [DataStrategyProcessor](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest/unittest_package_api/unittest_package_classes.html#class-datastrategyprocessor) 类型的变量。 该变量可以在任何可以使用 [DataStrategy](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_interfaces.html#interface-datastrategy) 的地方使用。

## `@Tag` 宏

`@Tag` 宏可以应用于 `@Test` 类和 `@Test` 或 `@TestCase` 或 `@Bench` 函数，提供测试实体的元信息。后续可以通过 [`--include-tags`](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest/unittest_samples/unittest_basics.html#--include-tags) 和 [`--exclude-tags`](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest/unittest_samples/unittest_basics.html#--exclude-tags) 运行选项过滤带有这些标签的测试实体。

### 支持的语法

  1. 单个 `@Tag` 在测试函数上。
    
        __
    
    @ Tag[Unittest]
    func test() {}
    
  2. 单个 `@Tag` 包含多个标签名，用逗号分隔。
    
        __
    
    @ Tag[Unittest, TestAuthor]
    func test() {}
    
  3. 多个 `@Tag` 在测试函数上。
    
        __
    
    @ Tag[Smoke]
    @Tag[Backend, JiraTask3271]
    func test() {}
    
### 规则与约束

  * 标签应为有效的仓颉语言标识符。
  * `@Tag` 内的标签列表不应为空。
  * 如果 `@Tag` 放在 `@Test` 类的顶部，它会将其标签传播到其中的 `@TestCase` 函数上。

例如：
    
    __
    
    @ Test
    @Tag[Unittest]
    public class UnittestClass {
        @TestCase[x in [1, 2, 3, 4, 5]]
        @Tag[JiraTask3271]
        func caseA(x: Int64) {}
    
        @TestCase
        func caseB() {}
    }
    
等同于：
    
    __
    
    @ Test
    @Tag[Unittest]
    public class UnittestClass {
        @TestCase[x in [1, 2, 3, 4, 5]]
        @Tag[Unittest]
        @Tag[JiraTask3271]
        func caseA(x: Int64) {}
    
        @TestCase
        @Tag[Unittest]
        func caseB() {}
    }
    
## `@Test` 宏

功能：`@Test` 宏应用于顶级函数或顶级类，使该函数或类转换为单元测试类。

如果是顶级函数，则该函数新增一个具有单个测试用例的类提供给框架使用，同时该函数仍旧可被作为普通函数调用。

标有 `@Test` 的类必须满足以下条件：

  1. 它必须有一个无参构造函数。
  2. 不能从其他类继承。

> 实现说明：`@Test` 宏为任何用它标记的类引入了一个新的基类：`unittest.TestCases` 。 `unittest.TestCases` 的所有公共和受保护成员（请参阅下面的 API 概述）将在标有 `@Test` 的类或函数中变得可用，包括两个字段： 1\. 包含此测试的 `TestContext` 实例的 `ctx`。 2\. 包含类的名称的 `name` 。 单元测试框架的用户不应修改这些字段，因为这可能会导致不可预期的错误。

## `@TestBuilder` 宏

功能：声明一个[动态测试](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest/unittest_samples/unittest_dynamic_tests.html#%E5%8A%A8%E6%80%81%E6%B5%8B%E8%AF%95)套。

## `@TestCase` 宏

功能：`@TestCase` 宏用于标记单元测试类内的函数，使这些函数成为单元测试的测试用例。

标有 `@TestCase` 的函数必须满足以下条件：

  1. 该类必须用 `@Test` 标记。
  2. 该函数返回类型必须是 [Unit](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#unit) 。

    __
    
    @ Test
    class Tests {
        @TestCase
        func fooTest(): Unit {...}
    }
    
测试用例可能有参数，在这种情况下，开发人员必须使用参数化测试 DSL 指定这些参数的值：
    
    __
    
    @ Test[x in source1, y in source2, z in source3]
    func test(x: Int64, y: String, z: Float64): Unit {}
    
此 DSL 可用于 `@Test`、`@Strategy`、`@Bench` 和 `@TestCase` 宏，其中 `@Test` 仅在顶级函数上时才可用。如果测试函数中同时存在 `@Bench` 和 `@TestCase` ，则只有 `@Bench` 可以包含 DSL 。 在 DSL 语法中，`in` 之前的标识符（在上面的示例中为 `x` 、`y` 和 `z` ）必须直接对应于函数的参数，参数源（在上面的示例中为`source1` 、`source2` 和 `source3`）是任何有效的仓颉表达式（该表达式类型必须实现接口 [DataStrategy](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_interfaces.html#interface-datastrategy)\<T\> 或 [DataStrategyProcessor](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest/unittest_package_api/unittest_package_classes.html#class-datastrategyprocessor)\<T\>，详见下文）。 参数源的元素类型（此类型作为泛型参数 `T` 提供给接口 [DataStrategy](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_interfaces.html#interface-datastrategy)\<T\> ）必须与相应函数参数的类型严格相同。

支持的参数源类型如下：

  * Arrays: `x in [1,2,3,4]` 。
  * Ranges: `x in 0..14` 。
  * 随机生成的值: `x in random()` 。
  * 从 json 文件中读取到的值: `x in json("filename.json")` 。
  * 从 csv 文件中读取到的值: `x in csv("filename.csv")` 。
  * `@Strategy` 修饰的函数: `x in nameOfStrategyAnnotatedFunction` 。
  * 使用 [DataStrategyProcessor](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest/unittest_package_api/unittest_package_classes.html#class-datastrategyprocessor) 组合数据策略的结果。

> 高级用户可以通过定义自己的类型并且实现 [DataStrategy](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_interfaces.html#interface-datastrategy)\<T\> 接口来引入自己的参数源类型。

使用 `random()` 的随机生成函数默认支持以下类型：

  * [Unit](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#unit)
  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool)
  * 所有内置的 integer 类型（包含有符号和无符号）
  * 所有内置的 float 类型
  * [Ordering](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-ordering)
  * 所有已支持类型的数组类型
  * 所有已支持类型的 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 类型

> 若需要新增其他的类型支持 `random()` ，可以让该类型扩展 [Arbitrary](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_prop_test/unittest_prop_test_package_api/unittest_prop_test_package_interfaces.html#interface-arbitrary) 。 在参数有多个值时，`beforeEach` / `afterEach` 不会在不同值下重复执行而仅会执行一次。若确实需要在每个值下做初始化和去初始化，需要在测试主体中写。对于性能测试方案， `@Strategy` 应该用于需要从基准中排除的设置代码。没有为这种情况提供特殊的API，因为在大多数情况下，这样的代码依赖于特定的参数值。

## `@TestTemplate` 宏

功能: `@TestTemplate` 宏可修饰抽象类，使得它成为一个 [测试模版](./libs/std/unittest/unittest_samples/unittest_test_templates.md)。

## `@Timeout` 宏

功能：`@Timeout` 指示测试应在指定时间后终止。它有助于测试可能运行很长时间或陷入无限循环的复杂算法。

语法规则为 `@Timeout[expr]`

`expr` 的类型应为 std.time.[Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 。 其修饰测试类时为每个相应的测试用例提供超时时间。

## `@Types` 宏

功能：`@Types` 宏为测试类或测试函数提供类型参数。它可以放置在测试类或测试函数上。

语法规则为 `@Types[Id1 in <Type1, Type2, Type3>, Id2 in <Type4, Type5> ...]` 其中 `Id1`、`Id2`... 是有效类型参数标识符，`Type1`、`Type2`、`Type3`...是有效的仓颉类型。

`@Types` 宏有以下限制:

  * 必须与 `@Test`， `@TestCase` 或 `@Bench` 宏共同使用。
  * 一个声明只能有一个 `@Types` 宏修饰。
  * 该声明必须是具有与 `@Types` 宏中列出的相同类型参数的泛型类或函数。
  * 类型列表中列出的类型不能相互依赖，例如 `@Types[A in <Int64, String>, B in <List<A>>]` 将无法正确编译。但是，在为该类内的测试函数提供类型时，可以使用为测试类提供的类型。例如：

    __
    
    @ Test
    @Types[T in <...>]
    class TestClass\<T\> {
        @TestCase
        @Types[U in <Array\<T\>>]
        func testfunc\<U\>() {}
    }
    
该机制可以与其他测试框架功能一起使用，例如 `@Configure` 等。

## `@UnittestOption` 宏

该宏可用于注册自定义配置项。只有已注册的配置项才能与单元测试框架一起使用。宏的参数是 **类型** 、 **选项名称** 、可选的 **验证器回调** 和 **可选的描述** 。 对所有单元测试配置项的严格检查保证了控制台输入和源代码的正确性。它可以防止笔误和使用错误类型的值。

示例：
    
    __
    
    @ UnittestOption[String, Int](optionName)
    @UnittestOption[String](opt, /*validator*/ { str: String => str.size < 5 })
    @UnittestOption[A, B](option3, { x: Any => ... })
    @UnittestOption[Bool](needLog, /*description*/ "The option do ...")
    @UnittestOption[Int](public myOpt)
    
具体规则如下：

  * `@UnittestOption` 对同一个配置项不能重复使用。
  * `@UnittestOption` 必须在顶层。
  * 如果配置项有多种类型，则验证器回调参数应为 Any，如果只有一种类型对该选项有效，则验证器回调参数应为该具体类型。
  * 验证器回调返回类型为 Bool 或 ?String。
  * `true` 表示选项有效，`false` 表示选项值无效。
  * ·`Some<String>` 包含选项无效原因的描述，`None<String>` 表示选项值有效。

与 `@Configuration` 配合使用的示例如下：

配置项的键名称是通过首字母大写并以 `Key` 字符串开头构建的成员。例如，对于名为 `zxc` 的配置项，有效键名称将为 `KeyZxc.zxc`
    
    __
    
    @ UnittestOption[String](opt)
    
    @Test
    func test_that_derived_type_overwrite_parent_type_value_in_configuration() {
        let conf = Configuration()
    
        conf.set(KeyOpt.opt, "a")
        let value = conf.get(KeyOpt.opt).getOrThrow()
        @PowerAssert(value == "a")
    }
    
[Configuration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_classes.html#class-configuration) 类正确处理继承的情况。示例如下：
    
    __
    
    open class Base {
        public open func str() {
            "Base"
        }
    }
    
    class Derived <: Base {
        public func str() {
            "Derived"
        }
    }
    
    @UnittestOption[Base](opt)
    
    @Test
    func test_that_derived_type_overwrite_parent_type_value_in_configuration() {
        let conf = Configuration()
    
        conf.set(KeyOpt.opt, Base())
        let first = conf.get(KeyOpt.opt).getOrThrow()
        @PowerAssert(first.str() == "Base")
    
        conf.set(KeyOpt.opt, Derived())
        let second = conf.get(KeyOpt.opt).getOrThrow()
        @PowerAssert(second.str() == "Derived")
    }