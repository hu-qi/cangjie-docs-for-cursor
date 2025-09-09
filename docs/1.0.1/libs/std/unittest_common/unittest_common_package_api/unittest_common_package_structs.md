
# 结构体

## struct OptionInfo
    
    __
    
    public struct OptionInfo {
        public let description: ?String
        public let name: String
        public let types!: HashMap<String, ?String> = HashMap()
        public let userDefined: Bool
    }
    
功能: 打印帮助页面时可以使用的选项的信息。

### let description
    
    __
    
    public let description: ?String
    
功能：选项描述信息。

类型：?[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### let name
    
    __
    
    public let name: String
    
功能：选项名称。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### let types
    
    __
    
    public let types!: HashMap<String, ?String> = HashMap()
    
功能：从选项类型名称映射到值的含义。

类型： HashMap<[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string), ?[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)>

### let userDefined
    
    __
    
    public let userDefined: Bool
    
功能：选项是否已被定义。

类型：[Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool)