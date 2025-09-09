
# std.reflect

## 功能介绍

`reflect` 包提供了反射功能，使得程序在运行时能够获取到各种实例的类型信息，并进行各种读写和调用操作。

本包暂不支持 macOS 平台。

> **注意：**
> 
>   * 对于全局信息仓颉的反射功能只能访问可见性为 `public` 的全局变量和全局函数。
>   * 对于当前所在包，仓颉的反射功能可以访问所有全局定义的类型，而对于外部导入的包或动态加载的模块，则只能访问其中可见性为 `public` 的全局定义的类型。
>   * 对于成员信息仓颉的反射功能只能访问类型内的可见性为 `public` 的成员（实例/静态成员变量/属性/函数），使用非 `public` 修饰符修饰的或缺省修饰符的成员均是不可见的。
>   * 目前，仓颉的反射功能尚不支持函数类型、元组类型、`enum` 类型。
> 

## API 列表

### 函数

函数名| 功能  
---|---  
[parseParameterTypes\(String\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_funcs.html#func-parseparametertypesstring)| 将字符串转换为包含具体类型信息的函数签名，以便 `getStaticFunction` 等函数使用。  
  
### 类型别名

类型别名| 功能  
---|---  
[Annotation](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_types.html#type-annotation--object)| [Object](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_classes.html#class-object) 的别名。  
  
### 类

类名| 功能  
---|---  
[ClassTypeInfo](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_classes.html#class-classtypeinfo)| 描述`class`类型的类型信息。  
[ConstructorInfo](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_classes.html#class-constructorinfo)| 描述构造函数信息。  
[GenericTypeInfo](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_classes.html#class-generictypeinfo)| 描述泛型信息。  
[GlobalFunctionInfo](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_classes.html#class-globalfunctioninfo)| 描述全局函数信息。  
[GlobalVariableInfo](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_classes.html#class-globalvariableinfo)| 描述全局变量信息。  
[InstanceFunctionInfo](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_classes.html#class-instancefunctioninfo)| 描述实例成员函数信息。  
[InstancePropertyInfo](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_classes.html#class-instancepropertyinfo)| 描述实例成员属性信息。  
[InstanceVariableInfo](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_classes.html#class-instancevariableinfo)| 描述实例成员变量信息。  
[InterfaceTypeInfo](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_classes.html#class-interfacetypeinfo)| 描述`interface`类型的类型信息。  
[PackageInfo](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_classes.html#class-packageinfo)| 描述包信息。  
[ParameterInfo](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_classes.html#class-parameterinfo)| 描述函数形参信息。  
[PrimitiveTypeInfo](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_classes.html#class-primitivetypeinfo)| 描述原始数据类型的类型信息。  
[StaticFunctionInfo](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_classes.html#class-staticfunctioninfo)| 描述静态成员函数信息。  
[StaticPropertyInfo](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_classes.html#class-staticpropertyinfo)| 描述静态成员属性信息。  
[StaticVariableInfo](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_classes.html#class-staticvariableinfo)| 描述静态成员变量信息。  
[StructTypeInfo](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_classes.html#class-structtypeinfo)| 描述`struct`类型的类型信息。  
[TypeInfo](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_classes.html#class-typeinfo)| `TypeInfo`提供了所有数据类型通用的操作接口，支持用户进行反射操作。  
  
### 枚举

枚举名| 功能  
---|---  
[ModifierInfo](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_enums.html#enum-modifierinfo)| 描述修饰符信息。  
  
### 异常类

异常类名| 功能  
---|---  
[IllegalSetException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_exceptions.html#class-illegalsetexception)| 表示对不可变类型进行更改异常。  
[IllegalTypeException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_exceptions.html#class-illegaltypeexception)| 表示类型不匹配异常。  
[InfoNotFoundException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_exceptions.html#class-infonotfoundexception)| 表示无法找到对应信息异常。  
[InvocationTargetException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_exceptions.html#class-invocationtargetexception)| 表示调用函数包装异常。  
[MisMatchException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_exceptions.html#class-mismatchexception)| 表示调用对应函数抛出异常。  
[ReflectException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_exceptions.html#class-reflectexception)| `ReflectException` 为 Reflect 包的基异常类。