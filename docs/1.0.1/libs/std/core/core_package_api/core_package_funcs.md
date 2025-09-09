
# 函数

## func acquireArrayRawData\<T\>\(Array\<T\>\) where T <: CType
    
    __
    
    public unsafe func acquireArrayRawData\<T\>(arr: Array\<T\>): CPointerHandle\<T\> where T <: CType
    
功能：获取 [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<T\> 中数据的原始指针实例，指针实例指向数组首元素的地址，T 需要满足 [CType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-ctype) 约束。

> **注意：**
> 
> 指针使用完后需要及时用 [releaseArrayRawData](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_funcs.html#func-releasearrayrawdatatcpointerhandlet-where-t--ctype) 函数释放该指针。 指针的获取和释放之间仅可包含简单的 foreign C 函数调用等逻辑，不构造例如 [CString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#cstring) 等的仓颉对象，否则可能造成不可预期现象。

参数：

  * arr: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<T\> \- 待获取原始指针的数组。

返回值：

  * [CPointerHandle](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-cpointerhandlet-where-t--ctype)\<T\> \- 数组的原始指针实例。

示例：
    
    __
    
    main () {
        var arr: Array\<Int64\> = [1, 2, 3, 4]
        var cptrHandle: CPointerHandle\<Int64\> = unsafe { acquireArrayRawData(arr) }
        var cptr: CPointer\<Int64\> = cptrHandle.pointer
    
        let num: Int64 = unsafe { cptr.read() }
        println("The first element of the array is ${num} ")
    
        unsafe { releaseArrayRawData\<Int64\>(cptrHandle) }
    }
    
运行结果：
    
    __
    
    The first element of the array is 1

## func alignOf\<T\>\(\) where T <: CType
    
    __
    
    public func alignOf\<T\>(): UIntNative where T <: CType
    
功能：获取类型 T 的内存对齐值。

返回值：

  * [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 类型 T 满足内存对齐要求的字节数。

示例：
    
    __
    
    @ C
    struct Data {
        var a: Int64 = 0
        var b: Float32 = 0.0
    }
    
    main() {
        let alignSizeInt8: UIntNative = alignOf\<Int8\>()
        println("The memory alignment requirement for Int64 type is ${alignSizeInt8} byte")
    
        let alignSizeInt32: UIntNative = alignOf\<Int32\>()
        println("The memory alignment requirement for Int64 type is ${alignSizeInt32} bytes")
    
        let alignSizeInt64: UIntNative = alignOf\<Int64\>()
        println("The memory alignment requirement for Int64 type is ${alignSizeInt64} bytes")
    
        let alignSizeData: UIntNative = alignOf\<Data\>()
        println("The memory alignment requirement for Int64 type is ${alignSizeData} bytes")
    }
    
运行结果：
    
    __
    
    The memory alignment requirement for Int64 type is 1 byte
    The memory alignment requirement for Int64 type is 4 bytes
    The memory alignment requirement for Int64 type is 8 bytes
    The memory alignment requirement for Int64 type is 8 bytes

## func eprint\(String, Bool\)
    
    __
    
    public func eprint(str: String, flush!: Bool = true): Unit
    
功能：将指定字符串打印到标准错误文本流。

如抛出异常时，消息将打印到标准错误文本流（stderr），而不是标准输出（stdout）。

参数：

  * str: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 待输出的字符串。
  * flush\!: [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 是否将缓存数据区的内容立即刷新写入与标准错误流相关的文件和设备中，true表示立即刷新，false表示暂不刷新 ，默认 false。

示例：
    
    __
    
    main () {
        try {
            throw NegativeArraySizeException("I am an Exception!")
        } catch (e: NegativeArraySizeException) {
            eprint("NegativeArraySizeException is caught!", flush: true)
        }
    }
    
运行结果：
    
    __
    
    NegativeArraySizeException is caught!

## func eprintln\(String\)
    
    __
    
    public func eprintln(str: String): Unit
    
功能：将指定字符串打印到标准错误文本流，末尾添加换行。

如抛出异常时，消息将打印到标准错误文本流（stderr），而不是标准输出（stdout）。

参数：

  * str: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 待输出的字符串。

示例：
    
    __
    
    main () {
        try {
            throw NegativeArraySizeException("I am an Exception!")
        } catch (e: NegativeArraySizeException) {
            eprintln("NegativeArraySizeException is caught!")
        }
    }
    
运行结果：
    
    __
    
    NegativeArraySizeException is caught!

## func eprint\<T\>\(T, Bool\) where T <: ToString
    
    __
    
    public func eprint\<T\>(arg: T, flush!: Bool = false): Unit where T <: ToString
    
功能：将指定 T 类型实例的字符串表示打印到标准错误文本流。

如抛出异常时，消息将打印到标准错误文本流（stderr），而不是标准输出（stdout）。

参数：

  * arg: T - 待打印的 T 类型实例，该函数将打印其 toString 的返回值。
  * flush\!: [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 是否清空缓存，true 清空，false 不清空，默认 false。

示例：
    
    __
    
    class Rectangle <: ToString{
        var width: Int64
        var height: Int64
    
        public init(width: Int64, height: Int64) {
            this.width = width
            this.height = height
        }
    
        public func area() {
            width * height
        }
        public func toString(): String{
            return "width: ${this.width}, height: ${this.height}"
        }
    }
    
    main() {
        try {
            throw NegativeArraySizeException("I am an Exception!")
        } catch (e: NegativeArraySizeException) {
            eprint\<Rectangle\>(Rectangle(10,20), flush: true)
        }
    }
    
运行结果：
    
    __
    
    width: 10, height: 20

## func eprintln\<T\>\(T\) where T <: ToString
    
    __
    
    public func eprintln\<T\>(arg: T): Unit where T <: ToString
    
功能：将指定 T 类型实例的字符串表示打印到标准错误文本流，末尾添加换行。

如抛出异常时，消息将打印到标准错误文本流（stderr），而不是标准输出（stdout）。

参数：

  * arg: T - 待打印的 T 类型实例，该函数将打印其 toString 的返回值。

示例：
    
    __
    
    class Rectangle <: ToString{
        var width: Int64
        var height: Int64
    
        public init(width: Int64, height: Int64) {
            this.width = width
            this.height = height
        }
    
        public func area() {
            width * height
        }
        public func toString(): String{
            return "width: ${this.width}, height: ${this.height}"
        }
    }
    
    main() {
        try {
            throw NegativeArraySizeException("I am an Exception!")
        } catch (e: NegativeArraySizeException) {
            eprintln\<Rectangle\>(Rectangle(10,20))
        }
    }
    
运行结果：
    
    __
    
    width: 10, height: 20

## func ifNone\<T\>\(Option\<T\>, \(\) -> Unit\)
    
    __
    
    public func ifNone\<T\>(o: Option\<T\>, action: () -> Unit): Unit
    
功能：如果输入是 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont).None 类型数据，则执行 action 函数。

参数：

  * o: [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)\<T\> \- 待判断是否为 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont).None 的 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)\<T\> 类型实例。
  * action: \(\) ->[Unit](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#unit) \- 待执行函数。

示例：
    
    __
    
    main () {
        let num: Option\<Int64\> = None
        ifNone\<Int64\>(num,{=> println("num is None")})
    }
    
运行结果：
    
    __
    
    num is None

## func ifSome\<T\>\(Option\<T\>, \(T\) -> Unit\)
    
    __
    
    public func ifSome\<T\>(o: Option\<T\>, action: (T) -> Unit): Unit
    
功能：如果输入是 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont).Some 类型数据，则执行 action 函数。

参数：

  * o: [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)\<T\> \- 待判断是否为 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont).Some 的 [Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)\<T\> 类型实例，同时其封装的 `T` 类型实例将作为 action 函数的输入。
  * action: \(T\) ->[Unit](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#unit) \- 待执行函数。

示例：
    
    __
    
    main () {
        let num: Option\<Int64\> = Some(200)
        ifSome\<Int64\>(num,{numValue: Int64 => println("num is ${numValue}")})
    }
    
运行结果：
    
    __
    
    num is 200

## func max\<T\>\(T, T, Array\<T\>\) where T <: Comparable\<T\>
    
    __
    
    public func max\<T\>(a: T, b: T, others: Array\<T\>): T where T <: Comparable\<T\>
    
功能：根据 T 类型的 [Comparable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-comparablet) 接口实现，返回一组数据中的最大值，由于此函数的第三个参数是一个变长参数，支持获取二个以上的数据的比较。

> **注意：**
> 
> 浮点数类型的比较也将按照 [Comparable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-comparablet) 的结果进行比较，如果浮点书中有非数 `NaN`，结果将不正确，此时建议使用 [Float16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float16)、[Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32)、[Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64) 的 `static func max`方法。

参数：

  * a: T - 第一个待比较的数。
  * b: T - 第二个待比较的数。
  * others: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<T\> \- 其他待比较的数。

返回值：

  * T - 返回参数中的最大值。

示例：
    
    __
    
    class Rectangle <: Comparable\<Rectangle\> & ToString{
        var width: Int64
        var height: Int64
    
        public init(width: Int64, height: Int64) {
            this.width = width
            this.height = height
        }
    
        public prop area: Int64 {
            get() {
                return this.width * this.height
            }
        }
        public func compare(t: Rectangle): Ordering {
            if (t.area > this.area) {
                return Ordering.LT
            } else if (t.area == this.area) {
                return Ordering.EQ
            } else {
                Ordering.GT
            }
        }
        public func toString(): String{
            return "width: ${this.width}, height: ${this.height}, area: ${this.area}"
        }
    }
    main() {
        var r1: Rectangle = Rectangle(10, 20)
        var r2: Rectangle = Rectangle(20, 30)
        println("The larger one is ${max(r1, r2)}")
    }
    
运行结果：
    
    __
    
    The larger one is width: 20, height: 30, area: 600

## func min\<T\>\(T, T, Array\<T\>\) where T <: Comparable\<T\>
    
    __
    
    public func min\<T\>(a: T, b: T, others: Array\<T\>): T where T <: Comparable\<T\>
    
功能：根据 T 类型的 [Comparable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-comparablet) 接口实现，返回一组数据中的最小值，由于此函数的第三个参数是一个变长参数，支持获取二个以上的数据的比较。

> **注意：**
> 
> 浮点数类型的比较也将按照[Comparable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-comparablet)的结果进行比较，如果浮点书中有非数`NaN`，结果将不正确，此时建议使用 [Float16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float16)、[Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32)、[Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64) 的 `static func min`方法。

参数：

  * a: T - 第一个待比较的数。
  * b: T - 第二个待比较的数。
  * others: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)\<T\> \- 其他待比较的数。

返回值：

  * T - 返回参数中的最小值。

示例：
    
    __
    
    class Rectangle <: Comparable\<Rectangle\> & ToString {
        var width: Int64
        var height: Int64
    
        public init(width: Int64, height: Int64) {
            this.width = width
            this.height = height
        }
        public prop area: Int64 {
            get() {
                return this.width * this.height
            }
        }
        public func compare(t: Rectangle): Ordering {
            if (t.area > this.area) {
                return Ordering.LT
            } else if (t.area == this.area) {
                return Ordering.EQ
            } else {
                Ordering.GT
            }
        }
        public func toString(): String {
            return "width: ${this.width}, height: ${this.height}, area: ${this.area}"
        }
    }
    
    main() {
        var r1: Rectangle = Rectangle(10, 20)
        var r2: Rectangle = Rectangle(20, 30)
        println("The smaller one is ${min(r1, r2)}")
    }
    
运行结果：
    
    __
    
    The smaller one is width: 10, height: 20, area: 200

## func print\(Bool, Bool\)
    
    __
    
    public func print(b: Bool, flush!: Bool = false): Unit
    
功能：向控制台输出 [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) 类型数据的字符串表达。

> **注意：**
> 
> 下列 [print](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_funcs.html#func-printbool-bool)、 [println](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_funcs.html#func-println)、 [eprint](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_funcs.html#func-eprintstring-bool)、 [eprintln](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_funcs.html#func-eprintlnstring) 函数默认为 UTF-8 编码。

参数：

  * b: [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 待输出的 [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) 类型数据。
  * flush\!: [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 是否清空缓存，true 清空，false 不清空，默认 false。

示例：
    
    __
    
    main () {
        var flag: Bool = false
        print(flag)
        flag = true
        println()
        print(flag)
    }
    
运行结果：
    
    __
    
    false
    true

## func print\(Float16, Bool\)
    
    __
    
    public func print(f: Float16, flush!: Bool = false): Unit
    
功能：向控制台输出 [Float16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float16) 类型数据的小数点后六位的字符串表达，即超出六位的小数位不会输出，不足六位的小数位会补零。

参数：

  * f: [Float16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float16) \- 待输出的 [Float16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float16) 类型数据。
  * flush\!: [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 是否清空缓存，true 清空，false 不清空，默认 false。

示例：
    
    __
    
    main () {
        var num1: Float16 = 0.76
        var num2: Float16 = 0.68
        print(num1)
        println()
        print(num2)
    }
    
运行结果：
    
    __
    
    0.759766
    0.680176

> **注意：**
> 
> 仓颉采用IEEE 754格式表示浮点数，保存数值可能会有误差。

## func print\(Float32, Bool\)
    
    __
    
    public func print(f: Float32, flush!: Bool = false): Unit
    
功能：向控制台输出 [Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32) 类型数据的小数点后六位的字符串表达，即超出六位的小数位不会输出，不足六位的小数位会补零。

参数：

  * f: [Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32) \- 待输出的 [Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32) 类型数据。
  * flush\!: [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 是否清空缓存，true 清空，false 不清空，默认 false。

示例：
    
    __
    
    main () {
        var num1: Float32 = 0.759766
        var num2: Float32 = 0.680176
        print(num1)
        println()
        print(num2)
    }
    
运行结果：
    
    __
    
    0.759766
    0.680176

## func print\(Float64, Bool\)
    
    __
    
    public func print(f: Float64, flush!: Bool = false): Unit
    
功能：向控制台输出 [Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64) 类型数据的小数点后六位的字符串表达，即超出六位的小数位不会输出，不足六位的小数位会补零。

参数：

  * f: [Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64) \- 待输出的 [Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64) 类型数据。
  * flush\!: [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 是否清空缓存，true 清空，false 不清空，默认 false。

示例：
    
    __
    
    main () {
        var num1: Float64 = 0.76453
        var num2: Float64 = 0.683456
        print(num1)
        println()
        print(num2)
    }
    
运行结果：
    
    __
    
    0.764530
    0.683456

## func print\(Int16, Bool\)
    
    __
    
    public func print(i: Int16, flush!: Bool = false): Unit
    
功能：向控制台输出 [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) 类型数据的字符串表达。

参数：

  * i: [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 待输出的 [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) 类型数据。
  * flush\!: [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 是否清空缓存，true 清空，false 不清空，默认 false。

示例：
    
    __
    
    main () {
        var num1: Int16 = 10
        var num2: Int16 = 2222
        print(num1)
        println()
        print(num2)
    }
    
运行结果：
    
    __
    
    10
    2222

## func print\(Int32, Bool\)
    
    __
    
    public func print(i: Int32, flush!: Bool = false): Unit
    
功能：向控制台输出 [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) 类型数据的字符串表达。

参数：

  * i: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 待输出的 [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) 类型数据。
  * flush\!: [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 是否清空缓存，true 清空，false 不清空，默认 false。

示例：
    
    __
    
    main () {
        var num1: Int32 = 1024
        var num2: Int32 = 2048
        print(num1)
        println()
        print(num2)
    }
    
运行结果：
    
    __
    
    1024
    2048

## func print\(Int64, Bool\)
    
    __
    
    public func print(i: Int64, flush!: Bool = false): Unit
    
功能：向控制台输出 [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) 类型数据的字符串表达。

参数：

  * i: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 待输出的 [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) 类型数据。
  * flush\!: [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 是否清空缓存，true 清空，false 不清空，默认 false。

示例：
    
    __
    
    main () {
        var num1: Int64 = 1024
        var num2: Int64 = 2048
        print(num1)
        println()
        print(num2)
    }
    
运行结果：
    
    __
    
    1024
    2048

## func print\(Int8, Bool\)
    
    __
    
    public func print(i: Int8, flush!: Bool = false): Unit
    
功能：向控制台输出 [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) 类型数据的字符串表达。

参数：

  * i: [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 待输出的 [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) 类型数据。
  * flush\!: [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 是否清空缓存，true 清空，false 不清空，默认 false。

示例：
    
    __
    
    main () {
        var num1: Int8 = 8
        var num2: Int8 = 32
        print(num1)
        println()
        print(num2)
    }
    
运行结果：
    
    __
    
    8
    32

## func print\(Rune, Bool\)
    
    __
    
    public func print(c: Rune, flush!: Bool = false): Unit
    
功能：向控制台输出 [Rune](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#rune) 类型数据的字符串表达。

参数：

  * c: [Rune](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#rune) \- 待输出的 [Rune](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#rune) 类型数据。
  * flush\!: [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 是否清空缓存，true 清空，false 不清空，默认 false。

示例：
    
    __
    
    main () {
        var char: Rune = r'a'
        print(char)
    }
    
运行结果：
    
    __
    
    a

## func print\(String, Bool\)
    
    __
    
    public func print(str: String, flush!: Bool = false): Unit
    
功能：向控制台输出指定字符串。

参数：

  * str: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 待输出的字符串。
  * flush\!: [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 是否清空缓存，true 清空，false 不清空，默认 false。

示例：
    
    __
    
    main () {
        var str: String = "I like Cangjie"
        print(str)
    }
    
运行结果：
    
    __
    
    I like Cangjie

## func print\(UInt16, Bool\)
    
    __
    
    public func print(i: UInt16, flush!: Bool = false): Unit
    
功能：向控制台输出 [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) 类型数据的字符串表达。

参数：

  * i: [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 待输出的 [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) 类型数据。
  * flush\!: [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 是否清空缓存，true 清空，false 不清空，默认 false。

示例：
    
    __
    
    main () {
        var num1: UInt16 = 8
        var num2: UInt16 = 32
        print(num1)
        println()
        print(num2)
    }
    
运行结果：
    
    __
    
    8
    32

## func print\(UInt32, Bool\)
    
    __
    
    public func print(i: UInt32, flush!: Bool = false): Unit
    
功能：向控制台输出 [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) 类型数据的字符串表达。

参数：

  * i: [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 待输出的 [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) 类型数据。
  * flush\!: [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 是否清空缓存，true 清空，false 不清空，默认 false。

示例：
    
    __
    
    main () {
        var num1: UInt16 = 8
        var num2: UInt16 = 32
        print(num1)
        println()
        print(num2)
    }
    
运行结果：
    
    __
    
    8
    32

## func print\(UInt64, Bool\)
    
    __
    
    public func print(i: UInt64, flush!: Bool = false): Unit
    
功能：向控制台输出 [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) 类型数据的字符串表达。

参数：

  * i: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 待输出的 [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) 类型数据。
  * flush\!: [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 是否清空缓存，true 清空，false 不清空，默认 false。

示例：
    
    __
    
    main () {
        var num1: UInt64 = 8
        var num2: UInt64 = 32
        print(num1)
        println()
        print(num2)
    }
    
运行结果：
    
    __
    
    8
    32

## func print\(UInt8, Bool\)
    
    __
    
    public func print(i: UInt8, flush!: Bool = false): Unit
    
功能：向控制台输出 [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) 类型数据的字符串表达。

参数：

  * i: [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 待输出的 [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) 类型数据。
  * flush\!: [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 是否清空缓存，true 清空，false 不清空，默认 false。

示例：
    
    __
    
    main () {
        var num1: UInt8 = 8
        var num2: UInt8 = 32
        print(num1)
        println()
        print(num2)
    }
    
运行结果：
    
    __
    
    8
    32

## func print\<T\>\(T, Bool\) where T <: ToString
    
    __
    
    public func print\<T\>(arg: T, flush!: Bool = false): Unit where T <: ToString
    
功能：向控制台输出 `T` 类型实例的字符串表示。

参数：

  * arg: T - 待输出的数据，支持实现了 [ToString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-tostring) 接口的类型。
  * flush\!: [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 是否清空缓存，true 清空，false 不清空，默认 false。

示例：
    
    __
    
    class Rectangle <: ToString {
        var width: Int64
        var height: Int64
    
        public init(width: Int64, height: Int64) {
            this.width = width
            this.height = height
        }
    
        public func area() {
            width * height
        }
        public func toString(): String {
            return "width: ${this.width}, height: ${this.height}"
        }
    }
    
    main() {
        print\<Rectangle\>(Rectangle(10, 20))
    }
    
运行结果：
    
    __
    
    width: 10, height: 20

## func println\(\)
    
    __
    
    public func println(): Unit
    
功能：向标准输出（stdout）输出换行符。

示例：
    
    __
    
    main () {
        var num1: UInt8 = 8
        var num2: UInt8 = 32
        print(num1)
        println()
        print(num2)
    }
    
运行结果：
    
    __
    
    8
    32

## func println\(Bool\)
    
    __
    
    public func println(b: Bool): Unit
    
功能：向控制台输出 [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) 类型数据的字符串表达，末尾添加换行。

参数：

  * b: [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 待输出的 [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) 类型数据。

示例：
    
    __
    
    main () {
        var flag1: Bool = true
        var flag2: Bool = false
        println(flag1)
        println(flag2)
    }
    
运行结果：
    
    __
    
    true
    false

## func println\(Float16\)
    
    __
    
    public func println(f: Float16): Unit
    
功能：向控制台输出 [Float16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float16) 类型数据的字符串表达，末尾添加换行。

参数：

  * f: [Float16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float16) \- 待输出的 [Float16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float16) 类型数据。

示例：
    
    __
    
    main () {
        var num1: Float16 = 3.1415
        var num2: Float16 = 3.141592
        println(num1)
        println(num2)
    }
    
运行结果：
    
    __
    
    3.140625
    3.140625

## func println\(Float32\)
    
    __
    
    public func println(f: Float32): Unit
    
功能：向控制台输出 [Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32) 类型数据的字符串表达，末尾添加换行。

参数：

  * f: [Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32) \- 待输出的 [Float32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float32) 类型数据。

示例：
    
    __
    
    main () {
        var num1: Float32 = 3.1415
        var num2: Float32 = 3.141592
        println(num1)
        println(num2)
    }
    
运行结果：
    
    __
    
    3.141500
    3.141592

## func println\(Float64\)
    
    __
    
    public func println(f: Float64): Unit
    
功能：向控制台输出 [Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64) 类型数据的字符串表达，末尾添加换行。

参数：

  * f: [Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64) \- 待输出的 [Float64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#float64) 类型数据。

示例：
    
    __
    
    main () {
        var num1: Float64 = 3.1415
        var num2: Float64 = 3.141592
        println(num1)
        println(num2)
    }
    
运行结果：
    
    __
    
    3.141500
    3.141592

## func println\(Int16\)
    
    __
    
    public func println(i: Int16): Unit
    
功能：向控制台输出 [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) 类型数据的字符串表达，末尾添加换行。

参数：

  * i: [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) \- 待输出的 [Int16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int16) 类型数据。

示例：
    
    __
    
    main () {
        var num1: Int16 = 8
        var num2: Int16 = 32
        println(num1)
        println(num2)
    }
    
运行结果：
    
    __
    
    8
    32

## func println\(Int32\)
    
    __
    
    public func println(i: Int32): Unit
    
功能：向控制台输出 [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) 类型数据的字符串表达，末尾添加换行。

参数：

  * i: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 待输出的 [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) 类型数据。

示例：
    
    __
    
    main () {
        var num1: Int32 = 8
        var num2: Int32 = 32
        println(num1)
        println(num2)
    }
    
运行结果：
    
    __
    
    8
    32

## func println\(Int64\)
    
    __
    
    public func println(i: Int64): Unit
    
功能：向控制台输出 [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) 类型数据的字符串表达，末尾添加换行。

参数：

  * i: [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 待输出的 [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) 类型数据。

示例：
    
    __
    
    main () {
        var num1: Int64 = 8
        var num2: Int64 = 32
        println(num1)
        println(num2)
    }
    
运行结果：
    
    __
    
    8
    32

## func println\(Int8\)
    
    __
    
    public func println(i: Int8): Unit
    
功能：向控制台输出 [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) 类型数据的字符串表达，末尾添加换行。

参数：

  * i: [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) \- 待输出的 [Int8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int8) 类型数据。

示例：
    
    __
    
    main () {
        var num1: Int8 = 8
        var num2: Int8 = 32
        println(num1)
        println(num2)
    }
    
运行结果：
    
    __
    
    8
    32

## func println\(Rune\)
    
    __
    
    public func println(c: Rune): Unit
    
功能：向控制台输出 [Rune](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#rune) 类型数据的字符串表达，末尾添加换行。

参数：

  * c: [Rune](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#rune) \- 待输出的 [Rune](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#rune) 类型数据。

示例：
    
    __
    
    main () {
        var char1: Rune = r'a'
        var char2: Rune = r'b'
        println(char1)
        println(char2)
    }
    
运行结果：
    
    __
    
    a
    b

## func println\(String\)
    
    __
    
    public func println(str: String): Unit
    
功能：向控制台输出指定字符串，末尾添加换行。

参数：

  * str: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 待输出的字符串。

示例：
    
    __
    
    main () {
        var str1: String = "I like Cangjie"
        var str2: String = "I like programming"
        println(str1)
        println(str2)
    }
    
运行结果：
    
    __
    
    I like Cangjie
    I like programming

## func println\(UInt16\)
    
    __
    
    public func println(i: UInt16): Unit
    
功能：向控制台输出 [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) 类型数据的字符串表达，末尾添加换行。

参数：

  * i: [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 待输出的 [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) 类型数据。

示例：
    
    __
    
    main () {
        var num1: UInt16 = 8
        var num2: UInt16 = 32
        print(num1)
        println()
        print(num2)
    }
    
运行结果：
    
    __
    
    8
    32

## func println\(UInt32\)
    
    __
    
    public func println(i: UInt32): Unit
    
功能：向控制台输出 [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) 类型数据的字符串表达，末尾添加换行。

参数：

  * i: [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 待输出的 [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) 类型数据。

示例：
    
    __
    
    main () {
        var num1: UInt32 = 8
        var num2: UInt32 = 32
        print(num1)
        println()
        print(num2)
    }
    
运行结果：
    
    __
    
    8
    32

## func println\(UInt64\)
    
    __
    
    public func println(i: UInt64): Unit
    
功能：向控制台输出 [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) 类型数据的字符串表达，末尾添加换行。

参数：

  * i: [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) \- 待输出的 [UInt64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint64) 类型数据。

示例：
    
    __
    
    main () {
        var num1: UInt64 = 8
        var num2: UInt64 = 32
        print(num1)
        println()
        print(num2)
    }
    
运行结果：
    
    __
    
    8
    32

## func println\(UInt8\)
    
    __
    
    public func println(i: UInt8): Unit
    
功能：向控制台输出 [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) 类型数据的字符串表达，末尾添加换行。

参数：

  * i: [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 待输出的 [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) 类型数据。

示例：
    
    __
    
    main () {
        var num1: UInt8 = 8
        var num2: UInt8 = 32
        print(num1)
        println()
        print(num2)
    }
    
运行结果：
    
    __
    
    8
    32

## func println\<T\>\(T\) where T <: ToString
    
    __
    
    public func println\<T\>(arg: T): Unit where T <: ToString
    
功能：向控制台输出 `T` 类型实例的字符串表示，末尾添加换行。

参数：

  * arg: T - 待输出的数据，支持实现了 [ToString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-tostring) 接口的类型。

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
    
    main() {
        println\<Rectangle\>(Rectangle(10, 20))
        println\<Rectangle\>(Rectangle(5, 10))
    }
    
运行结果：
    
    __
    
    width: 10, height: 20
    width: 5, height: 10

## func readln\(\)
    
    __
    
    public func readln(): String
    
功能：接受控制台输入，直到遇到换行或EOF结束。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 接受到的字符串。

示例：
    
    __
    
    main () {
        var str: String = readln() // Console input 12345 234 and enter
        println(str)
    }
    
运行结果：
    
    __
    
    12345 234

## func refEq\(Object, Object\)
    
    __
    
    public func refEq(a: Object, b: Object): Bool
    
功能：判断两个 [Object](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_classes.html#class-object) 实例的内存地址是否相同。

参数：

  * a: [Object](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_classes.html#class-object) \- 一个 [Object](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_classes.html#class-object) 实例。
  * b: [Object](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_classes.html#class-object) \- 另一个 [Object](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_classes.html#class-object) 实例。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果两个 [Object](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_classes.html#class-object) 实例的内存地址相同，返回 true，否则返回 false。

示例：
    
    __
    
    class Rectangle {
        var width: Int64
        var height: Int64
    
        public init(width: Int64, height: Int64) {
            this.width = width
            this.height = height
        }
    }
    
    main() {
        var r1: Rectangle = Rectangle(10, 20)
        var r2: Rectangle = r1
        var r3: Rectangle = Rectangle(5, 6)
        println(refEq(r1, r2))
        println(refEq(r1, r3))
    }
    
运行结果：
    
    __
    
    true
    false

## func releaseArrayRawData\<T\>\(CPointerHandle\<T\>\) where T <: CType
    
    __
    
    public unsafe func releaseArrayRawData\<T\>(handle: CPointerHandle\<T\>): Unit where T <: CType
    
功能：释放原始指针实例，该实例通过 [acquireArrayRawData](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_funcs.html#func-acquirearrayrawdatatarrayt-where-t--ctype) 获取。

参数：

  * handle: [CPointerHandle](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-cpointerhandlet-where-t--ctype)\<T\> \- 待释放的指针实例。

示例：
    
    __
    
    main () {
        var arr: Array\<Int64\> = [1, 2, 3, 4]
        var cptrHandle: CPointerHandle\<Int64\> = unsafe { acquireArrayRawData(arr) }
    
        var cptr: CPointer\<Int64\> = cptrHandle.pointer
        let num: Int64 = unsafe { cptr.read() }
        println("The first element of the array is ${num} ")
    
        unsafe { releaseArrayRawData\<Int64\>(cptrHandle) }
    }
    
运行结果：
    
    __
    
    The first element of the array is 1

## func sizeOf\<T\>\(\) where T <: CType
    
    __
    
    public func sizeOf\<T\>(): UIntNative where T <: CType
    
功能：获取类型 T 所占用的内存空间大小。

返回值：

  * [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 类型 T 所占用内存空间的字节数。

示例：
    
    __
    
    @ C
    struct Data {
        var a: Int64 = 0
        var b: Float32 = 0.0
    }
    
    main() {
        let sizeInt8: UIntNative = sizeOf\<Int8\>()
        println("The size of Int8 is ${sizeInt8} byte")
    
        let sizeInt32: UIntNative = sizeOf\<Int32\>()
        println("The size of Int32 is ${sizeInt32} bytes")
    
        let sizeInt64: UIntNative = sizeOf\<Int64\>()
        println("The size of Int64 is ${sizeInt64} bytes")
    
        let sizeData: UIntNative = sizeOf\<Data\>()
        println("The size of Rectangle is ${sizeData} bytes")
    }
    
运行结果：
    
    __
    
    The size of Int8 is 1 byte
    The size of Int32 is 4 bytes
    The size of Int64 is 8 bytes
    The size of Rectangle is 16 bytes

## func sleep\(Duration\)
    
    __
    
    public func sleep(dur: Duration): Unit
    
功能：休眠当前线程。

若 `dur` 小于等于 [Duration.Zero](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#static-const-zero)，当前线程会让出运行权。

参数：

  * dur: [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) \- 线程休眠的时长。

示例：
    
    __
    
    import std.sync.*
    import std.time.*
    
    main(): Int64 {
        spawn {
            =>
            println("New thread starts")
            println("New thread ends")
        }
    
        println("Main thread")
        println("The main thread starts to sleep.")
    
        /* dur == 1 秒 */
        sleep(1000 * Duration.millisecond)
        println("The main thread ends sleep.")
    
        return 0
    }
    
在启动主线程后，执行到sleep函数的时候，主线程会让出系统执行权，并睡眠 1 秒后重新唤醒竞争系统执行权，继续执行剩余逻辑。在主线程睡眠期间，自定义线程拿到执行权，开始执行。运行结果：
    
    __
    
    Main thread
    The main thread starts to sleep.
    New thread starts
    New thread ends
    The main thread ends sleep.

## func zeroValue\<T\>\(\)
    
    __
    
    public unsafe func zeroValue\<T\>(): T
    
功能：获取一个已全零初始化的 T 类型实例。

> **注意：**
> 
> 通过该函数获取到的实例一定要赋值为正常初始化的值再使用，否则将引发程序崩溃。

返回值：

  * T - 一个已全零初始化的 T 类型实例。

示例：
    
    __
    
    main (): Int64 {
        var m = MyClass\<Student\>()
        m.set(1, Student())
        var s = m.get(1)
        println(s)
        s = m.get(2)
        // 底下代码解除注释，运行时就会出错，因为其并不是 Student 对象
        // println(s)
        return 0
    }
    
    class MyClass\<T\> {
        var myData: Array\<T\>
        public init() {
            // 用 zeroValue\<T\>() 对 Array 进行全零初始化
            myData = Array\<T\>(10, repeat: unsafe { zeroValue\<T\>() })
        }
        public func get(index: Int64): T {
            myData[index]
        }
        public func set(index: Int64, element: T): Unit {
            myData[index] = element
        }
    }
    class Student <: ToString {
        public func toString() { "student" }
    }
    
示例结果：
    
    __
    
    student