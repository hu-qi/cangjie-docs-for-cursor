
# 元组类型

元组（Tuple）可以将多个不同的类型组合在一起，成为一个新的类型。元组类型使用 `(T1, T2, ..., TN)` 表示，其中 `T1` 到 `TN` 可以是任意类型，不同类型间使用逗号（`,`）连接。元组至少是二元，例如，`(Int64, Float64)` 表示一个二元组类型，`(Int64, Float64, String)` 表示一个三元组类型。

元组的长度是固定的，即一旦定义了一个元组类型的实例，它的长度不能再被更改。

元组类型是不可变类型，即一旦定义了一个元组类型的实例，它的内容（即单个元素）不能再被更新。但整个元组可被覆盖替换，例如：
    
    __
    
    let tuple1 = (8, false)
    var tuple2 = (true, 9, 20)
    tuple2 = tuple1         // Error, mismatched types
    tuple2[0] = false       // Error, 'tuple element' can not be assigned
    
    var tuple3 = (9, true)
    tuple3 = tuple1
    println(tuple3[0])      // 8
    println(tuple3[1])      // false
    
## 元组类型的字面量

元组类型的字面量使用 `(e1, e2, ..., eN)` 表示，其中 `e1` 到 `eN` 是表达式，多个表达式之间使用逗号分隔。下面的例子中，分别定义了一个 `(Int64, Float64)` 类型的变量 `x`，以及一个 `(Int64, Float64, String)` 类型的变量 `y`，并且使用元组类型的字面量为它们定义了初值：
    
    __
    
    let x: (Int64, Float64) = (3, 3.141592)
    let y: (Int64, Float64, String) = (3, 3.141592, "PI")
    
元组支持通过 `t[index]` 的方式访问某个具体位置的元素，其中 `t` 是一个元组，`index` 是下标，并且 `index` 只能是从 `0` 开始且小于元组元素个数的整数类型字面量，否则编译报错。下面的例子中，使用 `pi[0]` 和 `pi[1]` 可以分别访问二元组 `pi` 的第一个元素和第二个元素。
    
    __
    
    main () {
        var pi = (3.14, "PI")
        println(pi[0])
        println(pi[1])
    }
    
编译并执行上述代码，输出结果为：
    
    __
    
    3.140000
    PI

在赋值表达式中，可使用元组进行多赋值，参见[赋值操作符](https://docs.cangjie-lang.cn/docs/1.0.1/user_manual/source_zh_cn/basic_data_type/basic_operators.html#%E8%B5%8B%E5%80%BC%E6%93%8D%E4%BD%9C%E7%AC%A6)章节。

## 元组类型的类型参数

可以为元组类型标记显式的类型参数名，下面例子中的 `name` 和 `price` 就是 `类型参数名`。
    
    __
    
    func getFruitPrice (): (name: String, price: Int64) {
        return ("banana", 10)
    }
    
对于一个元组类型，只允许统一写类型参数名，或者统一不写类型参数名，不允许交替存在，并且参数名本身不能作为变量使用或用于访问元组中元素。
    
    __
    
    let a: (name: String, Int64) = ("banana", 5)   // Error
    let b: (name: String, price: Int64) = ("banana", 5) // OK
    b.name // Error