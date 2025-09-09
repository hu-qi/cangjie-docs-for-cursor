
# std.collection

## 功能介绍

collection 包提供了常见数据结构的高效实现、相关抽象的接口的定义以及在集合类型中常用的函数功能。

本包实现了以下常用的数据结构：

  * [ArrayDeque](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraydequet)：基于数组实现的双端循环队列，支持在集合的两端进行元素的插入和删除操作。可以使用 addFirst\(\) 和 addLast\(\) 方法在头部和尾部插入元素，使用 removeFirst\(\) 和 removeLast\(\) 方法从集合的头部和尾部删除元素。

  * [ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)：变长的连续数组，在需要存储不确定数量的数据，或者需要根据运行时的条件动态调整数组大小时使用 ArrayList。使用 ArrayList 可能会导致内存分配和释放的开销增加，因此需要谨慎使用。

  * [ArrayQueue](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arrayqueuet)：基于数组实现的循环队列，只允许在尾部插入元素，在头部删除元素。

  * [ArrayStack](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraystackt)：基于数组实现的栈数据结构。特点是先进后出，只能在顶部进行数据的插入和删除。

  * [LinkedList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-linkedlistt)：链表结构， LinkedList 的优点是它可以动态地添加或删除元素，而不需要移动其他元素。这使得它在需要频繁添加或删除元素的情况下非常有用。它还可以轻松地进行修改或删除操作，并且可以在列表中存储多个元素。 LinkedList 的缺点是它需要额外的内存来存储每个元素的引用，这可能会导致内存浪费。

  * [HashMap](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-hashmapk-v)：哈希表，它存储键值对，并且可以根据键快速访问值。在需要使用映射关系并且需要快速查找时使用。

  * [HashSet](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-hashsett-where-t--hashable--equatablet)：基于哈希表实现的集合数据结构，它可以用于快速检索和删除元素，具有高效的插入、删除和查找操作。

  * [TreeMap](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-treemapk-v-where-k--comparablek)：基于红黑树实现的有序映射表。通常情况下，当需要将元素按照自然顺序或者自定义顺序进行排序时，可以使用TreeMap。

  * [TreeSet](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-treesett-where-t--comparablet)：基于 TreeMap 实现的有序集合。能自动排序元素，可用于存储不重复且需排序的数据。

collection 包提供的集合类型都不支持并发安全，并发安全的集合请参见 [collection.concurrent 包](./libs/std/collection_concurrent/collection_concurrent_package_overview.md)。

## API 列表

### 函数

函数名| 功能  
---|---  
[all\<T\>\(\(T\) -\> Bool\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_function.html#func-alltt---bool)| 判断迭代器所有元素是否都满足条件。  
[any\<T\>\(\(T\) -\> Bool\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_function.html#func-anytt---bool)| 判断迭代器是否存在任意一个满足条件的元素。  
[at\<T\>\(Int64\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_function.html#func-attint64)| 获取迭代器指定位置的元素。  
[collectArrayList\<T\>\(Iterable\<T\>\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_function.html#func-collectarraylisttiterablet)| 将一个迭代器转换成 [ArrayList](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt) 类型。  
[collectArray\<T\>\(Iterable\<T\>\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_function.html#func-collectarraytiterablet)| 将一个迭代器转换成 Array 类型。  
[collectHashMap\<K, V\>\(Iterable\<\(K, V\)\>\) where K \<: Hashable & Equatable\<K\>](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_function.html#func-collecthashmapk-viterablek-v-where-k--hashable--equatablek)| 将一个迭代器转换成 HashMap 类型。  
[collectHashSet\<T\>\(Iterable\<T\>\) where T \<: Hashable & Equatable\<T\>](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_function.html#func-collecthashsettiterablet-where-t--hashable--equatablet)| 将一个迭代器转换成 HashSet 类型。  
[collectString\<T\>\(String\) where T \<: ToString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_function.html#func-collectstringtstring-where-t--tostring)| 将一个对应元素实现了 ToString 接口的迭代器转换成 String 类型。  
[concat\<T\>\(Iterable\<T\>\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_function.html#func-concattiterablet)| 串联两个迭代器。  
[contains\<T\>\(T\) where T \<: Equatable\<T\>](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_function.html#func-containstt-where-t--equatablet)| 遍历所有元素，判断是否包含指定元素并返回该元素。  
[count\<T\>\(Iterable\<T\>\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_function.html#func-counttiterablet)| 统计迭代器包含元素数量。  
[enumerate\<T\>\(Iterable\<T\>\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_function.html#func-enumeratetiterablet)| 用于获取带索引的迭代器。  
[filter\<T\>\(\(T\) -\> Bool\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_function.html#func-filtertt---bool)| 筛选出满足条件的元素。  
[filterMap\<T, R\>\(\(T\) -\> ?R\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_function.html#func-filtermapt-rt---r)| 同时进行筛选操作和映射操作，返回一个新的迭代器。  
[first\<T\>\(Iterable\<T\>\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_function.html#func-firsttiterablet)| 获取头部元素。  
[flatMap\<T, R\>\( \(T\) -\> Iterable\<R\>\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_function.html#func-flatmapt-r-t---iterabler)| 创建一个带 flatten 功能的映射。  
[flatten\<T, R\>\(Iterable\<T\>\) where T \<: Iterable\<R\>](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_function.html#func-flattent-riterablet-where-t--iterabler)| 将嵌套的迭代器展开一层。  
[fold\<T, R\>\(R, \(R, T\) -\> R\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_function.html#func-foldt-rr-r-t---r)| 使用指定初始值，从左向右计算。  
[forEach\<T\>\(\(T\) -\> Unit\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_function.html#func-foreachtt---unit)| 遍历所有元素，指定给定的操作。  
[inspect\<T\>\(\(T\) -\> Unit\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_function.html#func-inspecttt---unit)| 迭代器每次调用 next\(\) 对当前元素执行额外操作（不会消耗迭代器中元素）。  
[isEmpty\<T\>\(Iterable\<T\>\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_function.html#func-isemptytiterablet)| 判断迭代器是否为空。  
[last\<T\>\(Iterable\<T\>\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_function.html#func-lasttiterablet)| 获取尾部元素。  
[map\<T, R\>\(\(T\) -\> R\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_function.html#func-mapt-rt---r)| 创建一个映射。  
[max\<T\>\(Iterable\<T\>\) where T \<: Comparable\<T\>](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_function.html#func-maxtiterablet-where-t--comparablet)| 筛选最大的元素。  
[min\<T\>\(Iterable\<T\>\) where T \<: Comparable\<T\>](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_function.html#func-mintiterablet-where-t--comparablet)| 筛选最小的元素。  
[none\<T\>\(\(T\) -\> Bool\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_function.html#func-nonett---bool)| 判断迭代器是否都不满足条件。  
[reduce\<T\>\(\(T, T\) -\> T\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_function.html#func-reducett-t---t)| 使用第一个元素作为初始值，从左向右计算。  
[skip\<T\>\(Int64\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_function.html#func-skiptint64)| 从迭代器跳过特定个数。  
[step\<T\>\(Int64\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_function.html#func-steptint64)| 迭代器每次调用 next\(\) 跳过特定个数。  
[take\<T\>\(Int64\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_function.html#func-taketint64)| 从迭代器取出特定个数。  
[zip\<T, R\>\(Iterable\<R\>\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_function.html#func-zipt-riterabler)| 将两个迭代器合并成一个（长度取决于短的那个迭代器）。  
  
### 接口

接口名| 功能  
---|---  
[Deque\<T\>](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-dequet)| 双端队列是一种具有队列和栈特性的数据结构，它允许在两端进行插入和删除操作。  
[EquatableCollection\<T\>](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-equatablecollectiont)| 定义了可以进行比较的集合类型。  
[List\<T\>](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-listt)| 提供了对索引友好的列表操作。  
[Map\<K, V\>](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-mapk-v)| 提供了一种将键映射到值的方式。  
[MapEntryView\<K, V\>](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-mapentryviewk-v)| 键值对集合中的某个Key的视图  
[OrderedMap\<K, V\>](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-orderedmapk-v)| 有序映射  
[OrderedSet\<T\>](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-orderedsett)| 有序集合  
[Queue\<T\>](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-queuet)| 队列数据结构，它遵循先进先出（First In First Out, FIFO）原则。  
[ReadOnlyList\<T\>](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-readonlylistt)| 定义了对列表的只读操作。  
[ReadOnlyMap\<K, V\>](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-readonlymapk-v)| 只读映射  
[ReadOnlySet\<K, V\>](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-readonlysett)| 只读集合  
[Set\<T\>](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-sett)| 不包含重复元素的集合。  
[Stack\<T\>](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-stackt)| 栈数据结构接口，具有后进先出（Last In First Out，LIFO）的特点。  
  
### 类

类名| 功能  
---|---  
[ArrayDeque\<T\>](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraydequet)| 根据可调整大小的循环数组实现的双端队列。  
[ArrayList\<T\>](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraylistt)| 提供可变长度的数组的功能。  
[ArrayQueue\<T\>](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arrayqueuet)| 基于数组实现的循环队列数据结构。  
[ArrayStack\<T\>](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-arraystackt)| 基于数组实现的栈[Stack](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-stackt) 数据结构。  
[HashMapIterator\<K, V\> where K \<: Hashable & Equatable\<K\>](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-hashmapiteratork-v-where-k--hashable--equatablek)| 此类主要实现 HashMap 的迭代器功能。  
[HashMap\<K, V\> where K \<: Hashable & Equatable\<K\>](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-hashmapk-v)| [Map\<K, V\>](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-mapk-v) 接口的哈希表实现。  
[HashSet\<T\> where T \<: Hashable & Equatable\<T\>](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-hashsett-where-t--hashable--equatablet)| 基于 [HashMap\<K, V\>](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-hashmapk-v) 实现的 [Set\<T\>](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-sett) 接口的实例。  
[LinkedListNode\<T\>](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-linkedlistnodet)| [LinkedList\<T\>](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-linkedlistt) 上的节点。  
[LinkedList\<T\>](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-linkedlistt)| 实现双向链表的数据结构。  
[TreeMap\<K, V\> where K \<: Comparable\<K\>](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-treemapk-v-where-k--comparablek)| 基于平衡二叉搜索树实现的 [Map\<K, V\>](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-mapk-v) 接口实例。  
[TreeSet\<T\> where T \<: Comparable\<T\>](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-treesett-where-t--comparablet)| 基于 [TreeMap\<K, V\>](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_class.html#class-treemapk-v-where-k--comparablek) 实现的 [Set\<T\>](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-sett) 接口的实例。  
  
### 异常类

异常类名| 功能  
---|---  
[ConcurrentModificationException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_exception.html#class-concurrentmodificationexception)| 并发修改异常类。