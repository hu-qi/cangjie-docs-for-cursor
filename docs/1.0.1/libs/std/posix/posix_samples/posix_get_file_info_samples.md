
# 文件信息相关操作

下面是文件信息相关操作示例，以下示例支持 Linux 平台，其他平台支持情况见本包概述。

代码如下:
    
    __
    
    import std.posix.*
    
    main(): Int64 {
        var result1: Bool = isType("/notdirs", S_IFDIR)
        println("result ==> ${result1}")
        var result2: Bool = isDir("/dev")
        println("result ==> ${result2}")
        var result3 = access("./oscfg.cfg", F_OK)
        println("result ==> ${result3}")
        var result4 = chmod("oscfg.cfg", UInt32(S_IXUSR))
        println("result ==> ${result4}")
        return 0
    }
    
运行结果：
    
    __
    
    result ==> false
    result ==> true
    result ==> -1
    result ==> -1