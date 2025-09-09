
# 异常类

## class IllegalSetException
    
    __
    
    public class IllegalSetException <: ReflectException {
        public init()
        public init(message: String)
    }
    
功能：[IllegalSetException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_exceptions.html#class-illegalsetexception) 为对不可变类型进行更改异常。

父类型：

  * ReflectException

### init\(\)
    
    __
    
    public init()
    
功能：创建 [IllegalSetException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_exceptions.html#class-illegalsetexception) 实例。

### init\(String\)
    
    __
    
    public init(message: String)
    
功能：根据异常信息创建 [IllegalSetException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_exceptions.html#class-illegalsetexception) 实例。

参数：

  * message: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 异常信息。

## class IllegalTypeException
    
    __
    
    public class IllegalTypeException <: ReflectException {
        public init()
        public init(message: String)
    }
    
功能：[IllegalTypeException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_exceptions.html#class-illegaltypeexception) 为类型不匹配异常。

父类型：

  * ReflectException

### init\(\)
    
    __
    
    public init()
    
功能：创建 [IllegalTypeException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_exceptions.html#class-illegaltypeexception) 实例。

### init\(String\)
    
    __
    
    public init(message: String)
    
功能：根据异常信息创建 [IllegalTypeException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_exceptions.html#class-illegaltypeexception) 实例。

参数：

  * message: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 异常信息。

## class InfoNotFoundException
    
    __
    
    public class InfoNotFoundException <: ReflectException {
        public init()
        public init(message: String)
    }
    
功能：[InfoNotFoundException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_exceptions.html#class-infonotfoundexception) 为无法找到对应信息异常。

父类型：

  * ReflectException

### init\(\)
    
    __
    
    public init()
    
功能：创建 [InfoNotFoundException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_exceptions.html#class-infonotfoundexception) 实例。

### init\(String\)
    
    __
    
    public init(message: String)
    
功能：根据异常信息创建 [InfoNotFoundException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_exceptions.html#class-infonotfoundexception) 实例。

参数：

  * message: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 异常信息。

## class InvocationTargetException
    
    __
    
    public class InvocationTargetException <: ReflectException {
        public init()
        public init(message: String)
    }
    
功能：[InvocationTargetException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_exceptions.html#class-invocationtargetexception) 为调用函数包装异常。

父类型：

  * ReflectException

### init\(\)
    
    __
    
    public init()
    
功能：创建 [InvocationTargetException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_exceptions.html#class-invocationtargetexception) 实例。

### init\(String\)
    
    __
    
    public init(message: String)
    
功能：根据异常信息创建 [InvocationTargetException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_exceptions.html#class-invocationtargetexception) 实例。

参数：

  * message: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 异常信息。

## class MisMatchException
    
    __
    
    public class MisMatchException <: ReflectException {
        public init()
        public init(message: String)
    }
    
功能：[MisMatchException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_exceptions.html#class-mismatchexception) 为调用对应函数抛出异常。

父类型：

  * ReflectException

### init\(\)
    
    __
    
    public init()
    
功能：创建 [MisMatchException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_exceptions.html#class-mismatchexception) 实例。

### init\(String\)
    
    __
    
    public init(message: String)
    
功能：根据异常信息创建 [MisMatchException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_exceptions.html#class-mismatchexception) 实例。

参数：

  * message: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 异常信息。

## class ReflectException
    
    __
    
    public open class ReflectException <: Exception {
        public init()
        public init(message: String)
    }
    
功能：[ReflectException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_exceptions.html#class-reflectexception) 为 Reflect 包的基异常类。

父类型：

  * [Exception](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-exception)

### init\(\)
    
    __
    
    public init()
    
功能：创建 [ReflectException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_exceptions.html#class-reflectexception) 实例。

### init\(String\)
    
    __
    
    public init(message: String)
    
功能：根据异常信息创建 [ReflectException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_exceptions.html#class-reflectexception) 实例。

参数：

  * message: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 异常信息。

### func getClassName\(\)
    
    __
    
    protected override open func getClassName(): String
    
功能：获得类名。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 类名字符串。