
# 宏

## `@Derive` 宏

功能：`Derive` 是一个核心宏，其仅可修饰结构体、类或枚举等声明，对被修饰的声明[自动扩展接口](./libs/std/deriving/deriving_samples/deriving_user_guide.md)。

## `@DeriveExclude` 宏

功能：`DeriveExclude` 可为已被 @Derive 宏修饰的声明[排除不需要处理的字段](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/deriving/deriving_samples/deriving_user_guide.html#%E5%8C%85%E5%90%AB%E5%92%8C%E6%8E%92%E9%99%A4)，字段默认被 Deriving 处理。

## `@DeriveInclude` 宏

功能：`DeriveInclude` 可为已被 @Derive 宏修饰的声明[增加需要处理的属性](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/deriving/deriving_samples/deriving_user_guide.html#%E5%8C%85%E5%90%AB%E5%92%8C%E6%8E%92%E9%99%A4)，属性默认情况不会被 Deriving 处理。

## `@DeriveOrder` 宏

功能：`DeriveOrder` 可为已被 @Derive 宏修饰的声明[指定处理字段和属性的顺序](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/deriving/deriving_samples/deriving_user_guide.html#%E5%8F%98%E6%9B%B4%E9%A1%BA%E5%BA%8F)，通常对 `Comparable` 接口有意义。