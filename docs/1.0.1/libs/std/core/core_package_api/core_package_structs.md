
# 结构体

## struct Array\<T\>
    
    __
    
    public struct Array\<T\> {
        public const init()
        public init(size: Int64, repeat!: T)
        public init(size: Int64, initElement: (Int64) -> T)
    }
    
功能：仓颉数组类型，用来表示单一类型的元素构成的有序序列。

T 表示数组的元素类型，T 可以是任意类型。

### prop first
    
    __
    
    public prop first: Option\<T\>
    
功能：获取当前数组的第一个元素，如果当前数组为空，返回 None。

类型：[Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)\<T\>

### prop last
    
    __
    
    public prop last: Option\<T\>
    
功能：获取当前数组的最后一个元素，如果当前数组为空，返回 None。

类型：[Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)\<T\>

### init\(\)
    
    __
    
    public const init()
    
功能：构造一个空数组。

### init\(Int64, \(Int64\) -> T\)
    
    __
    
    public init(size: Int64, initElement: (Int64) -> T)
    
功能：创建指定长度的数组，其中元素根据初始化函数计算获取。

即：将 \[0, size\) 范围内的值分别传入初始化函数 initElement，执行得到数组对应下标的元素。

参数：

  * size: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 数组大小。
  * initElement: \([Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)\) ->T - 初始化函数。

异常：

  * [NegativeArraySizeException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-negativearraysizeexception) \- 当 size 小于 0，抛出异常。

### init\(Int64, T\)
    
    __
    
    public init(size: Int64, repeat!: T)
    
功能：构造一个指定长度的数组，其中元素都用指定初始值进行初始化。

> **注意：**
> 
> 该构造函数不会拷贝 repeat， 如果 repeat 是一个引用类型，构造后数组的每一个元素都将指向相同的引用。

参数：

  * size: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 数组大小，取值范围为 \[0, [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64).Max\]。
  * repeat\!: T - 数组元素初始值。

异常：

  * [NegativeArraySizeException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-negativearraysizeexception) \- 当 size 小于 0，抛出异常。

### func clone\(\)
    
    __
    
    public func clone(): Array\<T\>
    
功能：克隆数组，将对数组数据进行深拷贝。

返回值：

  * [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<T\> \- 克隆得到的新数组。

### func clone\(Range\<Int64\>\)
    
    __
    
    public func clone(range: Range\<Int64\>) : Array\<T\>
    
功能：克隆数组的指定区间。

> **注意：**
> 
>   1. 如果参数 range 是使用 [Range](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-ranget-where-t--countablet--comparablet--equatablet) 构造函数构造的 [Range](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-ranget-where-t--countablet--comparablet--equatablet) 实例，有如下行为： 
>     * start 的值就是构造函数传入的值本身，不受构造时传入的 hasStart 的值的影响。
>     * hasEnd 为 false 时，end 值不生效，且不受构造时传入的 isClosed 的值的影响，数组切片取到原数组最后一个元素。
>   2. range 的步长只能为 1。
> 

参数：

  * range: [Range](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-ranget-where-t--countablet--comparablet--equatablet)<[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)> \- 克隆的区间。

返回值：

  * [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<T\> \- 克隆得到的新数组。

异常：

  * [IndexOutOfBoundsException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-indexoutofboundsexception) \- range 超出数组范围时，抛出异常。

示例：
    
    __
    
    main () {
        let arr = [0, 1, 2, 3, 4, 5]
        let new = arr.clone(1..4)
        println(new)
    }
    
运行结果：
    
    __
    
    [1, 2, 3]

### func concat\(Array\<T\>\)
    
    __
    
    public func concat(other: Array\<T\>): Array\<T\>
    
功能：该函数将创建一个新的数组，数组内容是当前数组后面串联 other 指向的数组。

参数：

  * other: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<T\> \- 串联到当前数组末尾的数组。

返回值：

  * [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<T\> \- 串联得到的新数组。

示例：
    
    __
    
    main () {
        let arr = [0, 1, 2, 3, 4, 5]
        let new = arr.concat([6, 7, 8, 9, 10])
        println(new)
    }
    
运行结果：
    
    __
    
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

### func copyTo\(Array\<T\>\)
    
    __
    
    public func copyTo(dst: Array\<T\>): Unit
    
功能：将当前数组的全部元素拷贝到目标数组 dst 中。

拷贝长度为当前数组的长度，从目标数组的起始位置开始写入，要求当前数组的长度不大于目标数组的长度。

参数：

  * dst: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<T\> \- 目标数组。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当前数组的长度大于目标数组的长度。

### func copyTo\(Array\<T\>, Int64, Int64, Int64\)
    
    __
    
    public func copyTo(dst: Array\<T\>, srcStart: Int64, dstStart: Int64, copyLen: Int64): Unit
    
功能：将当前数组中的一段数据拷贝到目标数组中。

参数：

  * dst: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<T\> \- 目标数组。
  * srcStart: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 从 this 数组的 srcStart 下标开始拷贝，取值范围为 \[0, this.size\)。
  * dstStart: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 从目标数组的 dstStart 下标开始写入，取值范围为 \[0, dst.size\)。
  * copyLen: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 拷贝数组的长度，取值要求为 copyLen + srcStart < this.size，copyLen + dstStart < dst.size。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- copyLen 小于 0 则抛出此异常。
  * [IndexOutOfBoundsException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-indexoutofboundsexception) \- 如果参数不满足上述取值范围，抛出此异常。

示例：
    
    __
    
    main () {
        let arr = [0, 1, 2, 3, 4, 5]
        let new = [0, 0, 0, 0, 0, 0]
        arr.copyTo(new, 2, 2, 4)
        println(new)
    }
    
运行结果：
    
    __
    
    [0, 0, 2, 3, 4, 5]

### func fill\(T\)
    
    __
    
    public func fill(value: T): Unit
    
功能：将当前数组内所有元素都替换成指定的 value。

参数：

  * value: T - 修改的目标值。

示例：
    
    __
    
    main () {
        let arr = [0, 1, 2]
        arr[1..3].fill(-1)
        println(arr)
    }
    
运行结果：
    
    __
    
    [0, -1, -1]

### func get\(Int64\)
    
    __
    
    public func get(index: Int64): Option\<T\>
    
功能：获取数组中下标 index 对应的元素。

该函数结果将用 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont) 封装，如果 index 越界，将返回 None。

也可以通过 \[\] 操作符获取数组指定下标的元素，该接口将在 index 越界时抛出异常。

参数：

  * index: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 要获取的值的下标。

返回值：

  * [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)\<T\> \- 当前数组中下标 index 对应的值。

示例：
    
    __
    
    main () {
        let arr = [0, 1, 2]
        let num = arr.get(0)
        println(num)
    }
    
运行结果：
    
    __
    
    Some(0)

### func map\<R\>\(\(T\)->R\)
    
    __
    
    public func map\<R\>(transform: (T)->R): Array\<R\>
    
功能：将当前数组内所有 T 类型元素根据 transform 映射为 R 类型的元素，组成新的数组。

参数：

  * transform: \(T\)->R - 映射函数。

返回值：

  * [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<R\> \- 原数组中所有元素映射后得到的元素组成的新数组。

示例：
    
    __
    
    main (): Int64 {
        let arr = [0, 1, 2]
        let arr1 = arr.map({value => value + 1})
        println(arr1)
        return 0
    }
    
运行结果：
    
    __
    
    [1, 2, 3]

### func repeat\(Int64\)
    
    __
    
    public func repeat(n: Int64): Array\<T\>
    
功能：重复当前数组若干次，得到新数组。

参数：

  * n: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 重复次数。

返回值：

  * [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<T\> \- 重复当前数组 n 次得到的新数组。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 参数 n 小于等于 0。

示例：
    
    __
    
    main (): Int64 {
        let arr = [0, 1, 2]
        var arr1 = arr.repeat(2)
        println(arr1)
        return 0
    }
    
运行结果：
    
    __
    
    [0, 1, 2, 0, 1, 2]

### func reverse\(\)
    
    __
    
    public func reverse(): Unit
    
功能：反转数组，将数组中元素的顺序进行反转。

示例：
    
    __
    
    main () {
        let arr = [0, 1, 2, 3, 4, 5]
        arr.reverse()
        println(arr)
    }
    
运行结果：
    
    __
    
    [5, 4, 3, 2, 1, 0]

### func slice\(Int64, Int64\)
    
    __
    
    public func slice(start: Int64, len: Int64): Array\<T\>
    
功能：获取数组切片。

> **注意：**
> 
> 切片不会对数组数据进行拷贝，是对原数据特定区间的引用。

参数：

  * start: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 切片的起始位置，取值需大于 0，且 start + len 小于等于当前 [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt) 实例的长度。
  * len: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 切片的长度，取值需大于 0。

返回值：

  * [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<T\> \- 返回切片后的数组。

异常：

  * [IndexOutOfBoundsException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-indexoutofboundsexception) \- 如果参数不符合上述取值范围，抛出异常。

示例：
    
    __
    
    class Rectangle <: ToString {
        var width: Int64
        var height: Int64
    
        public init(width: Int64, height: Int64) {
            this.width = width
            this.height = height
        }
    
        public func toString(): String {
            return "width: ${this.width}, height: ${this.height}"
        }
    }
    
    main(): Int64 {
        let arr = [Rectangle(1, 2), Rectangle(3, 4), Rectangle(5, 6)]
        let arr1 = arr.slice(1, 2)
        println(arr1)
        /* 由于 slice() 是对原数组的引用，在新数组上修改，原数组引用类型的元素也会变化 */
        arr1[0].width = 5
        println(arr)
        return 0
    }
    
运行结果：
    
    __
    
    [width: 3, height: 4, width: 5, height: 6]
    [width: 1, height: 2, width: 5, height: 4, width: 5, height: 6]

### func splitAt\(Int64\)
    
    __
    
    public func splitAt(mid: Int64): (Array\<T\>, Array\<T\>)
    
功能：从指定位置 mid 处分割数组。

得到的两个数组是原数组的切片，取值范围为 \[0, mid\), \[mid, this.size\)。

参数：

  * mid: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 分割的位置，取值范围为 \[0, this.size\]。

返回值：

  * \([Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<T\>, [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<T\>\) - 分割原数组得到的两个切片。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- mid 小于 0 或大于 this.size。

### func swap\(Int64, Int64\)
    
    __
    
    public func swap(index1: Int64, index2: Int64): Unit
    
功能：交换指定位置的两个元素。

如果 index1 和 index2 指向同一个位置，将不做交换。

参数：

  * index1: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 需要交换的两个元素的下标之一，取值范围为 \[0, this.size\)。
  * index2: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 需要交换的两个元素的下标之一，取值范围为 \[0, this.size\)。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- index1 / index2 小于 0 或大于等于 this.size。

示例：
    
    __
    
    main (): Int64 {
        let arr = [1, 2, 3, 4]
        arr.swap(1, 2)
        println(arr)
        return 0
    }
    
运行结果：
    
    __
    
    [1, 3, 2, 4]

### operator func \[\]\(Int64\)
    
    __
    
    public operator func [](index: Int64): T
    
功能：获取数组下标 index 对应的值。

该函数中如果 index 越界，将抛出异常。

也可以通过 get 函数获取数组指定下标的元素，get 函数将在 index 越界时返回 None。

参数：

  * index: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 要获取的值的下标，取值范围为 \[0, [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64).Max\]。

返回值：

  * T - 数组中下标 index 对应的值。

异常：

  * [IndexOutOfBoundsException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-indexoutofboundsexception) \- 如果 index 小于 0，或大于等于数组长度，抛出异常。

### operator func \[\]\(Int64, T\)
    
    __
    
    public operator func [](index: Int64, value!: T): Unit
    
功能：修改数组中下标 index 对应的值。

参数：

  * index: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 需要修改值的下标，取值范围为 \[0, [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64).Max\]。
  * value\!: T - 修改的目标值。

异常：

  * [IndexOutOfBoundsException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-indexoutofboundsexception) \- 如果 index 小于 0，或大于等于数组长度，抛出异常。

### operator func \[\]\(Range\<Int64\>\)
    
    __
    
    public operator func [](range: Range\<Int64\>): Array\<T\>
    
功能：根据给定区间获取数组切片。

> **注意：**
> 
>   1. 如果参数 range 是使用 [Range](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-ranget-where-t--countablet--comparablet--equatablet) 构造函数构造的 [Range](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-ranget-where-t--countablet--comparablet--equatablet) 实例，有如下行为： 
>     * start 的值就是构造函数传入的值本身，不受构造时传入的 hasStart 的值的影响。
>     * hasEnd 为 false 时，end 值不生效，且不受构造时传入的 isClosed 的值的影响，该数组切片取到原数组最后一个元素。
>   2. range 的步长只能为 1。
> 

参数：

  * range: [Range](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-ranget-where-t--countablet--comparablet--equatablet)<[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)> \- 切片的范围，range 表示的范围不能超过数组范围。

返回值：

  * [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<T\> \- 数组切片。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 如果 range 的步长不等于 1，抛出异常。
  * [IndexOutOfBoundsException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-indexoutofboundsexception) \- 如果 range 表示的数组范围无效，抛出异常。

示例：
    
    __
    
    main () {
        let arr = [0, 1, 2, 3, 4, 5]
        let slice = arr[1..4]
        arr[3] = 10
        println(slice)
    }
    
运行结果：
    
    __
    
    [1, 2, 10]

### operator func \[\]\(Range\<Int64\>, Array\<T\>\)
    
    __
    
    public operator func [](range: Range\<Int64\>, value!: Array\<T\>): Unit
    
功能：用指定的数组对本数组一个连续范围的元素赋值。

range 表示的区见的长度和目标数组 value 的大小需相等。

> **注意：**
> 
>   1. 如果参数 range 是使用 [Range](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-ranget-where-t--countablet--comparablet--equatablet) 构造函数构造的 [Range](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-ranget-where-t--countablet--comparablet--equatablet) 实例，有如下行为： 
>     * start 的值就是构造函数传入的值本身，不受构造时传入的 hasStart 的值的影响。
>     * hasEnd 为 false 时，end 值不生效，且不受构造时传入的 isClosed 的值的影响，该数组切片取到原数组最后一个元素。
>   2. range 的步长只能为 1。
> 

参数：

  * range: [Range](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-ranget-where-t--countablet--comparablet--equatablet)<[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)> \- 需要修改的数组范围，range 表示的范围不能超过数组范围。
  * value\!: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<T\> \- 修改的目标值。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 如果 range 的步长不等于 1，或 range 长度不等于 value 长度，抛出异常。
  * [IndexOutOfBoundsException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-indexoutofboundsexception) \- 如果 range 表示的数组范围无效，抛出异常。

示例：
    
    __
    
    main () {
        let arr = [0, 1, 2, 3, 4, 5]
        arr[1..3] = [10, 11]
        println(arr)
    }
    
运行结果：
    
    __
    
    [0, 10, 11, 3, 4, 5]

### extend\<T\> Array\<T\> <: Collection\<T\>
    
    __
    
    extend \<T\> Array\<T\> <: Collection\<T\>
    
功能：为 [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<T\> 类型实现 [Collection](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-collectiont) 接口。

父类型：

  * [Collection](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-collectiont)\<T\>

#### prop size
    
    __
    
    public prop size: Int64
    
功能：获取元素数量。

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)

#### func isEmpty\(\)
    
    __
    
    public func isEmpty(): Bool
    
功能：判断数组是否为空。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果数组为空，返回 true，否则，返回 false。

#### func iterator\(\)
    
    __
    
    public func iterator(): Iterator\<T\>
    
功能：获取当前数组的迭代器，用于遍历数组。

返回值：

  * [Iterator](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_classes.html#class-iteratort)\<T\> \- 当前数组的迭代器。

#### func toArray\(\)
    
    __
    
    public func toArray(): Array\<T\>
    
功能：根据当前 [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt) 实例拷贝一个新的 [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt) 实例。

返回值：

  * [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<T\> \- 拷贝得到的新的 [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt) 实例。

### extend\<T\> Array\<T\> <: Equatable<Array\<T\>> where T <: Equatable\<T\>
    
    __
    
    extend \<T\> Array\<T\> <: Equatable<Array\<T\>> where T <: Equatable\<T\>
    
功能：为 [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<T\> 类型扩展 [Equatable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-equatablet)<[Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<T\>> 接口实现，支持判等操作。

父类型：

  * [Equatable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-equatablet)<Array\<T\>>

#### func contains\(T\)
    
    __
    
    public func contains(element: T): Bool
    
功能：查找当前数组是否包含指定元素。

参数：

  * element: T - 需要查找的目标元素。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果存在，则返回 true，否则返回 false。

示例：
    
    __
    
    main (): Int64 {
        let arr = [1, 2, 3, 4]
        println(arr.contains(1))
        return 0
    }
    
运行结果：
    
    __
    
    true

#### func indexOf\(Array\<T\>\)
    
    __
    
    public func indexOf(elements: Array\<T\>): Option\<Int64\>
    
功能：返回数组中子数组 `elements` 出现的第一个位置，如果数组中不包含此数组，返回 None。

> **注意：**
> 
> 当 T 的类型是 [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) 时，此函数的变长参数语法糖版本可能会和 `public func indexOf(element: T, fromIndex: Int64): Option<Int64>` 产生歧义，根据优先级，当参数数量是 2 个时，会优先调用 `public func indexOf(element: T, fromIndex: Int64): Option<Int64>`。

参数：

  * elements: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<T\> \- 需要定位的目标数组。

返回值：

  * [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)<[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)> \- 数组中子数组 `elements` 出现的第一个位置，如果数组中不包含此数组，返回 None。

示例：
    
    __
    
    main (): Int64 {
        let arr = [1, 2, 3, 4]
        let subArr = [2, 3]
        println(arr.indexOf(subArr))
        return 0
    }
    
运行结果：
    
    __
    
    Some(1)

#### func indexOf\(Array\<T\>, Int64\)
    
    __
    
    public func indexOf(elements: Array\<T\>, fromIndex: Int64): Option\<Int64\>
    
功能：返回数组中在 `fromIndex`之后，子数组`elements` 出现的第一个位置，未找到返回 None。

函数会对 `fromIndex` 范围进行检查，`fromIndex` 小于 0 时，将会从第 0 位开始搜索，当 `fromIndex` 大于等于本数组的大小时，结果为 None。

参数：

  * elements: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<T\> \- 需要定位的元素。
  * fromIndex: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 开始搜索的起始位置。

返回值：

  * [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)<[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)> \- 数组中在 `fromIndex`之后，子数组 `elements` 出现的第一个位置，未找到返回 None。

示例：
    
    __
    
    main (): Int64 {
        let arr = [1, 2, 3, 4, 2, 3]
        let subArr = [2, 3]
        println(arr.indexOf(subArr, 3))
        return 0
    }
    
运行结果：
    
    __
    
    Some(4)

#### func indexOf\(T\)
    
    __
    
    public func indexOf(element: T): Option\<Int64\>
    
功能：获取数组中 `element` 出现的第一个位置，如果数组中不包含此元素，返回 None。

参数：

  * element: T - 需要定位的元素。

返回值：

  * [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)<[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)> \- 数组中 `element` 出现的第一个位置，如果数组中不包含此元素，返回 None。

#### func indexOf\(T, Int64\)
    
    __
    
    public func indexOf(element: T, fromIndex: Int64): Option\<Int64\>
    
功能：返回数组中在 `fromIndex`之后， `element` 出现的第一个位置，未找到返回 None。

函数会从下标 `fromIndex` 开始查找，`fromIndex` 小于 0 时，将会从第 0 位开始搜索，当 `fromIndex` 大于等于本数组的大小时，结果为 None。

参数：

  * element: T - 需要定位的元素。
  * fromIndex: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 查找的起始位置。

返回值：

  * [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)<[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)> \- 返回数组中在 `fromIndex`之后， `element` 出现的第一个位置，未找到返回 None。

示例：
    
    __
    
    main (): Int64 {
        let arr = [1, 2, 3, 4, 2, 3]
        let subArr = [2, 3]
        println(arr.lastIndexOf(subArr, 3))
        return 0
    }
    
运行结果：
    
    __
    
    Some(4)

#### func lastIndexOf\(Array\<T\>\)
    
    __
    
    public func lastIndexOf(elements: Array\<T\>): Option\<Int64\>
    
功能：返回数组中子数组 `elements` 出现的最后一个位置，如果数组中不存在此子数组，返回 None。

参数：

  * elements: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<T\> \- 需要定位的目标数组。

返回值：

  * [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)<[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)> \- 数组中 `elements` 出现的最后一个位置，如果数组中不存在此子数组，返回 None。

#### func lastIndexOf\(Array\<T\>, Int64\)
    
    __
    
    public func lastIndexOf(elements: Array\<T\>, fromIndex: Int64): Option\<Int64\>
    
功能：从 `fromIndex` 开始向后搜索，返回数组中子数组 `elements` 出现的最后一个位置，如果数组中不存在此子数组，返回 None。

函数会对 `fromIndex` 范围进行检查，`fromIndex` 小于 0 时，将会从第 0 位开始搜索，当 `fromIndex` 大于等于本数组的大小时，结果为 None。

参数：

  * elements: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<T\> \- 需要定位的目标数组。
  * fromIndex: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 搜索开始的位置。

返回值：

  * [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)<[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)> \- 从 `fromIndex` 开始向后搜索，数组中子数组 `elements` 出现的最后一个位置，如果数组中不存在此子数组，返回 None。

#### func lastIndexOf\(T\)
    
    __
    
    public func lastIndexOf(element: T): Option\<Int64\>
    
功能：返回数组中 `element` 出现的最后一个位置，如果数组中不存在此元素，返回 None。

参数：

  * element: T - 需要定位的目标元素。

返回值：

  * [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)<[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)> \- 数组中 `element` 出现的最后一个位置，如果数组中不存在此元素，返回 None。

#### func lastIndexOf\(T, Int64\)
    
    __
    
    public func lastIndexOf(element: T, fromIndex: Int64): Option\<Int64\>
    
功能：从 `fromIndex` 开始向后搜索，返回数组中 `element` 出现的最后一个位置，如果数组中不存在此元素，返回 None。

函数会对 `fromIndex` 范围进行检查，`fromIndex` 小于 0 时，将会从第 0 位开始搜索，当 `fromIndex` 大于等于本数组的大小时，结果为 None。

参数：

  * element: T - 需要定位的目标元素。
  * fromIndex: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 搜索开始的位置。

返回值：

  * [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)<[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)> \- 从 `fromIndex` 开始向后搜索，返回数组中 `element` 出现的最后一个位置，如果数组中不存在此元素，返回 None。

#### func removePrefix\(Array\<T\>\)
    
    __
    
    public func removePrefix(prefix: Array\<T\>): Array\<T\>
    
功能：删除前缀。

如果当前数组开头与 prefix 完全匹配，删除其前缀。返回值为当前数组删除前缀后得到的切片。

参数：

  * prefix: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<T\> \- 待删除的前缀。

返回值：

  * [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<T\> \- 删除前缀后得到的原数组切片。

示例：
    
    __
    
    main (): Int64 {
        let arr = [1, 2, 1, 2, 3].removePrefix([1, 2])
        println(arr)
        return 0
    }
    
运行结果：
    
    __
    
    [1, 2, 3]

#### func removeSuffix\(Array\<T\>\)
    
    __
    
    public func removeSuffix(suffix: Array\<T\>): Array\<T\>
    
功能：删除后缀。

如果当前数组结尾与 suffix 完全匹配，删除其后缀。返回值为当前数组删除后缀后得到的切片。

参数：

  * suffix: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<T\> \- 待删除的后缀。

返回值：

  * [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<T\> \- 删除后缀后得到的原数组切片。

示例：
    
    __
    
    main (): Int64 {
        let arr = [1, 2, 3, 2, 3].removeSuffix([2, 3])
        println(arr)
        return 0
    }
    
运行结果：
    
    __
    
    [1, 2, 3]

#### func trimEnd\(Array\<T\>\)
    
    __
    
    public func trimEnd(set: Array\<T\>): Array\<T\>
    
功能：修剪当前数组，从尾开始删除在指定集合 set 中的元素，直到第一个不在 set 中的元素为止，并返回当前数组的切片。

参数：

  * set: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<T\> \- 待删除的元素的集合。

返回值：

  * [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<T\> \- 修剪后的数组切片。

示例：
    
    __
    
    main (): Int64 {
        let arr = [2, 1, 2, 2, 3].trimEnd([2, 3])
        println(arr)
        return 0
    }
    
运行结果：
    
    __
    
    [2, 1]

#### func trimEnd\(\(T\)->Bool\)
    
    __
    
    public func trimEnd(predicate: (T)->Bool): Array\<T\>
    
功能：修剪当前数组，从尾开始删除符合过滤条件的函数，直到第一个不符合的元素为止，并返回当前数组的切片。

参数：

  * predicate: \(T\)->[Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 过滤条件。

返回值：

  * [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<T\> \- 修剪后的数组切片。

#### func trimStart\(Array\<T\>\)
    
    __
    
    public func trimStart(set: Array\<T\>): Array\<T\>
    
功能：修剪当前数组，从头开始删除在指定集合 set 中的元素，直到第一个不在 set 中的元素为止，并返回当前数组的切片。

参数：

  * set: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<T\> \- 待删除的元素的集合。

返回值：

  * [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<T\> \- 修剪后的数组切片。

示例：
    
    __
    
    main (): Int64 {
        let arr = [1, 2, 1, 3, 1].trimStart([1, 2])
        println(arr)
        return 0
    }
    
运行结果：
    
    __
    
    [3, 1]

#### func trimStart\(\(T\)->Bool\)
    
    __
    
    public func trimStart(predicate: (T)->Bool): Array\<T\>
    
功能：修剪当前数组，从头开始删除符合过滤条件的函数，直到第一个不符合的元素为止，并返回当前数组的切片。

参数：

  * predicate: \(T\)->[Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 过滤条件。

返回值：

  * [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<T\> \- 修剪后的数组切片。

#### operator func \!=\(Array\<T\>\)
    
    __
    
    public operator const func !=(that: Array\<T\>): Bool
    
功能：判断当前实例与指定 [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<T\> 实例是否不等。

参数：

  * that: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<T\> \- 用于与当前实例比较的另一个 [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<T\> 实例。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果不相等，则返回 true；相等则返回 false。

#### operator func ==\(Array\<T\>\)
    
    __
    
    public operator const func ==(that: Array\<T\>): Bool
    
功能：判断当前实例与指定 [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<T\> 实例是否相等。

两个 [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<T\> 相等指的是其中的每个元素都相等。

参数：

  * that: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<T\> \- 用于与当前实例比较的另一个 [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<T\> 实例。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果相等，则返回 true，否则返回 false。

### extend\<T\> Array\<T\> where T <: ToString
    
    __
    
    extend \<T\> Array\<T\> <: ToString where T <: ToString
    
功能：为 [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<T\> 类型扩展 [ToString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-tostring) 接口，支持转字符串操作。

父类型：

  * [ToString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-tostring)

#### func toString\(\)
    
    __
    
    public func toString(): String
    
功能：将数组转换为可输出的字符串。

字符串形如 "\[1, 2, 3, 4, 5\]"

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 转化后的字符串。

### extend\<T\> Array<Array\<T\>>
    
    __
    
    extend \<T\> Array<Array\<T\>>
    
功能：为二维数组进行扩展，提供将其展开为一维数组的方法。

#### func flatten\(\)
    
    __
    
    public func flatten(): Array\<T\>
    
功能：将当前二维数组展开为一维数组。

例如将 \[\[1, 2\], \[3, 4\]\] 展开为 \[1, 2, 3, 4\]。

返回值：

  * [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<T\> \- 展开后的一维数组。

示例：
    
    __
    
    main (): Int64 {
        let arr = [[1, 2], [3, 4]].flatten()
        println(arr)
        return 0
    }
    
运行结果：
    
    __
    
    [1, 2, 3, 4]

## struct CPointerHandle\<T\> where T <: CType
    
    __
    
    public struct CPointerHandle\<T\> where T <: CType {
        public let array: Array\<T\>
        public let pointer: CPointer\<T\>
        public init()
        public init(ptr: CPointer\<T\>, arr: Array\<T\>)
    }
    
功能：表示 [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt) 数组的原始指针，该类型中的泛型参数应该满足 [CType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-ctype) 约束。

### let array
    
    __
    
    public let array: Array\<T\>
    
功能：原始指针对应的 [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt) 数组实例。

类型：[Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<T\>

### let pointer
    
    __
    
    public let pointer: CPointer\<T\>
    
功能：获取指定 [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt) 数组对应的原始指针。

类型：[CPointer](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#cpointert)\<T\>

### init\(\) \(deprecated\)
    
    __
    
    public init()
    
功能：构造一个默认 [CPointerHandle](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-cpointerhandlet-where-t--ctype) 实例，其中原始指针为空指针，仓颉数组为空数组。

> **注意：**
> 
> 未来版本即将废弃不再使用，可使用 [acquireArrayRawData](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_funcs.html#func-acquirearrayrawdatatarrayt-where-t--ctype) 函数构造 CPointerHandle 实例。

### init\(CPointer\<T\>, Array\<T\>\) \(deprecated\)
    
    __
    
    public init(ptr: CPointer\<T\>, arr: Array\<T\>)
    
功能：通过传入的 [CPointer](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#cpointert) 和 [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt) 初始化一个 [CPointerHandle](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-cpointerhandlet-where-t--ctype)。

参数：

  * ptr: [CPointer](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#cpointert)\<T\> \- 数组原始指针。
  * arr: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<T\> \- 指针对应的仓颉数组。

> **注意：**
> 
> 未来版本即将废弃不再使用，可使用 [acquireArrayRawData](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_funcs.html#func-acquirearrayrawdatatarrayt-where-t--ctype) 函数构造 CPointerHandle 实例。

## struct CPointerResource\<T\> where T <: CType
    
    __
    
    public struct CPointerResource\<T\> <: Resource where T <: CType {
        public let value: CPointer\<T\>
    }
    
功能：该结构体表示 [CPointer](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#cpointert) 对应的资源管理类型，其实例可以通过 [CPointer](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#cpointert) 的成员函数 `asResource` 获取。

父类型：

  * [Resource](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-resource)

### let value
    
    __
    
    public let value: CPointer\<T\>
    
功能：表示当前实例管理的 [CPointer](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#cpointert)\<T\> 类型实例。

类型：[CPointer](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#cpointert)\<T\>

### func close\(\)
    
    __
    
    public func close(): Unit
    
功能：释放其管理的 [CPointer](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#cpointert)\<T\> 实例指向的内容。

### func isClosed\(\)
    
    __
    
    public func isClosed(): Bool
    
功能：判断该指针内容是否已被释放。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 返回 true 为已释放。

## struct CStringResource
    
    __
    
    public struct CStringResource <: Resource {
        public let value: CString
    }
    
功能：该结构体表示 [CString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#cstring) 对应的资源管理类型，其实例可以通过 [CString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#cstring) 的成员函数 `asResource` 获取。

父类型：

  * [Resource](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-resource)

### let value
    
    __
    
    public let value: CString
    
功能：表示当前实例管理的 [CString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#cstring) 资源。

类型：[CString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#cstring)

### func close\(\)
    
    __
    
    public func close(): Unit
    
功能：释放当前实例管理的 [CString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#cstring) 类型实例指向的内容。

### func isClosed\(\)
    
    __
    
    public func isClosed(): Bool
    
功能：判断该字符串是否被释放。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 返回 true 为已释放。

## struct DefaultHasher
    
    __
    
    public struct DefaultHasher <: Hasher {
     public init(res!: Int64 = 0)
    }
    
功能：该结构体提供了默认哈希算法实现。

可以使用一系列 write 函数传入不同数据类型实例，并计算它们的组合哈希值。

父类型：

  * [Hasher](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-hasher)

### init\(Int64\)
    
    __
    
    public init(res!: Int64 = 0)
    
功能：构造函数，创建一个 [DefaultHasher](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-defaulthasher)。

参数：

  * res\!: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 初始哈希值，默认为 0。

### func finish\(\)
    
    __
    
    public func finish(): Int64
    
功能：获取哈希运算的结果。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 哈希运算的结果。

### func reset\(\)
    
    __
    
    public mut func reset(): Unit
    
功能：重置哈希值为 0。

### func write\(Bool\)
    
    __
    
    public mut func write(value: Bool): Unit
    
功能：通过该函数把想要哈希运算的 [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) 值传入，然后进行哈希组合运算。

参数：

  * value: [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 待运算的值。

### func write\(Float16\)
    
    __
    
    public mut func write(value: Float16): Unit
    
功能：通过该函数把想要哈希运算的 [Float16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float16) 值传入，然后进行哈希组合运算。

参数：

  * value: [Float16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float16) \- 待运算的值。

### func write\(Float32\)
    
    __
    
    public mut func write(value: Float32): Unit
    
功能：通过该函数把想要哈希运算的 [Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32) 值传入，然后进行哈希组合运算。

参数：

  * value: [Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32) \- 待运算的值。

### func write\(Float64\)
    
    __
    
    public mut func write(value: Float64): Unit
    
功能：通过该函数把想要哈希运算的 [Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64) 值传入，然后进行哈希组合运算。

参数：

  * value: [Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64) \- 待运算的值。

### func write\(Int16\)
    
    __
    
    public mut func write(value: Int16): Unit
    
功能：通过该函数把想要哈希运算的 [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) 值传入，然后进行哈希组合运算。

参数：

  * value: [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 待运算的值。

### func write\(Int32\)
    
    __
    
    public mut func write(value: Int32): Unit
    
功能：通过该函数把想要哈希运算的 [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) 值传入，然后进行哈希组合运算。

参数：

  * value: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 待运算的值。

### func write\(Int64\)
    
    __
    
    public mut func write(value: Int64): Unit
    
功能：通过该函数把想要哈希运算的 [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) 值传入，然后进行哈希组合运算。

参数：

  * value: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 待运算的值。

### func write\(Int8\)
    
    __
    
    public mut func write(value: Int8): Unit
    
功能：通过该函数把想要哈希运算的 [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) 值传入，然后进行哈希组合运算。

参数：

  * value: [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 待运算的值。

### func write\(Rune\)
    
    __
    
    public mut func write(value: Rune): Unit
    
功能：通过该函数把想要哈希运算的 [Rune](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#rune) 值传入，然后进行哈希组合运算。

参数：

  * value: [Rune](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#rune) \- 待运算的值。

### func write\(String\)
    
    __
    
    public mut func write(value: String): Unit
    
功能：通过该函数把想要哈希运算的 [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) 值传入，然后进行哈希组合运算。

参数：

  * value: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 待运算的值。

### func write\(UInt16\)
    
    __
    
    public mut func write(value: UInt16): Unit
    
功能：通过该函数把想要哈希运算的 [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) 值传入，然后进行哈希组合运算。

参数：

  * value: [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 待运算的值。

### func write\(UInt32\)
    
    __
    
    public mut func write(value: UInt32): Unit
    
功能：通过该函数把想要哈希运算的 [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) 值传入，然后进行哈希组合运算。

参数：

  * value: [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 待运算的值。

### func write\(UInt64\)
    
    __
    
    public mut func write(value: UInt64): Unit
    
功能：通过该函数把想要哈希运算的 [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) 值传入，然后进行哈希组合运算。

参数：

  * value: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 待运算的值。

### func write\(UInt8\)
    
    __
    
    public mut func write(value: UInt8): Unit
    
功能：通过该函数把想要哈希运算的 [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) 值传入，然后进行哈希组合运算。

参数：

  * value: [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 待运算的值。

## struct Duration
    
    __
    
    public struct Duration <: ToString & Hashable & Comparable\<Duration\> {
        public static const Max: Duration = Duration(0x7FFF_FFFF_FFFF_FFFF, 999999999)
        public static const Min: Duration = Duration(-0x8000_0000_0000_0000, 0)
        public static const Zero: Duration = Duration(0, 0)
        public static const day: Duration = Duration(24 * 60 * 60, 0)
        public static const hour: Duration = Duration(60 * 60, 0)
        public static const microsecond: Duration = Duration(0, 1000u32)
        public static const millisecond: Duration = Duration(0, 1000000u32)
        public static const minute: Duration = Duration(60, 0)
        public static const nanosecond: Duration = Duration(0, 1)
        public static const second: Duration = Duration(1, 0)
    }
    
功能：[Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 表示时间间隔，是一个描述一段时间的时间类型，提供了常用的静态实例，以及计算、比较等功能。

> **说明：**
> 
>   * [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 表示范围为 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration).Min 至 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration).Max，数值表示为\[-263, 263\)（单位为秒），精度为纳秒。
>   * [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 每个时间单位均用整数表示，如果实际值不为整数，则向绝对值小的方向取整。例如表示 `1小时30分46秒` 的 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例调用 `toHours` 方法，将返回结果 1 而不是 1.5 或 2。
> 

父类型：

  * [ToString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-tostring)
  * [Hashable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-hashable)
  * [Comparable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-comparablet)\<Duration\>

### static const Max
    
    __
    
    public static const Max: Duration = Duration(0x7FFF_FFFF_FFFF_FFFF, 999999999)
    
功能：表示最大时间间隔的 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例。

类型：[Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration)

### static const Min
    
    __
    
    public static const Min: Duration = Duration(-0x8000_0000_0000_0000, 0)
    
功能：表示最小时间间隔的 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例。

类型：[Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration)

### static const Zero
    
    __
    
    public static const Zero: Duration = Duration(0, 0)
    
功能：表示 0 纳秒时间间隔的 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例。

类型：[Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration)

### static const day
    
    __
    
    public static const day: Duration = Duration(24 * 60 * 60, 0)
    
功能：表示 1 天时间间隔的 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例。

类型：[Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration)

### static const hour
    
    __
    
    public static const hour: Duration = Duration(60 * 60, 0)
    
功能：表示 1 小时时间间隔的 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例。

类型：[Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration)

### static const microsecond
    
    __
    
    public static const microsecond: Duration = Duration(0, 1000u32)
    
功能：表示 1 微秒时间间隔的 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例。

类型：[Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration)

### static const millisecond
    
    __
    
    public static const millisecond: Duration = Duration(0, 1000000u32)
    
功能：表示 1 毫秒时间间隔的 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例。

类型：[Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration)

### static const minute
    
    __
    
    public static const minute: Duration = Duration(60, 0)
    
功能：表示 1 分钟时间间隔的 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例。

类型：[Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration)

### static const nanosecond
    
    __
    
    public static const nanosecond: Duration = Duration(0, 1)
    
功能：表示 1 纳秒时间间隔的 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例。

类型：[Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration)

### static const second
    
    __
    
    public static const second: Duration = Duration(1, 0)
    
功能：表示 1 秒时间间隔的 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例。

类型：[Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration)

### func abs\(\)
    
    __
    
    public func abs(): Duration
    
功能：返回一个新的 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例，其值大小为当前 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例绝对值。

返回值：

  * [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) \- 当前 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例取绝对值的结果。

异常：

  * [ArithmeticException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-arithmeticexception) \- 如果当前 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例等于 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration).Min，会因为取绝对值超出 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 表示范围而抛出异常。

### func compare\(Duration\)
    
    __
    
    public func compare(rhs: Duration): Ordering
    
功能：比较当前 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例与另一个 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例的关系，如果大于，返回 [Ordering](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-ordering).GT；如果等于，返回 [Ordering](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-ordering).EQ；如果小于，返回 [Ordering](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-ordering).LT。

参数：

  * rhs: [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) \- 参与比较的 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例。

返回值：

  * [Ordering](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-ordering) \- 当前 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例与 `rhs` 的大小关系。

### func hashCode\(\)
    
    __
    
    public func hashCode(): Int64
    
功能：获得当前 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例的哈希值。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 当前 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例的哈希值。

### func toDays\(\)
    
    __
    
    public func toDays(): Int64
    
功能：获得当前 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例以天为单位的整数大小。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 当前 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例以天为单位的大小。

### func toHours\(\)
    
    __
    
    public func toHours(): Int64
    
功能：获得当前 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例以小时为单位的整数大小。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 当前 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例以小时为单位的大小。

### func toMicroseconds\(\)
    
    __
    
    public func toMicroseconds(): Int64
    
功能：获得当前 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例以微秒为单位的整数大小。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 当前 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例以微秒为单位的大小。

异常：

  * [ArithmeticException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-arithmeticexception) \- 当 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例以微秒为单位的大小超过 [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) 表示范围时，抛出异常。

### func toMilliseconds\(\)
    
    __
    
    public func toMilliseconds(): Int64
    
功能：获得当前 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例以毫秒为单位的整数大小。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 当前 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例以毫秒为单位的大小。

异常：

  * [ArithmeticException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-arithmeticexception) \- 当 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例以毫秒为单位的大小超过 [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) 表示范围时，抛出异常。

### func toMinutes\(\)
    
    __
    
    public func toMinutes(): Int64
    
功能：获得当前 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例以分钟为单位的整数大小。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 当前 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例以分钟为单位的大小。

### func toNanoseconds\(\)
    
    __
    
    public func toNanoseconds(): Int64
    
功能：获得当前 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例以纳秒为单位的整数大小，向绝对值小的方向取整。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 当前 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例以纳秒为单位的大小。

异常：

  * [ArithmeticException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-arithmeticexception) \- 当 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例以“纳秒”为单位的大小超过 [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) 表示范围时，抛出异常。

### func toSeconds\(\)
    
    __
    
    public func toSeconds(): Int64
    
功能：获得当前 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例以秒为单位的整数大小。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 当前 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例以秒为单位的大小。

### func toString\(\)
    
    __
    
    public func toString(): String
    
功能：获得当前 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例的字符串表示，格式形如："1d2h3m4s5ms6us7ns"，表示“1天2小时3分钟4秒5毫秒6微秒7纳秒”。某个单位下数值为 0 时此项会被省略，特别地，当所有单位下数值都为 0 时，返回 "0s"。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 当前 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例的字符串表示。

### operator func \!=\(Duration\)
    
    __
    
    public operator func !=(r: Duration): Bool
    
功能：判断当前 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例是否不等于 `r`。

参数：

  * r: [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) \- [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- `true` 或 `false`。当前 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例不等于 `r` 时，返回 `true`；否则，返回 `false`。

### operator func \*\(Float64\)
    
    __
    
    public operator func *(r: Float64): Duration
    
功能：实现 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 类型与 [Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64) 类型的乘法，即 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) \* [Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64) 运算。

参数：

  * r: [Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64) \- 乘法的右操作数。

返回值：

  * [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) \- [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 类型实例和 `r` 的乘积。

异常：

  * [ArithmeticException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-arithmeticexception) \- 当相乘后的结果超出 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 的表示范围时，抛出异常。

### operator func \*\(Int64\)
    
    __
    
    public operator func *(r: Int64): Duration
    
功能：实现 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 类型与 [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) 类型的乘法，即 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) \* [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) 运算。

参数：

  * r: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 乘法的右操作数。

返回值：

  * [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) \- [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 类型实例和 `r` 的乘积。

异常：

  * [ArithmeticException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-arithmeticexception) \- 当相乘后的结果超出 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 的表示范围时，抛出异常。

### operator func +\(Duration\)
    
    __
    
    public operator func +(r: Duration): Duration
    
功能：实现 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 类型之间的加法，即 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) \+ [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 运算。

参数：

  * r: [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) \- 加法的右操作数。

返回值：

  * [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) \- [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 类型实例和 `r` 的和。

异常：

  * [ArithmeticException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-arithmeticexception) \- 当相加后的结果超出 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 的表示范围时，抛出异常。

### operator func -\(Duration\)
    
    __
    
    public operator func -(r: Duration): Duration
    
功能：实现 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 类型之间的减法，即 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) \- [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 运算。

参数：

  * r: [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) \- 减法的右操作数。

返回值：

  * [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) \- [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 类型实例和 `r` 的差。

异常：

  * [ArithmeticException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-arithmeticexception) \- 当相减后的结果超出 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 的表示范围时，抛出异常。

### operator func /\(Duration\)
    
    __
    
    public operator func /(r: Duration): Float64
    
功能：实现 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 类型与 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 类型的除法，即 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) / [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 运算。

参数：

  * r: [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) \- 除数。

返回值：

  * [Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64) \- [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 类型实例和 `r` 的商。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当 `r` 等于 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration).Zero 时，抛出异常。

### operator func /\(Float64\)
    
    __
    
    public operator func /(r: Float64): Duration
    
功能：实现 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 类型与 [Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64) 类型的除法，即 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) / [Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64) 运算。

参数：

  * r: [Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64) \- 除数。

返回值：

  * [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) \- [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 类型实例和 `r` 的商。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当 `r` 等于 0 时，抛出异常。
  * [ArithmeticException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-arithmeticexception) \- 当相除后的结果超出 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 的表示范围时，抛出异常。

### operator func /\(Int64\)
    
    __
    
    public operator func /(r: Int64): Duration
    
功能：实现 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 类型与 [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) 类型的除法，即 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) / [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) 运算。

参数：

  * r: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 除数。

返回值：

  * [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) \- [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 类型实例和 `r` 的商。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当 `r` 等于 0 时，抛出异常。
  * [ArithmeticException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-arithmeticexception) \- 当相除后的结果超出 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 的表示范围时，抛出异常。

### operator func <\(Duration\)
    
    __
    
    public operator func <(r: Duration): Bool
    
功能：判断当前 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例是否小于 `r`。

参数：

  * r: [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) \- [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- `true` 或 `false`。当前 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例小于 `r` 时，返回 `true`；否则，返回 `false`。

### operator func <=\(Duration\)
    
    __
    
    public operator func <=(r: Duration): Bool
    
功能：判断当前 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例是否小于等于 `r`。

参数：

  * r: [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) \- [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- `true` 或 `false`。当前 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例小于等于 `r` 时，返回 `true`；否则，返回 `false`。

### operator func ==\(Duration\)
    
    __
    
    public operator func ==(r: Duration): Bool
    
功能：判断当前 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例是否等于 `r`。

参数：

  * r: [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) \- [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- `true` 或 `false`。当前 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例等于 `r` 时，返回 `true`；否则，返回 `false`。

### operator func >\(Duration\)
    
    __
    
    public operator func >(r: Duration): Bool
    
功能：判断当前 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例是否大于 `r`。

参数：

  * r: [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) \- [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- `true` 或 `false`。当前 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例大于 `r` 时，返回 `true`；否则，返回 `false`。

### operator func >=\(Duration\)
    
    __
    
    public operator func >=(r: Duration): Bool
    
功能：判断当前 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例是否大于等于 `r`。

参数：

  * r: [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) \- [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- `true` 或 `false`。当前 [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) 实例大于等于 `r` 时，返回 `true`；否则，返回 `false`。

## struct LibC
    
    __
    
    public struct LibC
    
功能：提供了仓颉中较为高频使用的 C 接口，如申请、释放堆上 [CType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-ctype) 实例。

### static func free\<T\>\(CPointer\<T\>\) where T <: CType
    
    __
    
    public static unsafe func free\<T\>(p: CPointer\<T\>): Unit where T <: CType
    
功能：释放指针 p 指向的堆内存。

参数：

  * p: [CPointer](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#cpointert)\<T\> \- 表示需要被释放的内存地址。

### static func free\(CString\)
    
    __
    
    public static unsafe func free(cstr: CString): Unit
    
功能：释放 C 风格字符串。

参数：

  * cstr: [CString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#cstring) \- 需要释放的 C 风格字符串。

### static func mallocCString\(String\)
    
    __
    
    public static unsafe func mallocCString(str: String): CString
    
功能：通过 [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) 申请与之字符内容相同的 C 风格字符串。

构造的 C 风格字符串将以 '\0' 结束。当异常场景如系统内存不足时，返回字符串指针可能为空，故使用前需要进行空指针检查。

参数：

  * str: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 根据该仓颉字符串构造 C 字符串。

返回值：

  * [CString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#cstring) \- 新构造的 C 风格字符串。

异常：

  * [IllegalMemoryException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalmemoryexception) \- 内存不足时，抛出异常。

示例：
    
    __
    
    main () {
        var str = unsafe { LibC.mallocCString("I like Cangjie") }
        println(str)
        unsafe { LibC.free(str) }
    }
    
运行结果：
    
    __
    
    I like Cangjie

### static func malloc\<T\>\(Int64\) where T <: CType
    
    __
    
    public static func malloc\<T\>(count!: Int64 = 1): CPointer\<T\> where T <: CType
    
功能：在堆中申请指定个数的 `T` 实例，并返回其起始指针。

申请内存长度为 [sizeOf](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_funcs.html#func-sizeoft-where-t--ctype)\<T\>\(\) \* [count](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_function.html#func-counttiterablet)。

参数：

  * [count](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_function.html#func-counttiterablet)\!: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 为可选参数，默认为1，表示申请 T 类型的个数。

返回值：

  * [CPointer](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#cpointert)\<T\> \- 申请的 T 类型指针。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 入参为负数时，抛出异常。

示例：
    
    __
    
    main () {
        var p = unsafe { LibC.malloc\<Int64\>(count: 1) }
        unsafe { p.write(8) }
        let value: Int64 = unsafe { p.read() }
        println(value)
        unsafe { LibC.free\<Int64\>(p) }
    }
    
运行结果：
    
    __
    
    8

## struct Range\<T\> where T <: Countable\<T\> & Comparable\<T\> & Equatable\<T\>
    
    __
    
    public struct Range\<T\> <: Iterable\<T\> where T <: Countable\<T\> & Comparable\<T\> & Equatable\<T\> {
        public let end: T
        public let hasEnd: Bool
        public let hasStart: Bool
        public let isClosed: Bool
        public let start: T
        public let step: Int64
        public const init(start: T, end: T, step: Int64, hasStart: Bool, hasEnd: Bool, isClosed: Bool)
    }
    
功能：该类是区间类型，用于表示一个拥有固定范围和步长的 `T` 的序列，要求 `T` 是可数的，有序的。

区间类型有对应的字面量表示，其格式为：

  * 左闭右开区间：`start..end : step`，它表示一个从 start 开始，以 step 为步长，到 end（不包含 end）为止的区间。
  * 左闭右闭区间：`start..=end : step`，它表示一个从 start 开始，以 step 为步长，到 end（包含 end）为止的区间。

> **注意：**
> 
>   * 当 step > 0 且 start >= end，或者 step < 0 且 start <= end 时，该 [Range](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-ranget-where-t--countablet--comparablet--equatablet) 实例将是一个空区间。
>   * 当 step > 0 且 start > end，或者 step < 0 且 start < end 时，该 [Range](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-ranget-where-t--countablet--comparablet--equatablet) 实例将是一个空区间。
> 

父类型：

  * [Iterable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-iterablee)\<T\>

### let end
    
    __
    
    public let end: T
    
功能：表示结束值。

类型：T

### let hasEnd
    
    __
    
    public let hasEnd: Bool
    
功能：表示是否包含结束值。

类型：[Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool)

### let hasStart
    
    __
    
    public let hasStart: Bool
    
功能：表示是否包含开始值。

类型：[Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool)

### let isClosed
    
    __
    
    public let isClosed: Bool
    
功能：表示区间开闭情况，为 true 表示左闭右闭，为 false 表示左闭右开。

类型：[Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool)

### let start
    
    __
    
    public let start: T
    
功能：表示开始值。

类型：T

### let step
    
    __
    
    public let step: Int64
    
功能：表示步长。

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)

### init\(T, T, Int64, Bool, Bool, Bool\)
    
    __
    
    public const init(start: T, end: T, step: Int64, hasStart: Bool, hasEnd: Bool, isClosed: Bool)
    
功能：使用该构造函数创建 [Range](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-ranget-where-t--countablet--comparablet--equatablet) 序列。

参数：

  * start: T - 开始值。
  * end: T - 结束值。
  * step: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 步长，取值不能为 0。
  * hasStart: [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 是否有开始值。
  * hasEnd: [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 是否有结束值。
  * isClosed: [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- true 代表左闭右闭，false 代表左闭右开。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当 step 等于 0 时, 抛出异常。

### func isEmpty\(\)
    
    __
    
    public const func isEmpty(): Bool
    
功能：判断该区间是否为空。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果为空，返回 true，否则返回 false。

### func iterator\(\)
    
    __
    
    public func iterator(): Iterator\<T\>
    
功能：获取当前区间的迭代器。

返回值：

  * [Iterator](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_classes.html#class-iteratort)\<T\> \- 当前区间的迭代器。

### extend\<T\> Range\<T\> <: Equatable<Range\<T\>> where T <: Countable\<T\> & Comparable\<T\> & Equatable\<T\>
    
    __
    
    extend \<T\> Range\<T\> <: Equatable<Range\<T\>> where T <: Countable\<T\> & Comparable\<T\> & Equatable\<T\>
    
功能：为 [Range](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-ranget-where-t--countablet--comparablet--equatablet)\<T\> 类型扩展 [Equatable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-equatablet)<[Range](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-ranget-where-t--countablet--comparablet--equatablet)\<T\>> 接口。

父类型：

  * [Equatable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-equatablet)<Range\<T\>>

#### operator func ==\(Range\<T\>\)
    
    __
    
    public operator func ==(that: Range\<T\>): Bool
    
功能：判断两个 [Range](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-ranget-where-t--countablet--comparablet--equatablet) 实例是否相等。

两个 [Range](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-ranget-where-t--countablet--comparablet--equatablet) 实例相等指的是它们表示同一个区间，即 `start`、`end`、step、`isClosed` 值相等。

参数：

  * that: [Range](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-ranget-where-t--countablet--comparablet--equatablet)\<T\> \- 待比较的 [Range](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-ranget-where-t--countablet--comparablet--equatablet) 实例。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- true 代表相等，false 代表不相等。

### extend\<T\> Range\<T\> <: Hashable where T <: Hashable & Countable\<T\> & Comparable\<T\> & Equatable\<T\>
    
    __
    
    extend \<T\> Range\<T\> <: Hashable where T <: Hashable & Countable\<T\> & Comparable\<T\> & Equatable\<T\>
    
功能：为 [Range](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-ranget-where-t--countablet--comparablet--equatablet) 类型扩展 [Hashable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-hashable) 接口，支持计算哈希值。

父类型：

  * [Hashable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-hashable)

#### func hashCode\(\)
    
    __
    
    public func hashCode(): Int64
    
功能：获取哈希值，该值为 `start`、`end`、step、`isClosed` 的组合哈希运算结果。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 哈希值。

## struct String
    
    __
    
    public struct String <: Collection\<Byte\> & Equatable\<String\> & Comparable\<String\> & Hashable & ToString {
        public static const empty: String = String()
        public const init()
        public init(value: Array\<Rune\>)
        public init(value: Collection\<Rune\>)
    }
    
功能：该结构体表示仓颉字符串，提供了构造、查找、拼接等一系列字符串操作。

> **注意：**
> 
>   * `String` 类型仅支持 UTF-8 编码。
>   * 出于 `String` 对象内存开销方面的优化，`String` 的长度被限制在 `4GB`大小，即 `String`的最大长度不超过 [UInt32 的最大值](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32)。
> 

父类型：

  * [Collection](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-collectiont)\<Byte\>
  * [Equatable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-equatablet)\<String\>
  * [Comparable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-comparablet)\<String\>
  * [Hashable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-hashable)
  * [ToString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-tostring)

### static const empty
    
    __
    
    public static const empty: String = String()
    
功能：创建一个空的字符串并返回。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### prop size
    
    __
    
    public prop size: Int64
    
功能：获取字符串 UTF-8 编码后的字节长度。

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)

### init\(\)
    
    __
    
    public const init()
    
功能：构造一个空的字符串。

### init\(Array\<Rune\>\)
    
    __
    
    public init(value: Array\<Rune\>)
    
功能：根据字符数组构造一个字符串，字符串内容为数组中的所有字符。

参数：

  * value: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<Rune\> \- 根据该字符数组构造字符串。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当试图构造长度超过 [UInt32 的最大值](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) 的字符串时，抛出异常。

### init\(Collection\<Rune\>\)
    
    __
    
    public init(value: Collection\<Rune\>)
    
功能：据字符集合构造一个字符串，字符串内容为集合中的所有字符。

参数：

  * value: [Collection](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-collectiont)\<Rune\> \- 根据该字符集合构造字符串。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当试图构造长度超过 [UInt32 的最大值](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) 的字符串时，抛出异常。

### static func fromUtf8\(Array\<UInt8\>\)
    
    __
    
    public static func fromUtf8(utf8Data: Array\<UInt8\>): String
    
功能：根据 UTF-8 编码的字节数组构造一个字符串。

参数：

  * utf8Data: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8)> \- 根据该字节数组构造字符串。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 构造的字符串。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 入参不符合 utf-8 序列规则，或者试图构造长度超过 [UInt32 的最大值](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) 的字符串时，抛出异常。

### static func fromUtf8Unchecked\(Array\<UInt8\>\)
    
    __
    
    public static unsafe func fromUtf8Unchecked(utf8Data: Array\<UInt8\>): String
    
功能：根据字节数组构造一个字符串。

相较于 [fromUtf8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#static-func-fromutf8arrayuint8) 函数，它并没有针对于字节数组进行 UTF-8 相关规则的检查，所以它所构建的字符串并不一定保证是合法的，甚至出现非预期的异常，如果不是某些场景下的性能考虑，请优先使用安全的 fromUtf8 函数。

参数：

  * utf8Data: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8)> \- 根据该字节数组构造字符串。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 构造的字符串。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当试图构造长度超过 [UInt32 的最大值](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) 的字符串时，抛出异常。

### static func withRawData\(Array\<UInt8\>\)
    
    __
    
    public static unsafe func withRawData(rawData: Array\<UInt8\>): String
    
功能：根据字节数组构造一个字符串。

相较于 [fromUtf8Unchecked](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#static-func-fromutf8uncheckedarrayuint8) 函数，它没有做数组的拷贝，直接用传入的数组构造了字符串。

> **注意：**
> 
> 用户应该保证：
> 
>   1. rawData 在字符串构造后永远不会被修改。
>   2. rawData 符合 UTF-8 编码。
> 

> 
> 否则程序行为是未定义的。 如果不是某些场景下的性能考虑，请优先使用安全的 fromUtf8 函数。

参数：

  * utf8Data: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8)> \- 根据该字节数组构造字符串。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 构造的字符串。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当试图构造长度超过 [UInt32 的最大值](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) 的字符串时，抛出异常。

### static func checkUtf8Encoding\(Array\<UInt8\>\)
    
    __
    
    public static func checkUtf8Encoding(data: Array\<UInt8\>): Bool
    
功能：检查一个 Byte 数组是否符合 UTF-8 编码。

参数：

  * utf8Data: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8)> \- 根据该字节数组构造字符串。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果 Byte 数组符合 UTF-8 编码返回 true，否则返回 false。

### static func join\(Array\<String\>, String\)
    
    __
    
    public static func join(strArray: Array\<String\>, delimiter!: String = String.empty): String
    
功能：连接字符串列表中的所有字符串，以指定分隔符分隔。

参数：

  * strArray: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)> \- 需要被连接的字符串数组，当数组为空时，返回空字符串。
  * delimiter\!: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 用于连接的中间字符串，其默认值为 [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string).empty。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 连接后的新字符串。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当试图构造长度超过 [UInt32 的最大值](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) 的字符串时，抛出异常。

示例：
    
    __
    
    main () {
        var arr = ["I", "like", "Cangjie"]
        var str = String.join(arr, delimiter: " ")
        println(str)
    }
    
运行结果：
    
    __
    
    I like Cangjie

### func clone\(\)
    
    __
    
    public func clone(): String
    
功能：返回原字符串的拷贝。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 拷贝得到的新字符串。

### func compare\(String\)
    
    __
    
    public func compare(str: String): Ordering
    
功能：按字典序比较当前字符串和参数指定的字符串。

参数：

  * str: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 被比较的字符串。

返回值：

  * [Ordering](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-ordering) \- 返回 enum 值 [Ordering](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-ordering) 表示结果，[Ordering](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-ordering).GT 表示当前字符串字典序大于 str 字符串，[Ordering](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-ordering).LT 表示当前字符串字典序小于 str 字符串，[Ordering](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-ordering).EQ 表示两个字符串字典序相等。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 如果两个字符串的原始数据中存在无效的 UTF-8 编码，抛出异常。

### func contains\(String\)
    
    __
    
    public func contains(str: String): Bool
    
功能：判断原字符串中是否包含字符串 str。

参数：

  * str: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 待搜索的字符串。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果字符串 str 在原字符串中，返回 true，否则返回 false。特别地，如果 str 字符串长度为 0，返回 true。

### func count\(String\)
    
    __
    
    public func count(str: String): Int64
    
功能：返回子字符串 str 在原字符串中出现的次数。

参数：

  * str: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 被搜索的子字符串。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 出现的次数，当 str 为空字符串时，返回原字符串中 Rune 的数量加一。

### func endsWith\(String\)
    
    __
    
    public func endsWith(suffix: String): Bool
    
功能：判断原字符串是否以 suffix 字符串为后缀结尾。

参数：

  * suffix: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 被判断的后缀字符串。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果字符串 str 是原字符串的后缀，返回 true，否则返回 false，特别地，如果 str 字符串长度为 0，返回 true。

### func equalsIgnoreAsciiCase\(String\): Bool
    
    __
    
    public func equalsIgnoreAsciiCase(that: String): Bool
    
功能：判断当前字符串和指定字符串是否相等，忽略大小写。

参数：

  * that: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 待比较的字符串。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果当前字符串与待比较字符串相等，返回 true，否则返回 false。

### func get\(Int64\)
    
    __
    
    public func get(index: Int64): Option\<Byte\>
    
功能：返回字符串下标 index 对应的 UTF-8 编码字节值。

参数：

  * index: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 要获取的字节值的下标。

返回值：

  * [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 获取得到下标对应的 UTF-8 编码字节值，当 index 小于 0 或者大于等于字符串长度，则返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)>.None。

### func hashCode\(\)
    
    __
    
    public func hashCode(): Int64
    
功能：获取字符串的哈希值。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 返回字符串的哈希值。

### func indexOf\(Byte\)
    
    __
    
    public func indexOf(b: Byte): Option\<Int64\>
    
功能：获取指定字节 b 第一次出现的在原字符串内的索引。

参数：

  * b: [Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte) \- 待搜索的字节。

返回值：

  * [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)<[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)> \- 如果原字符串中包含指定字节，返回其第一次出现的索引，如果原字符串中没有此字节，返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)<[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)>.None。

### func indexOf\(Byte, Int64\)
    
    __
    
    public func indexOf(b: Byte, fromIndex: Int64): Option\<Int64\>
    
功能：从原字符串指定索引开始搜索，获取指定字节第一次出现的在原字符串内的索引。

参数：

  * b: [Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte) \- 待搜索的字节。
  * fromIndex: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 以指定的索引 fromIndex 开始搜索。

返回值：

  * [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)<[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)> \- 如果搜索成功，返回指定字节第一次出现的索引，否则返回 `None`。特别地，当 fromIndex 小于零，效果同 0，当 fromIndex 大于等于原字符串长度，返回 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)<[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)>.None。

### func indexOf\(String\)
    
    __
    
    public func indexOf(str: String): Option\<Int64\>
    
功能：返回指定字符串 str 在原字符串中第一次出现的起始索引。

参数：

  * str: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 待搜索的字符串。

返回值：

  * [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)<[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)> \- 如果原字符串包含 str 字符串，返回其第一次出现的索引，如果原字符串中没有 str 字符串，返回 None。

### func indexOf\(String, Int64\)
    
    __
    
    public func indexOf(str: String, fromIndex: Int64): Option\<Int64\>
    
功能：从原字符串 fromIndex 索引开始搜索，获取指定字符串 str 第一次出现的在原字符串的起始索引。

参数：

  * str: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 待搜索的字符串。
  * fromIndex: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 以指定的索引 fromIndex 开始搜索。

返回值：

  * [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)<[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)> \- 如果搜索成功，返回 str 第一次出现的索引，否则返回 None。特别地，当 str 是空字符串时，如果fromIndex 大于 0，返回 None，否则返回 Some\(0\)。当 fromIndex 小于零，效果同 0，当 fromIndex 大于等于原字符串长度返回 None。

### func isAscii\(\)
    
    __
    
    public func isAscii(): Bool
    
功能：判断字符串是否是一个 Ascii 字符串，如果字符串为空或没有 Ascii 以外的字符，则返回 true。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 是则返回 true，不是则返回 false。

### func isAsciiBlank\(\)
    
    __
    
    public func isAsciiBlank(): Bool
    
功能：判断字符串是否为空或者字符串中的所有 Rune 都是 ascii 码的空白字符（包括：0x09、0x10、0x11、0x12、0x13、0x20）。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果是返回 true，否则返回 false。

### func isEmpty\(\)
    
    __
    
    public func isEmpty(): Bool
    
功能：判断原字符串是否为空字符串。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果为空返回 true，否则返回 false。

### func iterator\(\)
    
    __
    
    public func iterator(): Iterator\<Byte\>
    
功能：获取字符串的 UTF-8 编码字节迭代器，可用于支持 for-in 循环。

返回值：

  * [Iterator](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_classes.html#class-iteratort)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 字符串的 UTF-8 编码字节迭代器。

示例：
    
    __
    
    main () {
        var str = "abc"
    
        /* 迭代器元素为每个字符的 utf-8 编码 */
        for (i in str) {
            println(i)
        }
    }
    
运行结果：
    
    __
    
    97
    98
    99

### func lastIndexOf\(Byte\)
    
    __
    
    public func lastIndexOf(b: Byte): Option\<Int64\>
    
功能：返回指定字节 b 最后一次出现的在原字符串内的索引。

参数：

  * b: [Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte) \- 待搜索的字节。

返回值：

  * [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)<[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)> \- 如果原字符串中包含此字节，返回其最后一次出现的索引，否则返回 `None`。

### func lastIndexOf\(Byte, Int64\)
    
    __
    
    public func lastIndexOf(b: Byte, fromIndex: Int64): Option\<Int64\>
    
功能：从原字符串 fromIndex 索引开始搜索，返回指定 UTF-8 编码字节 b 最后一次出现的在原字符串内的索引。

参数：

  * b: [Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte) \- 待搜索的字节。
  * fromIndex: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 以指定的索引 fromIndex 开始搜索。

返回值：

  * [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)<[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)> \- 如果搜索成功，返回指定字节最后一次出现的索引，否则返回 `None`。特别地，当 fromIndex 小于零，效果同 0，当 fromIndex 大于等于原字符串长度，返回 `None`。

### func lastIndexOf\(String\)
    
    __
    
    public func lastIndexOf(str: String): Option\<Int64\>
    
功能：返回指定字符串 str 最后一次出现的在原字符串的起始索引。

参数：

  * str: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 待搜索的字符串。

返回值：

  * [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)<[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)> \- 如果原字符串中包含 str 字符串，返回其最后一次出现的索引，否则返回 `None`。

### func lastIndexOf\(String, Int64\)
    
    __
    
    public func lastIndexOf(str: String, fromIndex: Int64): Option\<Int64\>
    
功能：从原字符串指定索引开始搜索，获取指定字符串 str 最后一次出现的在原字符串的起始索引。

参数：

  * str: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 待搜索的字符串。
  * fromIndex: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 以指定的索引 fromIndex 开始搜索。

返回值：

  * [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)<[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)> \- 如果这个字符串在位置 fromIndex 及其之后没有出现，则返回 `None`。特别地，当 str 是空字符串时，如果 fromIndex 大于 0，返回 `None`，否则返回 `Some(0)`，当 fromIndex 小于零，效果同 0，当 fromIndex 大于等于原字符串长度返回 `None`。

### func lazySplit\(String, Bool\)
    
    __
    
    public func lazySplit(str: String, removeEmpty!: Bool = false): Iterator\<String\>
    
功能：对原字符串按照字符串 str 分隔符分割，该函数不立即对字符串进行分割，而是返回迭代器，使用迭代器进行遍历时再实际执行分隔操作。

当 str 未出现在原字符串中，返回大小为 1 的字符串迭代器，唯一的元素为原字符串。

参数：

  * str: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 字符串分隔符。
  * removeEmpty\!: [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 移除分割结果中的空字符串，默认值为 false。

返回值：

  * [Iterator](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_classes.html#class-iteratort)<[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)> \- 分割后的字符串迭代器。

示例：
    
    __
    
    main () {
        var str = "I like Cangjie"
        var iter = str.lazySplit(" ")
        while (true) {
            match (iter.next()) {
                case Some(i) => println(i)
                case None => break
            }
        }
    }
    
运行结果：
    
    __
    
    I
    like
    Cangjie

### func lazySplit\(String, Int64, Bool\)
    
    __
    
    public func lazySplit(str: String, maxSplits: Int64, removeEmpty!: Bool = false): Iterator\<String\>
    
功能：对原字符串按照字符串 str 分隔符分割，该函数不立即对字符串进行分割，而是返回迭代器，使用迭代器进行遍历时再实际执行分隔操作。

  * 当 maxSplit 为 0 时，返回空的字符串迭代器；
  * 当 maxSplit 为 1 时，返回大小为 1 的字符串迭代器，唯一的元素为原字符串；
  * 当 maxSplit 为负数时，直接返回分割后的字符串迭代器；
  * 当 maxSplit 大于完整分割出来的子字符串数量时，返回完整分割的字符串迭代器；
  * 当 str 未出现在原字符串中，返回大小为 1 的字符串迭代器，唯一的元素为原字符串；
  * 当 str 为空时，对每个字符进行分割；当原字符串和分隔符都为空时，返回空字符串迭代器。

参数：

  * str: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 字符串分隔符。
  * maxSplits: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 最多分割为 maxSplit 个子字符串。
  * removeEmpty\!: [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 移除分割结果中的空字符串，默认值为 false。

返回值：

  * [Iterator](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_classes.html#class-iteratort)<[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)> \- 分割后的字符串迭代器。

### func lines\(\)
    
    __
    
    public func lines(): Iterator\<String\>
    
功能：获取字符串的行迭代器，每行都由换行符进行分隔，换行符是 `\n` `\r` `\r\n` 之一，结果中每行不包括换行符。

返回值：

  * [Iterator](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_classes.html#class-iteratort)<[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)> \- 字符串的行迭代器。

示例：
    
    __
    
    main () {
        var str = "I\rlike\nCangjie\r"
        var iter = str.lines()
        while (true) {
            match (iter.next()) {
                case Some(i) => println(i)
                case None => break
            }
        }
    }
    
运行结果：
    
    __
    
    I
    like
    Cangjie

### func padEnd\(Int64, String\)
    
    __
    
    public func padEnd(totalWidth: Int64, padding!: String = " "): String
    
功能：按指定长度左对齐原字符串，如果原字符串长度小于指定长度，在其右侧添加指定字符串。

当指定长度小于字符串长度时，返回字符串本身，不会发生截断；当指定长度大于字符串长度时，在右侧添加 padding 字符串，当 padding 长度大于 1 时，返回字符串的长度可能大于指定长度。

参数：

  * totalWidth: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 指定对齐后字符串长度，取值需大于等于 0。
  * padding\!: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 当长度不够时，在右侧用指定的字符串 padding 进行填充。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 填充后的字符串。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 如果 totalWidth 小于 0，抛出异常。

### func padStart\(Int64, String\)
    
    __
    
    public func padStart(totalWidth: Int64, padding!: String = " "): String
    
功能：按指定长度右对齐原字符串，如果原字符串长度小于指定长度，在其左侧添加指定字符串。

当指定长度小于字符串长度时，返回字符串本身，不会发生截断；当指定长度大于字符串长度时，在左侧添加 padding 字符串，当 padding 长度大于 1 时，返回字符串的长度可能大于指定长度。

参数：

  * totalWidth: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 指定对齐后字符串长度，取值需大于等于 0。
  * padding\!: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 当长度不够时，在左侧用指定的字符串 padding 进行填充

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 填充后的字符串。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 如果 totalWidth 小于 0，抛出异常。

### func rawData\(\)
    
    __
    
    public unsafe func rawData(): Array\<Byte\>
    
功能：获取字符串的 UTF-8 编码的原始字节数组。

> **注意：**
> 
> 用户不应该对获取的数组进行修改，这将破坏字符串的不可变性。

返回值：

  * [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 当前字符串对应的原始字节数组。

### func removePrefix\(String\)
    
    __
    
    public func removePrefix(prefix: String): String
    
功能：去除字符串的 prefix 前缀。

参数：

  * prefix: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 待去除的前缀。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 去除前缀后得到的新字符串。

### func removeSuffix\(String\)
    
    __
    
    public func removeSuffix(suffix: String): String
    
功能：去除字符串的 suffix 后缀。

参数：

  * suffix: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 待去除的后缀。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 去除后缀后得到的新字符串。

### func replace\(String, String\)
    
    __
    
    public func replace(old: String, new: String): String
    
功能：使用新字符串替换原字符串中旧字符串。

参数：

  * old: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 旧字符串。
  * new: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 新字符串。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 替换后的新字符串。

异常：

  * [OutOfMemoryError](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-outofmemoryerror) \- 如果此函数分配内存时产生错误，抛出异常。

### func runes\(\)
    
    __
    
    public func runes(): Iterator\<Rune\>
    
功能：获取字符串的 Rune 迭代器。

返回值：

  * [Iterator](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_classes.html#class-iteratort)\<Rune\> \- 字符串的 Rune 迭代器。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 使用 `for-in` 或者 `next()` 方法遍历迭代器时，如果读取到非法字符，抛出异常。

### func split\(String, Bool\)
    
    __
    
    public func split(str: String, removeEmpty!: Bool = false): Array\<String\>
    
功能：对原字符串按照字符串 str 分隔符分割，指定是否删除空串。

当 str 未出现在原字符串中，返回长度为 1 的字符串数组，唯一的元素为原字符串。

参数：

  * str: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 字符串分隔符。
  * removeEmpty\!: [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 移除分割结果中的空字符串，默认值为 false。

返回值：

  * [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)> \- 分割后的字符串数组。

### func split\(String, Int64, Bool\)
    
    __
    
    public func split(str: String, maxSplits: Int64, removeEmpty!: Bool = false): Array\<String\>
    
功能：对原字符串按照字符串 str 分隔符分割，指定最多分隔子串数，以及是否删除空串。

  * 当 maxSplit 为 0 时，返回空的字符串数组；
  * 当 maxSplit 为 1 时，返回长度为 1 的字符串数组，唯一的元素为原字符串；
  * 当 maxSplit 为负数时，返回完整分割后的字符串数组；
  * 当 maxSplit 大于完整分割出来的子字符串数量时，返回完整分割的字符串数组；
  * 当 str 未出现在原字符串中，返回长度为 1 的字符串数组，唯一的元素为原字符串；
  * 当 str 为空时，对每个字符进行分割；当原字符串和分隔符都为空时，返回空字符串数组。

参数：

  * str: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 字符串分隔符。
  * maxSplits: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 最多分割为 maxSplit 个子字符串。
  * removeEmpty\!: [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 移除分割结果中的空字符串，默认值为 false。

返回值：

  * [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)> \- 分割后的字符串数组。

### func startsWith\(String\)
    
    __
    
    public func startsWith(prefix: String): Bool
    
功能：判断原字符串是否以 prefix 字符串为前缀。

参数：

  * prefix: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 被判断的前缀字符串。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果字符串 str 是原字符串的前缀，返回 true，否则返回 false，特别地，如果 str 字符串长度为 0，返回 true。

### func toArray\(\)
    
    __
    
    public func toArray(): Array\<Byte\>
    
功能：获取字符串的 UTF-8 编码的字节数组。

返回值：

  * [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 字符串的 UTF-8 编码的字节数组。

### func toAsciiLower\(\)
    
    __
    
    public func toAsciiLower(): String
    
功能：将该字符串中所有 Ascii 大写字母转化为 Ascii 小写字母。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 转换后的新字符串。

### func toAsciiTitle\(\)
    
    __
    
    public func toAsciiTitle(): String
    
功能：将该字符串标题化。

该函数只转换 Ascii 英文字符，当该英文字符是字符串中第一个字符或者该字符的前一个字符不是英文字符，则该字符大写，其他英文字符小写。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 转换后的新字符串。

### func toAsciiUpper\(\)
    
    __
    
    public func toAsciiUpper(): String
    
功能：将该字符串中所有 Ascii 小写字母转化为 Ascii 大写字母。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 转换后的新字符串。

### func toRuneArray\(\)
    
    __
    
    public func toRuneArray(): Array\<Rune\>
    
功能：获取字符串的 Rune 数组。如果原字符串为空字符串，则返回空数组。

返回值：

  * [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<Rune\> \- 字符串的 Rune 数组。

### func toString\(\)
    
    __
    
    public func toString(): String
    
功能：获得字符串本身。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 返回字符串本身。

### func trimAscii\(\)
    
    __
    
    public func trimAscii(): String
    
功能：去除原字符串开头结尾以 whitespace 字符组成的子字符串。

whitespace 的 unicode 码点范围为 \[0009, 000D\] 和 \[0020\]。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 转换后的新字符串。

### func trimAsciiEnd\(\)
    
    __
    
    public func trimAsciiEnd(): String
    
功能：去除原字符串结尾以 whitespace 字符组成的子字符串。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 转换后的新字符串。

### func trimAsciiStart\(\)
    
    __
    
    public func trimAsciiStart(): String
    
功能：去除原字符串开头以 whitespace 字符组成的子字符串。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 转换后的新字符串。

### func trimEnd\(\(Rune\)->Bool\)
    
    __
    
    public func trimEnd(predicate: (Rune)->Bool): String
    
功能：修剪当前字符串，从尾开始删除符合过滤条件的 [Rune](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#rune) 字符，直到第一个不符合过滤条件的 [Rune](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#rune) 字符为止。

参数：

  * predicate: \([Rune](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#rune)\)->[Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 过滤条件。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 修剪后得到的新字符串。

示例：
    
    __
    
    main () {
        var str = "14122"
        var subStr = str.trimEnd({c => c == r'2'})
        println(subStr)
    }
    
运行结果：
    
    __
    
    141

### func trimEnd\(Array\<Rune\>\)
    
    __
    
    public func trimEnd(set: Array\<Rune\>): String
    
功能：修剪当前字符串，从尾开始删除在 set 中的 [Rune](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#rune) 字符，直到第一个不在 set 中的 [Rune](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#rune) 字符为止。

参数：

  * set: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Rune](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#rune)> \- 待删除的字符的集合。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 修剪后得到的新字符串。

示例：
    
    __
    
    main () {
        var str = "14122"
        var subStr = str.trimEnd([r'1', r'2'])
        println(subStr)
    }
    
运行结果：
    
    __
    
    14

### func trimEnd\(String\)
    
    __
    
    public func trimEnd(set: String): String
    
功能：修剪当前字符串，从尾开始删除在 set 中的 [Rune](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#rune) 字符，直到第一个不在 set 中的 [Rune](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#rune) 字符为止。

参数：

  * set: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 待删除的字符的集合。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 修剪后得到的新字符串。

示例：
    
    __
    
    main () {
        var str = "14122"
        var subStr = str.trimEnd("12")
        println(subStr)
    }
    
运行结果：
    
    __
    
    14

### func trimStart\(\(Rune\)->Bool\)
    
    __
    
    public func trimStart(predicate: (Rune)->Bool): String
    
功能：修剪当前字符串，从头开始删除符合过滤条件的 [Rune](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#rune) 字符，直到第一个不符合过滤条件的 [Rune](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#rune) 字符为止。

参数：

  * predicate: \([Rune](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#rune)\)->[Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 过滤条件。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 修剪后得到的新字符串。

### func trimStart\(Array\<Rune\>\)
    
    __
    
    public func trimStart(set: Array\<Rune\>): String
    
功能：修剪当前字符串，从头开始删除在 set 中的 [Rune](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#rune) 字符，直到第一个不在 set 中的 [Rune](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#rune) 字符为止。

例如 "12241".trimStart\(\[r'1', r'2'\]\) = "41"。

参数：

  * set: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Rune](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#rune)> \- 待删除的字符的集合。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 修剪后得到的新字符串。

### func trimStart\(String\)
    
    __
    
    public func trimStart(set: String): String
    
功能：修剪当前字符串，从头开始删除在 set 中的 [Rune](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#rune) 字符，直到第一个不在 set 中的 [Rune](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#rune) 字符为止。

例如 "12241".trimStart\("12"\) = "41"。

参数：

  * set: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 待删除的字符的集合。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 修剪后得到的新字符串。

### operator func \!=\(String\)
    
    __
    
    public const operator func !=(right: String): Bool
    
功能：判断两个字符串是否不相等。

参数：

  * right: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 待比较的 [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) 实例。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 不相等返回 true，相等返回 false。

### operator func \*\(Int64\)
    
    __
    
    public const operator func *(count: Int64): String
    
功能：原字符串重复 [count](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_function.html#func-counttiterablet) 次。

参数：

  * count: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 原字符串重复的次数。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 返回重复 [count](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_function.html#func-counttiterablet) 次后的新字符串。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当试图构造长度超过 [UInt32 的最大值](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) 的字符串时，抛出异常。

### operator func +\(String\)
    
    __
    
    public const operator func +(right: String): String
    
功能：两个字符串相加，将 right 字符串拼接在原字符串的末尾。

参数：

  * right: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 待追加的字符串。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 返回拼接后的字符串。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当试图构造长度超过 [UInt32 的最大值](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) 的字符串时，抛出异常。

### operator func <\(String\)
    
    __
    
    public const operator func <(right: String): Bool
    
功能：判断两个字符串大小。

参数：

  * right: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 待比较的字符串。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 原字符串字典序小于 right 时，返回 true，否则返回 false。

### operator func <=\(String\)
    
    __
    
    public const operator func <=(right: String): Bool
    
功能：判断两个字符串大小。

参数：

  * right: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 待比较的字符串。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 原字符串字典序小于或等于 right 时，返回 true，否则返回 false。

### operator func ==\(String\)
    
    __
    
    public const operator func ==(right: String): Bool
    
功能：判断两个字符串是否相等。

参数：

  * right: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 待比较的字符串。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 相等返回 true，不相等返回 false。

### operator func >\(String\)
    
    __
    
    public const operator func >(right: String): Bool
    
功能：判断两个字符串大小。

参数：

  * right: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 待比较的字符串。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 原字符串字典序大于 right 时，返回 true，否则返回 false。

### operator func >=\(String\)
    
    __
    
    public const operator func >=(right: String): Bool
    
功能：判断两个字符串大小。

参数：

  * right: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 待比较的字符串。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 原字符串字典序大于或等于 right 时，返回 true，否则返回 false。

### operator func \[\]\(Int64\)
    
    __
    
    public const operator func [](index: Int64): Byte
    
功能：返回指定索引 index 处的 UTF-8 编码字节。

参数：

  * index: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 要获取 UTF-8 编码字节的下标。

返回值：

  * [Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte) \- 获取得到下标对应的 UTF-8 编码字节。

异常：

  * [IndexOutOfBoundsException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-indexoutofboundsexception) \- 如果 index 小于 0 或大于等于字符串长度，抛出异常。

### operator func \[\]\(Range\<Int64\>\)
    
    __
    
    public const operator func [](range: Range\<Int64\>): String
    
功能：根据给定区间获取当前字符串的切片。

> **注意：**
> 
>   1. 如果参数 range 是使用 [Range](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-ranget-where-t--countablet--comparablet--equatablet) 构造函数构造的 [Range](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-ranget-where-t--countablet--comparablet--equatablet) 实例，有如下行为： 
>     * start 的值就是构造函数传入的值本身，不受构造时传入的 hasStart 的值的影响。
>     * hasEnd 为 false 时，end 值不生效，且不受构造时传入的 isClosed 的值的影响，该字符串切片取到原字符串最后一个元素。
>   2. range 的步长只能为 1。
> 

参数：

  * range: [Range](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-ranget-where-t--countablet--comparablet--equatablet)<[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)> \- 切片的区间。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 字符串切片。

异常：

  * [IndexOutOfBoundsException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-indexoutofboundsexception) \- 如果切片范围超过原字符串边界，抛出异常。
  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 如果 range.step 不等于 1 或者范围起止点不是字符边界，抛出异常。