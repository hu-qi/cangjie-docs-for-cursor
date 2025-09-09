
# 获取当前时间以及时间差

该示例演示了如何获取当前时间，以及计算两个时间的差值。
    
    __
    
    import std.time.*
    
    main() {
        let before = DateTime.now() /* 获取当前时间 */
        sleep(100 * Duration.millisecond) /* 睡眠 100 毫秒 */
        let after = DateTime.now() /* 获取当前时间 */
        println(before)
        println(after)
        println(after - before)
        return
    }
    
运行结果：（以实际结果为准）
    
    __
    
    2025-08-01T11:15:46.386650335+08:00
    2025-08-01T11:15:46.487986524+08:00
    101ms336us189ns