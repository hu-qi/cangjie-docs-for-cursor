
# 类型别名

## type MeasurementUnitTable
    
    __
    
    type MeasurementUnitTable = Array<(Float64, String)>
    
功能：用作 [Measurement](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest/unittest_package_api/unittest_package_interfaces.html#interface-measurement) 中性能测试结果单位转换表的“边界-单位”对数组的别名。

要显示的性能测试结果值是根据归一化期间的边界从该表计算得出的。 例如，对于时间单位，它可以遵循 `[(1.0, "ns"), (1_000.0, "us"), (1_000_000.0, "ms"), (1_000_000_000.0, "s"), ...]`。