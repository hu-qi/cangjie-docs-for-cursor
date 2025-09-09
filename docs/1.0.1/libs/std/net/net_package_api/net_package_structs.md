
# 结构体

## struct AddressFamily
    
    __
    
    public struct AddressFamily <: ToString & Equatable\<AddressFamily\> {
        public static const INET = AddressFamily("INET", 2)
        public static const INET6: AddressFamily
        public static const NETLINK: AddressFamily
        public static const UNIX = AddressFamily("UNIX", 1)
        public static const UNSPEC = AddressFamily("UNSPEC", 0)
        public let name: String
        public let value: Int32
        public const init(name: String, value: UInt16)
    }
    
功能：[AddressFamily](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-addressfamily) 地址族用于指示 `Socket` 的寻址方案，常用的有 `INET` / `INET6` / `UNIX` 地址族。地址族标识符最初在 [RFC 2453](https://datatracker.ietf.org/doc/html/rfc2453) 中定义。

父类型：

  * [ToString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-tostring)
  * [Equatable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-equatablet)\<AddressFamily\>

### static const INET
    
    __
    
    public static const INET = AddressFamily("INET", 2)
    
功能：IPv4 地址族。

类型：[AddressFamily](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-addressfamily)

### static const INET6
    
    __
    
    public static const INET6: AddressFamily
    
功能：IPv6 地址族。不同系统下的值分别为：

  * macOS: AddressFamily\("INET6", 30\)
  * Windows: AddressFamily\("INET6", 23\)
  * 其他情况：AddressFamily\("INET6", 10\)

类型：[AddressFamily](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-addressfamily)

### static const NETLINK
    
    __
    
    public static const NETLINK: AddressFamily
    
功能：NetLink 地址族，仅 Linux 下支持，其值为：

  * Linux: AddressFamily\("NETLINK", 16\)

类型：[AddressFamily](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-addressfamily)

### static const UNIX
    
    __
    
    public static const UNIX = AddressFamily("UNIX", 1)
    
功能：unix domain socket 地址族。

类型：[AddressFamily](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-addressfamily)

### static const UNSPEC
    
    __
    
    public static const UNSPEC = AddressFamily("UNSPEC", 0)
    
功能：未指定的地址族。

类型：[AddressFamily](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-addressfamily)

### let name: String
    
    __
    
    public let name: String
    
功能：地址族名。

类型：[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### let value: UInt16
    
    __
    
    public let value: UInt16
    
功能：地址族值。

类型：[UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16)

### init\(String, UInt16\)
    
    __
    
    public const init(name: String, value: UInt16)
    
功能：常量构造函数，创建 [AddressFamily](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-addressfamily) 对象。

参数：

  * name: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 地址族名。
  * value: [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 地址族值。

### func toString\(\)
    
    __
    
    public func toString(): String
    
功能：获取地址族对应的名称。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 当前地址族的名称。

### operator func ==\(AddressFamily\)
    
    __
    
    public operator func ==(rhs: AddressFamily): Bool
    
功能：比较地址族值是否相等。

参数：

  * rhs: [AddressFamily](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-addressfamily) \- 参与比较的 [AddressFamily](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-addressfamily) 对象。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果两个 [AddressFamily](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-addressfamily) 对象相等，则返回 `true`；否则，返回 `false`。

### operator func \!=\(AddressFamily\)
    
    __
    
    public operator func !=(rhs: AddressFamily): Bool
    
功能：比较地址族值是否不等。

参数：

  * rhs: [AddressFamily](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-addressfamily) \- 参与比较的 [AddressFamily](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-addressfamily) 对象。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果两个 [AddressFamily](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-addressfamily) 对象不等，则返回 `true`；否则，返回 `false`。

## struct OptionLevel
    
    __
    
    public struct OptionLevel {
        public static const ICMP: Int32 = 1
        public static const IP: Int32 = 0
        public static const RAW: Int32 = 255
        public static const SOCKET: Int32
        public static const TCP: Int32 = 6
        public static const UDP: Int32 = 17
    }
    
功能：提供了常用的套接字选项级别。

### static const ICMP
    
    __
    
    public static const ICMP: Int32 = 1
    
功能：控制 `ICMP` 协议行为的套接字选项级别。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

### static const IP
    
    __
    
    public static const IP: Int32 = 0
    
功能：控制 [IP]() 协议行为的套接字选项级别。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

### static const RAW
    
    __
    
    public static const RAW: Int32 = 255
    
功能：控制 `RAW` 协议行为的套接字选项级别。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

### static const SOCKET
    
    __
    
    public static const SOCKET: Int32
    
功能：控制基本套接字行为的套接字选项级别。不同系统下的值分别为：

  * macOS: 0xFFFF
  * Windows: 0xFFFF
  * 其他情况：1

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

### static const TCP
    
    __
    
    public static const TCP: Int32 = 6
    
功能：控制 `TCP` 协议行为的套接字选项级别。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

### static const UDP
    
    __
    
    public static const UDP: Int32 = 17
    
功能：控制 `UDP` 协议行为的套接字选项级别。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## struct OptionName
    
    __
    
    public struct OptionName {
        public static const IP_HDRINCL: Int32
        public static const IP_TOS: Int32
        public static const IP_TTL: Int32
        public static const SO_ACCEPTCONN: Int32
        public static const SO_BROADCAST: Int32
        public static const SO_DEBUG: Int32 = 0x0001
        public static const SO_DONTROUTE: Int32
        public static const SO_ERROR: Int32
        public static const SO_KEEPALIVE: Int32
        public static const SO_LINGER: Int32
        public static const SO_OOBINLINE: Int32
        public static const SO_RCVBUF: Int32
        public static const SO_RCVTIMEO: Int32
        public static const SO_REUSEADDR: Int32
        public static const SO_SNDBUF: Int32
        public static const SO_SNDTIMEO: Int32
        public static const TCP_KEEPCNT: Int32
        public static const TCP_KEEPIDLE: Int32
        public static const TCP_KEEPINTVL: Int32
        public static const TCP_NODELAY: Int32 = 0x0001
    }
    
功能：提供了常用的套接字选项。

### static const IP\_HDRINCL
    
    __
    
    public static const IP_HDRINCL: Int32
    
功能：用于在发送数据包时指定 [IP]() 头部是否由应用程序提供的套接字选项。不同系统下的值分别为：

  * macOS: 0x0002
  * Windows: 0x0002
  * 其他情况：0x0003

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

### static const IP\_TOS
    
    __
    
    public static const IP_TOS: Int32
    
功能：用于指定数据包服务类型和优先级的套接字选项。不同系统下的值分别为：

  * macOS: 0x0003
  * Windows: 0x0003
  * 其他情况：0x0001

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

### static const IP\_TTL
    
    __
    
    public static const IP_TTL: Int32
    
功能：用于限制[IP]()数据包在网络中传输最大跳数的套接字选项。不同系统下的值分别为：

  * macOS: 0x0004
  * Windows: 0x0004
  * 其他情况：0x0002

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

### static const SO\_ACCEPTCONN
    
    __
    
    public static const SO_ACCEPTCONN: Int32
    
功能：用于查询套接字是否处于监听状态的套接字选项。不同系统下的值分别为：

  * macOS: 0x0002
  * Windows: 0x0002
  * 其他情况：0x001E

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

### static const SO\_BROADCAST
    
    __
    
    public static const SO_BROADCAST: Int32
    
功能：用于设置套接字是否允许发送广播消息的套接字选项。不同系统下的值分别为：

  * macOS: 0x0020
  * Windows: 0x0020
  * 其他情况：0x0006

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

### static const SO\_DEBUG
    
    __
    
    public static const SO_DEBUG: Int32 = 0x0001
    
功能：用于启用或禁用调试模式的套接字选项。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

### static const SO\_DONTROUTE
    
    __
    
    public static const SO_DONTROUTE: Int32
    
功能：用于在连接套接字时，不路由套接字数据包的套接字选项。不同系统下的值分别为：

  * macOS: 0x0010
  * Windows: 0x0010
  * 其他情况：0x0005

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

### static const SO\_ERROR
    
    __
    
    public static const SO_ERROR: Int32
    
功能：获取和清除套接字上错误状态的套接字选项。不同系统下的值分别为：

  * macOS: 0x1007
  * Windows: 0x1007
  * 其他情况：0x0004

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

### static const SO\_KEEPALIVE
    
    __
    
    public static const SO_KEEPALIVE: Int32
    
功能：用于检测 `TCP` 连接是否仍然处于活动状态的套接字选项。不同系统下的值分别为：

  * macOS: 0x0008
  * Windows: 0x0008
  * 其他情况：0x0009

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

### static const SO\_LINGER
    
    __
    
    public static const SO_LINGER: Int32
    
功能：用于设置套接字关闭时行为的套接字选项。不同系统下的值分别为：

  * macOS: 0x0080
  * Windows: 0x0080
  * 其他情况：0x000D

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

### static const SO\_OOBINLINE
    
    __
    
    public static const SO_OOBINLINE: Int32
    
功能：用于控制接收带外数据方式的套接字选项。不同系统下的值分别为：

  * macOS: 0x0100
  * Windows: 0x0100
  * 其他情况：0x000A

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

### static const SO\_RCVBUF
    
    __
    
    public static const SO_RCVBUF: Int32
    
功能：用于设置套接字接收缓冲区大小的套接字选项。不同系统下的值分别为：

  * macOS: 0x1002
  * Windows: 0x1002
  * 其他情况：0x0008

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

### static const SO\_RCVTIMEO
    
    __
    
    public static const SO_RCVTIMEO: Int32
    
功能：用于设置套接字接收数据超时时间的套接字选项。不同系统下的值分别为：

  * macOS: 0x1006
  * Windows: 0x1006
  * 其他情况：0x0014

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

### static const SO\_REUSEADDR
    
    __
    
    public static const SO_REUSEADDR: Int32
    
功能：用于在套接字关闭后立即释放其绑定端口，以便其他套接字可以立即绑定该端口的套接字选项。不同系统下的值分别为：

  * macOS: 0x0004
  * Windows: 0x0004
  * 其他情况：0x0002

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

### static const SO\_SNDBUF
    
    __
    
    public static const SO_SNDBUF: Int32
    
功能：用于设置套接字发送缓冲区大小的套接字选项。不同系统下的值分别为：

  * macOS: 0x1001
  * Windows: 0x1001
  * 其他情况：0x0007

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

### static const SO\_SNDTIMEO
    
    __
    
    public static const SO_SNDTIMEO: Int32
    
功能：用于设置套接字发送数据超时时间的套接字选项。不同系统下的值分别为：

  * macOS: 0x1005
  * Windows: 0x1005
  * 其他情况：0x0015

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

### static const TCP\_KEEPCNT
    
    __
    
    public static const TCP_KEEPCNT: Int32
    
功能：用于控制 TCP 连接中发送保持存活探测报文次数的套接字选项。不同系统下的值分别为：

  * macOS: 0x0102
  * Windows: 0x0010
  * 其他情况：0x0006

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

### static const TCP\_KEEPIDLE
    
    __
    
    public static const TCP_KEEPIDLE: Int32
    
功能：用于设置在没有收到对端确认的情况下，`TCP` 保持连接最大次数的套接字选项。不同系统下的值分别为：

  * macOS: 0x0010
  * Windows: 0x0003
  * 其他情况：0x0004

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

### static const TCP\_KEEPINTVL
    
    __
    
    public static const TCP_KEEPINTVL: Int32
    
功能：用于设置 `TCP` 保持连接时发送探测报文时间间隔的套接字选项。不同系统下的值分别为：

  * macOS: 0x0101
  * Windows: 0x0011
  * 其他情况：0x0005

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

### static const TCP\_NODELAY
    
    __
    
    public static const TCP_NODELAY: Int32 = 0x0001
    
功能：用于控制 `TCP` 协议延迟行为的套接字选项。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## struct ProtocolType
    
    __
    
    public struct ProtocolType <: Equatable\<ProtocolType\> & ToString & Hashable {
        public static let ICMP: ProtocolType = ProtocolType(1)
        public static let IPV4: ProtocolType = ProtocolType(4)
        public static let IPV6: ProtocolType = ProtocolType(41)
        public static let RAW: ProtocolType = ProtocolType(255)
        public static let TCP: ProtocolType = ProtocolType(6)
        public static let UDP: ProtocolType = ProtocolType(17)
        public static let Unspecified: ProtocolType = ProtocolType(0)
        public init(protocol: Int32)
    }
    
功能：提供了常用的套接字协议，以及通过指定 [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) 值来构建套接字协议的功能。

父类型：

  * [Equatable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-equatablet)\<ProtocolType\>
  * [ToString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-tostring)
  * [Hashable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-hashable)

### static let ICMP
    
    __
    
    public static let ICMP: ProtocolType = ProtocolType(1)
    
功能：指定协议类型为 `ICMP`。

类型：[ProtocolType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-protocoltype)

### static let IPV4
    
    __
    
    public static let IPV4: ProtocolType = ProtocolType(4)
    
功能：指定协议类型为 `IPv4` 。

类型：[ProtocolType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-protocoltype)

### static let IPV6
    
    __
    
    public static let IPV6: ProtocolType = ProtocolType(41)
    
功能：指定协议类型为 `IPv6`。

类型：[ProtocolType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-protocoltype)

### static let RAW
    
    __
    
    public static let RAW: ProtocolType = ProtocolType(255)
    
功能：指定协议类型为 `RAW`。

类型：[ProtocolType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-protocoltype)

### static let TCP
    
    __
    
    public static let TCP: ProtocolType = ProtocolType(6)
    
功能：指定协议类型为 `TCP`。

类型：[ProtocolType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-protocoltype)

### static let UDP
    
    __
    
    public static let UDP: ProtocolType = ProtocolType(17)
    
功能：指定协议类型为 `UDP`。

类型：[ProtocolType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-protocoltype)

### static let Unspecified
    
    __
    
    public static let Unspecified: ProtocolType = ProtocolType(0)
    
功能：不指定协议类型。

类型：[ProtocolType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-protocoltype)

### init\(Int32\)
    
    __
    
    public init(protocol: Int32)
    
功能：通过指定套接字协议值创建协议。

参数：

  * protocol: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 套接字协议值。

### func hashCode\(\)
    
    __
    
    public func hashCode(): Int64
    
功能：返回当前 [ProtocolType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-protocoltype) 实例的哈希值。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 当前 [ProtocolType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-protocoltype) 实例的哈希值。

### func toString\(\)
    
    __
    
    public func toString(): String
    
功能：返回当前 [ProtocolType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-protocoltype) 实例的字符串表示。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 当前 [ProtocolType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-protocoltype) 实例的字符串表示。

### operator func \!=\(ProtocolType\)
    
    __
    
    public operator func !=(r: ProtocolType): Bool
    
功能：判断两个 [ProtocolType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-protocoltype) 实例是否不等。

参数：

  * r: [ProtocolType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-protocoltype) \- 参与比较的 [ProtocolType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-protocoltype) 实例。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 当二者代表的 [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) 值不等时，返回 `true`；否则，返回 `false`。

### operator func ==\(ProtocolType\)
    
    __
    
    public operator func ==(r: ProtocolType): Bool
    
功能：判断两个 [ProtocolType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-protocoltype) 实例是否相等。

参数：

  * r: [ProtocolType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-protocoltype) \- 参与比较的 [ProtocolType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-protocoltype) 实例。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 当二者代表的 [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) 值相等时，返回 `true`；否则，返回 `false`。

## struct RawAddress
    
    __
    
    public struct RawAddress {
        public init(addr: Array\<Byte\>)
    }
    
功能：提供了 [RawSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-rawsocket) 的通信地址创建和获取功能。

### prop addr
    
    __
    
    public prop addr: Array\<Byte\>
    
功能：获取地址。

类型：[Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)>

### init\(Array\<Byte\>\)
    
    __
    
    public init(addr: Array\<Byte\>)
    
功能：根据字节数组创建地址。

参数：

  * addr: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 存储地址的字节数组。

## struct SocketDomain
    
    __
    
    public struct SocketDomain <: Equatable\<SocketDomain\> & ToString & Hashable {
        public static let IPV4: SocketDomain = SocketDomain(2)
        public static let IPV6: SocketDomain
        public static let NETLINK: SocketDomain = SocketDomain(16)
        public static let PACKET: SocketDomain = SocketDomain(17)
        public static let UNIX: SocketDomain
        public init(domain: Int32)
    }
    
功能：提供了常用的套接字通信域，以及通过指定 [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) 值来构建套接字通信域的功能。

父类型：

  * [Equatable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-equatablet)\<SocketDomain\>
  * [ToString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-tostring)
  * [Hashable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-hashable)

### static let IPV4
    
    __
    
    public static let IPV4: SocketDomain = SocketDomain(2)
    
功能：`IPv4` 通信域。

类型：[SocketDomain](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-socketdomain)

### static let IPV6
    
    __
    
    public static let IPV6: SocketDomain
    
功能：`IPv6` 通信域。不同系统下的值分别为：

  * macOS: SocketDomain\(30\)
  * Windows: SocketDomain\(23\)
  * 其他情况：SocketDomain\(10\)

类型：[SocketDomain](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-socketdomain)

### static let NETLINK
    
    __
    
    public static let NETLINK: SocketDomain = SocketDomain(16)
    
功能：内核和用户空间进程之间通信。

> **注意：**
> 
>   * 该常量在 Windows 和 macOS 平台不提供。
> 

类型：[SocketDomain](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-socketdomain)

### static let PACKET
    
    __
    
    public static let PACKET: SocketDomain = SocketDomain(17)
    
功能：允许用户空间程序直接访问网络数据包。

> **注意：**
> 
>   * 该常量在 Windows 和 macOS 平台不提供。
> 

类型：[SocketDomain](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-socketdomain)

### static let UNIX
    
    __
    
    public static let UNIX: SocketDomain
    
功能：本机通信。不同系统下的值分别为：

  * Windows: SocketDomain\(0\)
  * 其他情况：SocketDomain\(1\)

类型：[SocketDomain](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-socketdomain)

### init\(Int32\)
    
    __
    
    public init(domain: Int32)
    
功能：根据指定通信域值创建套接字通信域。

参数：

  * domain: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 通信域值。

### func hashCode\(\)
    
    __
    
    public func hashCode(): Int64
    
功能：返回当前 [SocketDomain](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-socketdomain) 实例的哈希值。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 当前 [SocketDomain](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-socketdomain) 实例的哈希值。

### func toString\(\)
    
    __
    
    public func toString(): String
    
功能：返回当前 [SocketDomain](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-socketdomain) 实例的字符串表示。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 当前 [SocketDomain](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-socketdomain) 实例的字符串表示。

### operator func \!=\(SocketDomain\)
    
    __
    
    public operator func !=(r: SocketDomain): Bool
    
功能：比较两个 [SocketDomain](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-socketdomain) 实例是否不等。

参数：

  * r: [SocketDomain](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-socketdomain) \- 参与比较的 [SocketDomain](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-socketdomain) 实例。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 当二者代表的 [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) 值不等时，返回 `true`；否则，返回 `false`。

### operator func ==\(SocketDomain\)
    
    __
    
    public operator func ==(r: SocketDomain): Bool
    
功能：比较两个 [SocketDomain](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-socketdomain) 实例是否相等。

参数：

  * r: [SocketDomain](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-socketdomain) \- 参与比较的 [SocketDomain](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-socketdomain) 实例。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 当二者代表的 [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) 值相等时，返回 `true`；否则，返回 `false`。

## struct SocketKeepAliveConfig
    
    __
    
    public struct SocketKeepAliveConfig <: ToString & Equatable\<SocketKeepAliveConfig\> {
        public let count: UInt32
        public let idle: Duration
        public let interval: Duration
        public init(idle!: Duration = Duration.second * 45, interval!: Duration = Duration.second * 5, count!: UInt32 = 5)
    }
    
功能：TCP KeepAlive 属性配置。

父类型：

  * [ToString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-tostring)
  * [Equatable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-equatablet)\<SocketKeepAliveConfig\>

### let count
    
    __
    
    public let count: UInt32
    
功能：查询连接是否失效的报文个数。

类型：[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32)

### let idle
    
    __
    
    public let idle: Duration
    
功能：允许连接空闲的时长，空闲超长将关闭连接。

类型：[Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration)

### let interval
    
    __
    
    public let interval: Duration
    
功能：保活报文发送周期。

类型：[Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration)

### init\(Duration, Duration, UInt32\)
    
    __
    
    public init(idle!: Duration = Duration.second * 45, interval!: Duration = Duration.second * 5, count!: UInt32 = 5)
    
功能：初始化 [SocketKeepAliveConfig](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-socketkeepaliveconfig) 实例对象。

参数：

  * idle\!: [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) \- 允许空闲的时长，默认 45 秒。
  * interval\!: [Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) \- 保活报文发送周期，默认 45 秒。
  * count\!: [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 查询连接是否失效的报文个数， 默认 5 个。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当配置为空闲状态或设置间隔小于 0 时，抛出异常。

### func toString\(\)
    
    __
    
    public override func toString(): String
    
功能：将 TCP KeepAlive 属性配置转换为字符串。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 转换后的字符串。

### operator func \!=\(SocketKeepAliveConfig\)
    
    __
    
    public override operator func !=(other: SocketKeepAliveConfig): Bool
    
功能：判断两个 [SocketKeepAliveConfig](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-socketkeepaliveconfig) 实例是否不等。

参数：

  * other: [SocketKeepAliveConfig](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-socketkeepaliveconfig) \- 参与比较的 [SocketKeepAliveConfig](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-socketkeepaliveconfig) 实例。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果不等，则返回 `true`；否则，返回 `false`。

### operator func ==\(SocketKeepAliveConfig\)
    
    __
    
    public override operator func ==(other: SocketKeepAliveConfig): Bool
    
功能：判断两个 [SocketKeepAliveConfig](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-socketkeepaliveconfig) 实例是否相等。

参数：

  * other: [SocketKeepAliveConfig](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-socketkeepaliveconfig) \- 参与比较的 [SocketKeepAliveConfig](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-socketkeepaliveconfig) 实例。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果相等，则返回 `true`；否则，返回 `false`。

## struct SocketOptions
    
    __
    
    public struct SocketOptions {
        public static const IPPROTO_TCP: Int32 = 6
        public static const IPPROTO_UDP: Int32 = 17
        public static const SOL_SOCKET: Int32
        public static const SO_BINDTODEVICE: Int32
        public static const SO_KEEPALIVE: Int32
        public static const SO_LINGER: Int32
        public static const SO_RCVBUF: Int32
        public static const SO_REUSEADDR: Int32
        public static const SO_REUSEPORT: Int32
        public static const SO_SNDBUF: Int32
        public static const TCP_NODELAY: Int32 = 0x0001
        public static const TCP_QUICKACK: Int32
    }
    
功能：[SocketOptions](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-socketoptions) 存储了设置套接字选项的一些参数常量方便后续调用。

### const IPPROTO\_TCP \(deprecated\)
    
    __
    
    public static const IPPROTO_TCP: Int32 = 6
    
功能：常数，用于将套接字选项的 `level` 层级设为 `IPPROTO_TCP`。

> **注意：**
> 
> 未来版本即将废弃不再使用，使用 OptionLevel.TCP 替代。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

### const IPPROTO\_UDP \(deprecated\)
    
    __
    
    public static const IPPROTO_UDP: Int32 = 17
    
功能：常数，用于将套接字选项的 `level` 层级设为 `IPPROTO_UDP`。

> **注意：**
> 
> 未来版本即将废弃不再使用，使用 OptionLevel.UDP 替代。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

### const SOL\_SOCKET \(deprecated\)
    
    __
    
    public static const SOL_SOCKET: Int32
    
功能：常数，用于将套接字选项的 `level` 层级设为 `SOL_SOCKET`。不同系统下的值分别为：

  * macOS: 0xFFFF
  * Windows: 0xFFFF
  * 其他情况：1

> **注意：**
> 
> 未来版本即将废弃不再使用，使用 OptionLevel.SOCKET 替代。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

### const SO\_BINDTODEVICE
    
    __
    
    public static const SO_BINDTODEVICE: Int32
    
功能：常数，用于将套接字选项的 `optname` 设为 `SO_BINDTODEVICE`。不同系统下的值分别为：

  * macOS: 0xFFFF
  * Windows: 0xFFFF
  * 其他情况：0x0019

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

### const SO\_KEEPALIVE
    
    __
    
    public static const SO_KEEPALIVE: Int32
    
功能：常数，用于将套接字选项的 `optname` 设为 `SO_KEEPALIVE`。不同系统下的值分别为：

  * macOS: 0x0008
  * Windows: 0x0008
  * 其他情况：0x0009

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

### const SO\_LINGER
    
    __
    
    public static const SO_LINGER: Int32
    
功能：常数，用于将套接字选项的 `optname` 设为 `SO_LINGER`。不同系统下的值分别为：

  * macOS: 0x0080
  * Windows: 0x0080
  * 其他情况：0x000D

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

### const SO\_RCVBUF
    
    __
    
    public static const SO_RCVBUF: Int32
    
功能：常数，用于将套接字选项的 `optname` 设为 `SO_RCVBUF`。不同系统下的值分别为：

  * macOS: 0x1002
  * Windows: 0x1002
  * 其他情况：0x0008

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

### const SO\_REUSEADDR
    
    __
    
    public static const SO_REUSEADDR: Int32
    
功能：常数，用于将套接字选项的 `optname` 设为 `SO_REUSEADDR`。不同系统下的值分别为：

  * macOS: 0x0004
  * Windows: 0x0004
  * 其他情况：0x0002

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

### const SO\_REUSEPORT
    
    __
    
    public static const SO_REUSEPORT: Int32
    
功能：常数，用于将套接字选项的 `optname` 设为 `SO_REUSEPORT`。不同系统下的值分别为：

  * macOS: 0x0200
  * Windows: 0xFFFF
  * 其他情况：0x000F

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

### const SO\_SNDBUF
    
    __
    
    public static const SO_SNDBUF: Int32
    
功能：常数，用于将套接字选项的 `optname` 设为 `SO_SNDBUF`。不同系统下的值分别为：

  * macOS: 0x1001
  * Windows: 0x1001
  * 其他情况：0x0007

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

### const TCP\_NODELAY
    
    __
    
    public static const TCP_NODELAY: Int32 = 0x0001
    
功能：常数，用于将套接字选项的 `optname` 设为 `TCP_NODELAY`。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

### const TCP\_QUICKACK
    
    __
    
    public static const TCP_QUICKACK: Int32
    
功能：常数，用于将套接字选项的 `optname` 设为 `TCP_QUICKACK`。不同系统下的值分别为：

  * macOS: 0xFFFF
  * Windows: 0xFFFF
  * 其他情况：0x000C

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## struct SocketType
    
    __
    
    public struct SocketType <: Equatable\<SocketType\> & ToString & Hashable {
        public static let DATAGRAM: SocketType = SocketType(2)
        public static let RAW: SocketType = SocketType(3)
        public static let SEQPACKET: SocketType = SocketType(5)
        public static let STREAM: SocketType = SocketType(1)
        public init(`type`: Int32)
    }
    
功能：提供了常用的套接字类型，以及通过指定 [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) 值来构建套接字类型的功能。

父类型：

  * [Equatable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-equatablet)\<SocketType\>
  * [ToString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-tostring)
  * [Hashable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-hashable)

### static let DATAGRAM
    
    __
    
    public static let DATAGRAM: SocketType = SocketType(2)
    
功能：数据报套接字类型。

类型：[SocketType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-sockettype)

### static let RAW
    
    __
    
    public static let RAW: SocketType = SocketType(3)
    
功能：原始套接字类型。

类型：[SocketType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-sockettype)

### static let SEQPACKET
    
    __
    
    public static let SEQPACKET: SocketType = SocketType(5)
    
功能：有序数据包套接字类型。

类型：[SocketType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-sockettype)

### static let STREAM
    
    __
    
    public static let STREAM: SocketType = SocketType(1)
    
功能：流式套接字类型。

类型：[SocketType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-sockettype)

### init\(Int32\)
    
    __
    
    public init(`type`: Int32)
    
功能：通过指定套接字类型值创建套接字类型。

参数：

  * \`type\`: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 套接字类型值。

### func hashCode\(\)
    
    __
    
    public func hashCode(): Int64
    
功能：返回当前 [SocketType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-sockettype) 实例的哈希值。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 当前 [SocketType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-sockettype) 实例的哈希值。

### func toString\(\)
    
    __
    
    public func toString(): String
    
功能：返回当前 [SocketType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-sockettype) 实例的字符串表示。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 当前 [SocketType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-sockettype) 实例的字符串表示。

### operator func \!=\(SocketType\)
    
    __
    
    public operator func !=(r: SocketType): Bool
    
功能：判断两个 [SocketType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-sockettype) 实例是否不等。

参数：

  * r: [SocketType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-sockettype) \- 参与比较的 [SocketType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-sockettype) 实例。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 当二者代表的 [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) 值不等时，返回 `true`；否则，返回 `false`。

### operator func ==\(SocketType\)
    
    __
    
    public operator func ==(r: SocketType): Bool
    
功能：判断两个 [SocketType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-sockettype) 实例是否相等。

参数：

  * r: [SocketType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-sockettype) \- 参与比较的 [SocketType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-sockettype) 实例。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 当二者代表的 [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) 值相等时，返回 `true`；否则，返回 `false`。