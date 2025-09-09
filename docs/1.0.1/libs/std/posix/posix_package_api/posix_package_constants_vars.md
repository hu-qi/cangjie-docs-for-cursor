
# 常量&变量

## const AT\_EMPTY\_PATH \(deprecated\)
    
    __
    
    public const AT_EMPTY_PATH: Int32 = 0x1000
    
功能：表示在文件系统中空路径（即没有指定任何文件或目录）时返回的文件描述符，适用函数 `open`、`open64`、`openat`、`openat64`，所属函数参数 `oflag`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const AT\_FDCWD \(deprecated\)
    
    __
    
    public const AT_FDCWD: Int32
    
功能：表示在文件系统中相对路径操作的特殊文件描述符常量，用于在使用 `*at()` 系列系统调用时指定相对路径的解析起点。主要用于 `fchmodat`、`fchownat`、`linkat`、`renameat`、`symlinkat`、`unlinkat`等函数，所属函数参数 `fd`。不同系统下的值分别为：

  * macOS：-0x2
  * 其他情况：-0x64

> **注意**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const AT\_REMOVEDIR \(deprecated\)
    
    __
    
    public const AT_REMOVEDIR: Int32 = 0x200
    
功能：如果指定了 [AT\_REMOVEDIR](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_constants_vars.html#const-at_removedir-deprecated) 标志，则对 `pathname` 执行等效于 `rmdir(2)` 的操作，适用函数 `open`、`open64`、`openat`、`openat64`，所属函数参数 `oflag`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const AT\_SYMLINK\_FOLLOW \(deprecated\)
    
    __
    
    public const AT_SYMLINK_FOLLOW: Int32
    
功能：表示一个用于控制符号链接解析行为的标志，指定在操作符号链接时是否跟随链接指向的目标文件。通常与 `AT_FDCWD` 结合使用。若无该标志，大多数系统调用会直接操作符号链接本身（如读取链接路径）。使用该标志后，系统调用会先解析符号链接，然后操作其指向的目标文件。主要用于 `linkat`、`unlinkat` 等函数，所属函数参数 `fd`。不同系统下的值分别为：

  * macOS：0x040
  * 其他情况：0x400

> **注意**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const F\_OK \(deprecated\)
    
    __
    
    public const F_OK: Int32 = 0x0
    
功能：测试文件是否存在，适用函数 [access](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-accessstring-int32-deprecated)，[faccessat](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-faccessatint32-string-int32-int32-deprecated)，所属函数参数 `mode`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const O\_APPEND \(deprecated\)
    
    __
    
    public const O_APPEND: Int32
    
功能：读取或写入文件时，数据将从文件末尾移动。即写入的数据将附加到文件的末尾，适用函数 `open`、`open64`、`openat`、`openat64`，所属函数参数 `oflag`。不同系统下的值分别为：

  * macOS: 0x00000008
  * Windows: 0x8
  * 其他情况：0x400

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const O\_CLOEXEC \(deprecated\)
    
    __
    
    public const O_CLOEXEC: Int32
    
功能：在某些多线程程序中，使用此标志是必不可少的。因为在一个线程同时打开文件描述符，而另一个线程执行 `fork(2)` 加 `execve(2)` 场景下使用单独的 `fcntl(2)` `F_SETFD` 操作设置 `FD_CLOEXEC` 标志并不足以避免竞争条件，适用函数 `open`、`open64`、`openat`、`openat64`，所属函数参数 `oflag`。不同系统下的值分别为：

  * macOS: 0x01000000
  * 其他情况：0x80000

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const O\_CREAT \(deprecated\)
    
    __
    
    public const O_CREAT: Int32
    
功能：如果要打开的文件不存在，则自动创建该文件，适用函数 `open`、`open64`、`openat`、`openat64`，所属函数参数 `oflag`。不同系统下的值分别为：

  * macOS: 0x00000200
  * Windows: 0x100
  * 其他情况：0x40

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const O\_DIRECTORY \(deprecated\)
    
    __
    
    public const O_DIRECTORY: Int32
    
功能：如果 `pathname` 指定的文件不是目录，则打开文件失败，适用函数 `open`、`open64`、`openat`、`openat64`，所属函数参数 `oflag`。不同系统下的值分别为：

  * macOS: 0x00100000
  * 其他情况：0x80000

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const O\_DSYNC \(deprecated\)
    
    __
    
    public const O_DSYNC: Int32
    
功能：每次写入都会等待物理 `I/O` 完成，但如果写操作不影响读取刚写入的数据，则不等待文件属性更新，适用函数 `open`、`open64`、`openat`、`openat64`，所属函数参数 `oflag`。不同系统下的值分别为：

  * macOS: 0x400000
  * 其他情况：0x1000

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const O\_EXCL \(deprecated\)
    
    __
    
    public const O_EXCL: Int32
    
功能：如同时设置 [O\_CREAT](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_constants_vars.html#const-o_creat-deprecated)，则此指令检查文件是否存在。如果文件不存在，则创建文件。否则，打开文件出错。此外，如果同时设置了 [O\_CREAT](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_constants_vars.html#const-o_creat-deprecated) 和 [O\_EXCL](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_constants_vars.html#const-o_excl-deprecated)，并且要打开的文件是符号链接，则打开文件失败，适用函数 `open`、`open64`、`openat`、`openat64`，所属函数参数 `oflag`。不同系统下的值分别为：

  * macOS: 0x00000800
  * Windows: 0x400
  * 其他情况：0x80

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const O\_NOCTTY \(deprecated\)
    
    __
    
    public const O_NOCTTY: Int32
    
功能：如要打开的文件是终端设备，则该文件不会成为这个进程的控制终端，适用函数 `open`、`open64`、`openat`、`openat64`，所属函数参数 `oflag`。不同系统下的值分别为：

  * macOS: 0x00020000
  * 其他情况：0x100

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const O\_NOFOLLOW \(deprecated\)
    
    __
    
    public const O_NOFOLLOW: Int32
    
功能：如 `pathname` 指定的文件是单符号连接，则打开文件失败，适用函数 `open`、`open64`、`openat`、`openat64`，所属函数参数 `oflag`。不同系统下的值分别为：

  * macOS: 0x00000100
  * 其他情况：0x20000

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const O\_NONBLOCK \(deprecated\)
    
    __
    
    public const O_NONBLOCK: Int32
    
功能：以非阻塞的方式打开文件，即 `I/O` 操作不会导致调用进程等待，适用函数 `open`、`open64`、`openat`、`openat64`，所属函数参数 `oflag`。不同系统下的值分别为：

  * macOS: 0x00000004
  * 其他情况：0x800

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const O\_RDONLY \(deprecated\)
    
    __
    
    public const O_RDONLY: Int32 = 0x0
    
功能：以只读方式打开文件，适用函数 `open`、`open64`、`openat`、`openat64`，所属函数参数 `oflag`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const O\_RDWR \(deprecated\)
    
    __
    
    public const O_RDWR: Int32 = 0x2
    
功能：以读写模式打开文件，适用函数 `open`、`open64`、`openat`、`openat64`，所属函数参数 `oflag`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const O\_RSYNC \(deprecated\)
    
    __
    
    public const O_RSYNC: Int32 = 0x101000
    
功能：此标志仅影响读取操作，必须与 [O\_SYNC](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_constants_vars.html#const-o_sync-deprecated) 或 [O\_DSYNC](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_constants_vars.html#const-o_dsync-deprecated) 结合使用。如果有必要，它将导致读取调用阻塞，直到正在读取的数据（可能还有元数据）刷新到磁盘，适用函数 `open`、`open64`、`openat`、`openat64`，所属函数参数 `oflag`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const O\_SYNC \(deprecated\)
    
    __
    
    public const O_SYNC: Int32
    
功能：同步打开文件，适用函数 `open`、`open64`、`openat`、`openat64`，所属函数参数 `oflag`。不同系统下的值分别为：

  * macOS: 0x0080
  * 其他情况：0x101000

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const O\_TRUNC \(deprecated\)
    
    __
    
    public const O_TRUNC: Int32
    
功能：如果文件存在且打开可写，则此标志将文件长度清除为 0，文件中以前存储的数据消失，适用函数 `open`、`open64`、`openat`、`openat64`，所属函数参数 `oflag`。不同系统下的值分别为：

  * macOS: 0x00000400
  * 其他情况：0x200

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const O\_WRONLY \(deprecated\)
    
    __
    
    public const O_WRONLY: Int32 = 0x1
    
功能：以只写方式打开文件，适用函数 `open`、`open64`、`openat`、`openat64`，所属函数参数 `oflag`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const R\_OK \(deprecated\)
    
    __
    
    public const R_OK: Int32 = 0x4
    
功能：测试文件读权限，适用函数 [access](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-accessstring-int32-deprecated)，[faccessat](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-faccessatint32-string-int32-int32-deprecated)，所属函数参数 `mode`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const SEEK\_CUR \(deprecated\)
    
    __
    
    public const SEEK_CUR: Int32 = 0x1
    
功能：向当前读或写位置添加偏移量，适用函数 [lseek](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-lseekint32-int64-int32-deprecated)，所属函数参数 `whence`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const SEEK\_END \(deprecated\)
    
    __
    
    public const SEEK_END: Int32 = 0x2
    
功能：将读写位置设置为文件末尾，并添加偏移量，适用函数 [lseek](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-lseekint32-int64-int32-deprecated)，所属函数参数 `whence`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const SEEK\_SET \(deprecated\)
    
    __
    
    public const SEEK_SET: Int32 = 0x0
    
功能：偏移参数表示新的读写位置，适用函数 [lseek](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-lseekint32-int64-int32-deprecated)，所属函数参数 `whence`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const SIGABRT \(deprecated\)
    
    __
    
    public const SIGABRT: Int32 = 0x6
    
功能：异常终止，默认操作终止，适用函数 [kill](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killint32-int32-deprecated)，[killpg](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killpgint32-int32-deprecated)，所属函数参数 `sig`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const SIGALRM \(deprecated\)
    
    __
    
    public const SIGALRM: Int32 = 0xE
    
功能：计时器到期，默认操作终止，适用函数 [kill](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killint32-int32-deprecated)，[killpg](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killpgint32-int32-deprecated)，所属函数参数 `sig`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const SIGBUS \(deprecated\)
    
    __
    
    public const SIGBUS: Int32
    
功能：硬件故障，默认操作终止，适用函数 [kill](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killint32-int32-deprecated)，[killpg](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killpgint32-int32-deprecated)，所属函数参数 `sig`。不同系统下的值分别为：

  * macOS: 0xA
  * 其他情况：0x7

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const SIGCHLD \(deprecated\)
    
    __
    
    public const SIGCHLD: Int32
    
功能：子进程状态更改，默认操作终止，适用函数 [kill](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killint32-int32-deprecated)，[killpg](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killpgint32-int32-deprecated)，所属函数参数 `sig`。不同系统下的值分别为：

  * macOS: 0x14
  * 其他情况：0x11

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const SIGCONT \(deprecated\)
    
    __
    
    public const SIGCONT: Int32
    
功能：暂停过程的继续，默认操作继续或忽略，适用函数 [kill](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killint32-int32-deprecated)，[killpg](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killpgint32-int32-deprecated)，所属函数参数 `sig`。不同系统下的值分别为：

  * macOS: 0x13
  * 其他情况：0x12

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const SIGFPE \(deprecated\)
    
    __
    
    public const SIGFPE: Int32 = 0x8
    
功能：算术错误，默认操作终止，适用函数 [kill](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killint32-int32-deprecated)，[killpg](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killpgint32-int32-deprecated)，所属函数参数 `sig`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const SIGHUP \(deprecated\)
    
    __
    
    public const SIGHUP: Int32 = 0x1
    
功能：连接已断开，默认操作已终止，适用函数 [kill](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killint32-int32-deprecated)，[killpg](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killpgint32-int32-deprecated)，所属函数参数 `sig`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const SIGILL \(deprecated\)
    
    __
    
    public const SIGILL: Int32 = 0x4
    
功能：硬件指令无效，默认动作终止，适用函数 [kill](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killint32-int32-deprecated)，[killpg](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killpgint32-int32-deprecated)，所属函数参数 `sig`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const SIGINT \(deprecated\)
    
    __
    
    public const SIGINT: Int32 =  0x2
    
功能：终端中断字符，默认动作终止，适用函数 [kill](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killint32-int32-deprecated)，[killpg](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killpgint32-int32-deprecated)，所属函数参数 `sig`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const SIGIO \(deprecated\)
    
    __
    
    public const SIGIO: Int32
    
功能：异步 `IO`，默认操作终止，适用函数 [kill](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killint32-int32-deprecated)，[killpg](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killpgint32-int32-deprecated)，所属函数参数 `sig`。不同系统下的值分别为：

  * macOS: 0x17
  * 其他情况：0x1D

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const SIGIOT \(deprecated\)
    
    __
    
    public const SIGIOT: Int32 = 0x6
    
功能：硬件故障，默认操作终止，适用函数 [kill](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killint32-int32-deprecated)，[killpg](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killpgint32-int32-deprecated)，所属函数参数 `sig`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const SIGKILL \(deprecated\)
    
    __
    
    public const SIGKILL: Int32 = 0x9
    
功能：终止，默认操作终止，适用函数 [kill](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killint32-int32-deprecated)，[killpg](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killpgint32-int32-deprecated)，所属函数参数 `sig`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const SIGPIPE \(deprecated\)
    
    __
    
    public const SIGPIPE: Int32 = 0xD
    
功能：写入未读进程的管道，默认操作终止，适用函数 [kill](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killint32-int32-deprecated)，[killpg](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killpgint32-int32-deprecated)，所属函数参数 `sig`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const SIGPROF \(deprecated\)
    
    __
    
    public const SIGPROF: Int32 = 0x1B
    
功能：摘要超时，默认操作终止，适用函数 [kill](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killint32-int32-deprecated)，[killpg](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killpgint32-int32-deprecated)，所属函数参数 `sig`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const SIGPWR \(deprecated\)
    
    __
    
    public const SIGPWR: Int32 = 0x1E
    
功能：电源故障或重启，系统调用无效，默认操作终止，适用函数 [kill](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killint32-int32-deprecated)，[killpg](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killpgint32-int32-deprecated)，所属函数参数 `sig`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const SIGQUIT \(deprecated\)
    
    __
    
    public const SIGQUIT: Int32 = 0x3
    
功能：终端退出字符，默认动作终止，适用函数 [kill](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killint32-int32-deprecated)，[killpg](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killpgint32-int32-deprecated)，所属函数参数 `sig`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const SIGSEGV \(deprecated\)
    
    __
    
    public const SIGSEGV: Int32 = 0xB
    
功能：内存引用无效，默认操作终止，适用函数 [kill](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killint32-int32-deprecated)，[killpg](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killpgint32-int32-deprecated)，所属函数参数 `sig`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const SIGSTKFLT \(deprecated\)
    
    __
    
    public const SIGSTKFLT: Int32 = 0x10
    
功能：协处理器堆栈故障，默认操作终止，适用函数 [kill](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killint32-int32-deprecated)，[killpg](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killpgint32-int32-deprecated)，所属函数参数 `sig`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const SIGSTOP \(deprecated\)
    
    __
    
    public const SIGSTOP: Int32
    
功能：停止，默认操作终止，适用函数 [kill](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killint32-int32-deprecated)，[killpg](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killpgint32-int32-deprecated)，所属函数参数 `sig`。不同系统下的值分别为：

  * macOS: 0x11
  * 其他情况：0x13

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const SIGSYS \(deprecated\)
    
    __
    
    public const SIGSYS: Int32
    
功能：终止，默认操作终止进程并生成核心转储文件（core dump），用于调试分析，适用函数 [kill](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killint32-int32-deprecated)，[killpg](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killpgint32-int32-deprecated)，所属函数参数 `sig`。不同系统下的值分别为：

  * macOS：0xC
  * 其他情况：0x1F

> **注意**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const SIGTERM \(deprecated\)
    
    __
    
    public const SIGTERM: Int32 = 0xF
    
功能：终止，默认操作终止，适用函数 [kill](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killint32-int32-deprecated)，[killpg](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killpgint32-int32-deprecated)，所属函数参数 `sig`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const SIGTRAP \(deprecated\)
    
    __
    
    public const SIGTRAP: Int32 = 0x5
    
功能：硬件故障，默认操作终止，适用函数 [kill](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killint32-int32-deprecated)，[killpg](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killpgint32-int32-deprecated)，所属函数参数 `sig`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const SIGTSTP \(deprecated\)
    
    __
    
    public const SIGTSTP: Int32
    
功能：终端停止符号，默认操作终止，适用函数 [kill](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killint32-int32-deprecated)，[killpg](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killpgint32-int32-deprecated)，所属函数参数 `sig`。不同系统下的值分别为：

  * macOS: 0x12
  * 其他情况：0x14

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const SIGTTIN \(deprecated\)
    
    __
    
    public const SIGTTIN: Int32 = 0x15
    
功能：后台读取控件 `tty`，默认操作终止，适用函数 [kill](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killint32-int32-deprecated)，[killpg](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killpgint32-int32-deprecated)，所属函数参数 `sig`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const SIGTTOU \(deprecated\)
    
    __
    
    public const SIGTTOU: Int32 = 0x16
    
功能：后台写控制 `tty`，默认操作终止，适用函数 [kill](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killint32-int32-deprecated)，[killpg](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killpgint32-int32-deprecated)，所属函数参数 `sig`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const SIGURG \(deprecated\)
    
    __
    
    public const SIGURG: Int32
    
功能：紧急情况（套接字），忽略默认操作，适用函数 [kill](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killint32-int32-deprecated)，[killpg](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killpgint32-int32-deprecated)，所属函数参数 `sig`。不同系统下的值分别为：

  * macOS: 0x10
  * 其他情况：0x17

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const SIGUSR1 \(deprecated\)
    
    __
    
    public const SIGUSR1: Int32
    
功能：用户定义的信号，默认操作终止，适用函数 [kill](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killint32-int32-deprecated)，[killpg](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killpgint32-int32-deprecated)，所属函数参数 `sig`。不同系统下的值分别为：

  * macOS: 0x1E
  * 其他情况：0xA

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const SIGUSR2 \(deprecated\)
    
    __
    
    public const SIGUSR2: Int32
    
功能：用户定义的信号，默认操作终止，适用函数 [kill](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killint32-int32-deprecated)，[killpg](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killpgint32-int32-deprecated)，所属函数参数 `sig`。不同系统下的值分别为：

  * macOS: 0x1F
  * 其他情况：0xC

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const SIGVTALRM \(deprecated\)
    
    __
    
    public const SIGVTALRM: Int32 = 0x1A
    
功能：虚拟时间警报，默认操作终止，适用函数 [kill](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killint32-int32-deprecated)，[killpg](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killpgint32-int32-deprecated)，所属函数参数 `sig`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const SIGWINCH \(deprecated\)
    
    __
    
    public const SIGWINCH: Int32 = 0x1C
    
功能：终端窗口大小更改，默认操作终止，适用函数 [kill](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killint32-int32-deprecated)，[killpg](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killpgint32-int32-deprecated)，所属函数参数 `sig`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const SIGXCPU \(deprecated\)
    
    __
    
    public const SIGXCPU: Int32 = 0x18
    
功能：`CPU` 占用率超过上限，默认操作终止，适用函数 [kill](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killint32-int32-deprecated)，[killpg](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killpgint32-int32-deprecated)，所属函数参数 `sig`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const SIGXFSZ \(deprecated\)
    
    __
    
    public const SIGXFSZ: Int32 = 0x19
    
功能：文件长度超过上限，默认操作终止，适用函数 [kill](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killint32-int32-deprecated)，[killpg](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-killpgint32-int32-deprecated)，所属函数参数 `sig`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)

## const S\_IFBLK \(deprecated\)
    
    __
    
    public const S_IFBLK: UInt32 = 0x6000
    
功能：文件类型为块设备，适用函数 [isType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-istypestring-uint32-deprecated)， 所属函数参数 `mode`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32)

## const S\_IFCHR \(deprecated\)
    
    __
    
    public const S_IFCHR: UInt32 = 0x2000
    
功能：文件类型为字符设备，适用函数 [isType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-istypestring-uint32-deprecated)， 所属函数参数 `mode`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32)

## const S\_IFDIR \(deprecated\)
    
    __
    
    public const S_IFDIR: UInt32 = 0x4000
    
功能：文件类型为目录，适用函数 [isType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-istypestring-uint32-deprecated)， 所属函数参数 `mode`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32)

## const S\_IFIFO \(deprecated\)
    
    __
    
    public const S_IFIFO: UInt32 = 0x1000
    
功能：文件类型为 `FIFO` 文件，适用函数 [isType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-istypestring-uint32-deprecated)， 所属函数参数 `mode`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32)

## const S\_IFLNK \(deprecated\)
    
    __
    
    public const S_IFLNK: UInt32 = 0xA000
    
功能：文件类型为软连接，适用函数 [isType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-istypestring-uint32-deprecated)， 所属函数参数 `mode`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32)

## const S\_IFREG \(deprecated\)
    
    __
    
    public const S_IFREG: UInt32 = 0x8000
    
功能：文件类型为一般文件，适用函数 [isType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-istypestring-uint32-deprecated)， 所属函数参数 `mode`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32)

## const S\_IFSOCK \(deprecated\)
    
    __
    
    public const S_IFSOCK: UInt32 = 0xC000
    
功能：文件类型为套接字文件，适用函数 [isType](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-istypestring-uint32-deprecated)， 所属函数参数 `mode`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32)

## const S\_IRGRP \(deprecated\)
    
    __
    
    public const S_IRGRP: UInt32 = 0x20
    
功能：表示文件用户组具有读权限，适用函数 open，open64，openat，openat64，[chmod](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-chmodstring-uint32-deprecated)\(mode\)，[fchmod](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-fchmodint32-uint32-deprecated)\(mode\)，[fchmodat](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-fchmodatint32-string-uint32-int32-deprecated)\(mode\)，[creat](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-creatstring-uint32-deprecated)， 所属函数参数 `flag`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32)

## const S\_IROTH \(deprecated\)
    
    __
    
    public const S_IROTH: UInt32 = 0x4
    
功能：表示其他用户对文件具有读权限，适用函数 open，open64，openat，openat64，[chmod](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-chmodstring-uint32-deprecated)\(mode\)，[fchmod](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-fchmodint32-uint32-deprecated)\(mode\)，[fchmodat](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-fchmodatint32-string-uint32-int32-deprecated)\(mode\)，[creat](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-creatstring-uint32-deprecated)， 所属函数参数 `flag`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32)

## const S\_IRUSR \(deprecated\)
    
    __
    
    public const S_IRUSR: UInt32 = 0x100
    
功能：表示文件所有者具有读权限，适用函数 open，open64，openat，openat64，[chmod](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-chmodstring-uint32-deprecated)\(mode\)，[fchmod](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-fchmodint32-uint32-deprecated)\(mode\)，[fchmodat](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-fchmodatint32-string-uint32-int32-deprecated)\(mode\)，[creat](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-creatstring-uint32-deprecated)， 所属函数参数 `flag`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32)

## const S\_IRWXG \(deprecated\)
    
    __
    
    public const S_IRWXG: UInt32 = 0x38
    
功能：表示文件用户组具有读、写、执行权限，适用函数 open，open64，openat，openat64，[chmod](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-chmodstring-uint32-deprecated)\(mode\)，[fchmod](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-fchmodint32-uint32-deprecated)\(mode\)，[fchmodat](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-fchmodatint32-string-uint32-int32-deprecated)\(mode\)，[creat](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-creatstring-uint32-deprecated)， 所属函数参数 `flag`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32)

## const S\_IRWXO \(deprecated\)
    
    __
    
    public const S_IRWXO: UInt32 = 0x7
    
功能：表示其他用户对文件具有读、写和执行权限，适用函数 open，open64，openat，openat64，[chmod](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-chmodstring-uint32-deprecated)\(mode\)，[fchmod](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-fchmodint32-uint32-deprecated)\(mode\)，[fchmodat](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-fchmodatint32-string-uint32-int32-deprecated)\(mode\)，[creat](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-creatstring-uint32-deprecated)， 所属函数参数 `flag`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32)

## const S\_IRWXU \(deprecated\)
    
    __
    
    public const S_IRWXU: UInt32 = 0x1C0
    
功能：表示文件所有者具有读、写和执行权限，适用函数 open，open64，openat，openat64，[chmod](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-chmodstring-uint32-deprecated)\(mode\)，[fchmod](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-fchmodint32-uint32-deprecated)\(mode\)，[fchmodat](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-fchmodatint32-string-uint32-int32-deprecated)\(mode\)，[creat](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-creatstring-uint32-deprecated)， 所属函数参数 `flag`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32)

## const S\_IWGRP \(deprecated\)
    
    __
    
    public const S_IWGRP: UInt32 = 0x10
    
功能：表示文件用户组具有写权限，适用函数 open，open64，openat，openat64，[chmod](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-chmodstring-uint32-deprecated)\(mode\)，[fchmod](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-fchmodint32-uint32-deprecated)\(mode\)，[fchmodat](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-fchmodatint32-string-uint32-int32-deprecated)\(mode\)，[creat](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-creatstring-uint32-deprecated)， 所属函数参数 `flag`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32)

## const S\_IWOTH \(deprecated\)
    
    __
    
    public const S_IWOTH: UInt32 = 0x2
    
功能：表示其他用户对文件具有写权限，适用函数 open，open64，openat，openat64，[chmod](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-chmodstring-uint32-deprecated)\(mode\)，[fchmod](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-fchmodint32-uint32-deprecated)\(mode\)，[fchmodat](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-fchmodatint32-string-uint32-int32-deprecated)\(mode\)，[creat](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-creatstring-uint32-deprecated)， 所属函数参数 `flag`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32)

## const S\_IWUSR \(deprecated\)
    
    __
    
    public const S_IWUSR: UInt32 = 0x80
    
功能：表示文件所有者具有写权限，适用函数 open，open64，openat，openat64，[chmod](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-chmodstring-uint32-deprecated)\(mode\)，[fchmod](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-fchmodint32-uint32-deprecated)\(mode\)，[fchmodat](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-fchmodatint32-string-uint32-int32-deprecated)\(mode\)，[creat](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-creatstring-uint32-deprecated)， 所属函数参数 `flag`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32)

## const S\_IXGRP \(deprecated\)
    
    __
    
    public const S_IXGRP: UInt32 = 0x8
    
功能：表示文件用户组具有执行权限，适用函数 open，open64，openat，openat64，[chmod](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-chmodstring-uint32-deprecated)\(mode\)，[fchmod](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-fchmodint32-uint32-deprecated)\(mode\)，[fchmodat](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-fchmodatint32-string-uint32-int32-deprecated)\(mode\)，[creat](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-creatstring-uint32-deprecated)， 所属函数参数 `flag`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32)

## const S\_IXOTH \(deprecated\)
    
    __
    
    public const S_IXOTH: UInt32 = 0x1
    
功能：表示其他用户对文件具有执行权限，适用函数 open，open64，openat，openat64，[chmod](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-chmodstring-uint32-deprecated)\(mode\)，[fchmod](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-fchmodint32-uint32-deprecated)\(mode\)，[fchmodat](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-fchmodatint32-string-uint32-int32-deprecated)\(mode\)，[creat](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-creatstring-uint32-deprecated)， 所属函数参数 `flag`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32)

## const S\_IXUSR \(deprecated\)
    
    __
    
    public const S_IXUSR: UInt32 = 0x40
    
功能：表示文件所有者具有执行权限，适用函数 open，open64，openat，openat64，[chmod](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-chmodstring-uint32-deprecated)\(mode\)，[fchmod](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-fchmodint32-uint32-deprecated)\(mode\)，[fchmodat](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-fchmodatint32-string-uint32-int32-deprecated)\(mode\)，[creat](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-creatstring-uint32-deprecated)， 所属函数参数 `flag`。

> **注意：**
> 
> 未来版本即将废弃。

## const W\_OK \(deprecated\)
    
    __
    
    public const W_OK: Int32 = 0x2
    
功能：测试文件写权限，适用函数 [access](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-accessstring-int32-deprecated)，[faccessat](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-faccessatint32-string-int32-int32-deprecated)，所属函数参数 `mode`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[UInt32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#uint32)

## const X\_OK \(deprecated\)
    
    __
    
    public const X_OK: Int32 = 0x1
    
功能：测试文件执行权限，适用函数 [access](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-accessstring-int32-deprecated)，[faccessat](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs.html#func-faccessatint32-string-int32-int32-deprecated)，所属函数参数 `mode`。

> **注意：**
> 
> 未来版本即将废弃。

类型：[Int32](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/core/core_package_api/core_package_intrinsics.html#int32)