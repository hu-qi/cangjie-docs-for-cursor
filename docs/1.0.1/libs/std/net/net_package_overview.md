
# std.net

## 功能介绍

net 包用于进行网络通信，提供启动 `Socket` 服务器、连接 `Socket` 服务器、发送数据、接收数据等功能和 `IP` 地址、`IP`前缀（又称`IP`子网）、`Socket` 地址的相关数据结构。

我们支持 UDP/TCP/UDS 三种 `Socket` 类型，用户可按需选用。

UDP\(User Datagram Protocol，用户数据报协议\)是一种无连接的传输协议，它不提供可靠性和流量控制，但是具有较低的延迟和较小的网络开销。UDP协议主要用于一些实时性要求高的应用场景，例如视频直播、在线游戏等。

TCP（Transmission Control Protocol，传输控制协议）是一种面向连接的、可靠的传输协议。它提供了可靠的数据传输、流量控制、拥塞控制、错误检测和流量管理等功能，是互联网中最常用的传输协议之一。

UDS（Unix Domain Socket）是一种用于在同一台计算机上的进程之间进行通信的机制。与网络套接字不同，UDS不需要网络协议栈和网络设备，因此可以更快地进行通信，具有更低的延迟和更高的吞吐量。

如下为本库提供 `Socket` 的类继承关系：
    
    __
    
    Hierarchy
     Resource
     ├StreamingSocket
     │   ├TcpSocket
     │   └UnixSocket
     │
     ├DatagramSocket
     │   ├UdpSocket
     │   └UnixDatagramSocket
     │
     └ServerSocket
         ├TcpServerSocket
         └UnixServerSocket
    
## API 列表

### 接口

接口名| 功能  
---|---  
[DatagramSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_interfaces.html#interface-datagramsocket)| `DatagramSocket` 是一种接收和读取数据包的套接字。  
[ServerSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_interfaces.html#interface-serversocket)| 提供服务端的 `Socket` 需要的接口。  
[StreamingSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_interfaces.html#interface-streamingsocket)| 双工流模式下的运行的 `Socket`，可被读写。  
  
### 类

类名| 功能  
---|---  
[IPAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipaddress)| 此类表示Internet协议（IP）地址。  
[IPPrefix](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipprefix)| 这个类表示一个 IP 前缀（也称为“IP子网”），即一个连续的 IP 地址块，边界为2的幂。  
[IPSocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipsocketaddress)| 此类实现了IP协议 Socket 地址（IP地址+端口号）。  
[IPv4Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv4address)| 此类表示 Internet 协议版本4（IPv4）地址。  
[IPv6Address](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-ipv6address)| 此类表示 Internet 协议版本6（IPv6）地址。  
[RawSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-rawsocket)| `RawSocket` 提供了套接字的基本功能。  
[SocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-socketaddress)| 此类表示协议无关的 Socket 地址。  
[TcpServerSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-tcpserversocket)| 监听 TCP 连接的服务端。  
[TcpSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-tcpsocket)| 请求 TCP 连接的客户端。  
[UdpSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-udpsocket)| 提供 udp 报文通信。  
[UnixDatagramSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-unixdatagramsocket)| 提供基于数据包的主机通讯能力。  
[UnixServerSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-unixserversocket)| 提供基于双工流的主机通讯服务端。  
[UnixSocket](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-unixsocket)| 提供基于双工流的主机通讯客户端。  
[UnixSocketAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_classes.html#class-unixsocketaddress)| 此类实现了 Unix Domain Socket 地址。  
  
### 枚举

枚举名| 功能  
---|---  
[SocketNet](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_enums.html#enum-socketnet)| 传输层协议类型。  
  
### 结构体

结构体名| 功能  
---|---  
[AddressFamily](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-addressfamily)| 地址族用于在个别地址的使用可能不明确的上下文中标识用于网络通信的个别网络地址方案或编号计划。  
[OptionLevel](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-optionlevel)| 提供了常用的套接字选项级别。  
[OptionName](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-optionname)| 提供了常用的套接字选项。  
[ProtocolType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-protocoltype)| 提供了常用的套接字协议，以及通过指定 `Int32` 值来构建套接字协议的功能。  
[RawAddress](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-rawaddress)| 提供了 `RawSocket` 的通信地址创建和获取功能。  
[SocketDomain](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-socketdomain)| 提供了常用的套接字通信域，以及通过指定 `Int32` 值来构建套接字通信域的功能。  
[SocketKeepAliveConfig](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-socketkeepaliveconfig)| TCP KeepAlive 属性配置。  
[SocketOptions](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-socketoptions)| `SocketOptions` 存储了设置套接字选项的一些参数常量方便后续调用。  
[SocketType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_structs.html#struct-sockettype)| 提供了常用的套接字类型，以及通过指定 `Int32` 值来构建套接字类型的功能。  
  
### 异常类

异常类名| 功能  
---|---  
[SocketException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-socketexception)| 提供套接字相关的异常处理。  
[SocketTimeoutException](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/net/net_package_api/net_package_exceptions.html#class-sockettimeoutexception)| 提供字符格式相关的异常处理。