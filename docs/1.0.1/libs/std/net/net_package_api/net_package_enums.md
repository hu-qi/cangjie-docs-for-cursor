
# 枚举

## enum SocketNet
    
    __
    
    public enum SocketNet <: ToString & Equatable\<SocketNet\> {
        | TCP
        | UDP
        | UNIX
    }
    
功能：传输层协议类型。

父类型：

  * [ToString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-tostring)
  * [Equatable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-equatablet)\<SocketNet\>

### TCP
    
    __
    
    TCP
    
功能：代表 TCP 协议。

### UDP
    
    __
    
    UDP
    
功能：代表 UDP 协议。

### UNIX
    
    __
    
    UNIX
    
功能：代表 UNIX 协议。

### func toString\(\)
    
    __
    
    public func toString(): String
    
功能：将枚举值转换为字符串。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 转换后的字符串。

### operator func \!=\(SocketNet\)
    
    __
    
    public operator func !=(that: SocketNet): Bool
    
功能：判断两个 [SocketNet](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_enums.html#enum-socketnet) 是否不相等。

参数：

  * that: [SocketNet](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_enums.html#enum-socketnet) \- 传入的 [SocketNet](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_enums.html#enum-socketnet)。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果不相等，则返回 `true`；否则，返回 `false`。

### operator func ==\(SocketNet\)
    
    __
    
    public operator func ==(that: SocketNet): Bool
    
功能：判断两个 [SocketNet](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_enums.html#enum-socketnet) 是否相等。

参数：

  * that: [SocketNet](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_enums.html#enum-socketnet) \- 的 [SocketNet](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_enums.html#enum-socketnet)。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果相等，则返回 `true`；否则，返回 `false`。