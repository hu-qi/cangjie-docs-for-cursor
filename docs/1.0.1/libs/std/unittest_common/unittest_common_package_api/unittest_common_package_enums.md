
# 枚举

## enum Color
    
    __
    
    public enum Color <: Equatable\<Color\> {
        | RED
        | GREEN
        | YELLOW
        | BLUE
        | CYAN
        | MAGENTA
        | GRAY
        | DEFAULT_COLOR;
    }
    
功能：指定颜色。

父类型：

  * [Equatable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-equatablet)\<Color\>

### RED
    
    __
    
    RED
    
功能：红色。

### GREEN
    
    __
    
    GREEN
    
功能：绿色。

### YELLOW
    
    __
    
    YELLOW
    
功能：黄色。

### BLUE
    
    __
    
    BLUE
    
功能：蓝色。

### CYAN
    
    __
    
    CYAN
    
功能：青色。

### MAGENTA
    
    __
    
    MAGENTA
    
功能：品红色。

### GRAY
    
    __
    
    GRAY
    
功能：灰色。

### DEFAULT\_COLOR
    
    __
    
    DEFAULT_COLOR
    
功能：默认色。

### operator func ==\(Color\)
    
    __
    
    public operator func ==(that: Color): Bool
    
功能：判断颜色是否相等。

参数：

  * that: Color \- 被对比的颜色。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 相等时返回 `true` ，否则返回 `false` 。

### operator func \!=\(Color\)
    
    __
    
    public operator func !=(that: Color): Bool
    
功能：判断颜色是否不相等。

参数：

  * that: Color \- 被对比的颜色。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 不相等时返回 `true` ，否则返回 `false` 。

## enum OptionValidity
    
    __
    
    public enum OptionValidity {
        | UnknownOptionType
        | InvalidOption(String)
        | ValidOption(ConfigurationKey)
    }
    
功能：代表选项值验证的结果的枚举值。

### UnknownOptionType
    
    __
    
    UnknownOptionType
    
功能: 未知状态，仅在验证出现内部错误时出现。

### InvalidOption\(String\)
    
    __
    
    InvalidOption (String)
    
功能: 选项验证无效，包含无效的原因。

### ValidOption\(ConfigurationKey\)
    
    __
    
    ValidOption (ConfigurationKey)
    
功能: 选项值有效，包含选项值在配置项中对应键值对的键名。