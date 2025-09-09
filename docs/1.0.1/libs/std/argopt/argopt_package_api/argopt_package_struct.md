
# 结构体

## struct ParsedArguments
    
    __
    
    public struct ParsedArguments {
    }
    
功能：存储参数解析的结果。

### prop nonOptions
    
    __
    
    public prop nonOptions: Array\<String\>
    
功能：存储参数解析得到的非选项。

类型：[Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)>

### prop options
    
    __
    
    public prop options: ReadOnlyMap\<String, String\>
    
功能：存储参数解析得到的选项。

类型：[ReadOnlyMap](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/collection/collection_package_api/collection_package_interface.html#interface-readonlymapk-v)