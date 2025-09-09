  
# 类

## class Configuration
    
    __
    
    public class Configuration <: ToString {
        public init()
    }
    
功能：存储 `@Configure` 宏生成的 `unittest` 配置数据的对象。Configuration 与 [HashMap](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-hashmapk-v-where-k--hashable--equatablek) 类似，但它的键是 [KeyFor](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_interfaces.html#interface-keyfor) 类型，值为任何给定类型。

父类型：

  * [ToString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-tostring)

### init\(\)
    
    __
    
    public init()
    
功能：构造一个空的Configuration实例。

### func clone\(\)
    
    __
    
    public func clone(): Configuration
    
功能：拷贝一份Configuration对象。

返回值：

  * Configuration \- 拷贝的对象。

### func get\<T\>\(KeyFor\<T\>\)
    
    __
    
    public func get\<T\>(key: KeyFor\<T\>): ?T
    
功能：获取 key 对应的值。

T 为 泛型参数，用于在对象中查找对应类型的值。

参数：

  * key: [KeyFor](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_interfaces.html#interface-keyfor) \- 配置项的键值。

返回值：

  * ?T - 未找到时返回 None，找到对应类型及名称的值时返回 Some\<T\>\(v\) 。

### func getByName\<T\>\(name: String\): ?T
    
    __
    
    public func getByName\<T\>(name: String): ?T
    
功能：获取 key 对应的值。

T 为 泛型参数，用于在对象中查找对应类型的值。

参数：

  * name: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 键名称。

### func remove\<T\>\(KeyFor\<T\>\)
    
    __
    
    public func remove\<T\>(key: KeyFor\<T\>): ?T
    
功能：删除对应键名称和类型的值。

参数：

  * key: [KeyFor](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_interfaces.html#interface-keyfor) \- 配置项的键值。

返回值：

  * ?T - 当存在该值时返回该值，当不存在时返回 None。

### func removeByName\<T\>\(String\)
    
    __
    
    public func removeByName\<T\>(name: String): ?T
    
功能：删除对应键名称和类型的值。

参数：

  * key: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 键名称。

返回值：

  * ?T - 当存在该值时返回该值，当不存在时返回 None。

### func set\<T\>\(KeyFor\<T\>, T\)
    
    __
    
    public func set\<T\>(key: KeyFor\<T\>, value: T)
    
功能：给对应键名称和类型设置值。

参数：

  * key: [KeyFor](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_interfaces.html#interface-keyfor) \- 配置项的键值。
  * value: T - 键值。

### func setByName\<T\>\(name: String, value: T\)
    
    __
    
    public func setByName\<T\>(name: String, value: T): Unit
    
功能：给对应键名称和类型设置值。

参数：

  * name: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 键名称。
  * value: T - 键值。

### func toString\(\)
    
    __
    
    public func toString(): String
    
功能：该对象的字符化对象，当内部对象未实现 [ToString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-tostring) 接口时，输出 '<not printable>' 。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 字符串。

### static func merge\(Configuration, Configuration\)
    
    __
    
    public static func merge(parent: Configuration, child: Configuration): Configuration
    
功能：合并 child 到 parent 配置中。其中如有同名键值 child 覆盖 parent 。

参数：

  * parent:Configuration \- 需要合并的配置
  * child:Configuration \- 需要合并的配置

返回值：

  * Configuration \- 合并完成的配置

### extend Configuration <: BenchmarkConfig
    
    __
    
    extend Configuration <: BenchmarkConfig {}
    
功能：为 Configuration 扩展 [BenchmarkConfig](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest/unittest_package_api/unittest_package_interfaces.html#interface-benchmarkconfig) 接口。

父类型：

  * [BenchmarkConfig](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest/unittest_package_api/unittest_package_interfaces.html#interface-benchmarkconfig)

#### func batchSize\(Int64\)
    
    __
    
    public func batchSize(b: Int64)
    
功能：配置性能测试时一个批次的执行次数。

参数：

  * b: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 执行次数。

#### func batchSize\(Range\<Int64\>\)
    
    __
    
    public func batchSize(x: Range\<Int64\>)
    
功能：配置性能测试时一个批次的执行次数范围。

参数：

  * b: [Range](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-ranget-where-t--countablet--comparablet--equatablet)\<Int64\> \- 执行次数范围。

#### func explicitGC\(ExplicitGcType\)
    
    __
    
    public func explicitGC(x: ExplicitGcType)
    
功能：配置性能测试时执行 GC 的方式。

参数：

  * x: [ExplicitGcType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest/unittest_package_api/unittest_package_enums.html#enum-explicitgctype) \- GC 执行的方式。

#### func minBatches\(Int64\)
    
    __
    
    public func minBatches(x: Int64)
    
功能：配置性能测试时最少的批次数。

参数：

  * x: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 最少的批次数。

#### func minDuration\(Duration\)
    
    __
    
    public func minDuration(x: Duration)
    
功能：配置性能测试时最短的执行时长。

参数：

  * x: [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) \- 最短的执行时长。

#### func warmup\(Int64\)
    
    __
    
    public func warmup(x: Int64)
    
功能：配置性能测试时预热的秒数。

参数：

  * x: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 预热的秒数。

#### func warmup\(Duration\)
    
    __
    
    public func warmup(x: Duration)
    
功能：配置性能测试时预热的时长。

参数：

  * x: [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) \- 预热的时长。

## class ConfigurationKey
    
    __
    
    abstract sealed class ConfigurationKey <: Equatable\<ConfigurationKey\> & Hashable {}
    
功能：配置项的键值对象。提供判等及 hashCode 方法。

父类型：

  * [Equatable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-equatablet)\<ConfigurationKey\>
  * [Hashable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-hashable)

### func equals\(ConfigurationKey\)
    
    __
    
    protected func equals(that: ConfigurationKey): Bool
    
功能：判断是否相等。

参数：

  * that: ConfigurationKey \- 被对比的对象。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 是否相等。

### func hashCode
    
    __
    
    public override func hashCode(): Int64
    
功能：获取 hashCode 值。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- hashCode 值。

### operator func ==\(ConfigurationKey\)
    
    __
    
    public override operator func ==(that: ConfigurationKey)
    
功能：判等。

参数：

  * that: ConfigurationKey \- 被对比的数据

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 是否相等。

### public override operator func \!=\(that: ConfigurationKey\)
    
    __
    
    public override operator func !=(that: ConfigurationKey)
    
功能：判不等。

参数：

  * that: ConfigurationKey \- 被对比的数据

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 是否不相等。

## class PrettyPrinter
    
    __
    
    public abstract class PrettyPrinter {
        public PrettyPrinter(let indentationSize!: UInt64 = 4, let startingIndent!: UInt64 = 0)
    }
    
功能：拥有颜色和对齐、缩进控制的打印器。

### PrettyPrinter\(UInt64,UInt64\)
    
    __
    
    public PrettyPrinter(let indentationSize!: UInt64 = 4, let startingIndent!: UInt64 = 0)
    
功能：PrettyPrinter构造器。

参数：

  * indentationSize\!: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 一个缩进的空格数，默认4格。
  * startingIndent\!: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 开头的缩进个数，默认0个缩进。

### prop isTopLevel
    
    __
    
    public prop isTopLevel: Bool
    
功能：获取是否在打印的缩进顶层。

类型：Bool 。

### func append\(String\)
    
    __
    
    public func append(text: String): PrettyPrinter
    
功能：增加一个字符串到打印器中。不支持多行字符串，对多行字符串不支持缩进。

参数：

  * text: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 被增加的字符串。

返回值：

  * PrettyPrinter \- 打印器。

### func append\<PP\>\(PP\)where PP <: PrettyPrintable
    
    __
    
    public func append\<PP\>(value: PP): PrettyPrinter where PP <: PrettyPrintable
    
功能：增加一个实现了 [PrettyPrintable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_interfaces.html#interface-prettyprintable) 的对象到打印器中。

参数：

  * value: PP - 一个实现了 [PrettyPrintable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_interfaces.html#interface-prettyprintable) 的对象。

返回值：

  * PrettyPrinter \- 打印器。

### func appendCentered\(String, UInt64\)
    
    __
    
    public func appendCentered(text: String, space: UInt64): PrettyPrinter
    
功能：增加一个字符串到打印器中。居中对齐至指定字符数，不足的字符由空格补齐。不支持多行字符串，对多行字符串不支持缩进。

参数：

  * text: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 被增加的字符串。
  * space: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 对齐的字符数量。

返回值：

  * PrettyPrinter \- 打印器。

### func appendLeftAligned\(String, UInt64\)
    
    __
    
    public func appendLeftAligned(text: String, space: UInt64): PrettyPrinter
    
功能：增加一个字符串到打印器中。左对齐至指定字符数，不足的字符由空格补齐。不支持多行字符串，对多行字符串不支持缩进。

参数：

  * text: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 被增加的字符串。
  * space: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 对齐的字符数量。

返回值：

  * PrettyPrinter \- 打印器。

### func appendLine\(String\): PrettyPrinter
    
    __
    
    public func appendLine(text: String): PrettyPrinter
    
功能：增加一个字符串到打印器中，跟着一个换行符。

参数：

  * text: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 被增加的字符串。

返回值：

  * PrettyPrinter \- 打印器。

### func appendLine\<PP\>\(PP\) where PP <: PrettyPrintable
    
    __
    
    public func appendLine\<PP\>(value: PP): PrettyPrinter where PP <: PrettyPrintable
    
功能：增加一个实现了 [PrettyPrintable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_interfaces.html#interface-prettyprintable) 的对象到打印器中，跟着一个换行符。

参数：

  * value: PP - 一个实现了 [PrettyPrintable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_interfaces.html#interface-prettyprintable) 的对象。

返回值：

  * PrettyPrinter \- 打印器。

### func appendRightAligned\(String, UInt64\)
    
    __
    
    public func appendRightAligned(text: String, space: UInt64): PrettyPrinter
    
功能：增加一个字符串到打印器中。右对齐至指定字符数。不支持多行字符串，对多行字符串不支持缩进。

参数：

  * text: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 被增加的字符串。
  * space: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 对齐的字符数量。

返回值：

  * PrettyPrinter \- 打印器。

### func colored\(Color, body: \(\) -> Unit\)
    
    __
    
    public func colored(color: Color, body: () -> Unit): PrettyPrinter
    
功能：对闭包中给打印器增加的字符串指定颜色。 常见的用法如下：
    
    __
    
    pp.colored(RED) {
        pp.appendLine("1")
        pp.appendLine("2")
        pp.appendLine("3")
    }
    
此时字符串 "1" "2" "3" 均被打印为红色。

参数：

  * color: [Color](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_enums.html#enum-color) \- 指定打印的颜色。
  * body: \(\) -> Unit - 添加字符串的闭包。

返回值：

  * PrettyPrinter \- 打印器。

### func colored\(Color, String\)
    
    __
    
    public func colored(color: Color, text: String): PrettyPrinter
    
功能：对给打印器增加的字符串指定颜色。

参数：

  * color: [Color](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_enums.html#enum-color) \- 指定打印的颜色。
  * text: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 添加的字符串。

返回值：

  * PrettyPrinter \- 打印器。

### func customOffset\(UInt64, body: \(\) -> Unit\)
    
    __
    
    public func customOffset(symbols: UInt64, body: () -> Unit): PrettyPrinter
    
功能：对闭包中给打印器增加的字符串指定额外缩进的个数。 常见的用法如下：
    
    __
    
    pp.customOffset(5) {
        pp.appendLine("1")
        pp.appendLine("2")
        pp.appendLine("3")
    }
    
此时字符串 "1" "2" "3" 均额外缩进5个字符。

参数：

  * symbols: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 指定缩进个数。
  * body: \(\) -> Unit - 添加字符串的闭包。

返回值：

  * PrettyPrinter \- 打印器。

### func indent\(body: \(\) -> Unit\)
    
    __
    
    public func indent(body: () -> Unit): PrettyPrinter
    
功能：对闭包中给打印器增加的字符串指定额外缩进一次。 常见的用法如下：
    
    __
    
    pp.indent {
        pp.appendLine("1")
        pp.appendLine("2")
        pp.appendLine("3")
    }
    
此时字符串 "1" "2" "3" 均额外缩进一次。

参数：

  * body: \(\) -> Unit - 添加字符串的闭包。

返回值：

  * PrettyPrinter \- 打印器。

### func indent\(UInt64, body: \(\) -> Unit\)
    
    __
    
    public func indent(indents: UInt64, body: () -> Unit): PrettyPrinter
    
功能：对闭包中给打印器增加的字符串指定额外缩进指定次数。 常见的用法如下：
    
    __
    
    pp.indent(2) {
        pp.appendLine("1")
        pp.appendLine("2")
        pp.appendLine("3")
    }
    
此时字符串 "1" "2" "3" 均额外缩进2次。

参数：

  * indents: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 指定额外缩进的次数。
  * body: \(\) -> Unit - 添加字符串的闭包。

返回值：

  * PrettyPrinter \- 打印器。

### func newLine\(\)
    
    __
    
    public func newLine(): PrettyPrinter
    
功能：增加新行。

返回值：

  * PrettyPrinter \- 打印器。

### func put\(String\)
    
    __
    
    protected func put(s: String): Unit
    
功能：打印字符串。

参数：

  * s: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 需打印的字符串。

### func putNewLine\(\)
    
    __
    
    protected open func putNewLine(): Unit
    
功能：打印新行。

### func setColor\(Color\)
    
    __
    
    protected func setColor(color: Color): Unit
    
功能：设置颜色。

参数：

  * color: [Color](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_enums.html#enum-color) \- 指定的颜色。

## class PrettyText
    
    __
    
    public class PrettyText <: PrettyPrinter & PrettyPrintable & ToString {
        public init()
        public init(string: String)
    }
    
功能：存储打印的输出。主要用途是中间存储和传递这些值。

实现了 PrettyPrinter（可以打印到）和 [PrettyPrintable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_interfaces.html#interface-prettyprintable)（可以从中打印）的方法。

父类型：

  * PrettyPrinter
  * [PrettyPrintable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_interfaces.html#interface-prettyprintable)
  * [ToString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-tostring)

### init\(\)
    
    __
    
    public init()
    
功能：默认构造器，生成一个空的对象。

### init\(String\)
    
    __
    
    public init(string: String)
    
功能：构造器，生成一个以入参开头的文本构造器。

参数：

  * string : [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 希望放入打印文本开头的字符串。

### func isEmpty\(\)
    
    __
    
    public func isEmpty(): Bool
    
功能：返回当前构造器是否为空，即未有值传入给构造器。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 未有内容传入时返回 `true` ，否则返回 `false` 。

### func pprint\(PrettyPrinter\)
    
    __
    
    public func pprint(to: PrettyPrinter): PrettyPrinter
    
功能：打印信息到打印器上。

参数：

  * to: PrettyPrinter \- 打印器。

返回值：

  * PrettyPrinter \- 打印器。

### func toString\(\)
    
    __
    
    public func toString(): String
    
功能：打印文本到字符串上。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 打印文本的字符串。

### static func of\<PP\>\(PP\) where PP <: PrettyPrintable
    
    __
    
    public static func of\<PP\>(pp: PP) where PP <: PrettyPrintable
    
功能：通过打印从 [PrettyPrintable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_interfaces.html#interface-prettyprintable) 创建 PrettyText。

参数：

  * pp: PP - 一个实现了 [PrettyPrintable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_interfaces.html#interface-prettyprintable) 的类型。

返回值：

  * PrettyText \- 打印文本对象。