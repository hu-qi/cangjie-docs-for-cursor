
# 接口

## interface Deque\<T\>
    
    __
    
    public interface Deque\<T\> <: Collection\<T\> {
        prop first: ?T
        prop last: ?T
        func addFirst(element: T): Unit
        func addLast(element: T): Unit
        func removeFirst(): ?T
        func removeLast(): ?T
    }
    
功能：Deque（double-ended queue）是一种具有队列和栈特性的数据结构，允许从两端插入和删除元素。Deque 接口的主要功能包括：

  * 插入操作：可以在双端队列的前端或后端插入元素。使用 addFirst 方法在双端队列头部插入元素，使用 addLast 在双端队列尾部插入元素。
  * 访问操作：可以访问双端队列的前端或后端的元素，而不进行删除操作。使用 first 访问头部元素，使用 last 访问尾部元素。
  * 删除操作：可以在双端队列的前端或后端删除元素。使用 removeFirst 删除头部元素并返回其值，使用 removeLast 删除尾部元素并返回其值。
  * 其他集合类型支持的操作，比如元素数量、判空、迭代器操作。

父类型：

  * [Collection](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-collectiont)\<T\>

### prop first
    
    __
    
    prop first: ?T
    
功能：访问双端队列头部元素，该操作不会删除头部元素。

返回值：

  * Option\<T\> \- Option 封装的头部元素的值，如果双端队列为空，返回None。

### prop last
    
    __
    
    prop last: ?T
    
功能：访问双端队列尾部元素，该操作不会删除尾部元素。

返回值：

  * Option\<T\> \- Option 封装的尾部元素的值，如果双端队列为空，返回None。

### func addFirst\(T\)
    
    __
    
    func addFirst(element: T): Unit
    
功能：在双端队列头部插入指定的元素。

参数：

  * element: T - 被添加到双端队列中的元素。

### func addLast\(T\)
    
    __
    
    func addLast(element: T): Unit
    
功能：在双端队列尾部插入指定的元素。

参数：

  * element: T - 被添加到双端队列中的元素。

### func removeFirst\(\)
    
    __
    
    func removeFirst(): ?T
    
功能：删除双端队列中的头部元素并返回这个元素的值。

返回值：

  * ?T - Option 封装的被删除的元素的值，如果双端队列为空，返回None。

### func removeLast\(\)
    
    __
    
    func removeLast(): ?T
    
功能：删除双端队列中的尾部元素并返回这个元素的值。

返回值：

  * ?T - Option 封装的被删除的元素的值，如果双端队列为空，返回None。

## interface EquatableCollection\<T\>
    
    __
    
    public interface EquatableCollection\<T\> <: Collection\<T\> {
        func contains(element: T): Bool
        func contains(all!: Collection\<T\>): Bool
    }
    
功能：定义了可以进行比较的集合类型。

父类型：

  * [Collection](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-collectiont)\<T\>

### func contains\(T\)
    
    __
    
    func contains(element: T): Bool
    
功能：判断 Keys 是否包含指定元素。

参数：

  * element: T - 指定元素，待判断 Keys 是否包含该元素。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 包含返回 true，否则返回 false。

### func contains\(Collection\<T\>\)
    
    __
    
    func contains(all!: Collection\<T\>): Bool
    
功能：判断 Keys 是否包含指定集合的所有元素。

参数：

  * all\!: [Collection](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-collectiont)\<T\> \- 待判断的集合 all。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 包含则返回 true，否则返回 false。

## interface List\<T\>
    
    __
    
    public interface List\<T\> <: ReadOnlyList\<T\> {
        func add(element: T): Unit
        func add(all!: Collection\<T\>): Unit
        func add(element: T, at!: Int64): Unit
        func add(all!: Collection\<T\>, at!: Int64): Unit
        func remove(at!: Int64): T
        func remove(range: Range\<Int64\>): Unit
        func removeIf(predicate: (T) -> Bool): Unit
        func clear(): Unit
    
        operator func [](index: Int64, value!: T): Unit
    }
    
功能：定义了只提供对索引友好操作的列表类型。

父类型：

  * ReadOnlyList\<T\>

### func add\(T\)
    
    __
    
    func add(element: T): Unit
    
功能：将指定的元素附加到此列表的末尾。

参数：

  * element: T - 插入的元素，类型为 T。

### func add\(Collection\<T\>\)
    
    __
    
    func add(all!: Collection\<T\>): Unit
    
功能：将指定集合中的所有元素附加到此列表的末尾。

参数：

  * all\!: [Collection](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-collectiont)\<T\> \- 需要插入的元素的集合。

### func add\(T, Int64\)
    
    __
    
    func add(element: T, at!: Int64): Unit
    
功能：在此列表中的指定位置插入指定元素。

参数：

  * element: T - 要插入的 T 类型元素。
  * at\!: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 插入元素的目标索引。

### func add\(Collection\<T\>, Int64\)
    
    __
    
    func add(all!: Collection\<T\>, at!: Int64): Unit
    
功能：从指定位置开始，将指定集合中的所有元素插入此列表。

参数：

  * all\!: [Collection](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-collectiont)\<T\> \- 要插入的 T 类型元素集合。
  * at\!: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 插入集合的目标索引。

### func clear\(\)
    
    __
    
    func clear(): Unit
    
功能：从此列表中删除所有元素。

### func remove\(Int64\)
    
    __
    
    func remove(at!: Int64): T
    
功能：删除此列表中指定位置的元素。

参数：

  * at\!: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 被删除元素的索引。

返回值：

  * T - 被移除的元素。

### func remove\(Range\<Int64\>\)
    
    __
    
    func remove(range: Range\<Int64\>): Unit
    
功能：删除此列表中 [Range](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-ranget-where-t--countablet--comparablet--equatablet) 范围所包含的所有元素。

参数：

  * range: [Range](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-ranget-where-t--countablet--comparablet--equatablet)<[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)> \- 需要被删除的元素的范围。

### func removeIf\(\(T\) -> Bool\)
    
    __
    
    func removeIf(predicate: (T) -> Bool): Unit
    
功能：删除此列表中满足给定 lambda 表达式或函数的所有元素。

参数：

  * predicate: \(T\) ->[Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 传递判断删除的条件。

### operator func \[\]\(Int64, T\)
    
    __
    
    operator func [](index: Int64, value!: T): Unit
    
功能：操作符重载 - set，通过下标运算符用指定的元素替换此列表中指定位置的元素。

参数：

  * index: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 要设置的索引值。
  * value\!: T - 要设置的 T 类型的值。

## interface Map\<K, V\>
    
    __
    
    public interface Map\<K, V\> <: ReadOnlyMap\<K, V\> {
        func add(key: K, value: V): ?V
        func add(all!: Collection<(K, V)>): Unit
        func addIfAbsent(key: K, value: V): ?V
        func clear(): Unit
        func entryView(k: K): MapEntryView\<K, V\>
        func remove(key: K): Option\<V\>
        func remove(all!: Collection\<K\>): Unit
        func removeIf(predicate: (K, V) -> Bool): Unit
        func replace(key: K, value: V): ?V
        operator func [](key: K, value!: V): Unit
    }
    
功能：[Map](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-mapk-v) 接口提供了一种将键映射到值的方式。它允许我们使用键来查找值，因此可以用于存储和操作键值对。

[Map](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-mapk-v) 不能包含重复的key，每个key最多只能映射到一个value。

父类型：

  * [ReadOnlyMap](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-orderedmapk-v)\<K, V\>

### func add\(K, V\)
    
    __
    
    func add(key: K, value: V): ?V
    
功能：将传入的键值对放入该 [Map](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-mapk-v) 中。对于 [Map](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-mapk-v) 中已有的键，该键映射的值将被新值替换。

参数：

  * key: K - 要放置的键。
  * value: V - 要分配的值。

返回值：

  * ?V - 如果赋值之前 key 存在，返回旧值，否则返回 None。

### func add\(Collection<\(K, V\)>\)
    
    __
    
    func add(all!: Collection<(K, V)>): Unit
    
功能：将新的键值对放入 [Map](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-mapk-v) 中。对于 [Map](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-mapk-v) 中已有的键，该键映射的值将被新值替换。

参数：

  * all\!: [Collection](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-collectiont)<\(K, V\)> \- 需要放入到 [Map](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-mapk-v) 中的键值对集合。

### func addIfAbsent\(K, V\)
    
    __
    
    func addIfAbsent(key: K, value: V): ?V
    
功能：如果 key 不在当前 [Map](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-mapk-v) 中，添加指定键值对 key-value。否则不做修改。

参数：

  * key: K - 待添加键值对的键。
  * value: V - 待添加键值对的值。

返回值：

  * ?V - 如果调用该函数时当前 [Map](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-mapk-v) 中已有指定的 key，返回该 key 对应的旧值，否则返回 None。

### func clear\(\)
    
    __
    
    func clear(): Unit
    
功能：清除所有键值对。

### func entryView\(K\)
    
    __
    
    func entryView(k: K): MapEntryView\<K, V\>
    
功能：获取键 k 对应的视图。

参数：

  * k: K - 待获取其视图的键。

返回值：

  * MapEntryView\<K, V\> \- 键 k 对应的视图。

### func remove\(K\)
    
    __
    
    func remove(key: K): Option\<V\>
    
功能：从此 [Map](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-mapk-v) 中删除指定键的映射（如果存在）。

参数：

  * key: K - 传入要删除的 key。

返回值：

  * [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)\<V\> \- 从 [Map](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-mapk-v) 中移除的键对应的值。用 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 封装。

### func remove\(Collection\<K\>\)
    
    __
    
    func remove(all!: Collection\<K\>): Unit
    
功能：从此映射中删除指定集合的映射（如果存在）。

参数：

  * all\!: [Collection](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-collectiont)\<K\> \- 传入要删除的集合。

### func removeIf\(\(K, V\) -> Bool\)
    
    __
    
    func removeIf(predicate: (K, V) -> Bool): Unit
    
功能：传入 lambda 表达式，如果满足条件，则删除对应的键值对。

参数：

  * predicate: \(K, V\) ->[Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 传递一个 lambda 表达式进行判断。

### func replace\(K, V\)
    
    __
    
    func replace(key: K, value: V): ?V
    
功能：如果当前 [Map](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-mapk-v) 中已有指定 key，将其值修改为 value。否则不做修改。

参数：

  * key: K - 待修改键值对的键。
  * value: V - 待修改键值对的新值。

返回值：

  * ?V - 如果当前 [Map](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-mapk-v) 中已有指定 key，返回其旧值。否则返回 None。

### operator func \[\]\(K, V\)
    
    __
    
    operator func [](key: K, value!: V): Unit
    
功能：运算符重载集合，如果键存在，新 value 覆盖旧 value，如果键不存在，添加此键值对。

参数：

  * key: K - 需要进行设置的键。
  * value\!: V - 传递要设置的值。

## interface MapEntryView\<K, V\>
    
    __
    
    public interface MapEntryView\<K, V\> {
        public prop key: K
        public mut prop value: ?V
    }
    
功能：提供映射中的某个 key 对应的视图。

### prop key
    
    __
    
    public prop key: K
    
功能：返回视图中的 key，如果视图的 key 不在原始映射中，则返回一个该 key 的空视图。

类型：K

### prop value
    
    __
    
    public mut prop value: ?V
    
功能：读取或修改视图对应原始映射的 value。 设置非空的 value 时，如果该视图的 value 不存在，则在该视图对应的原始映射中新增元素。 设置为 `None` 时，则会删除当前 Entry，删除完之后仍然能继续使用该视图。

类型：[Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)\(V\)

## interface OrderedMap\<K, V\>
    
    __
    
    public interface OrderedMap\<K, V\> <: Map\<K, V\> {
        public prop first: ?(K, V)
        public prop last: ?(K, V)
        public func removeFirst(): ?(K, V)
        public func removeLast(): ?(K, V)
    
        public func backward(mark: K, inclusive!: Bool): Iterator<(K, V)>
        public func forward(mark: K, inclusive!: Bool): Iterator<(K, V)>
    }
    
功能：[OrderedMap](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-orderedmapk-v) 接口提供了一种将键映射到值的方式。它允许我们使用键来查找值，因此可以用于存储和操作键值对。

在 [OrderedMap](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-orderedmapk-v) 接口的实例中，其内部的元素是有序的。

父类型：

  * [Map](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-mapk-v)\<K, V\>

### prop first
    
    __
    
    public prop first: ?(K, V)
    
功能：获取 [OrderedMap](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-orderedmapk-v) 第一个元素。

类型：[Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)<\(K, V\)>

### prop last
    
    __
    
    public prop last: ?(K, V)
    
功能：获取 [OrderedMap](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-orderedmapk-v) 最后一个元素。

类型：[Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)<\(K, V\)>

### func removeFirst\(\)
    
    __
    
    public func removeFirst(): ?(K, V)
    
功能：删除 [OrderedMap](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-orderedmapk-v) 的第一个元素。

返回值：

  * ?\(K, V\) - 如果当前 [OrderedMap](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-orderedmapk-v) 不为空，返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 封装的被删除的键值对，否则返回 `None`。

### func removeLast\(\)
    
    __
    
    public func removeLast(): ?(K, V)
    
功能：删除 [OrderedMap](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-orderedmapk-v) 的最后一个元素。

返回值：

  * ?\(K, V\) - 如果当前 [OrderedMap](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-orderedmapk-v) 不为空，返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 封装的被删除的键值对，否则返回 `None`。

### func backward\(K, Bool\)
    
    __
    
    public func backward(mark: K, inclusive!: Bool): Iterator<(K, V)>
    
功能：获取从第一个键小于等于 mark 的节点按降序遍历到 [first](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#prop-first) 的迭代器。如果该节点的键等于 mark ，那么根据 `inclusive!` 确定是否包含该键对应的节点。

参数：

  * mark: K - 用于确定从哪里开始的键。
  * inclusive\!: [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 当 mark 是迭代器的首个元素的 key 时，指定是否包含 mark 作为起始点。

返回值：

  * [Iterator](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_classes.html#class-iteratort)<\(K, V\)> \- 迭代器。

### func forward\(K, Bool\)
    
    __
    
    public func forward(mark: K, inclusive!: Bool): Iterator<(K, V)>
    
功能：获取从第一个键大于等于 mark 的节点按升序遍历到 [last](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#prop-last) 结束的一个迭代器。如果该节点的键等于 mark ，那么根据 `inclusive!` 确定是否包含该键对应的节点。

参数：

  * mark: K - 用于确定从哪里开始的键。
  * inclusive\!: [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 当 mark 是迭代器的首个元素的 key 时，指定是否包含 mark 作为起始点。

返回值：

  * [Iterator](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_classes.html#class-iteratort)<\(K, V\)> \- 迭代器。

## interface OrderedSet\<T\>
    
    __
    
    public interface OrderedSet\<T\> <: Set\<T\> {
        public prop first: ?T
        public prop last: ?T
        public func removeFirst(): ?T
        public func removeLast(): ?T
    
        public func backward(mark: T, inclusive!: Bool): Iterator\<T\>
        public func forward(mark: T, inclusive!: Bool): Iterator\<T\>
    }
    
功能：[OrderedSet](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-orderedsett) 接口提供了一组集合的相关操作，允许我们以可读写的方式操作内部元素。

在 [OrderedSet](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-orderedsett) 接口的实例中，其内部的元素是有序的。

父类型：

  * [Set](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-sett)\<T\>

### prop first
    
    __
    
    public prop first: ?T
    
功能：获取 [OrderedSet](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-orderedsett) 第一个元素。

类型：[Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)\<T\>

### prop last
    
    __
    
    public prop last: ?T
    
功能：获取 [OrderedSet](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-orderedsett) 最后一个元素。

类型：[Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)\<T\>

### func removeFirst\(\)
    
    __
    
    public func removeFirst(): ?T
    
功能：删除 [OrderedSet](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-orderedsett) 的第一个元素。

返回值：

  * ?T - 如果当前 [OrderedSet](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-orderedsett) 不为空，返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 封装的被删除的元素，否则返回 `None`。

### func removeLast\(\)
    
    __
    
    public func removeLast(): ?T
    
功能：删除 [OrderedSet](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-orderedsett) 的最后一个元素。

返回值：

  * ?T - 如果当前 [OrderedSet](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-orderedsett) 不为空，返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 封装的被删除的元素，否则返回 `None`。

### func backward\(T, Bool\)
    
    __
    
    public func backward(mark: T, inclusive!: Bool): Iterator\<T\>
    
功能：获取从第一个元素小于等于 mark 的节点按降序遍历到 [first](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#prop-first) 的迭代器。如果该节点的元素等于 mark ，那么根据 `inclusive!` 确定是否包含该元素对应的节点。

参数：

  * mark: T - 用于确定从哪里开始的元素。
  * inclusive\!: [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 当 mark 是迭代器的首个元素时，指定是否包含 mark 作为起始点。

返回值：

  * [Iterator](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_classes.html#class-iteratort)\<T\> \- 迭代器。

### func forward\(T, Bool\)
    
    __
    
    public func forward(mark: T, inclusive!: Bool): Iterator\<T\>
    
功能：获取从第一个元素大于等于 mark 的节点按升序遍历到 [last](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#prop-last) 结束的一个迭代器。如果该节点的元素等于 mark ，那么根据 `inclusive!` 确定是否包含该元素对应的节点。

参数：

  * mark: T - 用于确定从哪里开始的元素。
  * inclusive\!: [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 当 mark 是迭代器的首个元素时，指定是否包含 mark 作为起始点。

返回值：

  * [Iterator](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_classes.html#class-iteratort)\<T\> \- 迭代器。

## interface Queue\<T\>
    
    __
    
    public interface Queue\<T\> <: Collection\<T\> {
        func add(element: T): Unit
        func peek(): ?T
        func remove(): ?T
    }
    
功能：队列数据结构，它遵循先进先出（First In First Out, FIFO）原则。Queue 的主要功能包括：

  * 添加元素：将指定的元素添加到队列的尾部。
  * 访问操作：可以访问队列的前端元素，而不进行删除操作。
  * 删除操作：可以删除队列的前端元素。
  * 其他集合类型支持的操作，比如元素数量、判空、迭代器操作。

父类型：

  * [Collection](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-collectiont)\<T\>

### func add\(T\)
    
    __
    
    func add(element: T): Unit
    
功能：在队列尾部插入指定的元素。

参数：

  * element: T - 被添加到队列中的元素。

### func peek\(\)
    
    __
    
    func peek(): ?T
    
功能：访问双端队列头部元素，该操作不会删除头部元素。

返回值：

  * ?T - Option 封装的头部元素的值，如果双端队列为空，返回 `None`。

### func remove\(\)
    
    __
    
    func remove(): ?T
    
功能：删除队列中的头部元素并返回这个元素的值。

返回值：

  * ?T - Option 封装的被删除的元素的值，如果队列为空，返回 `None`。

## interface ReadOnlyList\<T\>
    
    __
    
    public interface ReadOnlyList\<T\> <: Collection\<T\> {
        prop first: ?T
        prop last: ?T
        func get(index: Int64): ?T
        operator func [](index: Int64): T
    }
    
功能：定义了只读列表。

父类型：

  * [Collection](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-collectiont)\<T\>

### prop first
    
    __
    
    prop first: ?T
    
功能：返回此列表中的第一个元素，如果没有则返回 None。

类型：[Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)\<T\>

### prop last
    
    __
    
    prop last: ?T
    
功能：返回此列表中的最后一个元素，如果没有则返回 None。

类型：[Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)\<T\>

### func get\(Int64\)
    
    __
    
    func get(index: Int64): ?T
    
功能：返回此列表中指定位置的元素。

参数：

  * index: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 要返回的元素的索引。

返回值：

  * ?T - 返回指定位置的元素，如果 index 大小小于 0 或者大于等于此列表中的元素数量，返回 None。

### operator func \[\]\(Int64\)
    
    __
    
    operator func [](index: Int64): T
    
功能：操作符重载 - get。

参数：

  * index: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 表示 get 接口的索引。

返回值：

  * T - 索引位置的元素的值。

## interface ReadOnlyMap\<K, V\>
    
    __
    
    public interface ReadOnlyMap\<K, V\> <: Collection<(K, V)> {
        func get(key: K): ?V
        func contains(key: K): Bool
        func contains(all!: Collection\<K\>): Bool
        func keys(): EquatableCollection\<K\>
        func values(): Collection\<V\>
    
        operator func [](key: K): V
    }
    
功能：[ReadOnlyMap](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-readonlymapk-v) 接口提供了一种将键映射到值的方式。它允许我们使用键来查找值，因此可以用于存储键值对。

[ReadOnlyMap](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-readonlymapk-v)不能包含重复的 key，每个 key 最多只能映射到一个 value。

父类型：

  * [Collection](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-collectiont)<\(K, V\)>

### func get\(K\)
    
    __
    
    func get(key: K): ?V
    
功能：根据 key 得到 [ReadOnlyMap](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-readonlymapk-v) 中映射的值。

参数：

  * key: K - 传递 key，获取 value。

返回值：

  * ?V - [ReadOnlyMap](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-readonlymapk-v) 中与 Key 对应的值。

### func contains\(K\)
    
    __
    
    func contains(key: K): Bool
    
功能：判断是否包含指定键的映射。

参数：

  * key: K - 传递要判断的 key。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果存在，则返回 true；否则，返回 false。

### func contains\(Collection\<K\>\)
    
    __
    
    func contains(all!: Collection\<K\>): Bool
    
功能：判断是否包含指定集合键的映射。

参数：

  * all\!: [Collection](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-collectiont)\<K\> \- 传递待判断的 的集合。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果存在，则返回 true；否则，返回 false。

### func keys\(\)
    
    __
    
    func keys(): EquatableCollection\<K\>
    
功能：返回 [ReadOnlyMap](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-readonlymapk-v) 中所有的 key，并将所有 key 存储在一个 [EquatableCollection](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-equatablecollectiont)\<K\> 容器中。

返回值：

  * [EquatableCollection](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-equatablecollectiont)\<K\> \- 保存所有返回的 key。

### func values\(\)
    
    __
    
    func values(): Collection\<V\>
    
功能：返回 [ReadOnlyMap](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-readonlymapk-v) 中所有的 value，并将所有 value 存储在一个 [Collection](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-collectiont)\<V\> 容器中。

返回值：

  * [Collection](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-collectiont)\<V\> \- 保存所有返回的 value。

### operator func \[\]\(K\)
    
    __
    
    operator func [](key: K): V
    
功能：运算符重载集合，如果键存在，返回键对应的值，如果不存在，抛出异常。

参数：

  * key: K - 需要进行查找的键。

返回值：

  * V - 与键对应的值。

## interface ReadOnlySet\<T\>
    
    __
    
    public interface ReadOnlySet\<T\> <: Collection\<T\> {
        func contains(element: T): Bool
        func contains(all!: Collection\<T\>): Bool
        func subsetOf(other: ReadOnlySet\<T\>): Bool
    }
    
功能：[ReadOnlySet](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-readonlysett) 接口提供了一组集合的相关操作，允许我们以只读方式操作内部元素。

父类型：

  * [Collection](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-collectiont)\<T\>

### func contains\(T\)
    
    __
    
    func contains(element: T): Bool
    
功能：如果该集合包含指定元素，则返回 true。

参数：

  * element: T - 需要判断的元素。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果包含，则返回 true；否则，返回 false。

### func contains\(Collection\<T\>\)
    
    __
    
    func contains(all!: Collection\<T\>): Bool
    
功能：检查该集合是否包含其他集合。

参数：

  * all\!: [Collection](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-collectiont)\<T\> \- 其他集合。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果该集合包含指定集合，则返回 true；否则，返回 false。

### func subsetOf\(ReadOnlySet\<T\>\)
    
    __
    
    func subsetOf(other: ReadOnlySet\<T\>): Bool
    
功能：检查该集合是否为其他集合的子集。

参数：

  * other: [ReadOnlySet](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-readonlysett)\<T\> \- 其他集合。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 果该集合是指定集合的子集，则返回 true；否则，返回 false。

## interface Set\<T\>
    
    __
    
    public interface Set\<T\> <: ReadOnlySet\<T\> {
        func add(element: T): Bool
        func add(all!: Collection\<T\>): Unit
        func remove(element: T): Bool
        func remove(all!: Collection\<T\>): Unit
        func removeIf(predicate: (T) -> Bool): Unit
        func clear(): Unit
        func retain(all!: Set\<T\>): Unit
    }
    
功能：[Set](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-sett) 接口提供了一组集合的相关操作，允许我们以可读写的方式操作内部元素。

[Set](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-sett) 接口不规定内部的实现方式，在 [Set](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-sett) 接口的实例中，其内部的元素通常是无序的，不能通过索引访问，也不能保证元素的插入顺序。

父类型：

  * [ReadOnlySet](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-readonlysett)\<T\>

### func add\(T\)
    
    __
    
    func add(element: T): Bool
    
功能：添加元素操作。如果元素已经存在，则不会添加它。

参数：

  * element: T - 要添加的元素。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果添加成功，则返回 true；否则，返回 false。

### func add\(Collection\<T\>\)
    
    __
    
    func add(all!: Collection\<T\>): Unit
    
功能：添加 [Collection](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-collectiont) 中的所有元素至此 [Set](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-sett) 中，如果元素存在，则不添加。

参数：

  * all\!: [Collection](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-collectiont)\<T\> \- 需要被添加的元素的集合。

### func remove\(T\)
    
    __
    
    func remove(element: T): Bool
    
功能：从该集合中移除指定元素（如果存在）。

参数：

  * element: T - 要删除的元素。

返回值：

  * Bool - 集合中存在指定的元素并且删除成功返回 `true`，否则返回 `false` 。

### func remove\(Collection\<T\>\)
    
    __
    
    func remove(all!: Collection\<T\>): Unit
    
功能：移除此 [Set](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-sett) 中那些也包含在指定 [Collection](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-collectiont) 中的所有元素。

参数：

  * all\!: [Collection](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-collectiont)\<T\> \- 传入 [Collection](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-collectiont)\<T\>。

### func removeIf\(\(T\) -> Bool\)
    
    __
    
    func removeIf(predicate: (T) -> Bool): Unit
    
功能：传入 lambda 表达式，如果满足 `true` 条件，则删除对应的元素。

参数：

  * predicate: \(T\) ->[Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 传入一个 lambda 表达式进行判断。

### func clear\(\)
    
    __
    
    func clear(): Unit
    
功能：清除所有键值对。

### func retain\(Set\<T\>\)
    
    __
    
    func retain(all!: Set\<T\>): Unit
    
功能：仅保留该 [Set](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-sett) 与入参 [Set](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-sett) 中重复的元素。

参数：

  * all\!: [Set](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-sett)\<T\> \- 要保存的元素集合。

## interface Stack\<T\>
    
    __
    
    public interface Stack\<T\> <: Collection\<T\> {
        func add(element: T): Unit
        func peek(): ?T
        func remove(): ?T
    }
    
功能：Stack（栈）是一种数据结构，具有后进先出（Last In First Out，LIFO）的特点。可以在一端（称为栈顶）进行插入和删除操作，而另一端（称为栈底）则不允许进行操作。

栈的基本操作包括入栈（add）、出栈（remove）、查看栈顶元素（peek）。

父类型：

  * [Collection](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-collectiont)\<T\>

### func add\(T\)
    
    __
    
    func add(element: T): Unit
    
功能：向栈中添加元素。

参数：

  * element: T - 将被放到栈顶的元素。

### func peek\(\)
    
    __
    
    func peek(): ?T
    
功能：查看栈顶元素，该操作不会删除栈顶元素。

返回值：

  * ?T - 栈顶元素，如果栈为空，返回 `None`。

### func remove\(\)
    
    __
    
    func remove(): ?T
    
功能：删除并返回栈顶的元素。

返回值：

  * ?T - 被删除的栈顶元素，如果栈为空，返回 `None`。