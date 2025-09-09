
# 函数

## func registerOptionValidator\(String, \(Any\) -> OptionValidity\)
    
    __
    
    public func registerOptionValidator(name: String, validator: (Any) -> OptionValidity): Unit
    
功能: 用于注册自定义选项验证器。大多数情况下，用户应该使用 [@UnittestOption](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_testmacro/unittest_testmacro_package_api/unittest_testmacro_package_macros.html#UnittestOption-%E5%AE%8F) 宏，而不是直接使用这个函数。

参数：

  * name: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 选项名称。
  * validator: \([Any](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-any)\) -> [OptionValidity](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_enums.html#enum-optionvalidity) \- 检查选项是否合法的函数。

## func setOptionInfo\(String, Array\<String\>, ?String\)
    
    __
    
    public func setOptionInfo(
        name: String,
        types: Array\<String\>,
        description!: ?String = None
    ): Unit
    
功能: 用于设置选项的描述的函数。

参数：

  * name: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 选项名称。
  * types: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)> \- 可以表示的选项值的有效类型
  * description: ?[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 选项描述。

## func setOrUpdateOptionInfo\(String, ?String, String, String\)
    
    __
    
    public func setOrUpdateOptionInfo(
        name: String,
        description: ?String,
        ty: String,
        typeDescription: String
    ): Unit
    
功能: 用于设置具体类型的选项的描述。

参数：

  * name: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 选项名称。
  * description: ?[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 选项的描述。如果值不为 None ，则覆盖先前的值。
  * ty: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 类型的字符串形式。
  * typeDescription: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 选项的类型描述。

## func toStringOrPlaceholder\<T\>\(T\)
    
    __
    
    public func toStringOrPlaceholder\<T\>(value: T)
    
功能：将实现 [ToString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-tostring) 的参数转换为字符串表达。不支持 [ToString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-tostring) 的转换为默认字符串。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 参数的字符串表达。