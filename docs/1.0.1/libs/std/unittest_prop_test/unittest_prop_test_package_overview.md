
# std.unittest.prop\_test

## 功能介绍

unittest.prop\_test 为单元测试框架提供了参数化测试所需的类型和方法。

## API 列表

### 函数

函数名| 功能  
---|---  
[emptyIterable\<T\>\(\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_prop_test/unittest_prop_test_package_api/unittest_prop_test_package_functions.html#func-emptyiterablet)| 创建一个空的迭代器。  
[random\<T\>\(\)](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_prop_test/unittest_prop_test_package_api/unittest_prop_test_package_functions.html#func-randomt-where-t--arbitraryt)| 该函数生成 T 类型的随机数据，其中 T 必须实现接口 Arbitrary\<T\> 。该函数的返回值是参数化测试的一种参数源。  
  
### 接口

接口名| 功能  
---|---  
[Arbitrary\<T\>](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_prop_test/unittest_prop_test_package_api/unittest_prop_test_package_interfaces.html#interface-arbitraryt)| 生成 T 类型随机值的接口。  
[IndexAccess](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_prop_test/unittest_prop_test_package_api/unittest_prop_test_package_interfaces.html#interface-indexaccess)| 通过索引访问元组元素的实用程序接口。  
[RandomSource](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_prop_test/unittest_prop_test_package_api/unittest_prop_test_package_interfaces.html#interface-randomsource)| 提供 [Arbitrary\<T\>](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_prop_test/unittest_prop_test_package_api/unittest_prop_test_package_interfaces.html#interface-arbitraryt) 所需的随机生成基础类型数据的能力。  
[Shrink](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_prop_test/unittest_prop_test_package_api/unittest_prop_test_package_interfaces.html#interface-shrinkt)| 将 T 类型的值缩减到多个“更小”的值。  
  
### 类

类名| 功能  
---|---  
[Generators](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_prop_test/unittest_prop_test_package_api/unittest_prop_test_package_classes.html#class-generators)| 包含辅助函数的类，可帮助开发人员编写自己的生成器。  
[LazySeq\<T\>](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_prop_test/unittest_prop_test_package_api/unittest_prop_test_package_classes.html#class-lazyseqt)| 延迟计算的 T 类型值序列。用于在迭代时计算和记忆值。  
[ShrinkHelpers](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_prop_test/unittest_prop_test_package_api/unittest_prop_test_package_classes.html#class-shrinkhelpers)| 提供对元组实现缩减迭代器的方法。  
  
### 结构体

结构体名| 功能  
---|---  
[Function0Wrapper](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_prop_test/unittest_prop_test_package_api/unittest_prop_test_package_structs.html#struct-function0wrapperr)| 将闭包封装为结构体。  
[TupleWrapper2](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_prop_test/unittest_prop_test_package_api/unittest_prop_test_package_structs.html#struct-tuplewrapper2t0-t1)| 将闭包封装为结构体。闭包带两个参数。  
[TupleWrapper3](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_prop_test/unittest_prop_test_package_api/unittest_prop_test_package_structs.html#struct-tuplewrapper3t0-t1-t2)| 将闭包封装为结构体。闭包带三个参数。  
[TupleWrapper4](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_prop_test/unittest_prop_test_package_api/unittest_prop_test_package_structs.html#struct-tuplewrapper4t0-t1-t2-t3)| 将闭包封装为结构体。闭包带四个参数。  
[TupleWrapper5](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_prop_test/unittest_prop_test_package_api/unittest_prop_test_package_structs.html#struct-tuplewrapper5t0-t1-t2-t3-t4)| 将闭包封装为结构体。闭包带五个参数。