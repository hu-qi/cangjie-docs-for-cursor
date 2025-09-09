
# 枚举

## enum AnnotationKind
    
    __
    
    public enum AnnotationKind {
        | Type
        | Parameter
        | Init
        | MemberProperty
        | MemberFunction
        | MemberVariable
        | EnumConstructor
        | GlobalFunction
        | GlobalVariable
        | Extension
        | ...
    }
    
功能：表示自定义注解希望支持的位置。

### EnumConstructor
    
    __
    
    EnumConstructor
    
功能：枚举构造器声明。

### Extension
    
    __
    
    Extension
    
功能：扩展声明。

### Init
    
    __
    
    Init
    
功能：构造函数声明。

### GlobalFunction
    
    __
    
    GlobalFunction
    
功能：全局函数声明。

### GlobalVariable
    
    __
    
    GlobalVariable
    
功能：全局变量声明。

### MemberFunction
    
    __
    
    MemberFunction
    
功能：成员函数声明。

### MemberProperty
    
    __
    
    MemberProperty
    
功能：成员属性声明。

### MemberVariable
    
    __
    
    MemberVariable
    
功能：成员变量声明。

### Parameter
    
    __
    
    Parameter
    
功能：成员函数/构造函数中的参数（不包括枚举构造器的参数）。

### Type
    
    __
    
    Type
    
功能：类型声明（class、struct、enum、interface）。

## enum Endian
    
    __
    
    public enum Endian {
        | Big
        | Little
    }
    
功能：枚举类型 [Endian](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-endian) 表示运行平台的端序，分为大端序和小端序。

### Big
    
    __
    
    Big
    
功能：表示大端序。

### Little
    
    __
    
    Little
    
功能：表示小端序。

### static prop Platform
    
    __
    
    public static prop Platform: Endian
    
功能：获取所在运行平台的端序。

类型：[Endian](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-endian)

异常：

  * [UnsupportedException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-unsupportedexception) \- 当所运行平台返回的端序无法识别时，抛出异常。

示例：
    
    __
    
    main () {
        let e = Endian.Platform
        match (e) {
            case Big => println("BigEndian")
            case Little => println("LittleEndian")
        }
    }
    
运行结果：
    
    __
    
    LittleEndian

## enum Option\<T\>
    
    __
    
    public enum Option\<T\> {
        | Some(T)
        | None
    }
    
功能：[Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)\<T\> 是对 `T` 类型的封装，表示可能有值也可能无值。

它包含两个构造器：Some 和 None。其中，Some 会携带一个参数，表示有值；None 不带参数，表示无值。当需要表示某个类型可能有值，也可能没有值的时候，可选择使用 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 类型。

[Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 类型的另一种写法是在类型名前加 `?`，即对于任意类型 `Type`，`?Type` 等价于 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)\<Type\>。

### None
    
    __
    
    None
    
功能：构造一个不带参数的 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)\<T\> 实例，表示无值。

### Some\(T\)
    
    __
    
    Some (T)
    
功能：构造一个携带参数的 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)\<T\> 实例，表示有值。

### func filter\(\(T\)->Bool\)
    
    __
    
    public func filter(predicate: (T) -> Bool): Option\<T\>
    
功能：提供 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 类型的“过滤”功能。

参数：

  * predicate: \(T\) -> [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 过滤函数。

返回值：

  * Option\<T\> \- 如果 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 值是 Some\(v\)，并且 v 满足 `predicate(v) = true` 时，返回 Some\(v\)， 否则返回 None。

### func flatMap\<R\>\(\(T\) -> Option\<R\>\)
    
    __
    
    public func flatMap\<R\>(transform: (T) -> Option\<R\>): Option\<R\>
    
功能：提供从 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)\<T\> 类型到 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)\<R\> 类型的映射函数，如果当前实例值是 Some，执行 transform 函数，并且返回结果，否则返回 None。

参数：

  * transform: \(T\) -> [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)\<R\> \- 映射函数。

返回值：

  * [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)\<R\> \- 如果当前实例值是 Some，执行 transform 函数并返回，否则返回 None。

### func getOrDefault\(\(\) -> T\)
    
    __
    
    public func getOrDefault(other: () -> T): T
    
功能：获得值或返回默认值。如果 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 值是 Some，则返回类型为 `T` 的实例，如果 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 值是 None，则调用入参，返回类型 `T` 的值。

参数：

  * other: \(\) -> T - 默认函数，如果当前实例的值是 None，调用该函数得到类型为 `T` 的实例，并将其返回。

返回值：

  * T - 如果当前实例的值是 Some\<T\>，则返回当前实例携带的类型为 `T` 的实例，如果 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 值是 None，调用入参指定的函数，得到类型为 `T` 的实例，并将其返回。

示例：
    
    __
    
    main () {
        var value1: Option\<Int64\> = Some(2)
        println(value1.getOrDefault({=> 0}))
    
        var value2: Option\<Int64\> = None
        println(value2.getOrDefault({=> 0}))
    }
    
运行结果：
    
    __
    
    2
    0

### func getOrThrow\(\(\) -> Exception\)
    
    __
    
    public func getOrThrow(exception: ()->Exception): T
    
功能：获得值或抛出指定异常。

参数：

  * exception: \(\) ->[Exception](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-exception) \- 异常函数，如果当前实例值是 None，将执行该函数并将其返回值作为异常抛出。

返回值：

  * T - 如果当前实例值是 Some\<T\>，返回类型为 `T` 的实例。

异常：

  * [Exception](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-exception) \- 如果当前实例是 None，抛出异常函数返回的异常。

### func getOrThrow\(\)
    
    __
    
    public func getOrThrow(): T
    
功能：获得值或抛出异常。

返回值：

  * T - 如果当前实例值是 Some\<T\>，返回类型为 `T` 的实例。

异常：

  * [NoneValueException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-nonevalueexception) \- 如果当前实例是 None，抛出异常。

### func isNone\(\)
    
    __
    
    public func isNone(): Bool
    
功能：判断当前实例值是否为 None。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果当前实例值是 None，则返回 true，否则返回 false。

### func isSome\(\)
    
    __
    
    public func isSome(): Bool
    
功能：判断当前实例值是否为 Some。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果当前实例值是 Some，则返回 true，否则返回 false。

### func map\<R\>\(\(T\)->R\)
    
    __
    
    public func map\<R\>(transform: (T)-> R): Option\<R\>
    
功能：提供从 Option\<T\> 类型到 Option\<R\> 类型的映射函数，如果当前实例值是 Some，执行 transform 函数，并且返回 Some 封装的结果，否则返回 None。

参数：

  * transform: \(T\)-> R - 映射函数。

返回值：

  * [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)\<R\> \- 如果当前实例值是 Some，执行 transform 函数，并且返回 Option\<R\> 类型的结果，否则返回 None。

### extend\<T\> Option\<T\> <: Equatable<Option\<T\>> where T <: Equatable\<T\>
    
    __
    
    extend \<T\> Option\<T\> <: Equatable<Option\<T\>> where T <: Equatable\<T\>
    
功能：为 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)\<T\> 枚举扩展 [Equatable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-equatablet)<[Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)\<T\>> 接口，支持判等操作。

父类型：

  * [Equatable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-equatablet)<Option\<T\>>

#### operator func \!=\(Option\<T\>\)
    
    __
    
    public operator func !=(that: Option\<T\>): Bool
    
功能：判断当前实例与参数指向的 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)\<T\> 实例是否不等。

参数：

  * that: [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)\<T\> \- 待比较的 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)\<T\> 实例。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果不相等，则返回 true，否则返回 false。

#### operator func ==\(Option\<T\>\)
    
    __
    
    public operator func ==(that: Option\<T\>): Bool
    
功能：判断当前实例与参数指向的 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)\<T\> 实例是否相等。

如果两者同为 None，则相等；如果两者为 Some\(v1\) 和 Some\(v2\)，且 v1 和 v2 相等，则相等。

参数：

  * that: [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)\<T\> \- 待比较的 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)\<T\> 实例。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果相等，则返回 true，否则返回 false。

### extend\<T\> Option\<T\> <: Hashable where T <: Hashable
    
    __
    
    extend \<T\> Option\<T\> <: Hashable where T <: Hashable
    
功能：为 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 类型扩展 [Hashable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-hashable) 接口。

Some\<T\> 的哈希值等于 `T` 的值对应的哈希值，None 的哈希值等于 [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)\(0\)。

父类型：

  * [Hashable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-hashable)

#### func hashCode\(\)
    
    __
    
    public func hashCode(): Int64
    
功能：获取哈希值。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 哈希值。

### extend\<T\> Option\<T\> <: ToString where T <: ToString
    
    __
    
    extend \<T\> Option\<T\> <: ToString where T <: ToString
    
功能：为 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)\<T\> 枚举实现 [ToString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-tostring) 接口，支持转字符串操作。

父类型：

  * [ToString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-tostring)

#### func toString\(\)
    
    __
    
    public func toString(): String
    
功能：将 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 转换为可输出的字符串，字符串内容为 "Some\($\{T.toString\(\)\}\)" 或 "None"。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 转化后的字符串。

### extend\<T\> Option<Option\<T\>>
    
    __
    
    extend \<T\> Option<Option\<T\>>
    
功能：为 Option<Option\<T\>> 类型扩展实现某些功能。

#### func flatten\(\)
    
    __
    
    public func flatten(): Option\<T\>
    
功能：将 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)<[Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)\<T\>> 类型展开，如果当前实例是 Some\([Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)\<T\>.Some\(v\)\), 展开后的结果为 Some\(v\)。

返回值：

  * [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)\<T\> \- [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)<[Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)\<T\>> 类型展开后的结果。

## enum Ordering
    
    __
    
    public enum Ordering {
        | LT
        | GT
        | EQ
    }
    
功能：[Ordering](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-ordering) 表示比较大小的结果，它包含三种情况：小于，大于和等于。

### EQ
    
    __
    
    EQ
    
功能：构造一个 [Ordering](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-ordering) 实例，表示等于。

### GT
    
    __
    
    GT
    
功能：构造一个 [Ordering](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-ordering) 实例，表示大于。

### LT
    
    __
    
    LT
    
功能：构造一个 [Ordering](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-ordering) 实例，表示小于。

### extend Ordering <: Comparable
    
    __
    
    extend Ordering <: Comparable\<Ordering\>
    
功能：为 [Ordering](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-ordering) 类型其扩展 [Comparable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-comparablet)<[Ordering](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-ordering)> 接口，支持比较操作。

父类型：

  * [Comparable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-comparablet)\<Ordering\>

#### func compare\(Ordering\)
    
    __
    
    public func compare(that: Ordering): Ordering
    
功能：判断当前 [Ordering](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-ordering) 实例与参数指定的 [Ordering](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-ordering) 实例的大小关系。

[Ordering](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-ordering) 枚举的大小关系为：GT > EQ > LT。

参数：

  * that: [Ordering](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-ordering) \- 待比较的 [Ordering](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-ordering) 实例。

返回值：

  * [Ordering](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-ordering) \- 如果大于，返回 GT；如果等于，返回 EQ；如果小于，返回 LT。

### extend Ordering <: Hashable
    
    __
    
    extend Ordering <: Hashable
    
功能：为 [Ordering](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-ordering) 类型其扩展 [Hashable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-hashable) 接口，支持计算哈希值。

父类型：

  * [Hashable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-hashable)

#### func hashCode
    
    __
    
    public func hashCode(): Int64
    
功能：获取哈希值，GT 的哈希值是 3，EQ 的哈希值是 2，LT 的哈希值是 1。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 哈希值。

### extend Ordering <: ToString
    
    __
    
    extend Ordering <: ToString
    
功能：为 [Ordering](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-ordering) 类型其扩展 [ToString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-tostring) 接口，支持转字符串操作。

父类型：

  * [ToString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-tostring)

#### func toString\(\)
    
    __
    
    public func toString(): String
    
功能：将 [Ordering](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-ordering) 转换为可输出的字符串。

转换结果如下：

  * GT: "[Ordering](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-ordering).GT"。
  * LT: "[Ordering](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-ordering).ET"。
  * EQ: "[Ordering](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-ordering).EQ"。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 转化后的字符串。