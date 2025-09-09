  
# 枚举

## enum ModifierInfo
    
    __
    
    public enum ModifierInfo <: Equatable\<ModifierInfo\> & Hashable & ToString  {
        | Open
        | Override
        | Redef
        | Abstract
        | Sealed
        | Mut
        | Static
    }
    
功能：描述修饰符信息。

> **注意：**
> 
> 由于开发者通过反射功能获取到的类型信息均来自于 `public` 的类型，这些类型都必定拥有 `public` 的访问控制语义，因此修饰符信息并不包含任何访问控制相关的修饰符。

父类型：

  * [Equatable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-equatablet)\<ModifierInfo\>
  * [Hashable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-hashable)
  * [ToString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-tostring)

### Abstract
    
    __
    
    Abstract
    
功能：表示 abstract 修饰符。

### Mut
    
    __
    
    Mut
    
功能：表示 mut 修饰符。

### Open
    
    __
    
    Open
    
功能：表示 open 修饰符。

### Override
    
    __
    
    Override
    
功能：表示 override 修饰符。

### Redef
    
    __
    
    Redef
    
功能：表示 redef 修饰符。

### Sealed
    
    __
    
    Sealed
    
功能：表示 sealed 修饰符。

### Static
    
    __
    
    Static
    
功能：表示 static 修饰符。

### func hashCode\(\)
    
    __
    
    public func hashCode(): Int64
    
功能：获取该修饰符信息的哈希值。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 该修饰符信息的哈希值。

> **注意：**
> 
> 内部实现为该修饰符关键字字符串的哈希值。

### func toString\(\)
    
    __
    
    public override func toString(): String
    
功能：获取字符串形式的该修饰符信息。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 字符串形式的该修饰符信息。

> **注意：**
> 
> 字符串形式的修饰符信息即为修饰符关键字的标识符。

### operator func ==\(ModifierInfo\)
    
    __
    
    public override operator func ==(that: ModifierInfo): Bool
    
功能：判断该修饰符信息与给定的另一个修饰符信息是否相等。

参数：

  * that: [ModifierInfo](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_enums.html#enum-modifierinfo) \- 被比较相等性的另一个修饰符信息。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果该修饰符信息与 `that` 相等则返回 `true`，否则返回 `false`。

> **注意：**
> 
> 修饰符信息的相等性的语义等价于 `enum` 类型实例的相等性的语义。

### operator func \!=\(ModifierInfo\)
    
    __
    
    public override operator func !=(that: ModifierInfo): Bool
    
功能：判断该修饰符信息与给定的另一个修饰符信息是否不等。

> **注意：**
> 
> 修饰符信息的相等性的语义等价于 `enum` 类型实例的相等性的语义。

参数：

  * that: [ModifierInfo](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_enums.html#enum-modifierinfo) \- 被比较相等性的另一个修饰符信息。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果该修饰符信息与 `that` 不等则返回 `true`，否则返回 `false`。