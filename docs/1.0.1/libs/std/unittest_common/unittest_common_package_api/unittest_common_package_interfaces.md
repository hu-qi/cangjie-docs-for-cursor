
# 接口

## interface DataProvider
    
    __
    
    public interface DataProvider\<T\> {
        func provide(): Iterable\<T\>
        func positions(): Array\<Int64\>
        prop isInfinite: Bool
    }
    
功能：DataStrategy 的组件，用于提供测试数据，T 指定提供者提供的数据类型。

### prop isInfinite
    
    __
    
    prop isInfinite: Bool
    
功能：是否无法穷尽。

类型：[Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool)

### func provide\(\)
    
    __
    
    func provide(): Iterable\<T\>
    
功能：获取数据迭代器。

返回值：

  * [Iterable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-iterablee)\<T\> \- 数据迭代器。

### func positions\(\)
    
    __
    
    func positions(): Array\<Int64\>
    
功能：获取位置信息。

返回值：

  * [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<Int64\> \- 位置信息。

### extend\<T\> Array\<T\> <: DataProvider\<T\>
    
    __
    
    extend \<T\> Array\<T\> <: DataProvider\<T\>
    
功能：为 [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt) 实现了 DataProvider\<T\> 接口。使如下配置形式可用：
    
    __
    
    @ Test[x in [1,2,3]]
    func test(x: Int64) {}
    
父类型：

  * DataProvider\<T\>

### extend\<T\> Range\<T\> <: DataProvider\<T\>
    
    __
    
    extend \<T\> Range\<T\> <: DataProvider\<T\>
    
功能：为 [Range](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-ranget-where-t--countablet--comparablet--equatablet) 实现了 [DataProvider](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_interfaces.html#interface-dataprovider)\<T\> 接口。使如下配置形式可用：
    
    __
    
    @ Test[x in (0..5)]
    func test(x: Int64) {}
    
父类型：

  * DataProvider\<T\>

## interface DataShrinker\<T\>
    
    __
    
    public interface DataShrinker\<T\> {
        func shrink(value: T): Iterable\<T\>
    }
    
功能：DataStrategy 的组件，用于在测试期间缩减数据，T 指定该收缩器处理的数据类型。

### func shrink\(T\)
    
    __
    
    func shrink(value: T): Iterable\<T\>
    
功能：获取类型 T 的值并生成较小值的集合。什么被认为是“较小”取决于数据的类型。

参数：

  * value: T - 被缩减的值。

返回值：

  * [Iterable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-iterablee)\<T\> \- 较小值的集合，当数据无法再被缩减时返回空集合。

## interface DataStrategy
    
    __
    
    public interface DataStrategy\<T\> {
        func provider(configuration: Configuration): DataProvider\<T\>
        func shrinker(configuration: Configuration): DataShrinker\<T\>
    }
    
功能：为参数化测试提供数据的策略，T 指定该策略操作的数据类型。

### func provider\(Configuration\)
    
    __
    
    func provider(configuration: Configuration): DataProvider\<T\>
    
功能：获取提供测试数据组件。

参数：

  * configuration: [Configuration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_classes.html#class-configuration) \- 配置信息。

返回值：

  * [DataProvider](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_interfaces.html#interface-dataprovider)\<T\> \- 提供测试数据的组件对象。

### func shrinker\(Configuration\)
    
    __
    
    open func shrinker(configuration: Configuration): DataShrinker\<T\>
    
功能：获取缩减测试数据的组件。

参数：

  * configuration: [Configuration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_classes.html#class-configuration) \- 配置信息。

返回值：

  * DataShrinker\<T\> \- 缩减测试数据的组件对象。

### extend\<T\> Array\<T\> <: DataStrategy\<T\>
    
    __
    
    extend \<T\> Array\<T\> <: DataStrategy\<T\>
    
功能：为 [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt) 实现了 DataStrategy\<T\> 接口。使如下配置形式可用：
    
    __
    
    @ Test[x in [1,2,3]]
    func test(x: Int64) {}
    
父类型：

  * DataStrategy\<T\>

### extend\<T\> Range\<T\> <: DataStrategy\<T\>
    
    __
    
    extend \<T\> Range\<T\> <: DataStrategy\<T\>
    
功能：为 [Range](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-ranget-where-t--countablet--comparablet--equatablet) 实现了 DataStrategy\<T\> 接口。使如下配置形式可用：
    
    __
    
    @ Test[x in (0..5)]
    func test(x: Int64) {}
    
父类型：

  * DataStrategy\<T\>

## interface PrettyPrintable
    
    __
    
    public interface PrettyPrintable {
        func pprint(to: PrettyPrinter): PrettyPrinter
    }
    
功能：类型实现该接口表示可以较好地进行颜色及缩进格式的打印。

### func pprint\(PrettyPrinter\)
    
    __
    
    func pprint(to: PrettyPrinter): PrettyPrinter
    
功能：将类型值打印到指定的打印器中。

参数：

  * to: [PrettyPrinter](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_classes.html#class-prettyprinter) \- 打印器。

返回值：

  * [PrettyPrinter](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_classes.html#class-prettyprinter) \- 打印器。

### extend\<T\> Array\<T\> <: PrettyPrintable where T <: PrettyPrintable
    
    __
    
    extend \<T\> Array\<T\> <: PrettyPrintable where T <: PrettyPrintable {
    }
    
功能：为 [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt) 类型扩展了 PrettyPrintable 接口。

父类型：

  * PrettyPrintable

#### func pprint\(PrettyPrinter\)
    
    __
    
    public func pprint(to: PrettyPrinter): PrettyPrinter
    
功能：将 [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<T\> 打印到指定的打印器中。

参数：

  * to: [PrettyPrinter](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_classes.html#class-prettyprinter) \- 打印器。

返回值：

  * [PrettyPrinter](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_classes.html#class-prettyprinter) \- 打印器。

### extend\<T\> ArrayList\<T\> <: PrettyPrintable where T <: PrettyPrintable
    
    __
    
    extend \<T\> ArrayList\<T\> <: PrettyPrintable where T <: PrettyPrintable {
    }
    
功能：为 [ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt) 类型扩展了 PrettyPrintable 接口。

父类型：

  * PrettyPrintable

#### func pprint\(PrettyPrinter\)
    
    __
    
    public func pprint(to: PrettyPrinter): PrettyPrinter
    
功能：将 ArrayList\<T\> 打印到指定的打印器中。

参数：

  * to: [PrettyPrinter](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_classes.html#class-prettyprinter) \- 打印器。

返回值：

  * [PrettyPrinter](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_classes.html#class-prettyprinter) \- 打印器。

## interface KeyFor
    
    __
    
    public interface KeyFor\<T\> {
        prop name: String
    }
    
功能：[Configuration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_classes.html#class-configuration) 中配置型的键的类型。

可以通过 [@UnitestOption](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_testmacro/unittest_testmacro_package_api/unittest_testmacro_package_macros.html#unittestoption-%E5%AE%8F) 定义自定义配置项键值。内置的 unittest 配置项可以根据[命名规则](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_testmacro/unittest_testmacro_package_api/unittest_testmacro_package_macros.html#customassertion-%E5%AE%8F)获取。例如，可以通过 `KeyRandomSeed.randomSeed` 键从 [Configuration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_classes.html#class-configuration) 中提取 `randomSeed` 。

### prop name
    
    __
    
    prop name: String
    
功能：[Configuration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_classes.html#class-configuration) 中使用的键名称的字符串表示形式。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)