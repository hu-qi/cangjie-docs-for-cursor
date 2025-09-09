
# 类

## class IPAddress
    
    __
    
    abstract sealed class IPAddress <: ToString & Equatable\<IPAddress\> & Hashable & BigEndianOrder\<IPAddress\>
    
功能：此类表示Internet协议（IP）地址。互联网协议地址（IP地址）是一个数字标签，例如 _192.0.2.1_ 或 _2001:0db8:0000:0000:0000:ff00:0042:8329_ ，分配给连接到使用互联网协议进行通信的计算机网络设备。IP地址有两个主要功能：网络接口标识和位置寻址。

父类型：

  * [ToString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-tostring)
  * [Equatable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-equatablet)\<IPAddress\>
  * [Hashable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-hashable)
  * [BigEndianOrder](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/binary/binary_package_api/binary_package_interfaces.html#interface-bigendianordert)\<IPAddress\>

### prop hostName
    
    __
    
    public prop hostName: ?String
    
功能：返回当前 [IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress) 对象对应的主机名，如果无法成功解析，则为 None，当前暂未实现。

异常：

  * [UnsupportedException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-unsupportedexception) \- 如果不是合法字符串，抛出异常。

类型：?[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### prop size
    
    __
    
    public prop size: Int64
    
功能：获取 IP 地址对象字节长度。

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)

### static func parse\(String\)
    
    __
    
    public static func parse(s: String): IPAddress
    
功能：将 IP 协议的 Socket 字符串转换为 [IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress) 对象。

参数：

  * s: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- IP 协议的 Socket 字符串。

返回值：

  * [IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress) \- [IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress) 对象。

异常：

  * [IllegalFormatException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalformatexception) \- 如果不是合法字符串，抛出异常。

示例：
    
    __
    
    import std.net.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main () {
        let v4: IPAddress = IPAddress.parse("192.168.1.2")
        let v6: IPAddress = IPAddress.parse("2001:0250:1006:dff0:4913:2aa5:8075:7c10")
        @Assert(v4.toString(), "192.168.1.2")
        @Assert(v6.toString(), "2001:250:1006:dff0:4913:2aa5:8075:7c10")
    }
    
### static func readBigEndian\(Array\<Byte\>\)
    
    __
    
    public static func readBigEndian(buffer: Array\<Byte\>): IPAddress
    
功能：从字节数组中以大端序的方式读取一个 [IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress) 对象。

参数：

  * buffer: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 缓冲区，用于存放待读取的数据。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当 buffer 太小，不足以读出 [IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress) 值时，抛出异常。

返回值：

  * [IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress) \- [IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress) 对象。

示例：
    
    __
    
    import std.net.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main () {
        let bufferV4: Array\<Byte\> = [0xC0, 0xA8, 0x1, 0x2]
        let bufferV6: Array\<Byte\> = [0x20, 0x01, 0x02, 0x50, 0x10, 0x06, 0xdf, 0xf0, 0x49, 0x13, 0x2a, 0xa5, 0x80, 0x75, 0x7c, 0x10]
        let v4: IPAddress = IPAddress.readBigEndian(bufferV4)
        let v6: IPAddress = IPAddress.readBigEndian(bufferV6)
        @Assert(v4.toString(), "192.168.1.2")
        @Assert(v6.toString(), "2001:250:1006:dff0:4913:2aa5:8075:7c10")
    }
    
### static func resolve\(AddressFamily, String\)
    
    __
    
    public static func resolve(family: AddressFamily, domain: String): Array\<IPAddress\>
    
功能：解析域名，得到 [IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress) 列表。

参数：

  * family: [AddressFamily](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-addressfamily) \- 地址族。
  * domain: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 域名。

返回值：

  * [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress)> \- [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress)> 对象。

示例：
    
    __
    
    import std.net.*
    
    main () {
        let iplist: Array\<IPAddress\> = IPAddress.resolve(AddressFamily.UNSPEC, "localhost")
        println(iplist)
    }
    // may output: [127.0.0.1, ::1]
    
### static func resolve\(String\)
    
    __
    
    public static func resolve(domain: String): Array\<IPAddress\>
    
功能：解析域名，得到 [IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress) 列表。

参数：

  * domain: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 域名。

返回值：

  * [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress)> \- [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress)> 对象。

示例：
    
    __
    
    import std.net.*
    
    main () {
        let iplist: Array\<IPAddress\> = IPAddress.resolve("localhost")
        println(iplist)
    }
    // may output: [127.0.0.1, ::1]
    
### static func tryParse\(String\)
    
    __
    
    public static func tryParse(s: String): ?IPAddress
    
功能：将 IP 地址字符串转换为 [IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress) 对象，如果不是合法字符串，则返回 `None`。

参数：

  * s: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- IP 地址字符串。

返回值：

  * ?[IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress) \- ?[IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress) 对象。

示例：
    
    __
    
    import std.net.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main () {
        let v4: ?IPAddress = IPAddress.tryParse("192.168.1.2")
        let v6: ?IPAddress = IPAddress.tryParse("2001:0250:1006:dff0:4913:2aa5:8075:7c10")
        @Assert(v4.toString(), "Some(192.168.1.2)")
        @Assert(v6.toString(), "Some(2001:250:1006:dff0:4913:2aa5:8075:7c10)")
    }
    
### func getAddressBytes\(\)
    
    __
    
    public func getAddressBytes(): Array\<Byte\>
    
功能：返回此 [IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress) 对象的原始IP地址。

返回值：

  * [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 原始 IP 地址的 [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> 表示。

示例：
    
    __
    
    import std.net.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main () {
        let expectV4: Array\<Byte\> = [0xC0, 0xA8, 0x1, 0x2]
        let expectV6: Array\<Byte\> = [0x20, 0x01, 0x02, 0x50, 0x10, 0x06, 0xdf, 0xf0, 0x49, 0x13, 0x2a, 0xa5, 0x80, 0x75, 0x7c, 0x10]
        let v4: IPAddress = IPAddress.parse("192.168.1.2")
        let v6: IPAddress = IPAddress.parse("2001:0250:1006:dff0:4913:2aa5:8075:7c10")
        @Assert(v4.getAddressBytes(), expectV4)
        @Assert(v6.getAddressBytes(), expectV6)
    }
    
### func getPrefix\(UInt8\)
    
    __
    
    public open func getPrefix(prefixLen: UInt8): IPPrefix
    
功能：此 [IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress) 地址对象根据指定的网络前缀长度创建一个网络前缀对象。

参数：

  * prefixLen: [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 网络前缀长度。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 如果 prefixLen 大小超出范围，抛出异常。

返回值：

  * [IPPrefix](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipprefix) \- 网络前缀对象。

示例：
    
    __
    
    import std.net.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main () {
        let prefix: IPPrefix = IPAddress.parse("192.168.1.2").getPrefix(24)
        @Assert(prefix.toString(), "192.168.1.2/24")
    }
    
### func hashCode\(\)
    
    __
    
    public func hashCode(): Int64
    
功能：获取 `hashcode` 值。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- `hashcode` 值。

### func isGlobalUnicast\(\)
    
    __
    
    public open func isGlobalUnicast(): Bool
    
功能：判断此 [IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress) 对象是不是全局单播地址。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 返回 true 表示是全局单播地址，否则返回 false。

示例：
    
    __
    
    import std.net.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main () {
        // 2000::/3
        @Assert(IPAddress.parse("2001:250:1006:dff0:4913:2aa5:8075:7c10").isGlobalUnicast(), true)
    }
    
### func isIPv4\(\)
    
    __
    
    public func isIPv4(): Bool
    
功能：判断此 [IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress) 对象是不是 IPv4 地址。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 返回 true 表示是 IPv4 地址，否则返回 false。

示例：
    
    __
    
    import std.net.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main () {
        @Assert(IPAddress.parse("192.168.1.2").isIPv4(), true)
    }
    
### func isIPv6\(\)
    
    __
    
    public func isIPv6(): Bool
    
功能：判断此 [IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress) 对象是不是 IPv6 地址。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 返回 true 表示是 IPv6 地址，否则返回 false。

示例：
    
    __
    
    import std.net.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main () {
        @Assert(IPAddress.parse("2001:250:1006:dff0:4913:2aa5:8075:7c10").isIPv6(), true)
    }
    
### func isLinkLocal\(\)
    
    __
    
    public open func isLinkLocal(): Bool
    
功能：判断此 [IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress) 对象是不是链路本地地址。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 返回 true 表示是链路本地地址，否则返回 false。

示例：
    
    __
    
    import std.net.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main () {
        // 169.254.0.0 ~ 169.254.255.255
        @Assert(IPAddress.parse("169.254.0.1").isLinkLocal(), true)
        // fe80::/10
        @Assert(IPAddress.parse("fe80::1").isLinkLocal(), true)
    }
    
### func isLoopback\(\)
    
    __
    
    public open func isLoopback(): Bool
    
功能：判断此 [IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress) 对象是不是环回地址。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 返回 true 表示是环回地址，否则返回 false。

示例：
    
    __
    
    import std.net.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main () {
        @Assert(IPAddress.parse("127.0.0.1").isLoopback(), true)
        @Assert(IPAddress.parse("::1").isLoopback(), true)
    }
    
### func isMulticast\(\)
    
    __
    
    public open func isMulticast(): Bool
    
功能：判断此 [IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress) 对象是不是多播地址。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 返回 true 表示是多播地址，否则返回 false。

### func isPrivate\(\)
    
    __
    
    public open func isPrivate(): Bool
    
功能：判断此 [IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress) 对象是不是私有地址。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 返回 true 表示是私有地址，否则返回 false。

示例：
    
    __
    
    import std.net.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main () {
        // 10.0.0.0 ~ 10.255.255.255
        @Assert(IPAddress.parse("10.0.0.1").isPrivate(), true)
        // 172.16.0.0 ~ 172.31.255.255
        @Assert(IPAddress.parse("172.16.0.1").isPrivate(), true)
        // 192.168.0.0 ~192.168.255.255
        @Assert(IPAddress.parse("192.168.0.1").isPrivate(), true)
        // fc00::/7
        @Assert(IPAddress.parse("fc00::1").isPrivate(), true)
    }
    
### func isUnspecified\(\)
    
    __
    
    public open func isUnspecified(): Bool
    
功能：判断此 [IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress) 对象是不是“未指定” IP 地址。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 返回 true 表示是“未指定” IP 地址，否则返回 false。

示例：
    
    __
    
    import std.net.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main () {
        @Assert(IPAddress.parse("0.0.0.0").isUnspecified(), true)
        @Assert(IPAddress.parse("::").isUnspecified(), true)
    }
    
### func writeBigEndian\(Array\<Byte\>\)
    
    __
    
    public open func writeBigEndian(buffer: Array\<Byte\>): Int64
    
功能：返回此 [IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress) 对象以大端序的方式写入字节数组中。

参数：

  * buffer: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 缓冲区，用于存放待写入的数据。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当 buffer 太小，不足以写入 [IPv4Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) 或 [IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv6address) 值时，抛出异常。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 写入的数据的字节数。

示例：
    
    __
    
    import std.net.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main () {
        let buffer = Array\<Byte\>(128, repeat: 0)
        let expectV4: Array\<Byte\> = [0xC0, 0xA8, 0x1, 0x2]
        let expectV6: Array\<Byte\> = [0x20, 0x01, 0x02, 0x50, 0x10, 0x06, 0xdf, 0xf0, 0x49, 0x13, 0x2a, 0xa5, 0x80, 0x75, 0x7c, 0x10]
        let v4: IPAddress = IPAddress.parse("192.168.1.2")
        let v6: IPAddress = IPAddress.parse("2001:0250:1006:dff0:4913:2aa5:8075:7c10")
        var len = v4.writeBigEndian(buffer)
        @Assert(buffer[..len], expectV4)
        len = v6.writeBigEndian(buffer)
        @Assert(buffer[..len], expectV6)
    }
    
### operator func ==\(IPAddress\)
    
    __
    
    public operator func ==(rhs: IPAddress): Bool
    
功能：判断两个 [IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress) 对象是否相等。

参数：

  * rhs: [IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress) \- 参与比较的 [IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress) 对象。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果两个 [IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress) 对象相等，则返回 `true`；否则，返回 `false`。

### operator func \!=\(IPAddress\)
    
    __
    
    public operator func !=(rhs: IPAddress): Bool
    
功能：判断两个 [IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress) 对象是否不等。

参数：

  * rhs: [IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress) \- 参与比较的 [IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress) 对象。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果两个 [IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress) 对象不等，则返回 `true`；否则，返回 `false`。

## class IPPrefix
    
    __
    
    abstract sealed class IPPrefix <: Equatable\<IPPrefix\> & Hashable & ToString
    
功能：这个类表示一个 IP 前缀，即一个连续的 IP 地址块，边界为2的幂（也称为“IP子网”）。

一个 IP 前缀由两条信息指定：

  * 起始IP地址（IPv4或IPv6）。这是前缀的第一个IP地址。
  * 前缀长度。这通过指定IP地址中的位数来指定前缀的长度，从网络字节顺序中的最高有效位开始，对于前缀中的所有地址都是恒定的。

例如，前缀 `192.0.2.0/24` 涵盖从`192.0.2.0`到`192.0.2.255`（含）的`256`个`IPv4`地址，前缀`2001:db8:1:2`涵盖从`2001:db8:1:2::` 到 `2001:db8:1:2:ffff:ffff:ffff:ffff`（含）的`2^64`个`IPv6`地址。这个类的对象是不可变的。

父类型：

  * [Equatable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-equatablet)\<IPPrefix\>
  * [Hashable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-hashable)
  * [ToString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-tostring)

### prop address
    
    __
    
    public prop address: IPAddress
    
功能：获取构造当前 [IPPrefix](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipprefix) 对象时的 [IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress) 地址。

类型：[IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress)

### prop prefixLength
    
    __
    
    public prop prefixLength: UInt8
    
功能：获取前缀长度。

类型：[UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8)

### static func parse\(String\)
    
    __
    
    public static func parse(s: String): IPPrefix
    
功能：将 IP 协议的 Socket 字符串转换为 [IPPrefix](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipprefix) 对象。

参数：

  * s: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- IP 协议的 Socket 字符串。

异常：

  * [IllegalFormatException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalformatexception) \- 如果不是合法字符串，抛出异常。

返回值：

  * [IPPrefix](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipprefix) \- [IPPrefix](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipprefix) 对象。

示例：
    
    __
    
    import std.net.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main () {
        let v4: IPPrefix = IPPrefix.parse("192.168.1.2/24")
        let v6: IPPrefix = IPPrefix.parse("2001:0250:1006:dff0:4913:2aa5:8075:7c10/32")
        @Assert(v4.toString(), "192.168.1.2/24")
        @Assert(v6.toString(), "2001:250:1006:dff0:4913:2aa5:8075:7c10/32")
    }
    
### static func tryParse\(String\)
    
    __
    
    public static func tryParse(s: String): ?IPPrefix
    
功能：将 IP 协议的 Socket 字符串转换为 [IPPrefix](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipprefix) 对象，如果不是合法字符串，则返回 `None`。

参数：

  * s: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- IP 协议的 Socket 字符串。

返回值：

  * ?[IPPrefix](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipprefix) \- ?[IPPrefix](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipprefix) 对象。

示例：
    
    __
    
    import std.net.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main () {
        let v4: ?IPPrefix = IPPrefix.tryParse("192.168.1.2/24")
        let v6: ?IPPrefix = IPPrefix.tryParse("2001:0250:1006:dff0:4913:2aa5:8075:7c10/32")
        @Assert(v4.toString(), "Some(192.168.1.2/24)")
        @Assert(v6.toString(), "Some(2001:250:1006:dff0:4913:2aa5:8075:7c10/32)")
    }
    
### func broadcast\(\)
    
    __
    
    public open func broadcast(): IPAddress
    
功能：返回此 [IPPrefix](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipprefix) 地址的广播地址。

返回值：

  * [IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress) \- 此 [IPPrefix](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipprefix) 地址的广播地址。

### func contains\(IPAddress\)
    
    __
    
    public func contains(rhs: IPAddress): Bool
    
功能：此 [IPPrefix](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipprefix) 地址是不是包含指定的 [IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress) 地址。

参数：

  * rhs: [IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress) \- 指定的 [IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress) 地址。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 返回 true 表示包含指定的 [IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress) 地址，false 表示不包含。

### func contains\(IPPrefix\)
    
    __
    
    public func contains(rhs: IPPrefix): Bool
    
功能：此 [IPPrefix](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipprefix) 地址是不是包含指定的 [IPPrefix](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipprefix) 地址。

参数：

  * rhs: [IPPrefix](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipprefix) \- 指定的 [IPPrefix](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipprefix) 地址。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 返回 true 表示包含指定的 [IPPrefix](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipprefix) 地址，false 表示不包含。

### func hostmask\(\)
    
    __
    
    public open func hostmask(): IPAddress
    
功能：返回此 [IPPrefix](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipprefix) 地址的主机网络掩码地址。

返回值：

  * [IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress) \- 此 [IPPrefix](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipprefix) 地址的主机网络掩码地址。

### func masked\(\)
    
    __
    
    public open func masked(): IPPrefix
    
功能：返回此 [IPPrefix](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipprefix) 地址根据前缀长度进行掩码后的 [IPPrefix](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipprefix) 地址，比如 `192.168.12.34/16` 返回 `192.168.0.0/16`; `fc00::1:2:3:4/16` 返回 `fc00::/16`。

返回值：

  * [IPPrefix](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipprefix) \- 此 [IPPrefix](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipprefix) 地址根据前缀长度进行掩码后的 [IPPrefix](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipprefix) 地址。

### func netmask\(\)
    
    __
    
    public open func netmask(): IPAddress
    
功能：返回此 [IPPrefix](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipprefix) 地址的网络掩码地址。

返回值：

  * [IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress) \- 此 [IPPrefix](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipprefix) 地址的网络掩码地址。

### func network\(\)
    
    __
    
    public open func network(): IPAddress
    
功能：返回此 [IPPrefix](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipprefix) 地址的网络地址。

返回值：

  * [IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress) \- 此 [IPPrefix](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipprefix) 地址的网络地址。

### func overlaps\(IPPrefix\)
    
    __
    
    public func overlaps(rhs: IPPrefix): Bool
    
功能：此 [IPPrefix](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipprefix) 地址是不是和指定的 [IPPrefix](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipprefix) 地址有重叠。

参数：

  * rhs: [IPPrefix](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipprefix) \- 指定的 [IPPrefix](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipprefix) 地址。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 返回 true 表示和指定的 [IPPrefix](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipprefix) 地址有重叠，false 表示没有重叠。

### func toString\(\)
    
    __
    
    public func toString(): String
    
功能：返回当前 [IPPrefix](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipprefix) 的文本表示字符串。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 当前 [IPPrefix](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipprefix) 的文本表示字符串，比如 `192.168.0.0/16` 或 `fc00::/16`。

示例：
    
    __
    
    import std.net.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main () {
        let v4: IPPrefix = IPAddress.parse("192.168.1.2").getPrefix(24)
        let v6: IPPrefix = IPAddress.parse("2001:0250:1006:dff0:4913:2aa5:8075:7c10").getPrefix(32)
        @Assert(v4.toString(), "192.168.1.2/24")
        @Assert(v6.toString(), "2001:250:1006:dff0:4913:2aa5:8075:7c10/32")
    }
    
### operator func ==\(IPPrefix\)
    
    __
    
    public operator func ==(rhs: IPPrefix): Bool
    
功能：判断两个 [IPPrefix](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipprefix) 对象是否相等。

参数：

  * rhs: [IPPrefix](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipprefix) \- 参与比较的 [IPPrefix](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipprefix) 对象。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果两个 [IPPrefix](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipprefix) 对象相等，则返回 `true`；否则，返回 `false`。

### operator func \!=\(IPPrefix\)
    
    __
    
    public operator func !=(rhs: IPPrefix): Bool
    
功能：判断两个 [IPPrefix](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipprefix) 对象是否不等。

参数：

  * rhs: [IPPrefix](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipprefix) \- 参与比较的 [IPPrefix](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipprefix) 对象。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果两个 [IPPrefix](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipprefix) 对象不等，则返回 `true`；否则，返回 `false`。

## class IPSocketAddress
    
    __
    
    public class IPSocketAddress <: SocketAddress & Equatable\<IPSocketAddress\>{
        public init(address: Array\<Byte\>, port: UInt16)
        public init(address: String, port: UInt16)
        public init(address: IPAddress, port: UInt16)
    }
    
功能：此类实现了IP协议 Socket 地址（IP地址+端口号）。它提供了一个不可变的对象，用于 Socket 的绑定、连接或作为返回值。

父类型：

  * SocketAddress
  * [Equatable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-equatablet)\<IPSocketAddress\>

### prop address
    
    __
    
    public prop address: IPAddress
    
功能：获取当前 [IPSocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipsocketaddress) 对象的 IP 地址。

类型：[IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress)

### prop family
    
    __
    
    public prop family: AddressFamily
    
功能：获取当前 [IPSocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipsocketaddress) 对象的地址族。

类型：[AddressFamily](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-addressfamily)

### prop port
    
    __
    
    public prop port: UInt16
    
功能：获取当前 [IPSocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipsocketaddress) 对象的端口。

类型：[UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16)

### prop size
    
    __
    
    public prop size: Int64
    
功能：获取当前 [IPSocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipsocketaddress) 对象的原始字节长度。

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)

### init\(Array\<Byte\>, UInt16\)
    
    __
    
    public init(address: Array\<Byte\>, port: UInt16)
    
功能：根据大端序 [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> 表示的 IP 地址和本机序 [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) 端口构造 [IPSocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipsocketaddress) 地址。

参数：

  * address: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 大端序 IP 地址。
  * port: [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 本机序端口。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 如果 address 不合法，抛出异常。

### init\(String, UInt16\)
    
    __
    
    public init(address: String, port: UInt16)
    
功能：根据字符串表示的 IP 地址和 本机序 [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) 端口构造 [IPSocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipsocketaddress) 地址。

参数：

  * address: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- IP 地址字符串。
  * port: [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 本机序端口。

异常：

  * [IllegalFormatException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalformatexception) \- 如果传入的 IP 地址不合法，抛出异常。

### init\(IPAddress, UInt16\)
    
    __
    
    public init(address: IPAddress, port: UInt16)
    
功能：根据 [IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress) 对象和 本机序 [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) 端口构造 [IPSocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipsocketaddress) 地址。

参数：

  * address: [IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress) \- [IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress) 对象。
  * port: [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 本机序端口。

### static func parse\(String\)
    
    __
    
    public static func parse(s: String): IPSocketAddress
    
功能：将 IP 协议的 Socket 字符串转换为 [IPSocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipsocketaddress) 对象。

参数：

  * s: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- IP 协议的 Socket 字符串。

返回值：

  * [IPSocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipsocketaddress) \- [IPSocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipsocketaddress) 对象。

异常：

  * [IllegalFormatException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalformatexception) \- 入参需要是合法的socket地址，比如 192.168.0.0:80 或 \[fc00::1\]:8080，否则抛出异常。

示例：
    
    __
    
    import std.net.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main () {
        let v4: IPSocketAddress = IPSocketAddress.parse("192.168.1.2:8080")
        let v6: IPSocketAddress = IPSocketAddress.parse("[2001:0250:1006:dff0:4913:2aa5:8075:7c10]:8080")
        @Assert(v4.address.toString(), "192.168.1.2")
        @Assert(v4.port, 8080u16)
        @Assert(v6.address.toString(), "2001:250:1006:dff0:4913:2aa5:8075:7c10")
        @Assert(v6.port, 8080u16)
        @Assert(v4.toString(), "192.168.1.2:8080")
        @Assert(v6.toString(), "[2001:250:1006:dff0:4913:2aa5:8075:7c10]:8080")
    }
    
### static func tryParse\(String\)
    
    __
    
    public static func tryParse(s: String): ?IPSocketAddress
    
功能：将 IP 协议的 Socket 字符串转换为 [IPSocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipsocketaddress) 对象，如果不是合法字符串，则返回 `None`。

参数：

  * s: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- IP 协议的 Socket 字符串。

返回值：

  * ?[IPSocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipsocketaddress) \- ?[IPSocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipsocketaddress) 对象。

示例：
    
    __
    
    import std.net.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main () {
        let v4: ?IPSocketAddress = IPSocketAddress.tryParse("192.168.1.2:8080")
        let v6: ?IPSocketAddress = IPSocketAddress.tryParse("[2001:0250:1006:dff0:4913:2aa5:8075:7c10]:8080")
        @Assert(v4.toString(), "Some(192.168.1.2:8080)")
        @Assert(v6.toString(), "Some([2001:250:1006:dff0:4913:2aa5:8075:7c10]:8080)")
    }
    
### func getAddressBytes\(\)
    
    __
    
    public func getAddressBytes(): Array\<Byte\>
    
功能：返回此 [IPSocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipsocketaddress) 对象的原始地址的 [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> 表示，内容布局与 `sockaddr_in` 或 `sockaddr_in6` 一致。

返回值：

  * [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- [IPSocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipsocketaddress) 对象的原始地址的 [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> 表示。

### func hashCode\(\)
    
    __
    
    public func hashCode(): Int64
    
功能：获取 `hashcode` 值。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- `hashcode` 值。

### func isIPv4\(\)
    
    __
    
    public func isIPv4(): Bool
    
功能：判断此 [IPSocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipsocketaddress) 对象是不是 IPv4 Socket 地址。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 返回 true 表示是 IPv4 地址，否则返回 false。

### func isIPv6\(\)
    
    __
    
    public func isIPv6(): Bool
    
功能：判断此 [IPSocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipsocketaddress) 对象是不是 IPv6 Socket 地址。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 返回 true 表示是 IPv6 地址，否则返回 false。

### func toString\(\)
    
    __
    
    public func toString(): String
    
功能：返回当前 [IPSocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipsocketaddress) 的文本表示字符串。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 当前 [IPSocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipsocketaddress) 的文本表示字符串，比如 `192.168.1.2:8080` 或 `[fc00::/16]:8080` 。

示例：
    
    __
    
    import std.net.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main () {
        let v4: IPSocketAddress = IPSocketAddress.parse("192.168.1.2:8080")
        let v6: IPSocketAddress = IPSocketAddress.parse("[2001:0250:1006:dff0:4913:2aa5:8075:7c10]:8080")
        @Assert(v4.toString(), "192.168.1.2:8080")
        @Assert(v6.toString(), "[2001:250:1006:dff0:4913:2aa5:8075:7c10]:8080")
    }
    
### operator func ==\(IPSocketAddress\)
    
    __
    
    public operator func ==(rhs: IPSocketAddress): Bool
    
功能：判断两个 [IPSocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipsocketaddress) 对象是否相等。

参数：

  * rhs: [IPSocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipsocketaddress) \- 参与比较的 [IPSocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipsocketaddress) 对象。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果两个 [IPSocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipsocketaddress) 对象相等，则返回 `true`；否则，返回 `false`。

### operator func \!=\(IPSocketAddress\)
    
    __
    
    public operator func !=(rhs: IPSocketAddress): Bool
    
功能：判断两个 [IPSocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipsocketaddress) 对象是否不等。

参数：

  * rhs: [IPSocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipsocketaddress) \- 参与比较的 [IPSocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipsocketaddress) 对象。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果两个 [IPSocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipsocketaddress) 对象不等，则返回 `true`；否则，返回 `false`。

## class IPv4Address
    
    __
    
    public class IPv4Address <: IPAddress & ToString & Equatable\<IPv4Address\> & LessOrEqual\<IPv4Address\> {
        public static let broadcast = IPv4Address(0xFF, 0xFF, 0xFF, 0xFF)
        public static let localhost = IPv4Address(0x7F, 0, 0, 0x01)
        public static let unspecified = IPv4Address(0, 0, 0, 0)
        public init(bits: UInt32)
        public init(a: Byte, b: Byte, c: Byte, d: Byte)
    }
    
功能：此类表示 Internet 协议版本4 （IPv4）地址。由 [RFC 790](https://datatracker.ietf.org/doc/html/rfc790)、[RFC 1918](https://datatracker.ietf.org/doc/html/rfc1918) 和 [RFC 2365](https://datatracker.ietf.org/doc/html/rfc2365) 定义。

父类型：

  * IPAddress
  * [ToString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-tostring)
  * [Equatable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-equatablet)\<IPv4Address\>
  * [LessOrEqual](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-lessorequalt)\<IPv4Address\>

### static let broadcast
    
    __
    
    public static let broadcast = IPv4Address(0xFF, 0xFF, 0xFF, 0xFF)
    
功能：返回 [IPv4Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) 的广播地址：`255.255.255.255`。

类型：[IPv4Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address)

### static let localhost
    
    __
    
    public static let localhost = IPv4Address(0x7F, 0, 0, 0x01)
    
功能：返回 [IPv4Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) 的 `localhost` 地址：`127.0.0.1`。

类型：[IPv4Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address)

### static let unspecified
    
    __
    
    public static let unspecified = IPv4Address(0, 0, 0, 0)
    
功能：返回表示未指定的 [IPv4Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) 地址：`0.0.0.0`，这对应于其他语言中的常量 `INADDR_ANY`。

类型：[IPv4Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address)

### init\(UInt32\)
    
    __
    
    public init(bits: UInt32)
    
功能：根据本机字节序 [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) 值构造 [IPv4Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) 地址。

参数：

  * bits: [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 本机字节序 [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) 值。

### init\(Byte, Byte, Byte, Byte\)
    
    __
    
    public init(a: Byte, b: Byte, c: Byte, d: Byte)
    
功能：根据4 个 8-bit 字节构造 [IPv4Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) 地址对象，文本将表示为 `a.b.c.d`。

参数：

  * a: [Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte) \- 8-bit 字节。
  * b: [Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte) \- 8-bit 字节。
  * c: [Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte) \- 8-bit 字节。
  * d: [Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte) \- 8-bit 字节。

### static func readBigEndian\(Array\<Byte\>\)
    
    __
    
    public static func readBigEndian(buffer: Array\<Byte\>): IPv4Address
    
功能：从字节数组中以大端序的方式读取一个 [IPv4Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) 对象。

参数：

  * buffer: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 缓冲区，用于存放待读取的数据。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当 buffer 太小，不足以读出 [IPv4Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) 值时，抛出异常。

返回值：

  * [IPv4Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) \- [IPv4Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) 对象。

### func getPrefix\(UInt8\)
    
    __
    
    public func getPrefix(prefixLen: UInt8): IPPrefix
    
功能：将 [IPv4Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) 地址根据指定的网络前缀长度创建一个网络前缀对象。

参数：

  * prefixLen: [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 网络前缀长度，必须 >= 0 且 <= 32。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 如果 prefixLen 大小超出范围，抛出异常。

返回值：

  * [IPPrefix](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipprefix) \- 网络前缀对象。

### func isBroadcast\(\)
    
    __
    
    public func isBroadcast(): Bool
    
功能：判断此 [IPv4Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) 对象是不是广播地址。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 返回 true 表示是广播地址，否则返回 false。

### func isGlobalUnicast\(\)
    
    __
    
    public func isGlobalUnicast(): Bool
    
功能：判断此 [IPv4Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) 对象是不是全局单播地址。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 返回 true 表示是全局单播地址，否则返回 false。

### func isLinkLocal\(\)
    
    __
    
    public func isLinkLocal(): Bool
    
功能：判断此 [IPv4Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) 对象是不是链路本地地址。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 返回 true 表示是链路本地地址，否则返回 false。

### func isLoopback\(\)
    
    __
    
    public func isLoopback(): Bool
    
功能：判断此 [IPv4Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) 对象是不是环回地址。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 返回 true 表示是环回地址，否则返回 false。

### func isMulticast\(\)
    
    __
    
    public func isMulticast(): Bool
    
功能：判断此 [IPv4Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) 对象是不是多播地址。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 返回 true 表示是多播地址，否则返回 false。

### func isPrivate\(\)
    
    __
    
    public func isPrivate(): Bool
    
功能：判断此 [IPv4Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) 对象是不是私有地址。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 返回 true 表示是私有地址，否则返回 false。

### func isUnspecified\(\)
    
    __
    
    public func isUnspecified(): Bool
    
功能：判断此 [IPv4Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) 对象是不是“未指定” IP 地址。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 返回 true 表示是“未指定” IP 地址，否则返回 false。

### func toBits\(\)
    
    __
    
    public func toBits(): UInt32
    
功能：此 [IPv4Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) 地址转换为本机字节序的 [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) 值。

返回值：

  * [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 本机字节序的 [UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) 值。

### func toIPv6Compatible\(\)
    
    __
    
    public func toIPv6Compatible(): IPv6Address
    
功能：此 [IPv4Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) 地址转换为 IPv4 兼容的 [IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) 地址。`a.b.c.d` 变为 `::a.b.c.d`。

返回值：

  * [IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) \- [IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) 对象。

### func toIPv6Mapped\(\)
    
    __
    
    public func toIPv6Mapped(): IPv6Address
    
功能：此 [IPv4Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) 地址转换为 IPv4 映射的 [IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) 地址。`a.b.c.d` 变为 `::ffff:a.b.c.d`。

返回值：

  * [IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) \- [IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) 对象。

### func writeBigEndian\(Array\<Byte\>\)
    
    __
    
    public func writeBigEndian(buffer: Array\<Byte\>): Int64
    
功能：此 [IPv4Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) 对象以大端序的方式写入字节数组中。

参数：

  * buffer: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 缓冲区，用于存放待写入的数据。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当 buffer 太小，不足以写入 [IPv4Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) 值时，抛出异常。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 写入的数据的字节数。

### func toString\(\)
    
    __
    
    public func toString(): String
    
功能：返回当前 [IPv4Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) 的文本表示字符串。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 当前 [IPv4Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) 的文本表示字符串，比如 `a.b.c.d`。

### operator func <=\(IPv4Address\)
    
    __
    
    public operator func <=(rhs: IPv4Address): Bool
    
功能：判断本 [IPv4Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) 对象是否小于等于被比较的 [IPv4Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) 对象。

参数：

  * rhs: [IPv4Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) \- 被比较的 [IPv4Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) 对象。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果本 [IPv4Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) 对象小于等于被比较的 [IPv4Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) 对象，则返回 `true`；否则，返回 `false`。

### operator func ==\(IPv4Address\)
    
    __
    
    public operator func ==(rhs: IPv4Address): Bool
    
功能：判断两个 [IPv4Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) 对象是否相等。

参数：

  * rhs: [IPv4Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) \- 参与比较的 [IPv4Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) 对象。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果两个 [IPv4Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) 对象相等，则返回 `true`；否则，返回 `false`。

### operator func \!=\(IPv4Address\)
    
    __
    
    public operator func !=(rhs: IPv4Address): Bool
    
功能：判断两个 [IPv4Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) 对象是否不等。

参数：

  * rhs: [IPv4Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) \- 参与比较的 [IPv4Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) 对象。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果两个 [IPv4Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) 对象不等，则返回 `true`；否则，返回 `false`。

## class IPv6Address
    
    __
    
    public class IPv6Address <: IPAddress & ToString & Equatable\<IPv6Address\> & LessOrEqual\<IPv6Address\> {
        public static let localhost = IPv6Address(0u16, 0, 0, 0, 0, 0, 0, 1)
        public static let unspecified = IPv6Address(0u16, 0, 0, 0, 0, 0, 0, 0)
        public init(octets: Array\<Byte\>, scopeId!: ?UInt32 = None)
        public init(a: UInt16, b: UInt16, c: UInt16, d: UInt16, e: UInt16, f: UInt16, g: UInt16, h: UInt16, scopeId!: ?UInt32 = None)
    }
    
功能：此类表示 Internet 协议版本6 （IPv6）地址。由 [RFC4291](https://datatracker.ietf.org/doc/html/rfc4291)、[RFC5952](https://datatracker.ietf.org/doc/html/rfc5952)、[RFC4007](https://datatracker.ietf.org/doc/html/rfc4007) 定义。

父类型：

  * IPAddress
  * [ToString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-tostring)
  * [Equatable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-equatablet)\<IPv6Address\>
  * [LessOrEqual](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-lessorequalt)\<IPv6Address\>

### static let localhost
    
    __
    
    public static let localhost = IPv6Address(0u16, 0, 0, 0, 0, 0, 0, 1)
    
功能：返回 [IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv6address) 的 `localhost` 地址：`::1`。

类型：[IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv6address)

### static let unspecified
    
    __
    
    public static let unspecified = IPv6Address(0u16, 0, 0, 0, 0, 0, 0, 0)
    
功能：返回表示未指定的 [IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv6address) 地址：`::`，这对应于其他语言中的常量 `INADDR_ANY`。

类型：[IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv6address)

### prop scopeId
    
    __
    
    public prop scopeId: ?UInt32
    
功能：获取默认范围 ID。

类型：[Option](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_enums.html#enum-optiont)<[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32)>

### init\(Array\<Byte\>, ?UInt32\)
    
    __
    
    public init(octets: Array\<Byte\>, scopeId!: ?UInt32 = None)
    
功能：根据大端序 [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> 构造 [IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv6address) 地址。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 如果 octets 长度小于 16，抛出异常。

参数：

  * octets: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 大端序字节数组。
  * scopeId\!: ?[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 范围 ID。

### init\(UInt16, UInt16, UInt16, UInt16, UInt16, UInt16, UInt16, UInt16, ?UInt32\)
    
    __
    
    public init(a: UInt16, b: UInt16, c: UInt16, d: UInt16, e: UInt16, f: UInt16, g: UInt16, h: UInt16, scopeId!: ?UInt32 = None)
    
功能：根据 8 个 16-bit 分段构造 [IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv6address) 地址对象，文本将表示为 `a:b:c:d:e:f:g:h%scopeId`。

参数：

  * a: [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 16-bit 分段。
  * b: [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 16-bit 分段。
  * c: [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 16-bit 分段。
  * d: [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 16-bit 分段。
  * e: [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 16-bit 分段。
  * f: [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 16-bit 分段。
  * g: [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 16-bit 分段。
  * h: [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 16-bit 分段。
  * scopeId\!: ?[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 范围 ID。

### static func readBigEndian\(Array\<Byte\>\)
    
    __
    
    public static func readBigEndian(buffer: Array\<Byte\>): IPv6Address
    
功能：从字节数组中以大端序的方式读取一个 [IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv6address) 对象。

参数：

  * buffer: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 缓冲区，用于存放待读取的数据。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当 buffer 太小，不足以读出 [IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv6address) 值时，抛出异常。

返回值：

  * [IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv6address) \- [IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv6address) 对象。

### func getPrefix\(UInt8\)
    
    __
    
    public func getPrefix(prefixLen: UInt8): IPPrefix
    
功能：此 [IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv6address) 地址对象根据指定的网络前缀长度创建一个网络前缀对象。

参数：

  * prefixLen: [UInt8](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint8) \- 网络前缀长度，必须 >= 0 且 <= 128。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 如果 prefixLen 大小超出范围，抛出异常。

返回值：

  * [IPPrefix](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipprefix) \- 网络前缀对象。

### func isGlobalUnicast\(\)
    
    __
    
    public func isGlobalUnicast(): Bool
    
功能：判断此 [IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv6address) 对象是不是全局单播地址。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 返回 true 表示是全局单播地址，否则返回 false。

### func isIPv4Mapped\(\)
    
    __
    
    public func isIPv4Mapped(): Bool
    
功能：判断此 [IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv6address) 对象是不是 IPv4 映射地址。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 返回 true 表示是 IPv4 映射地址，否则返回 false。

### func isLinkLocal\(\)
    
    __
    
    public func isLinkLocal(): Bool
    
功能：判断此 [IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv6address) 对象是不是链路本地地址。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 返回 true 表示是链路本地地址，否则返回 false。

### func isLoopback\(\)
    
    __
    
    public func isLoopback(): Bool
    
功能：判断此 [IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv6address) 对象是不是环回地址。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 返回 true 表示是环回地址，否则返回 false。

### func isMulticast\(\)
    
    __
    
    public func isMulticast(): Bool
    
功能：判断此 [IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv6address) 对象是不是多播地址。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 返回 true 表示是多播地址，否则返回 false。

### func isPrivate\(\)
    
    __
    
    public func isPrivate(): Bool
    
功能：判断此 [IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv6address) 对象是不是私有地址。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 返回 true 表示是私有地址，否则返回 false。

### func isTeredo\(\)
    
    __
    
    public func isTeredo(): Bool
    
功能：判断此 [IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv6address) 对象是不是 `Teredo` 地址。`Teredo` 前缀为 `2001::/32`。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 返回 true 表示是 `Teredo` 地址，否则返回 false。

### func isUnspecified\(\)
    
    __
    
    public func isUnspecified(): Bool
    
功能：判断此 [IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv6address) 对象是不是“未指定” IP 地址。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 返回 true 表示是“未指定” IP 地址，否则返回 false。

### func scope\(?UInt32\)
    
    __
    
    public func scope(scopeId: ?UInt32): IPv6Address
    
功能：使用本 [IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv6address) 对象的地址值和指定的范围 ID 转换为新的 [IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv6address) 对象，如果指定的范围 ID 为 None，则去除已有的范围 ID。

参数：

  * scopeId: ?[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32) \- 范围 ID。

返回值：

  * [IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv6address) \- 转换后的 [IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv6address) 对象。

### func toIPv4\(\)
    
    __
    
    public func toIPv4(): ?IPv4Address
    
功能：此 [IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv6address) 地址转换为 IPv4 兼容的 [IPv4Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) 地址。比如 `::a.b.c.d` 和 `::ffff:a.b.c.d` 转成 `a.b.c.d`; `::1` 转成 `0.0.0.1`. 所有不以全零或 `::ffff` 开头的地址将返回 `None`。

返回值：

  * ?[IPv4Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) \- ?[IPv4Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) 值。

### func toIPv4Mapped\(\)
    
    __
    
    public func toIPv4Mapped(): ?IPv4Address
    
功能：此 [IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv6address) 地址转换为 IPv4 映射的 [IPv4Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) 地址。比如 `::ffff:a.b.c.d` 转换为 `a.b.c.d`， 所有不以 `::ffff` 开头的地址将返回 `None`。

返回值：

  * ?[IPv4Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) \- ?[IPv4Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address) 值。

### func writeBigEndian\(Array\<Byte\>\)
    
    __
    
    public func writeBigEndian(buffer: Array\<Byte\>): Int64
    
功能：返回此 [IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv6address) 对象以大端序的方式写入字节数组中。

参数：

  * buffer: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 缓冲区，用于存放待写入的数据。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当 buffer 太小，不足以写入 [IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv6address) 值时，抛出异常。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 写入的数据的字节数。

### func toString\(\)
    
    __
    
    public func toString(): String
    
功能：返回当前 [IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv6address) 的文本表示字符串。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 当前 [IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv6address) 的文本表示字符串，比如 `2001:db8:1:2:ffff:ffff:ffff:ffff`。

### operator func <=\(IPv6Address\)
    
    __
    
    public operator func <=(rhs: IPv6Address): Bool
    
功能：判断本 [IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv6address) 对象是否小于等于被比较的 [IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv6address) 对象。

参数：

  * rhs: [IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv6address) \- 参与比较的 [IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv6address) 对象。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果本 [IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv6address) 对象小于等于被比较的 [IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv6address) 对象，则返回 `true`；否则，返回 `false`。

### operator func ==\(IPv6Address\)
    
    __
    
    public operator func ==(rhs: IPv6Address): Bool
    
功能：判断两个 [IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv6address) 对象是否相等。

参数：

  * rhs: [IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv6address) \- 参与比较的 [IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv6address) 对象。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果两个 [IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv6address) 对象相等，则返回 `true`；否则，返回 `false`。

### operator func \!=\(IPv6Address\)
    
    __
    
    public operator func !=(rhs: IPv6Address): Bool
    
功能：判断两个 [IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv6address) 对象是否不等。

参数：

  * rhs: [IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv6address) \- 参与比较的 [IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv6address) 对象。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果两个 [IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv6address) 对象不等，则返回 `true`；否则，返回 `false`。

## class RawSocket
    
    __
    
    public class RawSocket {
        public init(domain: SocketDomain, `type`: SocketType, protocol: ProtocolType)
    }
    
功能：[RawSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-rawsocket) 提供了套接字的基本功能。

可以访问特定通信域（domain）、类型（type）和协议（protocol）组合的套接字。Socket 包已经提供了 TCP、 UDP 等常用网络协议的支持，因此，该类型适用于其他类型的网络编程需求。

> **注意：**
> 
>   * 当前 [RawSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-rawsocket) 已经验证的功能包括 TCP、UDP、UDS 以及 ICMP 协议套接字，其他类型使用上可能存在预期之外的问题。
>   * 此外，由于接口的开放性，可以使用 `connect` 再 `listen` 的组合，部分场景可能存在预期外的问题。建议开发者使用时遵循正常的调用逻辑，避免产生问题。
> 

### prop localAddr \(deprecated\)
    
    __
    
    public prop localAddr: RawAddress
    
功能：获取当前 [RawSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-rawsocket) 实例的本地地址。

> **注意：**
> 
> 未来版本即将废弃不再使用，使用 localAddress 替代。

类型：[RawAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-rawaddress)

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当前 [RawSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-rawsocket) 实例已经关闭，或无法获取本地地址时，抛出异常。

### prop localAddress
    
    __
    
    public prop localAddress: RawAddress
    
功能：获取当前 [RawSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-rawsocket) 实例的本地地址。

类型：[RawAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-rawaddress)

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当前 [RawSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-rawsocket) 实例已经关闭，或无法获取本地地址时，抛出异常。

### prop readTimeout
    
    __
    
    public mut prop readTimeout: ?Duration
    
功能：获取或设置当前 [RawSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-rawsocket) 实例的读超时时间。

类型：?[Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration)

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当前 [RawSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-rawsocket) 实例已经关闭时，抛出异常。
  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当设置的读超时时间为负时，抛出异常。

### prop remoteAddr \(deprecated\)
    
    __
    
    public prop remoteAddr: RawAddress
    
功能：获取当前 [RawSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-rawsocket) 实例的对端地址。

> **注意：**
> 
> 未来版本即将废弃不再使用，使用 remoteAddress 替代。

类型：[RawAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-rawaddress)

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当前 [RawSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-rawsocket) 实例已经关闭，或无法获取对端地址时，抛出异常。

### prop remoteAddress
    
    __
    
    public prop remoteAddress: RawAddress
    
功能：获取当前 [RawSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-rawsocket) 实例的对端地址。

类型：[RawAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-rawaddress)

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当前 [RawSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-rawsocket) 实例已经关闭，或无法获取对端地址时，抛出异常。

### prop writeTimeout
    
    __
    
    public mut prop writeTimeout: ?Duration
    
功能：获取或设置当前 [RawSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-rawsocket) 实例的写超时时间。

类型：?[Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration)

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当前 [RawSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-rawsocket) 实例已经关闭时，抛出异常。
  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当设置的写超时时间为负时，抛出异常。

### init\(SocketDomain, SocketType, ProtocolType\)
    
    __
    
    public init(domain: SocketDomain, `type`: SocketType, protocol: ProtocolType)
    
功能：创建特定通信域、类型、协议组合的套接字。

参数：

  * domain: [SocketDomain](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-socketdomain) \- 通信域。
  * \`type\`: [SocketType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-sockettype) \- 套接字类型。
  * protocol: [ProtocolType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-protocoltype) \- 协议类型。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当通信域、类型、协议组合无法创建套接字时，抛出异常。

### func accept\(?Duration\)
    
    __
    
    public func accept(timeout!: ?Duration = None): RawSocket
    
功能：接收当前 [RawSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-rawsocket) 实例监听时挂起连接队列上的第一个连接请求，返回一个用于通信的 [RawSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-rawsocket)。

参数：

  * timeout\!: ?[Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) \- 等待连接请求的最大时间，默认值 `None` 表示一直等待。

返回值：

  * [RawSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-rawsocket) \- 用于通信的新 [RawSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-rawsocket) 实例。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当前 [RawSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-rawsocket) 实例已经关闭，或接收失败时，抛出异常。
  * [SocketTimeoutException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-sockettimeoutexception) \- 当等待超时时，抛出异常。

### func bind\(RawAddress\)
    
    __
    
    public func bind(addr: RawAddress): Unit
    
功能：将当前 [RawSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-rawsocket) 实例与指定的套接字地址进行绑定。

参数：

  * addr: [RawAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-rawaddress) \- 套接字地址。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当前 [RawSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-rawsocket) 实例已经关闭，或绑定失败时，抛出异常。

### func close\(\)
    
    __
    
    public func close(): Unit
    
功能：关闭当前 [RawSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-rawsocket) 实例。

### func connect\(RawAddress, ?Duration\)
    
    __
    
    public func connect(addr: RawAddress, timeout!: ?Duration = None): Unit
    
功能：向目标地址发送连接请求。

参数：

  * addr: [RawAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-rawaddress) \- 发送连接请求的目标地址。
  * timeout\!: ?[Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) \- 等待连接接收的最大时间，默认值 `None` 表示一直等待。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当前 [RawSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-rawsocket) 实例已经关闭，或接收失败时，抛出异常。
  * [SocketTimeoutException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-sockettimeoutexception) \- 当等待超时时，抛出异常。

### func getSocketOption\(Int32, Int32, CPointer\<Byte\>, CPointer\<Int32\>\)
    
    __
    
    public unsafe func getSocketOption(level: Int32, option: Int32, value: CPointer\<Byte\>, len: CPointer\<Int32\>): Unit
    
功能：获取套接字选项的值。

参数：

  * level: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 套接字选项级别。
  * option: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 套接字选项名。
  * value: [CPointer](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#cpointert)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 套接字选项值。
  * len: [CPointer](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#cpointert)<[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)> \- 套接字选项值的长度。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当前 [RawSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-rawsocket) 实例已经关闭，或获取套接字选项失败时，抛出异常。

### func listen\(Int32\)
    
    __
    
    public func listen(backlog: Int32): Unit
    
功能：监听当前 [RawSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-rawsocket) 实例绑定的地址。

参数：

  * backlog: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 等待队列增长的最大长度。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当前 [RawSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-rawsocket) 实例已经关闭，或监听失败时，抛出异常。

### func receive\(Array\<Byte\>, Int32\)
    
    __
    
    public func receive(buffer: Array\<Byte\>, flags: Int32): Int64
    
功能：接收来自连接对端发送的数据。

参数：

  * buffer: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 存储接收数据的数组。
  * flags: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 指定函数行为的标志。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 数据长度。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当前 [RawSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-rawsocket) 实例已经关闭，或接收数据失败时，抛出异常。
  * [SocketTimeoutException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-sockettimeoutexception) \- 当超过指定的读超时时间时，抛出异常。

### func receiveFrom\(Array\<Byte\>, Int32\)
    
    __
    
    public func receiveFrom(buffer: Array\<Byte\>, flags: Int32): (RawAddress, Int64)
    
功能：接收来自其他 [RawSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-rawsocket) 实例的数据。

参数：

  * buffer: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 存储接收数据的数组。
  * flags: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 指定函数行为的标志。

返回值：

  * \([RawAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-rawaddress), [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)\) - 数据来源的地址和数据长度。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当前 [RawSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-rawsocket) 实例已经关闭，或接收数据失败时，抛出异常。
  * [SocketTimeoutException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-sockettimeoutexception) \- 当超过指定的读超时时间时，抛出异常。

### func send\(Array\<Byte\>, Int32\)
    
    __
    
    public func send(buffer: Array\<Byte\>, flags: Int32): Unit
    
功能：向连接的对端发送数据。

参数：

  * buffer: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 数据。
  * flags: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 指定函数行为的标志。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当前 [RawSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-rawsocket) 实例已经关闭，或发送数据失败时，抛出异常。
  * [SocketTimeoutException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-sockettimeoutexception) \- 当超过指定的写超时时间时，抛出异常。

### func sendTo\(RawAddress, Array\<Byte\>, Int32\)
    
    __
    
    public func sendTo(addr: RawAddress, buffer: Array\<Byte\>, flags: Int32): Unit
    
功能：向目标地址发送数据。若 [RawSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-rawsocket) 是 `DATAGRAM` 类型，发送的数据包大小不允许超过 65507 字节。

参数：

  * addr: [RawAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-rawaddress) \- 发送数据的目标地址。
  * buffer: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 数据。
  * flags: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 指定函数行为的标志。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当前 [RawSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-rawsocket) 实例已经关闭、发送数据失败或者 macOS 平台下 `connect` 被调用后调用 `sendTo` 时，抛出异常。
  * [SocketTimeoutException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-sockettimeoutexception) \- 当超过指定的写超时时间时，抛出异常。

### func setSocketOption\(Int32, Int32, CPointer\<Byte\>, Int32\)
    
    __
    
    public unsafe func setSocketOption(level: Int32, option: Int32, value: CPointer\<Byte\>, len: Int32): Unit
    
功能：设置套接字选项。

参数：

  * level: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 套接字选项级别。
  * option: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 套接字选项名。
  * value: [CPointer](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#cpointert)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 套接字选项值。
  * len: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 套接字选项值的长度。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当前 [RawSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-rawsocket) 实例已经关闭，或设置套接字选项失败时，抛出异常。

## class SocketAddress
    
    __
    
    abstract sealed class SocketAddress <: ToString & Equatable\<SocketAddress\> & Hashable
    
功能：此类表示协议无关的 Socket 地址。它提供了一个不可变的对象，用于 Socket 的绑定、连接或作为返回值。

父类型：

  * [ToString](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-tostring)
  * [Equatable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-equatablet)\<SocketAddress\>
  * [Hashable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-hashable)

### prop size
    
    __
    
    public prop size: Int64
    
功能：当前 [SocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-socketaddress) 对象的原始字节长度。

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)

### prop family
    
    __
    
    public prop family: AddressFamily
    
功能：当前 [SocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-socketaddress) 对象的地址族。

类型：[AddressFamily](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-addressfamily)

### func getAddressBytes\(\)
    
    __
    
    public func getAddressBytes(): Array\<Byte\>
    
功能：返回此 [SocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-socketaddress) 对象的原始IP地址。

返回值：

  * [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 原始 IP 地址的 [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> 表示。

### operator func ==\(SocketAddress\)
    
    __
    
    public operator func ==(rhs: SocketAddress): Bool
    
功能：判断两个 [SocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-socketaddress) 对象是否相等。

参数：

  * rhs: [SocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-socketaddress) \- 参与比较的 [SocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-socketaddress) 对象。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果两个 [SocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-socketaddress) 对象相等，则返回 `true`；否则，返回 `false`。

### operator func \!=\(SocketAddress\)
    
    __
    
    public operator func !=(rhs: SocketAddress): Bool
    
功能：判断两个 [SocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-socketaddress) 对象是否不等。

参数：

  * rhs: [SocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-socketaddress) \- 参与比较的 [SocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-socketaddress) 对象。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果两个 [SocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-socketaddress) 对象不等，则返回 `true`；否则，返回 `false`。

## class TcpServerSocket
    
    __
    
    public class TcpServerSocket <: ServerSocket {
        public init(bindAt!: SocketAddress)
        public init(bindAt!: UInt16)
    }
    
功能：监听 TCP 连接的服务端。

套接字被创建后，可通过属性和 `setSocketOptionXX` 接口配置属性。 启动监听需要调用 `bind()` 将套接字绑定到本地端口。`accept()` 接口将接受 TCP 连接，阻塞等待连接，若队列中已有连接，则可立即返回。 套接字需要通过 close 显式关闭。

父类型：

  * [ServerSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_interfaces.html#interface-serversocket)

### prop backlogSize
    
    __
    
    public mut prop backlogSize: Int64
    
功能：设置和读取 `backlog` 大小。

仅可在调用 `bind` 前调用，否则将抛出异常。 变量是否生效取决于系统行为。

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当在 `bind` 后调用时，抛出异常。

### prop bindToDevice
    
    __
    
    public mut prop bindToDevice: ?String
    
功能：设置和读取绑定网卡。

类型：?[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### prop localAddress
    
    __
    
    public override prop localAddress: SocketAddress
    
功能：读取 `Socket` 将要或已经被绑定的本地地址。

类型：[SocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-socketaddress)

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `Socket` 已经被关闭时，抛出异常。

### prop receiveBufferSize
    
    __
    
    public mut prop receiveBufferSize: Int64
    
功能：设置和读取 `SO_RCVBUF` 属性。

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当 `size` 小于等于 0 时，抛出异常。
  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `Socket` 已关闭时，抛出异常。

### prop reuseAddress
    
    __
    
    public mut prop reuseAddress: Bool
    
功能：设置和读取 `SO_REUSEADDR` 属性，默认设置为 `true`。

属性生效后的行为取决于系统，使用前，请参阅不同系统针对此属性 `SO_REUSEADDR/SOCK_REUSEADDR` 的说明文档。

类型：[Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool)

### prop reusePort
    
    __
    
    public mut prop reusePort: Bool
    
功能：设置和读取 `SO_REUSEPORT` 属性。

仅可在绑定前被修改。Windows 上可使用 `SO_REUSEADDR`，无该属性，抛出异常。 属性默认及配置生效后的行为取决于系统，使用前，请参阅不同系统针对此属性 `SO_REUSEPORT` 的说明文档。 同时开启 `SO_REUSEADDR/SO_REUSEPORT` 会导致不可预知的系统错误，用户需谨慎配置值。

类型：[Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool)

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- Windows 上不支持此类型，抛出异常。

### prop sendBufferSize
    
    __
    
    public mut prop sendBufferSize: Int64
    
功能：设置和读取 `SO_SNDBUF` 属性。

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当 `size` 小于等于 0 时，抛出异常。
  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `Socket` 已关闭时，抛出异常。

### init\(SocketAddress\)
    
    __
    
    public init(bindAt!: SocketAddress)
    
功能：创建一个 [TcpServerSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-tcpserversocket) 实例，尚未绑定，因此客户端无法连接。

参数：

  * bindAt\!: [SocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-socketaddress) \- 指定本地绑定地址，端口号设置为 0 表示随机绑定空闲的本地地址。

### init\(UInt16\)
    
    __
    
    public init(bindAt!: UInt16)
    
功能：创建一个 [TcpServerSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-tcpserversocket) 实例，尚未绑定，因此客户端无法连接。

参数：

  * bindAt\!: [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 指定本地绑定端口，0 表示随机绑定空闲的本地端口。

### func accept\(\)
    
    __
    
    public override func accept(): TcpSocket
    
功能：监听或接受客户端连接。阻塞等待。

返回值：

  * [TcpSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-tcpsocket) \- 客户端套接字。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当因系统原因监听失败时，抛出异常。

### func accept\(?Duration\)
    
    __
    
    public override func accept(timeout!: ?Duration): TcpSocket
    
功能：监听或接受客户端连接。

参数：

  * timeout\!: ?[Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) \- 超时时间。

返回值：

  * [TcpSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-tcpsocket) \- 客户端套接字。

异常：

  * [SocketTimeoutException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-sockettimeoutexception) \- 当连接超时，抛出异常。
  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当因系统原因监听失败时，抛出异常。
  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当超时时间小于 0 时，抛出异常。

### func bind\(\)
    
    __
    
    public override func bind(): Unit
    
功能：绑定本地端口失败后需要 `close` 套接字，不支持多次重试。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当因系统原因绑定失败时，抛出异常。

### func close\(\)
    
    __
    
    public override func close(): Unit
    
功能：关闭套接字。接口允许多次调用。

### func getSocketOption\(Int32, Int32, CPointer\<Unit\>, CPointer\<UIntNative\>\)
    
    __
    
    public func getSocketOption(
        level: Int32,
        option: Int32,
        value: CPointer\<Unit\>,
        valueLength: CPointer\<UIntNative\>
    ): Unit
    
功能：获取指定的套接字参数。

参数：

  * level: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 层级，例如 `SOL_SOCKET`。
  * option: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 参数，例如 `SO_KEEPALIVE`。
  * value: [CPointer](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#cpointert)<[Unit](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#unit)> \- 参数值。
  * valueLength: [CPointer](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#cpointert)<[UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative)> \- 参数值长度。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `getsockopt` 返回失败时，抛出异常。

### func getSocketOptionBool\(Int32, Int32\)
    
    __
    
    public func getSocketOptionBool(
        level: Int32,
        option: Int32
    ): Bool
    
功能：获取指定的套接字参数。从 [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) 强转而来。`0 => false`，非 `0 => true`。

参数：

  * level: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 层级，例如 `SOL_SOCKET`。
  * option: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 参数，例如 `SO_KEEPALIVE`。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 指定的套接字参数。从 [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) 强转而来。`0 => false`，非 `0 => true`。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `getsockopt` 返回失败时或参数大小超过 [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) 的阈值时，抛出异常。

### func getSocketOptionIntNative\(Int32, Int32\)
    
    __
    
    public func getSocketOptionIntNative(
        level: Int32,
        option: Int32
    ): IntNative
    
功能：获取指定的套接字参数。

参数：

  * level: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 层级，例如 `SOL_SOCKET`。
  * option: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 参数，例如 `SO_KEEPALIVE`。

返回值：

  * [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 获取的套接字参数值。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `getsockopt` 返回失败时或参数大小超过 [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) 的阈值时，抛出异常。

### func isClosed\(\)
    
    __
    
    public override func isClosed(): Bool
    
功能：检查套接字是否关闭。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果已经关闭，返回 `true`，否则返回 `false`。

### func setSocketOption\(Int32, Int32, CPointer\<Unit\>, UIntNative\)
    
    __
    
    public func setSocketOption(
        level: Int32,
        option: Int32,
        value: CPointer\<Unit\>,
        valueLength: UIntNative
    ): Unit
    
功能：设置指定的套接字参数。

参数：

  * level: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 层级，例如 `SOL_SOCKET`。
  * option: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 参数，例如 `SO_KEEPALIVE`。
  * value: [CPointer](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#cpointert)<[Unit](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#unit)> \- 参数值。
  * valueLength: [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 参数值长度。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `setsockopt` 返回失败时，抛出异常。

### func setSocketOptionBool\(Int32, Int32，Bool\)
    
    __
    
    public func setSocketOptionBool(
        level: Int32,
        option: Int32,
        value: Bool
    ): Unit
    
功能：设置指定的套接字参数。

参数：

  * level: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 层级，例如 `SOL_SOCKET`。
  * option: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 参数，例如 `SO_KEEPALIVE`。
  * value: [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 参数值。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `setsockopt` 返回失败时，抛出异常。

### func setSocketOptionIntNative\(Int32, Int32, IntNative\)
    
    __
    
    public func setSocketOptionIntNative(
        level: Int32,
        option: Int32,
        value: IntNative
    ): Unit
    
功能：设置指定的套接字参数。

参数：

  * level: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 层级，例如 `SOL_SOCKET`。
  * option: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 参数，例如 `SO_KEEPALIVE`。
  * value: [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 参数值。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `setsockopt` 返回失败时，抛出异常。

### func toString\(\)
    
    __
    
    public override func toString(): String
    
功能：返回当前 [TcpServerSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-tcpserversocket) 的状态信息。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 包含当前 [TcpServerSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-tcpserversocket) 状态信息的字符串。

## class TcpSocket
    
    __
    
    public class TcpSocket <: StreamingSocket & Equatable\<TcpSocket\> & Hashable {
        public init(address: String, port: UInt16)
        public init(address: SocketAddress)
        public init(address: SocketAddress, localAddress!: ?SocketAddress)
    }
    
功能：请求 TCP 连接的客户端。

当实例对象被创建后，可使用 `connect` 函数创建连接，并在结束时显式执行 `close` 操作。 该类型继承自 [StreamingSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_interfaces.html#interface-streamingsocket)， 可参阅 [StreamingSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_interfaces.html#interface-streamingsocket) 章节获取更多信息。

父类型：

  * [StreamingSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_interfaces.html#interface-streamingsocket)
  * [Equatable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-equatablet)\<TcpSocket\>
  * [Hashable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-hashable)

### prop bindToDevice
    
    __
    
    public mut prop bindToDevice: ?String
    
功能：设置和读取绑定网卡。

类型：?[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string)

### prop keepAlive
    
    __
    
    public mut prop keepAlive: ?SocketKeepAliveConfig
    
功能：设置和读取保活属性，`None` 表示关闭保活。

用户未设置时将使用系统默认配置。设置此配置可能会被延迟或被系统忽略，取决于系统的处理能力。

类型：?[SocketKeepAliveConfig](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-socketkeepaliveconfig)

### prop linger
    
    __
    
    public mut prop linger: ?Duration
    
功能：设置和读取 `SO_LINGER` 属性，默认值取决于系统，`None` 表示禁用此选项。

> **说明：**
> 
>   * 如果 `SO_LINGER` 被设置为 `Some(v)`，当套接字关闭时，如果还有等待的字节流，我们将在关闭连接前等待 `v` 时间，如果超过时间，字节流还未被发送，连接将会被异常终止（通过 RST 报文关闭）。
>   * 如果 `SO_LINGER` 被设置为 `None`，当套接字关闭时，连接将被立即关闭，如果当前等待发送的字符，使用 FIN-ACK 关闭连接，当还有剩余待发送的字符时，使用 RST 关闭连接。
> 

类型：?[Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration)

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当超时时间小于 0 时，抛出异常。

### prop localAddress
    
    __
    
    public override prop localAddress: SocketAddress
    
功能：读取 `Socket` 将要或已经被绑定的本地地址。

类型：[SocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-socketaddress)

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `Socket` 已经被关闭或无可用的本地地址（本地地址未配置并且套接字未连接）时，抛出异常。

### prop noDelay
    
    __
    
    public mut prop noDelay: Bool
    
功能：设置和读取 `TCP_NODELAY` 属性，默认为 `true`。

这个选项将禁用 Nagel 算法，所有写入字节被无延迟得转发。当属性设置为 `false` 时，Nagel 算法将在发包前引入延时时间。

类型：[Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool)

### prop quickAcknowledge
    
    __
    
    public mut prop quickAcknowledge: Bool
    
功能：设置和读取 `TCP_QUICKACK` 属性，默认为 `false`。

这个选项类似于 `noDelay`，但仅影响 TCP ACK 和第一次响应。不支持 Windows 和 macOS 系统。

类型：[Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool)

### prop readTimeout
    
    __
    
    public override mut prop readTimeout: ?Duration
    
功能：设置和读取读操作超时时间。

如果设置的时间过小将会设置为最小时钟周期值；过大时将设置为最大超时时间（263-1 纳秒）；默认值为 `None`。

类型：?[Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration)

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当超时时间小于 0 时，抛出异常。

### prop receiveBufferSize
    
    __
    
    public mut prop receiveBufferSize: Int64
    
功能：设置和读取 `SO_RCVBUF` 属性，提供一种方式指定收包缓存大小。选项的生效情况取决于系统。

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当 `size` 小于等于 0 时，抛出异常。
  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `Socket` 已关闭时，抛出异常。

### prop remoteAddress
    
    __
    
    public override prop remoteAddress: SocketAddress
    
功能：读取 `Socket` 已经或将要连接的远端地址。

类型：[SocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-socketaddress)

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `Socket` 已经被关闭时，抛出异常。

### prop sendBufferSize
    
    __
    
    public mut prop sendBufferSize: Int64
    
功能：设置和读取 `SO_SNDBUF` 属性，提供一种方式指定发包缓存大小。选项的生效情况取决于系统。

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当 `size` 小于等于 0 时，抛出异常。
  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `Socket` 已关闭时，抛出异常。

### prop writeTimeout
    
    __
    
    public override mut prop writeTimeout: ?Duration
    
功能：设置和读取写操作超时时间。

如果设置的时间过小将会设置为最小时钟周期值；过大时将设置为最大超时时间（263-1 纳秒）；默认值为 `None`。

类型：?[Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration)

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当超时时间小于 0 时，抛出异常。

### init\(SocketAddress\)
    
    __
    
    public init(address: SocketAddress)
    
功能：创建一个未连接的套接字。

参数：

  * address: [SocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-socketaddress) \- 即将要连接的地址。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `address` 参数不合法或者 Windows 平台下地址为全零地址时，抛出异常。

### init\(SocketAddress, ?SocketAddress\)
    
    __
    
    public init(address: SocketAddress, localAddress!: ?SocketAddress)
    
功能：创建一个未连接的套接字，并且绑定到指定本地地址，本地地址为 `None` 时，将随机选定地址去绑定。

此接口当 `localAddress` 不为 `None` 时，将默认设置 `SO_REUSEADDR` 为 `true`，否则可能导致 "address already in use" 的错误。如果需要变更此配置，可以通过调用 setSocketOptionBool\([SocketOptions](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-socketoptions).SOL\_SOCKET, [SocketOptions](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-socketoptions).SO\_REUSEADDR, false\)。另外，本地地址和远端地址需要均为 IPv4。

参数：

  * address: [SocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-socketaddress) \- 即将要连接的地址。
  * localAddress\!: ?[SocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-socketaddress) \- 绑定的本地地址。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `address` 参数不合法或者 Windows 平台下地址为全零地址时，抛出异常。

### init\(String, UInt16\)
    
    __
    
    public init(address: String, port: UInt16)
    
功能：创建一个未连接的套接字。

参数：

  * address: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 即将要连接的地址。
  * port: [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 即将要连接的端口。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `address` 参数不合法或者 Windows 平台下地址为全零地址时，抛出异常。

### func close\(\)
    
    __
    
    public func close(): Unit
    
功能：关闭套接字，所有操作除了 `close/isClosed` 之外，均不允许再调用。接口允许多次调用。

### func connect\(?Duration\)
    
    __
    
    public func connect(timeout!: ?Duration = None): Unit
    
功能：连接远端套接字，会自动绑定本地地址，因此不需要进行额外的绑定操作。

参数：

  * timeout\!: ?[Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) \- 连接超时时间，`None` 表示无超时时间，并且连接操作无重试，当服务端拒绝连接时，将返回连接失败。并且此操作包含了绑定操作，因此无需重复调用 `bind` 接口。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当远端地址不合法或者连接超时时间小于 0 或者超时时间小于 0 时，抛出异常。
  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当连接因系统原因（例如：套接字已关闭，没有访问权限，系统错误等）无法建立时，抛出异常。再次调用可能成功。
  * [SocketTimeoutException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-sockettimeoutexception) \- 当连接超时时，抛出异常。

### func getSocketOption\(Int32, Int32, CPointer\<Unit\>, CPointer\<UIntNative\>\)
    
    __
    
    public func getSocketOption(
        level: Int32,
        option: Int32,
        value: CPointer\<Unit\>,
        valueLength: CPointer\<UIntNative\>
    ): Unit
    
功能：读取指定的套接字参数。

参数：

  * level: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 层级，例如 `SOL_SOCKET`。
  * option: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 参数，例如 `SO_KEEPALIVE`。
  * value: [CPointer](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#cpointert)<[Unit](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#unit)> \- 参数值。
  * valueLength: [CPointer](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#cpointert)<[UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative)> \- 参数值长度。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `getsockopt` 返回失败时，抛出异常。

### func getSocketOptionBool\(Int32, Int32\)
    
    __
    
    public func getSocketOptionBool(
        level: Int32,
        option: Int32
    ): Bool
    
功能：读取指定的套接字参数。从 [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) 强转而来。`0 => false`，非 `0 => true`。

参数：

  * level: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 层级，例如 `SOL_SOCKET`。
  * option: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 参数，例如 `SO_KEEPALIVE`。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 读取到的参数值。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `getsockopt` 返回失败时或参数大小超过 [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) 的阈值时，抛出异常。

### func getSocketOptionIntNative\(Int32, Int32\)
    
    __
    
    public func getSocketOptionIntNative(
        level: Int32,
        option: Int32
    ): IntNative
    
功能：读取指定的套接字参数。

参数：

  * level: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 层级，例如 `SOL_SOCKET`。
  * option: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 参数，例如 `SO_KEEPALIVE`。

返回值：

  * [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 参数值。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `getsockopt` 返回失败时或参数大小超过 [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) 的阈值时，抛出异常。

### func hashCode\(\)
    
    __
    
    public override func hashCode(): Int64
    
功能：获取当前 [TcpSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-tcpsocket) 实例的哈希值。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- [TcpSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-tcpsocket) 实例的哈希值。

### func isClosed\(\)
    
    __
    
    public func isClosed(): Bool
    
功能：判断套接字是否通过调用 `close` 显式关闭。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 套接字是否已经调用 `close` 显式关闭。是则返回 `true`；否则返回 `false`。

### func read\(Array\<Byte\>\)
    
    __
    
    public override func read(buffer: Array\<Byte\>): Int64
    
功能：读取报文。超时情况按 `readTimeout` 决定，详见 `readTimeout`。

> **说明：**
> 
>   * 由于系统底层接口差异，如果连接被对端关闭，`read` 和 `write` 接口的行为也有相应的差异。
>   * Windows 系统上，对端关闭连接后，如果本端调用一次 `write`，会导致清空缓冲区内容，在此基础上再调用 `read` 会抛出连接关闭异常。
>   * Linux/macOS 系统上，对端关闭连接后，先调用 `write` 再调用 `read` 函数仍会读出缓冲区中的内容。
> 

参数：

  * buffer: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 存储读出数据的缓冲区。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 读取的数据长度。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `buffer` 大小为 0 或者因系统原因读取失败时，抛出异常。

### func setSocketOption\(Int32, Int32, CPointer\<Unit\>, UIntNative\)
    
    __
    
    public func setSocketOption(
        level: Int32,
        option: Int32,
        value: CPointer\<Unit\>,
        valueLength: UIntNative
    ): Unit
    
功能：设置指定的套接字参数。

参数：

  * level: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 层级，例如 `SOL_SOCKET`。
  * option: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 参数，例如 `SO_KEEPALIVE`。
  * value: [CPointer](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#cpointert)<[Unit](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#unit)> \- 参数值。
  * valueLength: [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 参数值长度。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `setsockopt` 返回失败时，抛出异常。

### func setSocketOptionBool\(Int32, Int32, Bool\)
    
    __
    
    public func setSocketOptionBool(
        level: Int32,
        option: Int32,
        value: Bool
    ): Unit
    
功能：设置指定的套接字参数。

参数：

  * level: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 层级，例如 `SOL_SOCKET`。
  * option: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 参数，例如 `SO_KEEPALIVE`。
  * value: [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 参数值。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `setsockopt` 返回失败时，抛出异常。

### func setSocketOptionIntNative\(Int32, Int32, IntNative\)
    
    __
    
    public func setSocketOptionIntNative(
        level: Int32,
        option: Int32,
        value: IntNative
    ): Unit
    
功能：设置指定的套接字参数。

参数：

  * level: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 层级，例如 `SOL_SOCKET`。
  * option: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 参数，例如 `SO_KEEPALIVE`。
  * value: [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 参数值。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `setsockopt` 返回失败时，抛出异常。

### func toString\(\)
    
    __
    
    public override func toString(): String
    
功能：返回当前 [TcpSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-tcpsocket) 的状态信息。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 包含当前 [TcpSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-tcpsocket) 状态信息的字符串。

### func write\(Array\<Byte\>\)
    
    __
    
    public override func write(payload: Array\<Byte\>): Unit
    
功能：写入报文。超时情况按 `writeTimeout` 决定，详见 `writeTimeout`。

参数：

  * payload: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 存储写入数据的缓冲区。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `buffer` 大小为 0 或者当因系统原因写入失败时，抛出异常。

### operator func \!=\(TcpSocket\)
    
    __
    
    public override operator func !=(other: TcpSocket): Bool
    
功能：判断两个 [TcpSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-tcpsocket) 实例是否不等。

参数：

  * other: [TcpSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-tcpsocket) \- 参与比较的 [TcpSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-tcpsocket) 实例。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果两个 [TcpSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-tcpsocket) 实例不等，则返回 `true`；否则，返回 `false`。

### operator func ==\(TcpSocket\)
    
    __
    
    public override operator func ==(other: TcpSocket): Bool
    
功能：判断两个 [TcpSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-tcpsocket) 实例是否相等。

参数：

  * other: [TcpSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-tcpsocket) \- 参与比较的 [TcpSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-tcpsocket) 实例。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果两个 [TcpSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-tcpsocket) 实例相等，则返回 `true`；否则，返回 `false`。

## class UdpSocket
    
    __
    
    public class UdpSocket <: DatagramSocket {
        public init(bindAt!: SocketAddress)
        public init(bindAt!: UInt16)
    }
    
功能：提供 udp 报文通信。

`UdpSocket` 创建实例后，需要调用 `bind()` 绑定，可在不与远端建连的前提下接受报文。不过，`UdpSocket` 也可以通过 `connect()/disconnect()` 接口进行建连。 UDP 协议要求传输报文大小不可超过 64KB 。 `UdpSocket` 需要被显式 `close()` 。可以参阅 [DatagramSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_interfaces.html#interface-datagramsocket) 获取更多信息。

父类型：

  * [DatagramSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_interfaces.html#interface-datagramsocket)

### prop localAddress
    
    __
    
    public override prop localAddress: SocketAddress
    
功能：读取 `Socket` 将要或已经被绑定的本地地址。

类型：[SocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-socketaddress)

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `Socket` 已经被关闭或无可用的本地地址（本地地址未配置并且套接字未连接）时，抛出异常。

### prop receiveBufferSize
    
    __
    
    public mut prop receiveBufferSize: Int64
    
功能：设置和读取 `SO_RCVBUF` 属性。

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当 `size` 小于等于 0 时，抛出异常。
  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `Socket` 已关闭时，抛出异常。

### prop receiveTimeout
    
    __
    
    public override mut prop receiveTimeout: ?Duration
    
功能：设置和读取 `receive/receiveFrom` 操作超时时间。

如果设置的时间过小将会设置为最小时钟周期值；过大时将设置为最大超时时间（263-1 纳秒）；默认值为 `None`。

类型：?[Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration)

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当超时时间小于 0 时，抛出异常。

### prop remoteAddress
    
    __
    
    public override prop remoteAddress: ?SocketAddress
    
功能：读取 `Socket` 已经连接的远端地址，当 `Socket` 未连接时返回 `None`。

类型：?[SocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-socketaddress)

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `Socket` 已经被关闭时，抛出异常。

### prop reuseAddress
    
    __
    
    public mut prop reuseAddress: Bool
    
功能：设置和读取 `SO_REUSEADDR` 属性。

属性默认以及生效后的行为取决于系统，使用前，请参阅不同系统针对此属性 `SO_REUSEADDR/SOCK_REUSEADDR` 的说明文档。

类型：[Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool)

### prop reusePort
    
    __
    
    public mut prop reusePort: Bool
    
功能：设置和读取 `SO_REUSEPORT` 属性。

Windows 上可使用 `SO_REUSEADDR`，但无 `SO_REUSEPORT` 属性，因此会抛出异常。 属性默认以及配置生效后的行为取决于系统，使用前，请参阅不同系统针对此属性 `SO_REUSEPORT` 的说明文档。

类型：[Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool)

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- Windows 上不支持此类型，抛出异常。

### prop sendBufferSize
    
    __
    
    public mut prop sendBufferSize: Int64
    
功能：设置和读取 `SO_SNDBUF` 属性。

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当 `size` 小于等于 0 时，抛出异常。
  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `Socket` 已关闭时，抛出异常。

### prop sendTimeout
    
    __
    
    public override mut prop sendTimeout: ?Duration
    
功能：设置和读取 `send/sendTo` 操作超时时间。

如果设置的时间过小将会设置为最小时钟周期值；过大时将设置为最大超时时间（263-1 纳秒）；默认值为 `None`。

类型：?[Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration)

### init\(SocketAddress\)
    
    __
    
    public init(bindAt!: SocketAddress)
    
功能：创建一个未绑定的 `UdpSocket` 实例。

参数：

  * bindAt\!: [SocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-socketaddress) \- 绑定地址及端口。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当超时时间小于 0 时，抛出异常。

### init\(UInt16\)
    
    __
    
    public init(bindAt!: UInt16)
    
功能：创建一个未绑定的 `UdpSocket` 实例。

参数：

  * bindAt\!: [UInt16](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint16) \- 绑定端口。

### func bind\(\)
    
    __
    
    public func bind(): Unit
    
功能：绑定本地端口失败后需要 `close` 套接字，不支持多次重试。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当因系统原因绑定失败时，抛出异常。

### func close\(\)
    
    __
    
    public override func close(): Unit
    
功能：关闭套接字，所有操作除了 `close/isClosed` 之外，均不允许再调用。接口允许多次调用。

### func connect\(SocketAddress\)
    
    __
    
    public func connect(remote: SocketAddress): Unit
    
功能：连接特定远端地址，可通过 `disconnect` 撤销配置。

仅接受该远端地址的报文。必须在调用 `bind` 后执行。此操作执行后，端口将开始接收 ICMP 报文，若收到异常报文后，可能导致 `send/sendTo` 执行失败。

参数：

  * remote: [SocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-socketaddress) \- 远端地址。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当远端地址不合法时，抛出异常。
  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当端口未绑定、连接因系统原因无法建立或者 Windows 平台下远端地址为全零地址时，抛出异常。

### func disconnect\(\)
    
    __
    
    public func disconnect(): Unit
    
功能：停止连接。取消仅收取特定对端报文。可在 `connect` 前调用，可多次调用。

### func getSocketOption\(Int32, Int32, CPointer\<Unit\>, CPointer\<UIntNative\>\)
    
    __
    
    public func getSocketOption(
        level: Int32,
        option: Int32,
        value: CPointer\<Unit\>,
        valueLength: CPointer\<UIntNative\>
    ): Unit
    
功能：获取指定的套接字参数。

参数：

  * level: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 层级，例如 `SOL_SOCKET`。
  * option: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 参数，例如 `SO_KEEPALIVE`。
  * value: [CPointer](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#cpointert)<[Unit](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#unit)> \- 参数值。
  * valueLength: [CPointer](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#cpointert)<[UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative)> \- 参数值长度。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `getsockopt` 返回失败时，抛出异常。

### func getSocketOptionBool\(Int32, Int32\)
    
    __
    
    public func getSocketOptionBool(
        level: Int32,
        option: Int32
    ): Bool
    
功能：获取指定的套接字参数。从 [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) 强转而来。`0 => false`，非 `0 => true`。

参数：

  * level: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 层级，例如 `SOL_SOCKET`。
  * option: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 参数，例如 `SO_KEEPALIVE`。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 指定的套接字参数。从 [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) 强转而来。`0 => false`，非 `0 => true`。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `getsockopt` 返回失败时或参数大小超过 [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) 的阈值时，抛出异常。

### func getSocketOptionIntNative\(Int32, Int32\)
    
    __
    
    public func getSocketOptionIntNative(
        level: Int32,
        option: Int32
    ): IntNative
    
功能：获取指定的套接字参数。

参数：

  * level: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 层级，例如 `SOL_SOCKET`。

  * option: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 参数，例如 `SO_KEEPALIVE`。

返回值：

  * [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 指定的套接字参数值。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `getsockopt` 返回失败时或参数大小超过 [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) 的阈值时抛出异常。

### func isClosed\(\)
    
    __
    
    public override func isClosed(): Bool
    
功能：判断套接字是否通过调用 `close` 显式关闭。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果该套接字已调用 `close` 显示关闭，则返回 `true`；否则，返回 `false`。

### func receive\(Array\<Byte\>\)
    
    __
    
    public func receive(buffer: Array\<Byte\>): Int64
    
功能：从 `connect` 连接到的地址收取报文。

参数：

  * buffer: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 存储收取到的报文的地址。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 收取到的报文大小。

### func receiveFrom\(Array\<Byte\>\)
    
    __
    
    public override func receiveFrom(buffer: Array\<Byte\>): (SocketAddress, Int64)
    
功能：接收报文。

参数：

  * buffer: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 存储收取到报文的缓存地址。

返回值：

  * \([SocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-socketaddress), [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)\) - 收取到的报文的发送端地址，及实际收取到的报文大小，可能为 0 或者大于参数 `buffer` 的大小。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当本机缓存过小无法读取报文时，抛出异常。
  * [SocketTimeoutException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-sockettimeoutexception) \- 当读取超时时，抛出异常。

### func send\(Array\<Byte\>\)
    
    __
    
    public func send(payload: Array\<Byte\>): Unit
    
功能：发送报文到 `connect` 连接到的地址。

参数：

  * payload: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 发送报文内容。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `payload` 的大小超出系统限制或者系统发送失败（例如：当 `connect` 被调用，并且收到异常 ICMP 报文时，发送失败）时，抛出异常。

### func sendTo\(SocketAddress, Array\<Byte\>\)
    
    __
    
    public override func sendTo(recipient: SocketAddress, payload: Array\<Byte\>): Unit
    
功能：发送报文。当没有足够的缓存地址时可能会被阻塞。

参数：

  * recipient: [SocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-socketaddress) \- 发送的对端地址。
  * payload: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 发送报文内容。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `payload` 的大小超出系统限制、系统发送失败（例如：当 `connect` 被调用，并且收到异常 ICMP 报文时，发送失败）、Windows 平台下远端地址为全零地址或者 macOS 平台下 `connect` 被调用后调用 `sendTo` 时，抛出异常。

### func setSocketOption\(Int32, Int32, CPointer\<Unit\>, UIntNative\)
    
    __
    
    public func setSocketOption(
        level: Int32,
        option: Int32,
        value: CPointer\<Unit\>,
        valueLength: UIntNative
    ): Unit
    
功能：设置指定的套接字参数。

参数：

  * level: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 层级，例如 `SOL_SOCKET`。
  * option: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 参数，例如 `SO_KEEPALIVE`。
  * value: [CPointer](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#cpointert)<[Unit](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#unit)> \- 参数值。
  * valueLength: [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 参数值长度。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `setsockopt` 返回失败时，抛出异常。

### func setSocketOptionBool\(Int32, Int32, Bool\)
    
    __
    
    public func setSocketOptionBool(
        level: Int32,
        option: Int32,
        value: Bool
    ): Unit
    
功能：设置指定的套接字参数。

参数：

  * level: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 层级，例如 `SOL_SOCKET`。
  * option: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 参数，例如 `SO_KEEPALIVE`。
  * value: [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 参数值。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `setsockopt` 返回失败时，抛出异常。

### func setSocketOptionIntNative\(Int32, Int32, IntNative\)
    
    __
    
    public func setSocketOptionIntNative(
        level: Int32,
        option: Int32,
        value: IntNative
    ): Unit
    
功能：设置指定的套接字参数。

参数：

  * level: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 层级，例如 `SOL_SOCKET`。
  * option: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 参数，例如 `SO_KEEPALIVE`。
  * value: [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 参数值。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `setsockopt` 返回失败时，抛出异常。

### func toString\(\)
    
    __
    
    public override func toString(): String
    
功能：返回当前 [UdpSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-udpsocket) 的状态信息。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 包含当前 [UdpSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-udpsocket) 状态信息的字符串。

## class UnixDatagramSocket
    
    __
    
    public class UnixDatagramSocket <: DatagramSocket {
        public init(bindAt!: SocketAddress)
        public init(bindAt!: String)
    }
    
功能：提供基于数据包的主机通讯能力。

[UnixDatagramSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-unixdatagramsocket) 实例创建后，应当显式调用 `bind()` 接口绑定。`Unix` 数据包套接字不需要连接，不需要与远端握手多次。不过用户也可以通过 `connect/disconnect` 接口与远端建连和断连。 不同于 UDP，UDS 没有数据包大小限制，限制来源于操作系统和接口实现。 套接字资源需要用 `close` 接口显式回收。可参阅 [DatagramSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_interfaces.html#interface-datagramsocket) 获取更多信息。

> **注意：**
> 
>   * 该类型不支持在 Windows 平台上运行。
> 

父类型：

  * [DatagramSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_interfaces.html#interface-datagramsocket)

### prop localAddress
    
    __
    
    public override prop localAddress: SocketAddress
    
功能：读取 `socket` 将要或已经绑定的本地地址。

类型：[SocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-socketaddress)

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `socket` 已经关闭时，抛出异常。

### prop receiveBufferSize
    
    __
    
    public mut prop receiveBufferSize: Int64
    
功能：设置和读取 `SO_RCVBUF` 属性，提供一种方式指定发包缓存大小。选项的生效情况取决于系统。

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当 `size` 小于等于 0 时，抛出异常。
  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `Socket` 已关闭时，抛出异常。

### prop receiveTimeout
    
    __
    
    public override mut prop receiveTimeout: ?Duration
    
功能：设置和读取 `receive/receiveFrom` 操作超时时间。

如果设置的时间过小将会设置为最小时钟周期值；过大时将设置为最大超时时间（263-1 纳秒）；默认值为 `None`。

类型：?[Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration)

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当超时时间小于 0 时，抛出异常。

### prop remoteAddress
    
    __
    
    public override prop remoteAddress: ?SocketAddress
    
功能：读取 `Socket` 已经连接的远端地址，当 `Socket` 未连接时返回 `None`。

类型：?[SocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-socketaddress)

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `Socket` 已经被关闭时，抛出异常。

### prop sendBufferSize
    
    __
    
    public mut prop sendBufferSize: Int64
    
功能：设置和读取 `SO_SNDBUF` 属性，提供一种方式指定发包缓存大小。选项的生效情况取决于系统。

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当 `size` 小于等于 0 时，抛出异常。
  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `Socket` 已关闭时，抛出异常。

### prop sendTimeout
    
    __
    
    public override mut prop sendTimeout: ?Duration
    
功能：设置和读取 `send/sendTo` 操作超时时间。

如果设置的时间过小将会设置为最小时钟周期值；过大时将设置为最大超时时间（263-1 纳秒）；默认值为 `None`。

类型：?[Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration)

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当超时时间小于 0 时，抛出异常。

### init\(SocketAddress\)
    
    __
    
    public init(bindAt!: SocketAddress)
    
功能：创建一个未连接的 [UnixDatagramSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-unixdatagramsocket) 实例。

此文件类型可通过 [isSock](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-issockstring)\(\) 判断是否存在，可通过 [unlink](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-unlinkstring)\(\) 接口删除。

参数：

  * bindAt\!: [SocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-socketaddress) \- 连接的套接字地址。地址应当不存在，在 `bind` 时会创建。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当路径为空或已存在时，抛出异常。

### init\(String\)
    
    __
    
    public init(bindAt!: String)
    
功能：创建一个未连接的 [UnixDatagramSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-unixdatagramsocket) 实例。

此文件类型可通过 [isSock](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-issockstring)\(\) 判断是否存在，可通过 [unlink](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-unlinkstring)\(\) 接口删除。

参数：

  * bindAt\!: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 连接的文件地址。文件地址应当不存在，在 `bind` 时会创建。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当文件地址不合法时，抛出异常。
  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当文件地址为空或已存在时，抛出异常。

### func bind\(\)
    
    __
    
    public func bind(): Unit
    
功能：绑定一个 `Unix datagram` 套接字，并创建监听队列。

此接口自动在本地地址中创建一个套接字文件，如该文件已存在则会绑定失败。此文件类型可通过 [isSock](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-issockstring) 判断是否存在，可通过 [unlink](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-unlinkstring)\(\) 接口删除，失败后需要 `close` 套接字，不支持多次重试。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当文件地址已存在，或文件创建失败时，抛出异常。

### func close\(\)
    
    __
    
    public override func close(): Unit
    
功能：关闭套接字，所有操作除了 `close/isClosed` 之外，均不允许再调用。接口允许多次调用。

### func connect\(SocketAddress\)
    
    __
    
    public func connect(remote: SocketAddress): Unit
    
功能：连接特定远端地址，可通过 `disconnect` 撤销配置。

仅接受该远端地址的报文。默认执行 `bind`，因此不需额外调用 `bind`。此操作执行后，端口将开始接收 ICMP 报文，若收到异常报文后，可能导致 `send/sendTo` 执行失败。

参数：

  * remote: [SocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-socketaddress) \- 远端套接字地址。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当地址未绑定时，抛出异常。

### func connect\(String\)
    
    __
    
    public func connect(remotePath: String): Unit
    
功能：连接特定远端地址，可通过 `disconnect` 撤销配置。

仅接受该远端地址的报文。必须在 `bind` 后调用。此操作执行后，端口将开始接收 ICMP 报文，若收到异常报文后，可能导致 `send/sendTo` 执行失败。

参数：

  * remotePath: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 远端文件地址。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当地址未绑定时，抛出异常。

### func disconnect\(\)
    
    __
    
    public func disconnect(): Unit
    
功能：停止连接。取消仅收取特定对端报文。可在 `connect` 前调用，可多次调用。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当未绑定时，抛出异常。

### func getSocketOption\(Int32, Int32, CPointer\<Unit\>, CPointer\<UIntNative\>\)
    
    __
    
    public func getSocketOption(
        level: Int32,
        option: Int32,
        value: CPointer\<Unit\>,
        valueLength: CPointer\<UIntNative\>
    ): Unit
    
功能：获取指定的套接字参数。

参数：

  * level: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 层级，例如 `SOL_SOCKET`。
  * option: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 参数，例如 `SO_KEEPALIVE`。
  * value: [CPointer](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#cpointert)<[Unit](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#unit)> \- 参数值。
  * valueLength: [CPointer](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#cpointert)\<UIntNative\> \- 参数值长度。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `getsockopt` 返回失败时，抛出异常。

### func getSocketOptionIntNative\(Int32, Int32\)
    
    __
    
    public func getSocketOptionIntNative(
        level: Int32,
        option: Int32
    ): IntNative
    
功能：获取指定的套接字参数。

参数：

  * level: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 层级，例如 `SOL_SOCKET`。
  * option: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 参数，例如 `SO_KEEPALIVE`。

返回值：

  * [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 返回指定的套接字参数值。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `getsockopt` 返回失败时或参数大小超过 [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) 的阈值时，抛出异常。

### func isClosed\(\)
    
    __
    
    public override func isClosed(): Bool
    
功能：判断套接字是否通过调用 `close` 显式关闭。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 返回套接字是否已经通过调用 `close` 显式关闭。是则返回 `true`；否则，返回 `false`。

### func receive\(Array\<Byte\>\)
    
    __
    
    public func receive(buffer: Array\<Byte\>): Int64
    
功能：从 `connect` 连接到的地址收取报文。

参数：

  * buffer: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 存储收取到的报文的地址。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 收取到的报文大小。

### func receiveFrom\(Array\<Byte\>\)
    
    __
    
    public override func receiveFrom(buffer: Array\<Byte\>): (SocketAddress, Int64)
    
功能：收取报文。

参数：

  * buffer: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 存储收取到报文的地址。

返回值：

  * \([SocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-socketaddress), [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)\) - 收取到的报文的发送端地址，及实际收取到的报文大小，可能为 0 或者大于参数 `buffer` 的大小。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 本机缓存过小无法读取报文时，抛出异常。
  * [SocketTimeoutException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-sockettimeoutexception) \- 当读取超时时，抛出异常。

### func send\(Array\<Byte\>\)
    
    __
    
    public func send(payload: Array\<Byte\>): Unit
    
功能：发送报文到 `connect` 连接到的地址。

参数：

  * payload: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 发送报文内容。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `payload` 的大小超出系统限制或者系统发送失败时，抛出异常。

### func sendTo\(SocketAddress, Array\<Byte\>\)
    
    __
    
    public override func sendTo(recipient: SocketAddress, payload: Array\<Byte\>): Unit
    
功能：发送报文。当没有足够的缓存地址时可能会被阻塞。

参数：

  * recipient: [SocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-socketaddress) \- 发送的对端地址。
  * payload: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 发送报文内容。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `payload` 的大小超出系统限制、系统发送失败（例如：当 `connect` 被调用，并且收到异常 ICMP 报文时，发送将失败）或者 macOS 平台下 `connect` 被调用后调用 `sendTo` 时，抛出异常。

### func setSocketOption\(Int32, Int32, CPointer\<Unit\>, UIntNative\)
    
    __
    
    public func setSocketOption(
        level: Int32,
        option: Int32,
        value: CPointer\<Unit\>,
        valueLength: UIntNative
    ): Unit
    
功能：设置指定的套接字参数。

参数：

  * level: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 层级，例如 `SOL_SOCKET`。
  * option: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 参数，例如 `SO_KEEPALIVE`。
  * value: [CPointer](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#cpointert)<[Unit](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#unit)> \- 参数值。
  * valueLength: [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 参数值长度。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `setsockopt` 返回失败时，抛出异常。

### func setSocketOptionBool\(Int32, Int32, Bool\)
    
    __
    
    public func setSocketOptionBool(
        level: Int32,
        option: Int32,
        value: Bool
    ): Unit
    
功能：设置指定的套接字参数。

参数：

  * level: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 层级，例如 `SOL_SOCKET`。
  * option: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 参数，例如 `SO_KEEPALIVE`。
  * value: [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 参数值。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `setsockopt` 返回失败时，抛出异常。

### func setSocketOptionIntNative\(Int32, Int32，IntNative\)
    
    __
    
    public func setSocketOptionIntNative(
        level: Int32,
        option: Int32,
        value: IntNative
    ): Unit
    
功能：设置指定的套接字参数。

参数：

  * level: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 层级，例如 `SOL_SOCKET`。
  * option: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 参数，例如 `SO_KEEPALIVE`。
  * value: [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 参数值。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `setsockopt` 返回失败时抛出异常。

#### func getSocketOptionBool\(Int32, Int32\)
    
    __
    
    public func getSocketOptionBool(
        level: Int32,
        option: Int32
    ): Bool
    
功能：获取指定的套接字参数。从 [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) 强转而来。`0 => false，非 0 => true`。

参数：

  * level: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 层级，例如 `SOL_SOCKET`。
  * option: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 参数，例如 `SO_KEEPALIVE`。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 返回指定的套接字参数值。从 [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) 强转而来。`0 => false，非 0 => true`。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `getsockopt` 返回失败时，抛出异常。

### func toString\(\)
    
    __
    
    public override func toString(): String
    
功能：返回当前 `UDS` 的状态信息。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 包含当前 `UDS` 状态信息的字符串。

## class UnixServerSocket
    
    __
    
    public class UnixServerSocket <: ServerSocket {
        public init(bindAt!: String)
        public init(bindAt!: SocketAddress)
    }
    
功能：提供基于双工流的主机通讯服务端。

[UnixServerSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-unixserversocket) 监听连接，创建后可以通过属性和 `setSocketOptionXX` 接口配置属性值。需要调用 `bind()` 接口绑定本地地址开始监听连接。可以通过 `accept()` 接口接受连接。

> **注意：**
> 
>   * 该类型不支持在 Windows 平台上运行。
> 

父类型：

  * [ServerSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_interfaces.html#interface-serversocket)

### prop backlogSize
    
    __
    
    public mut prop backlogSize: Int64
    
功能：设置和读取 `backlog` 大小。仅可在调用 `bind` 前调用，否则将抛出异常。 变量是否生效取决于系统行为。

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当在 `bind` 后调用，将抛出异常。

### prop localAddress
    
    __
    
    public override prop localAddress: SocketAddress
    
功能：读取 `Socket` 将要或已经被绑定的本地地址。

类型：[SocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-socketaddress)

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `Socket` 已经被关闭时，抛出异常。

### prop receiveBufferSize
    
    __
    
    public mut prop receiveBufferSize: Int64
    
功能：设置和读取 `SO_RCVBUF` 属性。

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当 `size` 小于等于 0 时，抛出异常。
  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `Socket` 已关闭时，抛出异常。

### prop sendBufferSize
    
    __
    
    public mut prop sendBufferSize: Int64
    
功能：设置和读取 `SO_SNDBUF` 属性。

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当 `size` 小于等于 0 时，抛出异常。
  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `Socket` 已关闭时，抛出异常。

### init\(SocketAddress\)
    
    __
    
    public init(bindAt!: SocketAddress)
    
功能：创建一个未连接的 [UnixServerSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-unixserversocket) 实例。

参数：

  * bindAt\!: [SocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-socketaddress) \- 连接的套接字地址。

### init\(String\)
    
    __
    
    public init(bindAt!: String)
    
功能：创建一个未连接的 [UnixServerSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-unixserversocket) 实例。

此文件类型可通过 [isSock](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-issockstring) 判断是否存在，可通过 [unlink](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-unlinkstring)\(\) 接口删除。

参数：

  * bindAt\!: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 连接的文件地址。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当文件地址不合法时，抛出异常。

### func accept\(\)
    
    __
    
    public override func accept(): UnixSocket
    
功能：等待接受一个客户端的连接，或从队列中读取连接。

返回值：

  * [UnixSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-unixsocket) \- 连接的客户端套接字。

### func accept\(?Duration\)
    
    __
    
    public override func accept(timeout!: ?Duration): UnixSocket
    
功能：等待接受一个客户端的连接，或从队列中读取连接。

参数：

  * timeout\!: ?[Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) \- 超时时间。

返回值：

  * [UnixSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-unixsocket) \- 连接的客户端套接字。

异常：

  * [SocketTimeoutException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-sockettimeoutexception) \- 当连接超时时，抛出异常。
  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当超时时间小于 0 时，抛出异常。

### func bind\(\)
    
    __
    
    public override func bind(): Unit
    
功能：绑定一个 `Unix domain` 套接字，并创建监听队列。

此接口自动在本地地址中创建一个套接字文件，如该文件已存在则会绑定失败。此文件类型可通过 [isSock](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-issockstring) 接口判断是否存在，可通过 [unlink](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-unlinkstring)\(\) 接口删除，失败后需要 `close` 套接字，不支持多次重试。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当因系统原因绑定失败时，抛出异常。

### func close\(\)
    
    __
    
    public override func close(): Unit
    
功能：关闭套接字，该套接字的所有操作除了 `close/isClosed` 之外，均不允许再调用。此接口允许多次调用。

### func getSocketOption\(Int32, Int32, CPointer\<Unit\>, CPointer\<UIntNative\>\)
    
    __
    
    public func getSocketOption(
        level: Int32,
        option: Int32,
        value: CPointer\<Unit\>,
        valueLength: CPointer\<UIntNative\>
    ): Unit
    
功能：获取指定的套接字参数。

参数：

  * level: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 层级，例如 `SOL_SOCKET`。
  * option: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 参数，例如 `SO_KEEPALIVE`。
  * value: [CPointer](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#cpointert)<[Unit](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#unit)> \- 参数值。
  * valueLength: [CPointer](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#cpointert)<[UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative)> \- 参数值长度。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `getsockopt` 返回失败时，抛出异常。

### func getSocketOptionBool\(Int32, Int32）
    
    __
    
    public func getSocketOptionBool(
        level: Int32,
        option: Int32
    ): Bool
    
功能：获取指定的套接字参数。从 [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) 强转而来。`0 => false，非 0 => true`。

参数：

  * level: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 层级，例如 `SOL_SOCKET`。
  * option: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 参数，例如 `SO_KEEPALIVE`。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 返回指定的套接字参数。从 [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) 强转而来。`0 => false，非 0 => true`。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `getsockopt` 返回失败时或参数大小超过 [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) 的阈值时，抛出异常。

### func getSocketOptionIntNative\(Int32, Int32\)
    
    __
    
    public func getSocketOptionIntNative(
        level: Int32,
        option: Int32
    ): IntNative
    
功能：获取返回值为整型的套接字参数。

参数：

  * level: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 层级，例如 `SOL_SOCKET`。
  * option: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 参数，例如 `SO_KEEPALIVE`。

返回值：

  * [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 指定的套接字参数值。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `getsockopt` 返回失败时或参数大小超过 [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) 的阈值时，抛出异常。

### func isClosed\(\)
    
    __
    
    public override func isClosed(): Bool
    
功能：判断套接字是否通过调用 `close` 显式关闭。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果套接字是通过调用 `close` 显式关闭，则返回 true；否则，返回 false。

### func setSocketOption\(Int32, Int32, CPointer\<Unit\>, UIntNative\)
    
    __
    
    public func setSocketOption(
        level: Int32,
        option: Int32,
        value: CPointer\<Unit\>,
        valueLength: UIntNative
    ): Unit
    
功能：设置返回值为整型的套接字参数。

参数：

  * level: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 层级，例如 `SOL_SOCKET`。
  * option: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 参数，例如 `SO_KEEPALIVE`。
  * value: [CPointer](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#cpointert)<[Unit](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#unit)> \- 参数值。
  * valueLength: [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 参数值长度。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `setsockopt` 返回失败时，抛出异常。

### func setSocketOptionBool\(Int32, Int32, Bool）
    
    __
    
    public func setSocketOptionBool(
        level: Int32,
        option: Int32,
        value: Bool
    ): Unit
    
功能：设置指定的套接字参数。

参数：

  * level: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 层级，例如 `SOL_SOCKET`。
  * option: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 参数，例如 `SO_KEEPALIVE`。
  * value: [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 参数值。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `setsockopt` 返回失败时，抛出异常。

### func setSocketOptionIntNative\(Int32, Int32, IntNative\)
    
    __
    
    public func setSocketOptionIntNative(
        level: Int32,
        option: Int32,
        value: IntNative
    ): Unit
    
功能：设置指定的套接字参数。

参数：

  * level: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 层级，例如 `SOL_SOCKET`。
  * option: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 参数，例如 `SO_KEEPALIVE`。
  * value: [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 参数值。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `setsockopt` 返回失败时，抛出异常。

### func toString\(\)
    
    __
    
    public override func toString(): String
    
功能：返回当前 [UnixServerSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-unixserversocket) 的状态信息。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 包含当前 [UnixServerSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-unixserversocket) 状态信息的字符串。

## class UnixSocket
    
    __
    
    public class UnixSocket <: StreamingSocket {
        public init(address: SocketAddress, localAddress!: ?SocketAddress = None)
        public init(path: String, localPath!: ?String = None)
    }
    
功能：提供基于双工流的主机通讯客户端。

[UnixSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-unixsocket) 实例创建后应调用 `connect()` 接口创建连接，并且在结束时显式调用 `close()` 回收资源。可参阅 [StreamingSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_interfaces.html#interface-streamingsocket) 获取更多信息。

> **注意：**
> 
>   * 该类型不支持在 Windows 平台上运行。
> 

父类型：

  * [StreamingSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_interfaces.html#interface-streamingsocket)

### prop localAddress
    
    __
    
    public override prop localAddress: SocketAddress
    
功能：读取 `Socket` 将要或已经被绑定的本地地址。

类型：[SocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-socketaddress)

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `Socket` 已经被关闭或无可用的本地地址（本地地址未配置并且套接字未连接）时，抛出异常。

### prop readTimeout
    
    __
    
    public override mut prop readTimeout: ?Duration
    
功能：设置和读取读操作超时时间。

如果设置的时间过小将会设置为最小时钟周期值，过大时将设置为`None`，默认值为 `None`。

类型：?[Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration)

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当超时时间小于 0 时，抛出异常。

### prop receiveBufferSize
    
    __
    
    public mut prop receiveBufferSize: Int64
    
功能：设置和读取 `SO_RCVBUF` 属性。

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当 `size` 小于等于 0 时，抛出异常。
  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `Socket` 已关闭时，抛出异常。

### prop remoteAddress
    
    __
    
    public override prop remoteAddress: SocketAddress
    
功能：读取 `Socket` 已经或将要连接的远端地址。

类型：[SocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-socketaddress)

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `Socket` 已经被关闭时，抛出异常。

### prop sendBufferSize
    
    __
    
    public mut prop sendBufferSize: Int64
    
功能：设置和读取 `SO_SNDBUF` 属性。

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当 `size` 小于等于 0 时，抛出异常。
  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `Socket` 已关闭时，抛出异常。

### prop writeTimeout
    
    __
    
    public override mut prop writeTimeout: ?Duration
    
功能：设置和读取写操作超时时间。

如果设置的时间过小将会设置为最小时钟周期值；过大时将设置为最大超时时间（263-1 纳秒）；默认值为 `None`。

类型：?[Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration)

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当超时时间小于 0 时，抛出异常。

### init\(SocketAddress, ?SocketAddress\)
    
    __
    
    public init(address: SocketAddress, localAddress!: ?SocketAddress = None)
    
功能：创建一个未连接的 [UnixSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-unixsocket) 实例。

参数：

  * address: [SocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-socketaddress) \- 连接的套接字地址。
  * localAddress\!: ?[SocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-socketaddress) \- 需要 bind 的本地套接字地址；默认值为 `None`。

### init\(String, ?String\)
    
    __
    
    public init(path: String, localPath!: ?String = None)
    
功能：创建一个未连接的 [UnixSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-unixsocket) 实例。

此文件类型可通过 [isSock](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-issockstring) 判断是否存在，可通过 [unlink](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-unlinkstring)\(\) 接口删除。

参数：

  * path: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 连接的文件地址。
  * localPath\!: ?[String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 需要 bind 的本地套接字地址路径；默认值为 `None`。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当文件地址不合法时，抛出异常。

### func close\(\)
    
    __
    
    public func close(): Unit
    
功能：关闭套接字，所有操作除了 `close/isClosed` 之外，均不允许再调用。接口允许多次调用。

### func connect\(?Duration\)
    
    __
    
    public func connect(timeout!: ?Duration = None): Unit
    
功能：建立远端连接，对端拒绝时连接失败，会自动绑定本地地址，因此不需要进行额外的绑定操作。

参数：

  * timeout\!: ?[Duration](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-duration) \- 超时时间，`None` 表示无超时时间。Unix 与 Tcp 不同，队列已满时，调用立即返回错误，而非重试阻塞等待。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 当远端地址不合法或者超时时间小于 0 时，抛出异常。
  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当连接因系统原因无法建立时。抛出异常。
  * [SocketTimeoutException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-sockettimeoutexception) \- 当连接超时时。抛出异常。

### func getSocketOption\(Int32, Int32, CPointer\<Unit\>, CPointer\<UIntNative\>\)
    
    __
    
    public func getSocketOption(
        level: Int32,
        option: Int32,
        value: CPointer\<Unit\>,
        valueLength: CPointer\<UIntNative\>
    ): Unit
    
功能：获取指定的套接字参数。

参数：

  * level: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 层级，例如 `SOL_SOCKET`。
  * option: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 参数，例如 `SO_KEEPALIVE`。
  * value: [CPointer](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#cpointert)<[Unit](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#unit)> \- 参数值。
  * valueLength: [CPointer](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#cpointert)<[UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative)> \- 参数值长度。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `getsockopt` 返回失败时，抛出异常。

### func getSocketOptionBool\(Int32, Int32\)
    
    __
    
    public func getSocketOptionBool(
        level: Int32,
        option: Int32
    ): Bool
    
功能：获取指定的套接字参数。从 [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) 强转而来。`0 => false`，非 `0 => true`。

参数：

  * level: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 层级，例如 `SOL_SOCKET`。
  * option: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 参数，例如 `SO_KEEPALIVE`。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 返回指定的套接字参数值。从 [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) 强转而来。`0 => false`，非 `0 => true`。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `getsockopt` 返回失败时或参数大小超过 [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) 的阈值时，抛出异常。

### func getSocketOptionIntNative\(Int32, Int32\)
    
    __
    
    public func getSocketOptionIntNative(
        level: Int32,
        option: Int32
    ): IntNative
    
功能：获取指定的套接字参数。

参数：

  * level: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 层级，例如 `SOL_SOCKET`。
  * option: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 参数，例如 `SO_KEEPALIVE`。

返回值：

  * [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 指定的套接字参数值。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `getsockopt` 返回失败时或参数大小超过 [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) 的阈值时，抛出异常。

### func isClosed\(\)
    
    __
    
    public func isClosed(): Bool
    
功能：判断套接字是否通过调用 `close` 显式关闭。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 返回套接字是否已经调用 `close` 显示关闭。是则返回 `true`；否则，返回 `false`。

### func read\(Array\<Byte\>\)
    
    __
    
    public override func read(buffer: Array\<Byte\>): Int64
    
功能：读取报文。超时情况按 `readTimeout` 决定，详见 `readTimeout`。

参数：

  * buffer: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 读取的数据存储变量。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- 读取的数据长度。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `buffer` 大小为 0 或者因系统原因读取失败时，抛出异常。

### func setSocketOption\(Int32, Int32, CPointer\<Unit\>, UIntNative\)
    
    __
    
    public func setSocketOption(
        level: Int32,
        option: Int32,
        value: CPointer\<Unit\>,
        valueLength: UIntNative
    ): Unit
    
功能：设置指定的套接字参数。

参数：

  * level: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 层级，例如 `SOL_SOCKET`。
  * option: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 参数，例如 `SO_KEEPALIVE`。
  * value: [CPointer](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#cpointert)<[Unit](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#unit)> \- 参数值。
  * valueLength: [UIntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uintnative) \- 参数值长度。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `setsockopt` 返回失败时，抛出异常。

### func setSocketOptionBool\(Int32, Int32, Bool）
    
    __
    
    public func setSocketOptionBool(
        level: Int32,
        option: Int32,
        value: Bool
    ): Unit
    
功能：设置指定的套接字参数。

参数：

  * level: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 层级，例如 `SOL_SOCKET`。
  * option: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 参数，例如 `SO_KEEPALIVE`。
  * value: [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 参数值。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `setsockopt` 返回失败时，抛出异常。

### func setSocketOptionIntNative\(Int32, Int32, IntNative\)
    
    __
    
    public func setSocketOptionIntNative(
        level: Int32,
        option: Int32,
        value: IntNative
    ): Unit
    
功能：设置指定的套接字参数。

参数：

  * level: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 层级，例如 `SOL_SOCKET`。
  * option: [Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32) \- 参数，例如 `SO_KEEPALIVE`。
  * value: [IntNative](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#intnative) \- 参数值。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `setsockopt` 返回失败时，抛出异常。

### func toString\(\)
    
    __
    
    public override func toString(): String
    
功能：返回当前 [UnixSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-unixsocket) 的状态信息。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 包含当前 [UnixSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-unixsocket) 状态信息的字符串。

### func write\(Array\<Byte\>\)
    
    __
    
    public override func write(buffer: Array\<Byte\>): Unit
    
功能：读取写入。超时情况按 `writeTimeout` 决定，详见 `writeTimeout`。

参数：

  * buffer: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 写入的数据存储变量。

异常：

  * [SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception) \- 当 `buffer` 大小为 0 时抛出异常，当因系统原因写入失败时，抛出异常。

## class UnixSocketAddress
    
    __
    
    public class UnixSocketAddress <: SocketAddress & Equatable\<UnixSocketAddress\> {
        public init(path: Array\<Byte\>)
        public init(path: String)
    }
    
功能：此类实现了 Unix Domain Socket 地址，Unix Domain Socket 地址封装了Unix Domain Socket 绑定或连接到的文件系统路径，路径长度不可超过 108。

如果路径是空字符串，那么表示它是 `unnamed` 地址，如果路径以`\0` 开头，那么它是 `abstract` 地址。路径中间不可包含 `\0`。

父类型：

  * SocketAddress
  * [Equatable](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_interfaces.html#interface-equatablet)\<UnixSocketAddress\>

### prop family
    
    __
    
    public prop family: AddressFamily
    
功能：获取当前 [UnixSocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-unixsocketaddress) 对象的地址族，总是 [AddressFamily.UNIX](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#static-const-unix)。

类型：[AddressFamily](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-addressfamily)

### prop size
    
    __
    
    public prop size: Int64
    
功能：获取当前 [UnixSocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-unixsocketaddress) 对象的原始字节长度。

类型：[Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64)

### init\(Array\<Byte\>\)
    
    __
    
    public init(path: Array\<Byte\>)
    
功能：根据 [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> 表示的文件系统路径构造 [UnixSocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-unixsocketaddress) 地址。

参数：

  * path: [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 文件系统路径字节数组。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 如果 address 不合法，抛出异常。

### init\(String\)
    
    __
    
    public init(path: String)
    
功能：根据字符串表示的文件系统路径构造 [UnixSocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-unixsocketaddress) 地址。

参数：

  * path: [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 文件系统路径字符串。

异常：

  * [IllegalArgumentException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_exceptions.html#class-illegalargumentexception) \- 如果 address 不合法，抛出异常。

### func getAddressBytes\(\)
    
    __
    
    public func getAddressBytes(): Array\<Byte\>
    
功能：返回此 [UnixSocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-unixsocketaddress) 对象的原始IP地址，内容布局与 `sockaddr_un` 形式一致。

返回值：

  * [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> \- 原始 IP 地址的 [Array](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-arrayt)<[Byte](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_types.html#type-byte)> 表示。

示例：
    
    __
    
    import std.net.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main () {
        let udsa1_1: UnixSocketAddress = UnixSocketAddress("/tmp/server1.sock")
        @Assert(udsa1_1.getAddressBytes(), "\u{1}\u{0}/tmp/server1.sock".toArray())
    }
    
### func hashCode\(\)
    
    __
    
    public func hashCode(): Int64
    
功能：获取 `hashcode` 值。

返回值：

  * [Int64](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int64) \- `hashcode` 值。

### func toString\(\)
    
    __
    
    public func toString(): String
    
功能：返回当前 [UnixSocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-unixsocketaddress) 的文本表示字符串。

返回值：

  * [String](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_structs.html#struct-string) \- 当前 [UnixSocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-unixsocketaddress) 的文本表示字符串，比如 `/tmp/socket1` 。

示例：
    
    __
    
    import std.net.*
    import std.unittest.*
    import std.unittest.testmacro.*
    
    main () {
        let expect1 = "/tmp/server1.sock"
        let expect2 = "\u{0}/tmp/server1.sock"
        let udsa1_1: UnixSocketAddress = UnixSocketAddress("/tmp/server1.sock")
        let udsa2_1: UnixSocketAddress = UnixSocketAddress("/tmp/server1.sock".toArray())
        let udsa2_2: UnixSocketAddress = UnixSocketAddress("/tmp/server1.sock\u{0}\u{0}".toArray())
        let udsa3_1: UnixSocketAddress = UnixSocketAddress("\u{0}/tmp/server1.sock")
        let udsa4_1: UnixSocketAddress = UnixSocketAddress("\u{0}/tmp/server1.sock".toArray())
        let udsa4_2: UnixSocketAddress = UnixSocketAddress("\u{0}/tmp/server1.sock\u{0}\u{0}".toArray())
        @Assert(udsa1_1.toString(), expect1)
        @Assert(udsa2_1.toString(), expect1)
        @Assert(udsa2_2.toString(), expect1)
        @Assert(udsa3_1.toString(), expect2)
        @Assert(udsa1_1, udsa2_1)
        @Assert(udsa1_1, udsa2_2)
        @Assert(udsa3_1, udsa4_1)
        @Assert(udsa3_1, udsa4_2)
        @Assert(udsa4_1.toString(), expect2)
        @Assert(udsa4_2.toString(), expect2)
    
        try {
            UnixSocketAddress("/tmp/server1\u{0}.sock")
        } catch (e: IllegalArgumentException) {
            @Assert(true)
        }
    
        try {
            UnixSocketAddress("/tmp/server1.sock\u{0}\u{0}")
        } catch (e: IllegalArgumentException) {
            @Assert(true)
        }
        try {
            UnixSocketAddress("\u{0}/tmp/server1.sock\u{0}\u{0}")
        } catch (e: IllegalArgumentException) {
            @Assert(true)
        }
        try {
            UnixSocketAddress("/tmp/server1\u{0}.sock".toArray())
        } catch (e: IllegalArgumentException) {
            @Assert(true)
        }
        return
    }
    
### operator func ==\(UnixSocketAddress\)
    
    __
    
    public operator func ==(rhs: UnixSocketAddress): Bool
    
功能：判断两个 [UnixSocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-unixsocketaddress) 对象是否相等。

参数：

  * rhs: [UnixSocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-unixsocketaddress) \- 参与比较的 [UnixSocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-unixsocketaddress) 对象。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果两个 [UnixSocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-unixsocketaddress) 对象相等，则返回 `true`；否则，返回 `false`。

### operator func \!=\(UnixSocketAddress\)
    
    __
    
    public operator func !=(rhs: UnixSocketAddress): Bool
    
功能：判断两个 [UnixSocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-unixsocketaddress) 对象是否不等。

参数：

  * rhs: [UnixSocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-unixsocketaddress) \- 参与比较的 [UnixSocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-unixsocketaddress) 对象。

返回值：

  * [Bool](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#bool) \- 如果两个 [UnixSocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-unixsocketaddress) 对象不等，则返回 `true`；否则，返回 `false`。