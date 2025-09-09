
# 函数

## func all\<T\>\(\(T\) -> Bool\)
    
    __
    
    public func all\<T\>(predicate: (T) -> Bool): (Iterable\<T\>) -> Bool
    
功能：判断迭代器所有元素是否都满足条件。

参数：

  * predicate: \(T\) -> [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 给定的条件。

返回值：

  * \([Iterable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-iterablee)\<T\>\) -> [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 返回一个判断全部满足条件的函数。

## func any\<T\>\(\(T\) -> Bool\)
    
    __
    
    public func any\<T\>(predicate: (T) -> Bool): (Iterable\<T\>) -> Bool
    
功能：判断迭代器是否存在任意一个满足条件的元素。

参数：

  * predicate: \(T\) -> [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 给定的条件。

返回值：

  * \([Iterable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-iterablee)\<T\>\) -> [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 返回一个判断存在任意一个满足条件的函数。

## func at\<T\>\(Int64\)
    
    __
    
    public func at\<T\>(n: Int64): (Iterable\<T\>) -> Option\<T\>
    
功能：获取迭代器指定位置的元素。

参数：

  * n: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 给定的个数。

返回值：

  * \([Iterable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-iterablee)\<T\>\) -> [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)\<T\> \- 返回获取对应位置元素的函数，若迭代器为空则该函数返回 None。

## func collectArrayList\<T\>\(Iterable\<T\>\)
    
    __
    
    public func collectArrayList\<T\>(it: Iterable\<T\>): ArrayList\<T\>
    
功能：将一个迭代器转换成 [ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt) 类型。

参数：

  * it: [Iterable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-iterablee)\<T\> \- 给定的迭代器。

返回值：

  * [ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)\<T\> \- 返回一个 [ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)。

## func collectArray\<T\>\(Iterable\<T\>\)
    
    __
    
    public func collectArray\<T\>(it: Iterable\<T\>): Array\<T\>
    
功能：将一个迭代器转换成 [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt) 类型。

参数：

  * it: [Iterable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-iterablee)\<T\> \- 给定的迭代器。

返回值：

  * [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<T\> \- 返回一个数组。

## func collectHashMap\<K, V\>\(Iterable<\(K, V\)>\) where K <: Hashable & Equatable\<K\>
    
    __
    
    public func collectHashMap\<K, V\>(it: Iterable<(K, V)>): HashMap\<K, V\> where K <: Hashable & Equatable\<K\>
    
功能：将一个迭代器转换成 [HashMap](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-hashmapk-v-where-k--hashable--equatablek) 类型。

参数：

  * it: [Iterable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-iterablee)<\(K, V\)> \- 给定的迭代器。

返回值：

  * [HashMap](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-hashmapk-v-where-k--hashable--equatablek)\<K, V\> \- 返回一个 [HashMap](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-hashmapk-v-where-k--hashable--equatablek)。

## func collectHashSet\<T\>\(Iterable\<T\>\) where T <: Hashable & Equatable\<T\>
    
    __
    
    public func collectHashSet\<T\>(it: Iterable\<T\>): HashSet\<T\> where T <: Hashable & Equatable\<T\>
    
功能：将一个迭代器转换成 [HashSet](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-hashsett-where-t--hashable--equatablet) 类型。

参数：

  * it: [Iterable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-iterablee)\<T\> \- 给定的迭代器。

返回值：

  * [HashSet](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-hashsett-where-t--hashable--equatablet)\<T\> \- 返回一个 [HashSet](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-hashsett-where-t--hashable--equatablet)。

## func collectString\<T\>\(String\) where T <: ToString
    
    __
    
    public func collectString\<T\>(delimiter!: String = ""): (Iterable\<T\>) -> String where T <: ToString
    
功能：将一个对应元素实现了 [ToString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-tostring) 接口的迭代器转换成 [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) 类型。

参数：

  * delimiter\!: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 字符串拼接分隔符。

返回值：

  * \([Iterable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-iterablee)\<T\>\) -> [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 返回一个转换函数。

## func concat\<T\>\(Iterable\<T\>\)
    
    __
    
    public func concat\<T\>(other: Iterable\<T\>): (Iterable\<T\>) -> Iterator\<T\>
    
功能：串联两个迭代器。

参数：

  * other: [Iterable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-iterablee)\<T\> \- 要串联在后面的迭代器。

返回值：

  * \([Iterable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-iterablee)\<T\>\) -> [Iterator](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_classes.html#class-iteratort)\<T\> \- 返回一个串联函数。

## func contains\<T\>\(T\) where T <: Equatable\<T\>
    
    __
    
    public func contains\<T\>(element: T): (Iterable\<T\>) -> Bool where T <: Equatable\<T\>
    
功能：遍历所有元素，判断是否包含指定元素并返回该元素。

参数：

  * element: T - 要查找的元素。

返回值：

  * \([Iterable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-iterablee)\<T\>\) -> [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 返回一个查找函数。

## func count\<T\>\(Iterable\<T\>\)
    
    __
    
    public func count\<T\>(it: Iterable\<T\>): Int64
    
功能：统计迭代器包含元素数量。

参数：

  * it: [Iterable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-iterablee)\<T\> \- 给定的迭代器。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 返回迭代器包含元素数量。

## func enumerate\<T\>\(Iterable\<T\>\)
    
    __
    
    public func enumerate\<T\>(it: Iterable\<T\>): Iterator<(Int64, T)>
    
功能：用于获取带索引的迭代器。

参数：

  * it: [Iterable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-iterablee)\<T\> \- 给定的迭代器。

返回值：

  * [Iterator](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_classes.html#class-iteratort)<\([Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64), T\)> \- 返回一个带索引的迭代器。

## func filter\<T\>\(\(T\) -> Bool\)
    
    __
    
    public func filter\<T\>(predicate: (T) -> Bool): (Iterable\<T\>) -> Iterator\<T\>
    
功能：筛选出满足条件的元素。

参数：

  * predicate: \(T\) -> [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 给定的条件。

返回值：

  * \([Iterable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-iterablee)\<T\>\) -> [Iterator](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_classes.html#class-iteratort)\<T\> \- 返回一个筛选函数。

## func filterMap\<T, R\>\(\(T\) -> ?R\)
    
    __
    
    public func filterMap\<T, R\>(transform: (T)-> ?R): (Iterable\<T\>) ->Iterator\<R\>
    
功能：同时进行筛选操作和映射操作，返回一个新的迭代器。

参数：

  * transform: \(T\) -> ?R - 给定的映射函数。函数返回值为 Some 对应 filter 的 predicate 为 true，反之表示 false。

返回值：

  * \([Iterable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-iterablee)\<T\>\) -> [Iterator](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_classes.html#class-iteratort)\<R\> \- 返回一个筛选和映射的函数。

## func first\<T\>\(Iterable\<T\>\)
    
    __
    
    public func first\<T\>(it: Iterable\<T\>): Option\<T\>
    
功能：获取头部元素。

参数：

  * it: [Iterable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-iterablee)\<T\> \- 给定的迭代器。

返回值：

  * [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)\<T\> \- 返回头部元素，若为空则返回 None。

## func flatMap\<T, R\>\( \(T\) -> Iterable\<R\>\)
    
    __
    
    public func flatMap\<T, R\>(transform: (T) -> Iterable\<R\>): (Iterable\<T\>) -> Iterator\<R\>
    
功能：创建一个带 [flatten](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_function.html#func-flattent-riterablet-where-t--iterabler) 功能的映射。

参数：

  * transform: \(T\) -> [Iterable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-iterablee)\<R\> \- 给定的映射函数。

返回值：

  * \([Iterable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-iterablee)\<T\>\) -> [Iterator](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_classes.html#class-iteratort)\<R\> \- 返回一个带 [flatten](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_function.html#func-flattent-riterablet-where-t--iterabler) 功能的映射函数。

## func flatten\<T, R\>\(Iterable\<T\>\) where T <: Iterable\<R\>
    
    __
    
    public func flatten\<T, R\>(it: Iterable\<T\>): Iterator\<R\> where T <: Iterable\<R\>
    
功能：将嵌套的迭代器展开一层。

参数：

  * it: [Iterable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-iterablee)\<T\> \- 给定的迭代器。

返回值：

  * [Iterator](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_classes.html#class-iteratort)\<R\> \- 返回展开一层后的迭代器。

## func fold\<T, R\>\(R, \(R, T\) -> R\)
    
    __
    
    public func fold\<T, R\>(initial: R, operation: (R, T) -> R): (Iterable\<T\>) -> R
    
功能：使用指定初始值，从左向右计算。

参数：

  * initial: R - 给定的 R 类型的初始值。
  * operation: \(R, T\) -> R - 给定的计算函数。

返回值：

  * \([Iterable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-iterablee)\<T\>\) -> R - 返回一个折叠函数。

## func forEach\<T\>\(\(T\) -> Unit\)
    
    __
    
    public func forEach\<T\>(action: (T) -> Unit): (Iterable\<T\>) -> Unit
    
功能：遍历所有元素，指定给定的操作。

参数：

  * action: \(T\) -> [Unit](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#unit) \- 给定的操作函数。

返回值：

  * \([Iterable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-iterablee)\<T\>\) -> [Unit](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#unit) \- 返回一个执行遍历操作的函数。

## func inspect\<T\>\(\(T\) -> Unit\)
    
    __
    
    public func inspect\<T\>(action: (T)->Unit): (Iterable\<T\>) ->Iterator\<T\>
    
功能：迭代器每次调用 next\(\) 对当前元素执行额外操作（不会消耗迭代器中元素）。

参数：

  * action: \(T\) -> [Unit](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#unit) \- 给定的操作函数。

返回值：

  * \([Iterable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-iterablee)\<T\>\) -> [Iterator](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_classes.html#class-iteratort)\<T\> \- 返回一个能对迭代器每个元素执行额外操作的函数。

## func isEmpty\<T\>\(Iterable\<T\>\)
    
    __
    
    public func isEmpty\<T\>(it: Iterable\<T\>): Bool
    
功能：判断迭代器是否为空。

参数：

  * it: [Iterable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-iterablee)\<T\> \- 给定的迭代器。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 返回迭代器是否为空。

## func last\<T\>\(Iterable\<T\>\)
    
    __
    
    public func last\<T\>(it: Iterable\<T\>): Option\<T\>
    
功能：获取尾部元素。

参数：

  * it: [Iterable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-iterablee)\<T\> \- 给定的迭代器。

返回值：

  * [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)\<T\> \- 返回尾部元素，若为空则返回 None。

## func map\<T, R\>\(\(T\) -> R\)
    
    __
    
    public func map\<T, R\>(transform: (T) -> R): (Iterable\<T\>) -> Iterator\<R\>
    
功能：创建一个映射。

参数：

  * transform: \(T\) ->R - 给定的映射函数。

返回值：

  * \([Iterable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-iterablee)\<T\>\) -> [Iterator](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_classes.html#class-iteratort)\<R\> \- 返回一个映射函数。

## func max\<T\>\(Iterable\<T\>\) where T <: Comparable\<T\>
    
    __
    
    public func max\<T\>(it: Iterable\<T\>): Option\<T\> where T <: Comparable\<T\>
    
功能：筛选最大的元素。

参数：

  * it: [Iterable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-iterablee)\<T\> \- 给定的迭代器。

返回值：

  * [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)\<T\> \- 返回最大的元素，若为空则返回 None。

## func min\<T\>\(Iterable\<T\>\) where T <: Comparable\<T\>
    
    __
    
    public func min\<T\>(it: Iterable\<T\>): Option\<T\> where T <: Comparable\<T\>
    
功能：筛选最小的元素。

参数：

  * it: [Iterable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-iterablee)\<T\> \- 给定的迭代器。

返回值：

  * [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)\<T\> \- 返回最小的元素，若为空则返回 None。

## func none\<T\>\(\(T\) -> Bool\)
    
    __
    
    public func none\<T\>(predicate: (T) -> Bool): (Iterable\<T\>) -> Bool
    
功能：判断迭代器中所有元素是否都不满足条件。

参数：

  * predicate: \(T\) -> [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 给定的条件。

返回值：

  * \([Iterable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-iterablee)\<T\>\) -> [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 返回一个判断都不满足条件的函数。

## func reduce\<T\>\(\(T, T\) -> T\)
    
    __
    
    public func reduce\<T\>(operation: (T, T) -> T): (Iterable\<T\>) -> Option\<T\>
    
功能：使用第一个元素作为初始值，从左向右计算。

参数：

  * operation: \(T, T\) -> T - 给定的操作函数。

返回值：

  * \([Iterable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-iterablee)\<T\>\) -> [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)\<T\> \- 返回一个归并函数。

## func skip\<T\>\(Int64\)
    
    __
    
    public func skip\<T\>(count: Int64): (Iterable\<T\>) -> Iterator\<T\>
    
功能：从迭代器跳过特定个数。

当 count 小于 0 时，抛出异常。当 count 等于 0 时，相当没有跳过任何元素，返回原迭代器。当 count 大于0并且count小于迭代器的大小时，跳过 count 个元素后，返回含有剩下的元素的新迭代器。当 count 大于等于迭代器的大小时，跳过所有元素，返回空迭代器。

参数：

  * count: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 要跳过的个数。

返回值：

  * \([Iterable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-iterablee)\<T\>\) -> [Iterator](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_classes.html#class-iteratort)\<T\> \- 返回一个跳过指定数量元素的函数。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当 count < 0 时，抛出异常。

## func step\<T\>\(Int64\)
    
    __
    
    public func step\<T\>(count: Int64): (Iterable\<T\>) -> Iterator\<T\>
    
功能：迭代器每次调用 next\(\) 跳过特定个数。

当 count 小于等于 0 时，抛出异常。当 count 大于 0 时，每次调用 next\(\) 跳过 count 次，直到迭代器为空。

参数：

  * count: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 每次调用 next\(\) 要跳过的个数。

返回值：

  * \([Iterable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-iterablee)\<T\>\) -> [Iterator](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_classes.html#class-iteratort)\<T\> \- 返回改变迭代器每次调用 next\(\) 跳过特定个数的函数。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当 count <= 0 时，抛出异常。

## func take\<T\>\(Int64\)
    
    __
    
    public func take\<T\>(count: Int64): (Iterable\<T\>) -> Iterator\<T\>
    
功能：从迭代器取出特定个数。

当 count 小于 0 时，抛出异常。当 count 等于 0 时，不取元素，返回空迭代器。当 count 大于 0 小于迭代器的大小时，取前 count 个元素，返回新迭代器。当 count 大于等于迭代器的大小时，取所有元素，返回原迭代器。

参数：

  * count: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 要取出的个数。

返回值：

  * \([Iterable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-iterablee)\<T\>\) -> [Iterator](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_classes.html#class-iteratort)\<T\> \- 返回一个取出指定数量元素的函数。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当 count < 0 时，抛出异常。

## func zip\<T, R\>\(Iterable\<R\>\)
    
    __
    
    public func zip\<T, R\>(other: Iterable\<R\>): (Iterable\<T\>) -> Iterator<(T, R)>
    
功能：将两个迭代器合并成一个（长度取决于短的那个迭代器）。

参数：

  * other: [Iterable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-iterablee)\<R\> \- 要合并的其中一个迭代器。

返回值：

  * \([Iterable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-iterablee)\<T\>\) -> [Iterator](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_classes.html#class-iteratort)<\(T, R\)> \- 返回一个合并函数。