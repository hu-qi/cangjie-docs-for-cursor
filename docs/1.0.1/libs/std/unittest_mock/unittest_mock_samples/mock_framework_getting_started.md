
# mock 框架入门

## 使用 mock 框架

mock 框架本身是仓颉标准库中 **单元测试** 的一部分。使用 mock 框架前，需将 `unittest.mock.*` 和 `unittest.mock.mockmacro.*` 导入到测试文件中。

如果使用 **cjpm** 工具，仅需运行 `cjpm test` 命令即可自动启用 mock 框架。

如果直接使用 **cjc** ，参见[使用 cjc](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_samples/mock_framework_basics.html#%E4%BD%BF%E7%94%A8-cjc-%E7%BC%96%E8%AF%91)。

## 示例

常见 mock 测试用例：

  * 调用[mock 构造函数](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_samples/mock_framework_basics.html#%E5%88%9B%E5%BB%BA-mock-%E5%AF%B9%E8%B1%A1)创建 mock/spy 对象。
  * 调用[配置 API](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_samples/mock_framework_basics.html#%E9%85%8D%E7%BD%AE-api)设置 mock 行为。
  * 使用 mock 对象替代测试代码依赖。
  * （可选）调用[验证 API](https://docs.cangjie-lang.cn/docs/1.0.1/libs/std/unittest_mock/unittest_mock_samples/mock_framework_verification.html#mock-%E6%A1%86%E6%9E%B6%E9%AA%8C%E8%AF%81-api)来验证测试代码与 mock/spy 对象之间的交互。

以如下简单API为例：
    
    __
    
    public interface Repository {
        func requestData(id: UInt64, timeoutMs: Int): String
    }
    
    public class Controller {
        public Controller(
            private let repo: Repository
        ) {}
    
        public func findData(id: UInt64): ?String {
            try {
                return repo.requestData(id, 100)
            }
            catch (e: TimeoutException) {
                return None
            }
        }
    }
    
    public class TimeoutException <: Exception {}
    
如果 `Repository` 实现不理想，比如可能包含复杂的依赖关系，实现在其他包中，或者测试太慢，mock 框架可以在不创建依赖的情况下测试 `Controller` 。

测试 `findData` 方法：
    
    __
    
    //导入mock框架包
    import std.unittest.mock.*
    import std.unittest.mock.mockmacro.*
    
    @Test
    class ControllerTest {
        let testId: UInt64 = 100
        let testResponse = "foo"
    
        @TestCase
        func testFindSuccessfully() {
            // 只需要创建mock，不用创建真正的Repository
            let repository = mock\<Repository\>()
    
            // 使用@On宏配置testData行为
            @On(repository.requestData(testId, _)).returns(testResponse)
    
            // 创建真正的Controller测试以便测试实际的实现
            let controller = Controller(repository)
    
            // 运行测试代码
            let result = controller.findData(testId)
    
            // 对结果运行断言
            @Assert(result == Some(testResponse))
        }
    
        @TestCase
        func testTimeout() {
            let repository = mock\<Repository\>()
    
            // 设置getData抛出异常
            @On(repository.requestData(testId, _)).throws(TimeoutException())
    
            let controller = Controller(repository)
    
            // 底层实现抛出异常时，测试行为
            let result = controller.findData(testId)
    
            // 对结果运行断言
            @Assert(result == None)
        }
    }