
# 获取各类系统信息

下面是获取各类系统信息示例，以下示例支持 Linux 平台，其他平台支持情况见本包概述。

代码如下:
    
    __
    
    import std.posix.*
    
    main(): Int64 {
        /* 系统名称相关 */
        var os_info = getos()
        println("os info ==> ${os_info}")
        var hostname = gethostname()
        println("hostname ==> ${hostname}")
        var logname: String = getlogin()
        println("logname ==> ${logname}")
    
        /* 程序运行路径相关函数 */
        var changePath = "/"
        var chdir_result = chdir(changePath)
        println("chdir_result ==> ${chdir_result}")
        var cwd_path: String = getcwd()
        println("cwd_path ==> ${cwd_path}")
    
        /* 系统 id 相关函数 getpgid */
        var arr: CString = unsafe { LibC.mallocCString(" ") }
        var a: CPointer\<UInt8\> = arr.getChars()
        var cp: CPointer\<UInt32\> = CPointer\<UInt32\>(a)
        var getg = unsafe{ getgroups(0, cp)}
        var s: String = " "
        for (_ in 0..getg) {
            s = s + "\0"
        }
        println(getg)
        var local: UInt32 = 0
        for (temp in 0..getg) {
            unsafe { local = cp.read(Int64(temp)) }
            println("getgroups ==> ${local.toString()}")
        }
        unsafe { LibC.free(arr)}
        return 0
    }
    
运行结果如下（根据系统不同返回结果可能不同）：
    
    __
    
    Linux version 4.15.0-159-generic (buildd@lgw01-amd64-055) (gcc version 7.5.0 (Ubuntu 7.5.0-3ubuntu1~18.04)) #167-Ubuntu SMP Tue Sep 21 08:55:05 UTC 2021
    hostname ==> e124e6e0fe0f
    logname ==> root
    chdir_result ==> 0
    cwd_path ==> /
    1
    getgroups ==> 1309868064