
# std.unittest.common

## 功能介绍

unittest.common 为单元测试框架提供了打印所需的类型和一些通用方法。

## API 列表

### 函数

函数名| 功能  
---|---  
[func registerOptionValidator\(String, \(Any\) -> OptionValidity\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_functions.html#func-registeroptionvalidatorstring-any---optionvalidity)| 用于注册自定义选项验证器。大多数情况下，用户应该使用 [@UnittestOption](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_testmacro/unittest_testmacro_package_api/unittest_testmacro_package_macros.html#UnittestOption-%E5%AE%8F) 宏，而不是直接使用这个函数。  
[func setOptionInfo\(String, Array\<String\>, ?String\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_functions.html#func-setoptioninfostring-arraystring-string)| 用于设置选项的描述的函数。  
[setOrUpdateOptionInfo\(String, ?String, String, String\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_functions.html#func-setorupdateoptioninfostring-string-string-string)| 将实现 [ToString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-tostring) 的参数转换为字符串表达。  
[toStringOrPlaceholder\<T\>\(T\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_functions.html#func-tostringorplaceholdertt)| 将实现 [ToString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-tostring) 的参数转换为字符串表达。  
  
### 接口

接口名| 功能  
---|---  
[DataProvider](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_interfaces.html#interface-dataprovider)| DataStrategy 的组件，用于提供测试数据， T 指定提供者提供的数据类型。  
[DataShrinker](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_interfaces.html#interface-datashrinkert)| DataStrategy 的组件，用于在测试期间缩减数据，T 指定该收缩器处理的数据类型。  
[DataStrategy](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_interfaces.html#interface-datastrategy)| 为参数化测试提供数据的策略，T 指定该策略操作的数据类型。  
[PrettyPrintable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_interfaces.html#interface-prettyprintable)| 类型实现该接口表示可以较好地进行颜色及缩进格式的打印。  
[KeyFor](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_interfaces.html#interface-keyfor)| [Configuration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_classes.html#class-configuration) 中配置型的键的类型。  
  
### 类

类名| 功能  
---|---  
[Configuration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_classes.html#class-configuration)| 存储 `@Configure` 宏生成的 `unittest` 配置数据的对象。`Configuration` 是一个类似 `HashMap` 的类，但它的键不是键和值类型，而是 `String` 类型，和任何给定类型的值。  
[ConfigurationKey](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_classes.html#class-configurationkey)| 配置项的键值对象。提供判等及 hashCode 方法。  
[PrettyPrinter](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_classes.html#class-prettyprinter)| 拥有颜色和对齐、缩进控制的打印器。  
[PrettyText](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_classes.html#class-prettytext)| 类似构造器的类，用于存储打印的输出。  
  
### 枚举

枚举名| 功能  
---|---  
[Color](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_enums.html#enum-color)| 指定颜色。  
[OptionValidity](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_enums.html#enum-optionvalidity)| 代表选项值验证的结果的枚举值。  
  
### 结构体

结构体名| 功能  
---|---  
[OptionInfo](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_structs.html#struct-optioninfo)| 打印帮助页面时可以使用的选项的信息。  
  
### 异常类

异常名| 功能  
---|---  
[UnittestOptionValidationException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_exceptions.html#class-unittestoptionvalidationexception)| 框架验证选项值合法性过程中抛出的异常。