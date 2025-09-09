
# 枚举

## enum Exhaustiveness
    
    __
    
    public enum Exhaustiveness {
        Exhaustive | Partial
    }
    
功能：此枚举类型用于指定 `unordered` 函数的验证模式，包含两种模式。

Exhaustive 模式要求对于验证范围内的所有[桩签名](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_samples/mock_framework_basics.html#%E6%A1%A9%E7%AD%BE%E5%90%8D)，均需在验证动作中定义。

Partial 模式的要求较松，可以忽略“桩签名”在验证范围内未被验证动作定义的执行行为。

举例来说:
    
    __
    
    for (i in 0..6) {
        foo.bar(i % 3)
    }
    
    // 此处验证动作将抛出异常，因为 foo.bar()在验证范围内一共执行了 6 次，而此处的验证动作仅指定了 4 次执行行为。
    Verify.unordered(
        @Called(foo.bar(1)).times(2),
        @Called(foo.bar(2)).times(2)
    )
    
    // 此处验证动作可以成功，指定了 Partial 模式后，2 次未在验证动作中定义的执行行为将被忽略。
    Verify.unordered(Partial,
        @Called(foo.bar(1)).times(2),
        @Called(foo.bar(2)).times(2)
    )
    
### Exhaustive
    
    __
    
    Exhaustive
    
功能：要求在验证范围内的每一次“桩签名”的调用均需在验证动作中被定义。

### Partial
    
    __
    
    Partial
    
功能：允许验证范围内存在未在验证动作中被定义的“桩签名”的调用行为。

## enum MockSessionKind
    
    __
    
    public enum MockSessionKind {
        | Forbidden
        | Stateless
        | Verifiable
    }
    
功能：控制允许在 [MockSession](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_classes.html#static-func-opensession) 使用的[桩](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_samples/mock_framework_basics.html#%E9%85%8D%E7%BD%AE-api)的类型。 只能验证在 `Verifiable` 的 `Session` 中创建的桩的期望。

### Forbidden

功能：不允许使用[桩](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_samples/mock_framework_basics.html#%E9%85%8D%E7%BD%AE-api)。

### Stateless

功能：只允许无状态的[桩](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_samples/mock_framework_basics.html#%E9%85%8D%E7%BD%AE-api)。 不允许本质上有状态的操作，例如 returnsConsequively 和基数说明符（ cardinality specifier， 指定预期执行次数的表达式）。

### Verifiable

功能：允许任意[桩](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_samples/mock_framework_basics.html#%E9%85%8D%E7%BD%AE-api)。

## enum StubMode
    
    __
    
    public enum StubMode {
        | ReturnsDefaults
        | SyntheticFields
    }
    
功能：控制[桩的模式](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_samples/mock_framework_stubs.html#%E6%A1%A9%E7%9A%84%E6%A8%A1%E5%BC%8F)。

### ReturnsDefaults

功能：`Mock object` 将为基础类型返回默认的值。用于简化 `mock object` 的配置步骤。 这些默认值一般为空或 0 。 支持的基础类型为：Unit, 数值类型（ 如 Int64 ）, option 类型, Bool, String, Array, ArrayList, HashSet, HashMap 。

### SyntheticFields

功能：`Mock object` 会将其可变属性和字段视为可变字段。 与直接使用 SyntheticField 类似，但更简洁。 读取未初始化的字段将导致错误。