import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '仓颉编程语言文档',
  description: '仓颉编程语言官方文档',
  
  // 基础配置
  base: '/',
  lang: 'zh-CN',
  
  // 忽略所有死链接 - 使用数组形式匹配所有链接
  ignoreDeadLinks: [
    // 匹配所有可能的死链接模式
    /^.*$/,
    () => true
  ],
  
  // Vite 配置
  vite: {
    assetsInclude: ['**/*.PNG', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg', '**/*.webp']
  },
  
  // 主题配置
  themeConfig: {
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '1.0.1 文档', link: '/1.0.1/' },
      { 
        text: '版本',
        items: [
          { text: '1.0.1 (当前)', link: '/1.0.1/' }
        ]
      }
    ],

    // 侧边栏
    sidebar: {
      '/1.0.1/': [
      {
            "text": "发布说明",
            "items": [
                  {
                        "text": "版本发布说明",
                        "link": "/1.0.1/release_notes"
                  }
            ]
      },
      {
            "text": "用户手册",
            "collapsed": false,
            "items": [
                  {
                        "text": "初识仓颉",
                        "collapsed": false,
                        "items": [
                              {
                                    "text": "基础介绍",
                                    "link": "/1.0.1/user_manual/source_zh_cn/first_understanding/basic"
                              },
                              {
                                    "text": "运行第一个程序",
                                    "link": "/1.0.1/user_manual/source_zh_cn/first_understanding/hello_world"
                              },
                              {
                                    "text": "安装工具链",
                                    "link": "/1.0.1/user_manual/source_zh_cn/first_understanding/install_Community"
                              }
                        ]
                  },
                  {
                        "text": "基本编程概念",
                        "collapsed": false,
                        "items": [
                              {
                                    "text": "表达式",
                                    "link": "/1.0.1/user_manual/source_zh_cn/basic_programming_concepts/expression"
                              },
                              {
                                    "text": "函数",
                                    "link": "/1.0.1/user_manual/source_zh_cn/basic_programming_concepts/function"
                              },
                              {
                                    "text": "标识符",
                                    "link": "/1.0.1/user_manual/source_zh_cn/basic_programming_concepts/identifier"
                              },
                              {
                                    "text": "程序结构",
                                    "link": "/1.0.1/user_manual/source_zh_cn/basic_programming_concepts/program_structure"
                              }
                        ]
                  },
                  {
                        "text": "基本数据类型",
                        "collapsed": false,
                        "items": [
                              {
                                    "text": "数组类型",
                                    "link": "/1.0.1/user_manual/source_zh_cn/basic_data_type/array"
                              },
                              {
                                    "text": "基本操作符",
                                    "link": "/1.0.1/user_manual/source_zh_cn/basic_data_type/basic_operators"
                              },
                              {
                                    "text": "布尔类型",
                                    "link": "/1.0.1/user_manual/source_zh_cn/basic_data_type/bool"
                              },
                              {
                                    "text": "字符类型",
                                    "link": "/1.0.1/user_manual/source_zh_cn/basic_data_type/characters"
                              },
                              {
                                    "text": "浮点类型",
                                    "link": "/1.0.1/user_manual/source_zh_cn/basic_data_type/float"
                              },
                              {
                                    "text": "整数类型",
                                    "link": "/1.0.1/user_manual/source_zh_cn/basic_data_type/integer"
                              },
                              {
                                    "text": "Nothing 类型",
                                    "link": "/1.0.1/user_manual/source_zh_cn/basic_data_type/nothing"
                              },
                              {
                                    "text": "区间类型",
                                    "link": "/1.0.1/user_manual/source_zh_cn/basic_data_type/range"
                              },
                              {
                                    "text": "字符串类型",
                                    "link": "/1.0.1/user_manual/source_zh_cn/basic_data_type/strings"
                              },
                              {
                                    "text": "元组类型",
                                    "link": "/1.0.1/user_manual/source_zh_cn/basic_data_type/tuple"
                              },
                              {
                                    "text": "Unit 类型",
                                    "link": "/1.0.1/user_manual/source_zh_cn/basic_data_type/unit"
                              }
                        ]
                  },
                  {
                        "text": "函数进阶",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "调用函数",
                                    "link": "/1.0.1/user_manual/source_zh_cn/function/call_functions"
                              },
                              {
                                    "text": "闭包",
                                    "link": "/1.0.1/user_manual/source_zh_cn/function/closure"
                              },
                              {
                                    "text": "const 函数和常量求值",
                                    "link": "/1.0.1/user_manual/source_zh_cn/function/const_func_and_eval"
                              },
                              {
                                    "text": "定义函数",
                                    "link": "/1.0.1/user_manual/source_zh_cn/function/define_functions"
                              },
                              {
                                    "text": "函数类型",
                                    "link": "/1.0.1/user_manual/source_zh_cn/function/first_class_citizen"
                              },
                              {
                                    "text": "函数调用语法糖",
                                    "link": "/1.0.1/user_manual/source_zh_cn/function/function_call_desugar"
                              },
                              {
                                    "text": "函数重载",
                                    "link": "/1.0.1/user_manual/source_zh_cn/function/function_overloading"
                              },
                              {
                                    "text": "Lambda 表达式",
                                    "link": "/1.0.1/user_manual/source_zh_cn/function/lambda"
                              },
                              {
                                    "text": "嵌套函数",
                                    "link": "/1.0.1/user_manual/source_zh_cn/function/nested_functions"
                              },
                              {
                                    "text": "操作符重载",
                                    "link": "/1.0.1/user_manual/source_zh_cn/function/operator_overloading"
                              }
                        ]
                  },
                  {
                        "text": "结构体",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "创建 Struct 实例",
                                    "link": "/1.0.1/user_manual/source_zh_cn/struct/create_instance"
                              },
                              {
                                    "text": "定义 Struct 类型",
                                    "link": "/1.0.1/user_manual/source_zh_cn/struct/define_struct"
                              },
                              {
                                    "text": "mut 函数",
                                    "link": "/1.0.1/user_manual/source_zh_cn/struct/mut"
                              }
                        ]
                  },
                  {
                        "text": "枚举和模式匹配",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "枚举类型",
                                    "link": "/1.0.1/user_manual/source_zh_cn/enum_and_pattern_match/enum"
                              },
                              {
                                    "text": "match 表达式",
                                    "link": "/1.0.1/user_manual/source_zh_cn/enum_and_pattern_match/match"
                              },
                              {
                                    "text": "Option 类型",
                                    "link": "/1.0.1/user_manual/source_zh_cn/enum_and_pattern_match/option_type"
                              },
                              {
                                    "text": "Other",
                                    "link": "/1.0.1/user_manual/source_zh_cn/enum_and_pattern_match/other"
                              },
                              {
                                    "text": "Pattern Overview 概述",
                                    "link": "/1.0.1/user_manual/source_zh_cn/enum_and_pattern_match/pattern_overview"
                              },
                              {
                                    "text": "Pattern Refutability",
                                    "link": "/1.0.1/user_manual/source_zh_cn/enum_and_pattern_match/pattern_refutability"
                              }
                        ]
                  },
                  {
                        "text": "类和接口",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Class",
                                    "link": "/1.0.1/user_manual/source_zh_cn/class_and_interface/class"
                              },
                              {
                                    "text": "Interface",
                                    "link": "/1.0.1/user_manual/source_zh_cn/class_and_interface/interface"
                              },
                              {
                                    "text": "Prop",
                                    "link": "/1.0.1/user_manual/source_zh_cn/class_and_interface/prop"
                              },
                              {
                                    "text": "Subtype",
                                    "link": "/1.0.1/user_manual/source_zh_cn/class_and_interface/subtype"
                              },
                              {
                                    "text": "Typecast",
                                    "link": "/1.0.1/user_manual/source_zh_cn/class_and_interface/typecast"
                              }
                        ]
                  },
                  {
                        "text": "泛型",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Generic Class",
                                    "link": "/1.0.1/user_manual/source_zh_cn/generic/generic_class"
                              },
                              {
                                    "text": "Generic Constraint",
                                    "link": "/1.0.1/user_manual/source_zh_cn/generic/generic_constraint"
                              },
                              {
                                    "text": "Generic Enum",
                                    "link": "/1.0.1/user_manual/source_zh_cn/generic/generic_enum"
                              },
                              {
                                    "text": "Generic Function",
                                    "link": "/1.0.1/user_manual/source_zh_cn/generic/generic_function"
                              },
                              {
                                    "text": "Generic Interface",
                                    "link": "/1.0.1/user_manual/source_zh_cn/generic/generic_interface"
                              },
                              {
                                    "text": "泛型 概述",
                                    "link": "/1.0.1/user_manual/source_zh_cn/generic/generic_overview"
                              },
                              {
                                    "text": "Generic Struct",
                                    "link": "/1.0.1/user_manual/source_zh_cn/generic/generic_struct"
                              },
                              {
                                    "text": "Generic Subtype",
                                    "link": "/1.0.1/user_manual/source_zh_cn/generic/generic_subtype"
                              },
                              {
                                    "text": "Typealias",
                                    "link": "/1.0.1/user_manual/source_zh_cn/generic/typealias"
                              }
                        ],
                        "link": "/1.0.1/user_manual/source_zh_cn/generic/generic_overview"
                  },
                  {
                        "text": "集合",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Collection Arraylist",
                                    "link": "/1.0.1/user_manual/source_zh_cn/collections/collection_arraylist"
                              },
                              {
                                    "text": "Collection Hashmap",
                                    "link": "/1.0.1/user_manual/source_zh_cn/collections/collection_hashmap"
                              },
                              {
                                    "text": "Collection Hashset",
                                    "link": "/1.0.1/user_manual/source_zh_cn/collections/collection_hashset"
                              },
                              {
                                    "text": "Collection Iterable Collections",
                                    "link": "/1.0.1/user_manual/source_zh_cn/collections/collection_iterable_collections"
                              },
                              {
                                    "text": "集合库 (Collection) 概述",
                                    "link": "/1.0.1/user_manual/source_zh_cn/collections/collection_overview"
                              }
                        ]
                  },
                  {
                        "text": "并发编程",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "并发编程 概述",
                                    "link": "/1.0.1/user_manual/source_zh_cn/concurrency/concurrency_overview"
                              },
                              {
                                    "text": "Create Thread",
                                    "link": "/1.0.1/user_manual/source_zh_cn/concurrency/create_thread"
                              },
                              {
                                    "text": "Sleep",
                                    "link": "/1.0.1/user_manual/source_zh_cn/concurrency/sleep"
                              },
                              {
                                    "text": "Sync",
                                    "link": "/1.0.1/user_manual/source_zh_cn/concurrency/sync"
                              },
                              {
                                    "text": "Terminal Thread",
                                    "link": "/1.0.1/user_manual/source_zh_cn/concurrency/terminal_thread"
                              },
                              {
                                    "text": "Use Thread",
                                    "link": "/1.0.1/user_manual/source_zh_cn/concurrency/use_thread"
                              }
                        ],
                        "link": "/1.0.1/user_manual/source_zh_cn/concurrency/concurrency_overview"
                  },
                  {
                        "text": "错误处理",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Common Runtime Exceptions",
                                    "link": "/1.0.1/user_manual/source_zh_cn/error_handle/common_runtime_exceptions"
                              },
                              {
                                    "text": "Exception Overview 概述",
                                    "link": "/1.0.1/user_manual/source_zh_cn/error_handle/exception_overview"
                              },
                              {
                                    "text": "Handle",
                                    "link": "/1.0.1/user_manual/source_zh_cn/error_handle/handle"
                              },
                              {
                                    "text": "Use Option",
                                    "link": "/1.0.1/user_manual/source_zh_cn/error_handle/use_option"
                              }
                        ]
                  },
                  {
                        "text": "包管理",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Entry",
                                    "link": "/1.0.1/user_manual/source_zh_cn/package/entry"
                              },
                              {
                                    "text": "Import",
                                    "link": "/1.0.1/user_manual/source_zh_cn/package/import"
                              },
                              {
                                    "text": "Package Name",
                                    "link": "/1.0.1/user_manual/source_zh_cn/package/package_name"
                              },
                              {
                                    "text": "包管理 概述",
                                    "link": "/1.0.1/user_manual/source_zh_cn/package/package_overview"
                              },
                              {
                                    "text": "Toplevel Access",
                                    "link": "/1.0.1/user_manual/source_zh_cn/package/toplevel_access"
                              }
                        ],
                        "link": "/1.0.1/user_manual/source_zh_cn/package/package_overview"
                  },
                  {
                        "text": "扩展",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Access Rules",
                                    "link": "/1.0.1/user_manual/source_zh_cn/extension/access_rules"
                              },
                              {
                                    "text": "Direct Extension",
                                    "link": "/1.0.1/user_manual/source_zh_cn/extension/direct_extension"
                              },
                              {
                                    "text": "Extend Overview 概述",
                                    "link": "/1.0.1/user_manual/source_zh_cn/extension/extend_overview"
                              },
                              {
                                    "text": "Interface Extension",
                                    "link": "/1.0.1/user_manual/source_zh_cn/extension/interface_extension"
                              }
                        ]
                  },
                  {
                        "text": "反射和注解",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Anno",
                                    "link": "/1.0.1/user_manual/source_zh_cn/reflect_and_annotation/anno"
                              },
                              {
                                    "text": "Dynamic Feature",
                                    "link": "/1.0.1/user_manual/source_zh_cn/reflect_and_annotation/dynamic_feature"
                              }
                        ]
                  },
                  {
                        "text": "编译和构建",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Cjc Usage",
                                    "link": "/1.0.1/user_manual/source_zh_cn/compile_and_build/cjc_usage"
                              },
                              {
                                    "text": "Cjpm Usage Ohos",
                                    "link": "/1.0.1/user_manual/source_zh_cn/compile_and_build/cjpm_usage_OHOS"
                              },
                              {
                                    "text": "Conditional Compilation",
                                    "link": "/1.0.1/user_manual/source_zh_cn/compile_and_build/conditional_compilation"
                              }
                        ]
                  },
                  {
                        "text": "部署和运行",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Run Cjnative",
                                    "link": "/1.0.1/user_manual/source_zh_cn/deploy_and_run/run_cjnative"
                              },
                              {
                                    "text": "Runtime Deploy Cjnative",
                                    "link": "/1.0.1/user_manual/source_zh_cn/deploy_and_run/runtime_deploy_cjnative"
                              }
                        ]
                  },
                  {
                        "text": "基础IO",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Basic Io Overview 概述",
                                    "link": "/1.0.1/user_manual/source_zh_cn/Basic_IO/basic_IO_overview"
                              },
                              {
                                    "text": "Basic Io Process Stream",
                                    "link": "/1.0.1/user_manual/source_zh_cn/Basic_IO/basic_IO_process_stream"
                              },
                              {
                                    "text": "Basic Io Source Stream",
                                    "link": "/1.0.1/user_manual/source_zh_cn/Basic_IO/basic_IO_source_stream"
                              }
                        ],
                        "link": "/1.0.1/user_manual/source_zh_cn/Basic_IO/Basic_IO_overview"
                  },
                  {
                        "text": "网络编程",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Net Http",
                                    "link": "/1.0.1/user_manual/source_zh_cn/Net/net_http"
                              },
                              {
                                    "text": "网络库 (Net) 概述",
                                    "link": "/1.0.1/user_manual/source_zh_cn/Net/net_overview"
                              },
                              {
                                    "text": "Net Socket",
                                    "link": "/1.0.1/user_manual/source_zh_cn/Net/net_socket"
                              },
                              {
                                    "text": "Net Websocket",
                                    "link": "/1.0.1/user_manual/source_zh_cn/Net/net_websocket"
                              }
                        ],
                        "link": "/1.0.1/user_manual/source_zh_cn/Net/Net_overview"
                  },
                  {
                        "text": "FFI互操作",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Cangjie-C",
                                    "link": "/1.0.1/user_manual/source_zh_cn/FFI/cangjie-c"
                              }
                        ]
                  },
                  {
                        "text": "宏系统",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Builtin Compilation Flags",
                                    "link": "/1.0.1/user_manual/source_zh_cn/Macro/builtin_compilation_flags"
                              },
                              {
                                    "text": "Compiling Error Reporting And Debugging",
                                    "link": "/1.0.1/user_manual/source_zh_cn/Macro/compiling_error_reporting_and_debugging"
                              },
                              {
                                    "text": "Defining And Importing Macro Package",
                                    "link": "/1.0.1/user_manual/source_zh_cn/Macro/defining_and_importing_macro_package"
                              },
                              {
                                    "text": "Implementation Of Macros",
                                    "link": "/1.0.1/user_manual/source_zh_cn/Macro/implementation_of_macros"
                              },
                              {
                                    "text": "Macro Introduction",
                                    "link": "/1.0.1/user_manual/source_zh_cn/Macro/macro_introduction"
                              },
                              {
                                    "text": "Practical Case",
                                    "link": "/1.0.1/user_manual/source_zh_cn/Macro/practical_case"
                              },
                              {
                                    "text": "Syntax Node",
                                    "link": "/1.0.1/user_manual/source_zh_cn/Macro/syntax_node"
                              },
                              {
                                    "text": "Tokens Types And Quote Expressions",
                                    "link": "/1.0.1/user_manual/source_zh_cn/Macro/Tokens_types_and_quote_expressions"
                              }
                        ]
                  },
                  {
                        "text": "附录",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Compile Options",
                                    "link": "/1.0.1/user_manual/source_zh_cn/Appendix/compile_options"
                              },
                              {
                                    "text": "Keyword",
                                    "link": "/1.0.1/user_manual/source_zh_cn/Appendix/keyword"
                              },
                              {
                                    "text": "Linux Toolchain Install",
                                    "link": "/1.0.1/user_manual/source_zh_cn/Appendix/linux_toolchain_install"
                              },
                              {
                                    "text": "Operator",
                                    "link": "/1.0.1/user_manual/source_zh_cn/Appendix/operator"
                              },
                              {
                                    "text": "Operator Function",
                                    "link": "/1.0.1/user_manual/source_zh_cn/Appendix/operator_function"
                              },
                              {
                                    "text": "Runtime Env",
                                    "link": "/1.0.1/user_manual/source_zh_cn/Appendix/runtime_env"
                              },
                              {
                                    "text": "Tokenkind Type",
                                    "link": "/1.0.1/user_manual/source_zh_cn/Appendix/tokenkind_type"
                              }
                        ]
                  }
            ]
      },
      {
            "text": "📦 标准库 API",
            "collapsed": true,
            "items": [
                  {
                        "text": "核心库 (Core)",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Core Package Api",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Core Package Classes",
                                                "link": "/1.0.1/libs/std/core/core_package_api/core_package_classes"
                                          },
                                          {
                                                "text": "Core Package Enums",
                                                "link": "/1.0.1/libs/std/core/core_package_api/core_package_enums"
                                          },
                                          {
                                                "text": "Core Package Exceptions",
                                                "link": "/1.0.1/libs/std/core/core_package_api/core_package_exceptions"
                                          },
                                          {
                                                "text": "Core Package Funcs",
                                                "link": "/1.0.1/libs/std/core/core_package_api/core_package_funcs"
                                          },
                                          {
                                                "text": "Core Package Interfaces",
                                                "link": "/1.0.1/libs/std/core/core_package_api/core_package_interfaces"
                                          },
                                          {
                                                "text": "Core Package Intrinsics",
                                                "link": "/1.0.1/libs/std/core/core_package_api/core_package_intrinsics"
                                          },
                                          {
                                                "text": "Core Package Structs",
                                                "link": "/1.0.1/libs/std/core/core_package_api/core_package_structs"
                                          },
                                          {
                                                "text": "Core Package Types",
                                                "link": "/1.0.1/libs/std/core/core_package_api/core_package_types"
                                          }
                                    ]
                              },
                              {
                                    "text": "Core Samples",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Core Cstring Sample",
                                                "link": "/1.0.1/libs/std/core/core_samples/core_cstring_sample"
                                          },
                                          {
                                                "text": "Core Spawn Sample",
                                                "link": "/1.0.1/libs/std/core/core_samples/core_spawn_sample"
                                          }
                                    ]
                              },
                              {
                                    "text": "Core Package Overview 概述",
                                    "link": "/1.0.1/libs/std/core/core_package_overview"
                              }
                        ],
                        "link": "/1.0.1/libs/std/core/core_package_overview"
                  },
                  {
                        "text": "数学库 (Math)",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Math Package Api",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Math Package Enums",
                                                "link": "/1.0.1/libs/std/math/math_package_api/math_package_enums"
                                          },
                                          {
                                                "text": "Math Package Funcs",
                                                "link": "/1.0.1/libs/std/math/math_package_api/math_package_funcs"
                                          },
                                          {
                                                "text": "Math Package Interfaces",
                                                "link": "/1.0.1/libs/std/math/math_package_api/math_package_interfaces"
                                          }
                                    ]
                              },
                              {
                                    "text": "Math Samples",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Math Basic Operation",
                                                "link": "/1.0.1/libs/std/math/math_samples/math_basic_operation"
                                          }
                                    ]
                              },
                              {
                                    "text": "Math Package Overview 概述",
                                    "link": "/1.0.1/libs/std/math/math_package_overview"
                              }
                        ],
                        "link": "/1.0.1/libs/std/math/math_package_overview"
                  },
                  {
                        "text": "集合库 (Collection)",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Collection Package Api",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Collection Package Class",
                                                "link": "/1.0.1/libs/std/collection/collection_package_api/collection_package_class"
                                          },
                                          {
                                                "text": "Collection Package Exception",
                                                "link": "/1.0.1/libs/std/collection/collection_package_api/collection_package_exception"
                                          },
                                          {
                                                "text": "Collection Package Function",
                                                "link": "/1.0.1/libs/std/collection/collection_package_api/collection_package_function"
                                          },
                                          {
                                                "text": "Collection Package Interface",
                                                "link": "/1.0.1/libs/std/collection/collection_package_api/collection_package_interface"
                                          }
                                    ]
                              },
                              {
                                    "text": "Collection Package Samples",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Sample Arraylist Add",
                                                "link": "/1.0.1/libs/std/collection/collection_package_samples/sample_arraylist_add"
                                          },
                                          {
                                                "text": "Sample Arraylist Get Set",
                                                "link": "/1.0.1/libs/std/collection/collection_package_samples/sample_arraylist_get_set"
                                          },
                                          {
                                                "text": "Sample Arraylist Remove Clear Slice",
                                                "link": "/1.0.1/libs/std/collection/collection_package_samples/sample_arraylist_remove_clear_slice"
                                          },
                                          {
                                                "text": "Sample Hashmap Add Remove Clear",
                                                "link": "/1.0.1/libs/std/collection/collection_package_samples/sample_hashmap_add_remove_clear"
                                          },
                                          {
                                                "text": "Sample Hashmap Get Add Contains",
                                                "link": "/1.0.1/libs/std/collection/collection_package_samples/sample_hashmap_get_add_contains"
                                          },
                                          {
                                                "text": "Sample Hashset Add Iterator Remove",
                                                "link": "/1.0.1/libs/std/collection/collection_package_samples/sample_hashset_add_iterator_remove"
                                          },
                                          {
                                                "text": "Sample Iterator",
                                                "link": "/1.0.1/libs/std/collection/collection_package_samples/sample_iterator"
                                          },
                                          {
                                                "text": "Sample Treeset Add Iterator Remove",
                                                "link": "/1.0.1/libs/std/collection/collection_package_samples/sample_treeset_add_iterator_remove"
                                          }
                                    ]
                              },
                              {
                                    "text": "Collection Package Overview 概述",
                                    "link": "/1.0.1/libs/std/collection/collection_package_overview"
                              }
                        ],
                        "link": "/1.0.1/libs/std/collection/collection_package_overview"
                  },
                  {
                        "text": "并发集合 (Concurrent)",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Collection Concurrent Package Api",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Collection Concurrent Class",
                                                "link": "/1.0.1/libs/std/collection_concurrent/collection_concurrent_package_api/collection_concurrent_class"
                                          },
                                          {
                                                "text": "Collection Concurrent Interface",
                                                "link": "/1.0.1/libs/std/collection_concurrent/collection_concurrent_package_api/collection_concurrent_interface"
                                          },
                                          {
                                                "text": "Collection Concurrent Types",
                                                "link": "/1.0.1/libs/std/collection_concurrent/collection_concurrent_package_api/collection_concurrent_types"
                                          }
                                    ]
                              },
                              {
                                    "text": "Collection Concurrent Samples",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Sample Concurrent Linked Queue",
                                                "link": "/1.0.1/libs/std/collection_concurrent/collection_concurrent_samples/sample_concurrent_linked_queue"
                                          },
                                          {
                                                "text": "Sample Concurrenthashmap",
                                                "link": "/1.0.1/libs/std/collection_concurrent/collection_concurrent_samples/sample_concurrenthashmap"
                                          }
                                    ]
                              },
                              {
                                    "text": "Collection Concurrent Package Overview 概述",
                                    "link": "/1.0.1/libs/std/collection_concurrent/collection_concurrent_package_overview"
                              }
                        ],
                        "link": "/1.0.1/libs/std/collection_concurrent/collection_concurrent_package_overview"
                  },
                  {
                        "text": "网络库 (Net)",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Net Package Api",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Net Package Classes",
                                                "link": "/1.0.1/libs/std/net/net_package_api/net_package_classes"
                                          },
                                          {
                                                "text": "Net Package Enums",
                                                "link": "/1.0.1/libs/std/net/net_package_api/net_package_enums"
                                          },
                                          {
                                                "text": "Net Package Exceptions",
                                                "link": "/1.0.1/libs/std/net/net_package_api/net_package_exceptions"
                                          },
                                          {
                                                "text": "Net Package Interfaces",
                                                "link": "/1.0.1/libs/std/net/net_package_api/net_package_interfaces"
                                          },
                                          {
                                                "text": "Net Package Structs",
                                                "link": "/1.0.1/libs/std/net/net_package_api/net_package_structs"
                                          }
                                    ]
                              },
                              {
                                    "text": "Net Samples",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Socket Option",
                                                "link": "/1.0.1/libs/std/net/net_samples/socket_option"
                                          },
                                          {
                                                "text": "Tcp",
                                                "link": "/1.0.1/libs/std/net/net_samples/tcp"
                                          },
                                          {
                                                "text": "Udp",
                                                "link": "/1.0.1/libs/std/net/net_samples/udp"
                                          },
                                          {
                                                "text": "Unix",
                                                "link": "/1.0.1/libs/std/net/net_samples/unix"
                                          },
                                          {
                                                "text": "Unix Datagram",
                                                "link": "/1.0.1/libs/std/net/net_samples/unix_datagram"
                                          }
                                    ]
                              },
                              {
                                    "text": "Net Package Overview 概述",
                                    "link": "/1.0.1/libs/std/net/net_package_overview"
                              }
                        ],
                        "link": "/1.0.1/libs/std/net/net_package_overview"
                  },
                  {
                        "text": "I/O 库",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Io Package Api",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Io Package Classes",
                                                "link": "/1.0.1/libs/std/io/io_package_api/io_package_classes"
                                          },
                                          {
                                                "text": "Io Package Enums",
                                                "link": "/1.0.1/libs/std/io/io_package_api/io_package_enums"
                                          },
                                          {
                                                "text": "Io Package Exceptions",
                                                "link": "/1.0.1/libs/std/io/io_package_api/io_package_exceptions"
                                          },
                                          {
                                                "text": "Io Package Funcs",
                                                "link": "/1.0.1/libs/std/io/io_package_api/io_package_funcs"
                                          },
                                          {
                                                "text": "Io Package Interfaces",
                                                "link": "/1.0.1/libs/std/io/io_package_api/io_package_interfaces"
                                          }
                                    ]
                              },
                              {
                                    "text": "Io Samples",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Buffered Input Stream",
                                                "link": "/1.0.1/libs/std/io/io_samples/buffered_input_stream"
                                          },
                                          {
                                                "text": "Buffered Output Stream",
                                                "link": "/1.0.1/libs/std/io/io_samples/buffered_output_stream"
                                          },
                                          {
                                                "text": "Byte Buffer",
                                                "link": "/1.0.1/libs/std/io/io_samples/byte_buffer"
                                          },
                                          {
                                                "text": "Chained Input Stream",
                                                "link": "/1.0.1/libs/std/io/io_samples/chained_input_stream"
                                          },
                                          {
                                                "text": "Multi Output Stream",
                                                "link": "/1.0.1/libs/std/io/io_samples/multi_output_stream"
                                          },
                                          {
                                                "text": "String Reader",
                                                "link": "/1.0.1/libs/std/io/io_samples/string_reader"
                                          },
                                          {
                                                "text": "String Writer",
                                                "link": "/1.0.1/libs/std/io/io_samples/string_writer"
                                          }
                                    ]
                              },
                              {
                                    "text": "Io Package Overview 概述",
                                    "link": "/1.0.1/libs/std/io/io_package_overview"
                              }
                        ],
                        "link": "/1.0.1/libs/std/io/io_package_overview"
                  },
                  {
                        "text": "文件系统库 (FS)",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Fs Package Api",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Fs Package Classes",
                                                "link": "/1.0.1/libs/std/fs/fs_package_api/fs_package_classes"
                                          },
                                          {
                                                "text": "Fs Package Enums",
                                                "link": "/1.0.1/libs/std/fs/fs_package_api/fs_package_enums"
                                          },
                                          {
                                                "text": "Fs Package Exceptions",
                                                "link": "/1.0.1/libs/std/fs/fs_package_api/fs_package_exceptions"
                                          },
                                          {
                                                "text": "Fs Package Funcs",
                                                "link": "/1.0.1/libs/std/fs/fs_package_api/fs_package_funcs"
                                          },
                                          {
                                                "text": "Fs Package Structs",
                                                "link": "/1.0.1/libs/std/fs/fs_package_api/fs_package_structs"
                                          }
                                    ]
                              },
                              {
                                    "text": "Fs Samples",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Directory Samples",
                                                "link": "/1.0.1/libs/std/fs/fs_samples/directory_samples"
                                          },
                                          {
                                                "text": "File Samples",
                                                "link": "/1.0.1/libs/std/fs/fs_samples/file_samples"
                                          },
                                          {
                                                "text": "Fileinfo Samples",
                                                "link": "/1.0.1/libs/std/fs/fs_samples/fileinfo_samples"
                                          },
                                          {
                                                "text": "Path Samples",
                                                "link": "/1.0.1/libs/std/fs/fs_samples/path_samples"
                                          }
                                    ]
                              },
                              {
                                    "text": "Fs Package Overview 概述",
                                    "link": "/1.0.1/libs/std/fs/fs_package_overview"
                              }
                        ],
                        "link": "/1.0.1/libs/std/fs/fs_package_overview"
                  },
                  {
                        "text": "时间库 (Time)",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Time Package Api",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Time Package Classes",
                                                "link": "/1.0.1/libs/std/time/time_package_api/time_package_classes"
                                          },
                                          {
                                                "text": "Time Package Enums",
                                                "link": "/1.0.1/libs/std/time/time_package_api/time_package_enums"
                                          },
                                          {
                                                "text": "Time Package Exceptions",
                                                "link": "/1.0.1/libs/std/time/time_package_api/time_package_exceptions"
                                          },
                                          {
                                                "text": "Time Package Structs",
                                                "link": "/1.0.1/libs/std/time/time_package_api/time_package_structs"
                                          }
                                    ]
                              },
                              {
                                    "text": "Time Samples",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Datetime Compare",
                                                "link": "/1.0.1/libs/std/time/time_samples/datetime_compare"
                                          },
                                          {
                                                "text": "Datetime Now",
                                                "link": "/1.0.1/libs/std/time/time_samples/datetime_now"
                                          },
                                          {
                                                "text": "Datetime Parse",
                                                "link": "/1.0.1/libs/std/time/time_samples/datetime_parse"
                                          },
                                          {
                                                "text": "Datetime Prop",
                                                "link": "/1.0.1/libs/std/time/time_samples/datetime_prop"
                                          },
                                          {
                                                "text": "Datetime Tz",
                                                "link": "/1.0.1/libs/std/time/time_samples/datetime_tz"
                                          },
                                          {
                                                "text": "Monotime Test",
                                                "link": "/1.0.1/libs/std/time/time_samples/monotime_test"
                                          }
                                    ]
                              },
                              {
                                    "text": "Time Package Overview 概述",
                                    "link": "/1.0.1/libs/std/time/time_package_overview"
                              }
                        ],
                        "link": "/1.0.1/libs/std/time/time_package_overview"
                  },
                  {
                        "text": "正则表达式 (Regex)",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Regex Package Api",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Regex Package Classes",
                                                "link": "/1.0.1/libs/std/regex/regex_package_api/regex_package_classes"
                                          },
                                          {
                                                "text": "Regex Package Enums",
                                                "link": "/1.0.1/libs/std/regex/regex_package_api/regex_package_enums"
                                          },
                                          {
                                                "text": "Regex Package Exceptions",
                                                "link": "/1.0.1/libs/std/regex/regex_package_api/regex_package_exceptions"
                                          },
                                          {
                                                "text": "Regex Package Structs",
                                                "link": "/1.0.1/libs/std/regex/regex_package_api/regex_package_structs"
                                          }
                                    ]
                              },
                              {
                                    "text": "Regex Samples",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Regex Sample",
                                                "link": "/1.0.1/libs/std/regex/regex_samples/regex_sample"
                                          }
                                    ]
                              },
                              {
                                    "text": "Regex Package Overview 概述",
                                    "link": "/1.0.1/libs/std/regex/regex_package_overview"
                              }
                        ],
                        "link": "/1.0.1/libs/std/regex/regex_package_overview"
                  },
                  {
                        "text": "单元测试 (UnitTest)",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Unittest Package Api",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Unittest Package Classes",
                                                "link": "/1.0.1/libs/std/unittest/unittest_package_api/unittest_package_classes"
                                          },
                                          {
                                                "text": "Unittest Package Enums",
                                                "link": "/1.0.1/libs/std/unittest/unittest_package_api/unittest_package_enums"
                                          },
                                          {
                                                "text": "Unittest Package Exceptions",
                                                "link": "/1.0.1/libs/std/unittest/unittest_package_api/unittest_package_exceptions"
                                          },
                                          {
                                                "text": "Unittest Package Functions",
                                                "link": "/1.0.1/libs/std/unittest/unittest_package_api/unittest_package_functions"
                                          },
                                          {
                                                "text": "Unittest Package Interfaces",
                                                "link": "/1.0.1/libs/std/unittest/unittest_package_api/unittest_package_interfaces"
                                          },
                                          {
                                                "text": "Unittest Package Structs",
                                                "link": "/1.0.1/libs/std/unittest/unittest_package_api/unittest_package_structs"
                                          },
                                          {
                                                "text": "Unittest Package Types",
                                                "link": "/1.0.1/libs/std/unittest/unittest_package_api/unittest_package_types"
                                          }
                                    ]
                              },
                              {
                                    "text": "Unittest Samples",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Unittest Basics",
                                                "link": "/1.0.1/libs/std/unittest/unittest_samples/unittest_basics"
                                          },
                                          {
                                                "text": "Unittest Benchmarks",
                                                "link": "/1.0.1/libs/std/unittest/unittest_samples/unittest_benchmarks"
                                          },
                                          {
                                                "text": "Unittest Dynamic Tests",
                                                "link": "/1.0.1/libs/std/unittest/unittest_samples/unittest_dynamic_tests"
                                          },
                                          {
                                                "text": "Unittest Getting Started",
                                                "link": "/1.0.1/libs/std/unittest/unittest_samples/unittest_getting_started"
                                          },
                                          {
                                                "text": "Unittest Parameterized Tests",
                                                "link": "/1.0.1/libs/std/unittest/unittest_samples/unittest_parameterized_tests"
                                          },
                                          {
                                                "text": "Unittest Test Templates",
                                                "link": "/1.0.1/libs/std/unittest/unittest_samples/unittest_test_templates"
                                          }
                                    ]
                              },
                              {
                                    "text": "Unittest Package Overview 概述",
                                    "link": "/1.0.1/libs/std/unittest/unittest_package_overview"
                              }
                        ],
                        "link": "/1.0.1/libs/std/unittest/unittest_package_overview"
                  },
                  {
                        "text": "同步原语 (Sync)",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Sync Package Api",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Sync Package Classes",
                                                "link": "/1.0.1/libs/std/sync/sync_package_api/sync_package_classes"
                                          },
                                          {
                                                "text": "Sync Package Constants Vars",
                                                "link": "/1.0.1/libs/std/sync/sync_package_api/sync_package_constants_vars"
                                          },
                                          {
                                                "text": "Sync Package Enums",
                                                "link": "/1.0.1/libs/std/sync/sync_package_api/sync_package_enums"
                                          },
                                          {
                                                "text": "Sync Package Exceptions",
                                                "link": "/1.0.1/libs/std/sync/sync_package_api/sync_package_exceptions"
                                          },
                                          {
                                                "text": "Sync Package Interfaces",
                                                "link": "/1.0.1/libs/std/sync/sync_package_api/sync_package_interfaces"
                                          },
                                          {
                                                "text": "Sync Package Structs",
                                                "link": "/1.0.1/libs/std/sync/sync_package_api/sync_package_structs"
                                          }
                                    ]
                              },
                              {
                                    "text": "Sync Samples",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Sync Samples",
                                                "link": "/1.0.1/libs/std/sync/sync_samples/sync_samples"
                                          }
                                    ]
                              },
                              {
                                    "text": "Sync Package Overview 概述",
                                    "link": "/1.0.1/libs/std/sync/sync_package_overview"
                              }
                        ],
                        "link": "/1.0.1/libs/std/sync/sync_package_overview"
                  },
                  {
                        "text": "AST 库",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Ast Package Api",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Ast Package Classes",
                                                "link": "/1.0.1/libs/std/ast/ast_package_api/ast_package_classes"
                                          },
                                          {
                                                "text": "Ast Package Enums",
                                                "link": "/1.0.1/libs/std/ast/ast_package_api/ast_package_enums"
                                          },
                                          {
                                                "text": "Ast Package Exceptions",
                                                "link": "/1.0.1/libs/std/ast/ast_package_api/ast_package_exceptions"
                                          },
                                          {
                                                "text": "Ast Package Funcs",
                                                "link": "/1.0.1/libs/std/ast/ast_package_api/ast_package_funcs"
                                          },
                                          {
                                                "text": "Ast Package Interfaces",
                                                "link": "/1.0.1/libs/std/ast/ast_package_api/ast_package_interfaces"
                                          },
                                          {
                                                "text": "Ast Package Structs",
                                                "link": "/1.0.1/libs/std/ast/ast_package_api/ast_package_structs"
                                          }
                                    ]
                              },
                              {
                                    "text": "Ast Samples",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Context",
                                                "link": "/1.0.1/libs/std/ast/ast_samples/context"
                                          },
                                          {
                                                "text": "Dump",
                                                "link": "/1.0.1/libs/std/ast/ast_samples/dump"
                                          },
                                          {
                                                "text": "Operate",
                                                "link": "/1.0.1/libs/std/ast/ast_samples/operate"
                                          },
                                          {
                                                "text": "Parse",
                                                "link": "/1.0.1/libs/std/ast/ast_samples/parse"
                                          },
                                          {
                                                "text": "Report",
                                                "link": "/1.0.1/libs/std/ast/ast_samples/report"
                                          },
                                          {
                                                "text": "Traverse",
                                                "link": "/1.0.1/libs/std/ast/ast_samples/traverse"
                                          }
                                    ]
                              },
                              {
                                    "text": "Ast Package Overview 概述",
                                    "link": "/1.0.1/libs/std/ast/ast_package_overview"
                              }
                        ],
                        "link": "/1.0.1/libs/std/ast/ast_package_overview"
                  },
                  {
                        "text": "排序库 (Sort)",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Sort Package Api",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Sort Package Funcs",
                                                "link": "/1.0.1/libs/std/sort/sort_package_api/sort_package_funcs"
                                          },
                                          {
                                                "text": "Sort Package Interfaces",
                                                "link": "/1.0.1/libs/std/sort/sort_package_api/sort_package_interfaces"
                                          }
                                    ]
                              },
                              {
                                    "text": "Sort Samples",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Sort Sample Array",
                                                "link": "/1.0.1/libs/std/sort/sort_samples/sort_sample_array"
                                          }
                                    ]
                              },
                              {
                                    "text": "Sort Package Overview 概述",
                                    "link": "/1.0.1/libs/std/sort/sort_package_overview"
                              }
                        ],
                        "link": "/1.0.1/libs/std/sort/sort_package_overview"
                  },
                  {
                        "text": "命令行参数 (ArgOpt)",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Argopt Package Api",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Argopt Package Classes",
                                                "link": "/1.0.1/libs/std/argopt/argopt_package_api/argopt_package_classes"
                                          },
                                          {
                                                "text": "Argopt Package Enums",
                                                "link": "/1.0.1/libs/std/argopt/argopt_package_api/argopt_package_enums"
                                          },
                                          {
                                                "text": "Argopt Package Exception",
                                                "link": "/1.0.1/libs/std/argopt/argopt_package_api/argopt_package_exception"
                                          },
                                          {
                                                "text": "Argopt Package Function",
                                                "link": "/1.0.1/libs/std/argopt/argopt_package_api/argopt_package_function"
                                          },
                                          {
                                                "text": "Argopt Package Struct",
                                                "link": "/1.0.1/libs/std/argopt/argopt_package_api/argopt_package_struct"
                                          }
                                    ]
                              },
                              {
                                    "text": "Argopt Samples",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Argument Parse",
                                                "link": "/1.0.1/libs/std/argopt/argopt_samples/argument_parse"
                                          },
                                          {
                                                "text": "Long Argument Parse",
                                                "link": "/1.0.1/libs/std/argopt/argopt_samples/long_argument_parse"
                                          },
                                          {
                                                "text": "Short Argument Parse",
                                                "link": "/1.0.1/libs/std/argopt/argopt_samples/short_argument_parse"
                                          }
                                    ]
                              },
                              {
                                    "text": "Argopt Package Overview 概述",
                                    "link": "/1.0.1/libs/std/argopt/argopt_package_overview"
                              }
                        ],
                        "link": "/1.0.1/libs/std/argopt/argopt_package_overview"
                  },
                  {
                        "text": "数值数学库 (Math Numeric)",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Math Numeric Package Api",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Math Numeric Package Enums",
                                                "link": "/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_enums"
                                          },
                                          {
                                                "text": "Math Numeric Package Funcs",
                                                "link": "/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_funcs"
                                          },
                                          {
                                                "text": "Math Numeric Package Structs",
                                                "link": "/1.0.1/libs/std/math_numeric/math_numeric_package_api/math_numeric_package_structs"
                                          }
                                    ]
                              },
                              {
                                    "text": "Math Numeric Samples",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Bigint Basic Arithmetic",
                                                "link": "/1.0.1/libs/std/math_numeric/math_numeric_samples/bigInt_basic_arithmetic"
                                          },
                                          {
                                                "text": "Bigint Basic Prop",
                                                "link": "/1.0.1/libs/std/math_numeric/math_numeric_samples/bigInt_basic_prop"
                                          },
                                          {
                                                "text": "Bigint Compare Opration",
                                                "link": "/1.0.1/libs/std/math_numeric/math_numeric_samples/bigInt_compare_opration"
                                          },
                                          {
                                                "text": "Decimal Basic Arithmetic",
                                                "link": "/1.0.1/libs/std/math_numeric/math_numeric_samples/decimal_basic_arithmetic"
                                          },
                                          {
                                                "text": "Decimal Basic Prop",
                                                "link": "/1.0.1/libs/std/math_numeric/math_numeric_samples/decimal_basic_prop"
                                          },
                                          {
                                                "text": "Decimal Compare Opration",
                                                "link": "/1.0.1/libs/std/math_numeric/math_numeric_samples/decimal_compare_opration"
                                          }
                                    ]
                              },
                              {
                                    "text": "Math Numeric Package Overview 概述",
                                    "link": "/1.0.1/libs/std/math_numeric/math_numeric_package_overview"
                              }
                        ],
                        "link": "/1.0.1/libs/std/math_numeric/math_numeric_package_overview"
                  },
                  {
                        "text": "数据库 SQL",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Database Sql Package Api",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Database Sql Package Classes",
                                                "link": "/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_classes"
                                          },
                                          {
                                                "text": "Database Sql Package Enums",
                                                "link": "/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_enums"
                                          },
                                          {
                                                "text": "Database Sql Package Exceptions",
                                                "link": "/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_exceptions"
                                          },
                                          {
                                                "text": "Database Sql Package Interfaces",
                                                "link": "/1.0.1/libs/std/database_sql/database_sql_package_api/database_sql_package_interfaces"
                                          }
                                    ]
                              },
                              {
                                    "text": "Database Sql Samples",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Db Get Connection",
                                                "link": "/1.0.1/libs/std/database_sql/database_sql_samples/db_get_connection"
                                          },
                                          {
                                                "text": "Db Modify Table",
                                                "link": "/1.0.1/libs/std/database_sql/database_sql_samples/db_modify_table"
                                          },
                                          {
                                                "text": "Db Operations",
                                                "link": "/1.0.1/libs/std/database_sql/database_sql_samples/db_operations"
                                          },
                                          {
                                                "text": "Db Transactions",
                                                "link": "/1.0.1/libs/std/database_sql/database_sql_samples/db_transactions"
                                          }
                                    ]
                              },
                              {
                                    "text": "Database Sql Package Overview 概述",
                                    "link": "/1.0.1/libs/std/database_sql/database_sql_package_overview"
                              }
                        ],
                        "link": "/1.0.1/libs/std/database_sql/database_sql_package_overview"
                  },
                  {
                        "text": "反射库 (Reflect)",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Reflect Package Api",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Reflect Package Classes",
                                                "link": "/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_classes"
                                          },
                                          {
                                                "text": "Reflect Package Enums",
                                                "link": "/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_enums"
                                          },
                                          {
                                                "text": "Reflect Package Exceptions",
                                                "link": "/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_exceptions"
                                          },
                                          {
                                                "text": "Reflect Package Funcs",
                                                "link": "/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_funcs"
                                          },
                                          {
                                                "text": "Reflect Package Types",
                                                "link": "/1.0.1/libs/std/reflect/reflect_package_api/reflect_package_types"
                                          }
                                    ]
                              },
                              {
                                    "text": "Reflect Samples",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Annotation",
                                                "link": "/1.0.1/libs/std/reflect/reflect_samples/annotation"
                                          },
                                          {
                                                "text": "Dynload",
                                                "link": "/1.0.1/libs/std/reflect/reflect_samples/dynload"
                                          },
                                          {
                                                "text": "Memberinfo",
                                                "link": "/1.0.1/libs/std/reflect/reflect_samples/memberInfo"
                                          },
                                          {
                                                "text": "Typeinfo",
                                                "link": "/1.0.1/libs/std/reflect/reflect_samples/typeInfo"
                                          }
                                    ]
                              },
                              {
                                    "text": "Reflect Package Overview 概述",
                                    "link": "/1.0.1/libs/std/reflect/reflect_package_overview"
                              }
                        ],
                        "link": "/1.0.1/libs/std/reflect/reflect_package_overview"
                  },
                  {
                        "text": "随机数库 (Random)",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Random Package Api",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Random Package Classes",
                                                "link": "/1.0.1/libs/std/random/random_package_api/random_package_classes"
                                          }
                                    ]
                              },
                              {
                                    "text": "Random Package Overview 概述",
                                    "link": "/1.0.1/libs/std/random/random_package_overview"
                              }
                        ],
                        "link": "/1.0.1/libs/std/random/random_package_overview"
                  },
                  {
                        "text": "控制台库 (Console)",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Console Package Api",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Console Package Class",
                                                "link": "/1.0.1/libs/std/console/console_package_api/console_package_class"
                                          }
                                    ]
                              },
                              {
                                    "text": "Console Samples",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Console Sample",
                                                "link": "/1.0.1/libs/std/console/console_samples/console_sample"
                                          }
                                    ]
                              },
                              {
                                    "text": "Console Package Overview 概述",
                                    "link": "/1.0.1/libs/std/console/console_package_overview"
                              }
                        ],
                        "link": "/1.0.1/libs/std/console/console_package_overview"
                  },
                  {
                        "text": "POSIX 库",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Posix Package Api",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Posix Package Constants Vars",
                                                "link": "/1.0.1/libs/std/posix/posix_package_api/posix_package_constants_vars"
                                          },
                                          {
                                                "text": "Posix Package Funcs",
                                                "link": "/1.0.1/libs/std/posix/posix_package_api/posix_package_funcs"
                                          }
                                    ]
                              },
                              {
                                    "text": "Posix Samples",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Posix Get File Content Samples",
                                                "link": "/1.0.1/libs/std/posix/posix_samples/posix_get_file_content_samples"
                                          },
                                          {
                                                "text": "Posix Get File Info Samples",
                                                "link": "/1.0.1/libs/std/posix/posix_samples/posix_get_file_info_samples"
                                          },
                                          {
                                                "text": "Posix Get Os Envinfo Samples",
                                                "link": "/1.0.1/libs/std/posix/posix_samples/posix_get_os_envinfo_samples"
                                          },
                                          {
                                                "text": "Posix Process Samples",
                                                "link": "/1.0.1/libs/std/posix/posix_samples/posix_process_samples"
                                          }
                                    ]
                              },
                              {
                                    "text": "Posix Package Overview 概述",
                                    "link": "/1.0.1/libs/std/posix/posix_package_overview"
                              }
                        ],
                        "link": "/1.0.1/libs/std/posix/posix_package_overview"
                  },
                  {
                        "text": "派生库 (Deriving)",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Deriving Package Api",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Deriving Package Macros",
                                                "link": "/1.0.1/libs/std/deriving/deriving_package_api/deriving_package_macros"
                                          }
                                    ]
                              },
                              {
                                    "text": "Deriving Samples",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Deriving User Guide",
                                                "link": "/1.0.1/libs/std/deriving/deriving_samples/deriving_user_guide"
                                          }
                                    ]
                              },
                              {
                                    "text": "Deriving Package Overview 概述",
                                    "link": "/1.0.1/libs/std/deriving/deriving_package_overview"
                              }
                        ],
                        "link": "/1.0.1/libs/std/deriving/deriving_package_overview"
                  },
                  {
                        "text": "引用库 (Ref)",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Ref Package Api",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Ref Package Classes",
                                                "link": "/1.0.1/libs/std/ref/ref_package_api/ref_package_classes"
                                          },
                                          {
                                                "text": "Ref Package Enums",
                                                "link": "/1.0.1/libs/std/ref/ref_package_api/ref_package_enums"
                                          }
                                    ]
                              },
                              {
                                    "text": "Ref Samples",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Weakref In Cache",
                                                "link": "/1.0.1/libs/std/ref/ref_samples/weakref_in_cache"
                                          }
                                    ]
                              },
                              {
                                    "text": "Ref Package Overview 概述",
                                    "link": "/1.0.1/libs/std/ref/ref_package_overview"
                              }
                        ],
                        "link": "/1.0.1/libs/std/ref/ref_package_overview"
                  },
                  {
                        "text": "环境库 (Env)",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Env Package Api",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Env Package Classes",
                                                "link": "/1.0.1/libs/std/env/env_package_api/env_package_classes"
                                          },
                                          {
                                                "text": "Env Package Exceptions",
                                                "link": "/1.0.1/libs/std/env/env_package_api/env_package_exceptions"
                                          },
                                          {
                                                "text": "Env Package Funcs",
                                                "link": "/1.0.1/libs/std/env/env_package_api/env_package_funcs"
                                          }
                                    ]
                              },
                              {
                                    "text": "Env Samples",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Env Sample",
                                                "link": "/1.0.1/libs/std/env/env_samples/env_sample"
                                          }
                                    ]
                              },
                              {
                                    "text": "Env Package Overview 概述",
                                    "link": "/1.0.1/libs/std/env/env_package_overview"
                              }
                        ],
                        "link": "/1.0.1/libs/std/env/env_package_overview"
                  },
                  {
                        "text": "二进制库 (Binary)",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Binary Package Api",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Binary Package Interfaces",
                                                "link": "/1.0.1/libs/std/binary/binary_package_api/binary_package_interfaces"
                                          }
                                    ]
                              },
                              {
                                    "text": "Binary Package Overview 概述",
                                    "link": "/1.0.1/libs/std/binary/binary_package_overview"
                              }
                        ],
                        "link": "/1.0.1/libs/std/binary/binary_package_overview"
                  },
                  {
                        "text": "加密库 (Crypto)",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Cipher",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Cipher Package Api",
                                                "collapsed": true,
                                                "items": [
                                                      {
                                                            "text": "Cipher Package Interfaces",
                                                            "link": "/1.0.1/libs/std/crypto/cipher/cipher_package_api/cipher_package_interfaces"
                                                      }
                                                ]
                                          },
                                          {
                                                "text": "Cipher Package Overview 概述",
                                                "link": "/1.0.1/libs/std/crypto/cipher/cipher_package_overview"
                                          }
                                    ],
                                    "link": "/1.0.1/libs/std/crypto/cipher/cipher_package_overview"
                              },
                              {
                                    "text": "Digest",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Digest Package Api",
                                                "collapsed": true,
                                                "items": [
                                                      {
                                                            "text": "Digest Package Funcs",
                                                            "link": "/1.0.1/libs/std/crypto/digest/digest_package_api/digest_package_funcs"
                                                      },
                                                      {
                                                            "text": "Digest Package Interfaces",
                                                            "link": "/1.0.1/libs/std/crypto/digest/digest_package_api/digest_package_interfaces"
                                                      }
                                                ]
                                          },
                                          {
                                                "text": "Digest Package Overview 概述",
                                                "link": "/1.0.1/libs/std/crypto/digest/digest_package_overview"
                                          }
                                    ],
                                    "link": "/1.0.1/libs/std/crypto/digest/digest_package_overview"
                              }
                        ]
                  },
                  {
                        "text": "转换库 (Convert)",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Convert Package Api",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Convert Package Interfaces",
                                                "link": "/1.0.1/libs/std/convert/convert_package_api/convert_package_interfaces"
                                          }
                                    ]
                              },
                              {
                                    "text": "Convert Samples",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Convert Samples",
                                                "link": "/1.0.1/libs/std/convert/convert_samples/convert_samples"
                                          }
                                    ]
                              },
                              {
                                    "text": "Convert Package Overview 概述",
                                    "link": "/1.0.1/libs/std/convert/convert_package_overview"
                              }
                        ],
                        "link": "/1.0.1/libs/std/convert/convert_package_overview"
                  },
                  {
                        "text": "进程库 (Process)",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Process Package Api",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Process Package Classes",
                                                "link": "/1.0.1/libs/std/process/process_package_api/process_package_classes"
                                          },
                                          {
                                                "text": "Process Package Enums",
                                                "link": "/1.0.1/libs/std/process/process_package_api/process_package_enums"
                                          },
                                          {
                                                "text": "Process Package Exceptions",
                                                "link": "/1.0.1/libs/std/process/process_package_api/process_package_exceptions"
                                          },
                                          {
                                                "text": "Process Package Funcs",
                                                "link": "/1.0.1/libs/std/process/process_package_api/process_package_funcs"
                                          }
                                    ]
                              },
                              {
                                    "text": "Process Samples",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Process Sample",
                                                "link": "/1.0.1/libs/std/process/process_samples/process_sample"
                                          },
                                          {
                                                "text": "Process Subprocess Sample",
                                                "link": "/1.0.1/libs/std/process/process_samples/process_subprocess_sample"
                                          }
                                    ]
                              },
                              {
                                    "text": "Process Package Overview 概述",
                                    "link": "/1.0.1/libs/std/process/process_package_overview"
                              }
                        ],
                        "link": "/1.0.1/libs/std/process/process_package_overview"
                  },
                  {
                        "text": "对象池库 (ObjectPool)",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Objectpool Package Api",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Objectpool Package Classes",
                                                "link": "/1.0.1/libs/std/objectpool/objectpool_package_api/objectpool_package_classes"
                                          }
                                    ]
                              },
                              {
                                    "text": "Objectpool Package Overview 概述",
                                    "link": "/1.0.1/libs/std/objectpool/objectpool_package_overview"
                              }
                        ],
                        "link": "/1.0.1/libs/std/objectpool/objectpool_package_overview"
                  },
                  {
                        "text": "溢出库 (Overflow)",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Overflow Package Api",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Overflow Package Exceptions",
                                                "link": "/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_exceptions"
                                          },
                                          {
                                                "text": "Overflow Package Interfaces",
                                                "link": "/1.0.1/libs/std/overflow/overflow_package_api/overflow_package_interfaces"
                                          }
                                    ]
                              },
                              {
                                    "text": "Overflow Samples",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Option",
                                                "link": "/1.0.1/libs/std/overflow/overflow_samples/option"
                                          },
                                          {
                                                "text": "Saturating",
                                                "link": "/1.0.1/libs/std/overflow/overflow_samples/saturating"
                                          },
                                          {
                                                "text": "Throwing",
                                                "link": "/1.0.1/libs/std/overflow/overflow_samples/throwing"
                                          },
                                          {
                                                "text": "Wrapping",
                                                "link": "/1.0.1/libs/std/overflow/overflow_samples/wrapping"
                                          }
                                    ]
                              },
                              {
                                    "text": "Overflow Package Overview 概述",
                                    "link": "/1.0.1/libs/std/overflow/overflow_package_overview"
                              }
                        ],
                        "link": "/1.0.1/libs/std/overflow/overflow_package_overview"
                  },
                  {
                        "text": "运行时库 (Runtime)",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Runtime Package Api",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Runtime Package Funcs",
                                                "link": "/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_funcs"
                                          },
                                          {
                                                "text": "Runtime Package Structs",
                                                "link": "/1.0.1/libs/std/runtime/runtime_package_api/runtime_package_structs"
                                          }
                                    ]
                              },
                              {
                                    "text": "Runtime Package Overview 概述",
                                    "link": "/1.0.1/libs/std/runtime/runtime_package_overview"
                              }
                        ],
                        "link": "/1.0.1/libs/std/runtime/runtime_package_overview"
                  },
                  {
                        "text": "Unicode库",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Unicode Package Api",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Unicode Package Enums",
                                                "link": "/1.0.1/libs/std/unicode/unicode_package_api/unicode_package_enums"
                                          },
                                          {
                                                "text": "Unicode Package Interfaces",
                                                "link": "/1.0.1/libs/std/unicode/unicode_package_api/unicode_package_interfaces"
                                          }
                                    ]
                              },
                              {
                                    "text": "Unicode Package Overview 概述",
                                    "link": "/1.0.1/libs/std/unicode/unicode_package_overview"
                              }
                        ],
                        "link": "/1.0.1/libs/std/unicode/unicode_package_overview"
                  },
                  {
                        "text": "单元测试通用库",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Unittest Common Package Api",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Unittest Common Package Classes",
                                                "link": "/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_classes"
                                          },
                                          {
                                                "text": "Unittest Common Package Enums",
                                                "link": "/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_enums"
                                          },
                                          {
                                                "text": "Unittest Common Package Exceptions",
                                                "link": "/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_exceptions"
                                          },
                                          {
                                                "text": "Unittest Common Package Functions",
                                                "link": "/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_functions"
                                          },
                                          {
                                                "text": "Unittest Common Package Interfaces",
                                                "link": "/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_interfaces"
                                          },
                                          {
                                                "text": "Unittest Common Package Structs",
                                                "link": "/1.0.1/libs/std/unittest_common/unittest_common_package_api/unittest_common_package_structs"
                                          }
                                    ]
                              },
                              {
                                    "text": "Unittest Common Package Overview 概述",
                                    "link": "/1.0.1/libs/std/unittest_common/unittest_common_package_overview"
                              }
                        ],
                        "link": "/1.0.1/libs/std/unittest_common/unittest_common_package_overview"
                  },
                  {
                        "text": "单元测试差异库",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Unittest Diff Package Api",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Unittest Diff Package Interfaces",
                                                "link": "/1.0.1/libs/std/unittest_diff/unittest_diff_package_api/unittest_diff_package_interfaces"
                                          }
                                    ]
                              },
                              {
                                    "text": "Unittest Diff Package Overview 概述",
                                    "link": "/1.0.1/libs/std/unittest_diff/unittest_diff_package_overview"
                              }
                        ],
                        "link": "/1.0.1/libs/std/unittest_diff/unittest_diff_package_overview"
                  },
                  {
                        "text": "单元测试模拟库",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Unittest Mock Package Api",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Unittest Mock Package Classes",
                                                "link": "/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_classes"
                                          },
                                          {
                                                "text": "Unittest Mock Package Enums",
                                                "link": "/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_enums"
                                          },
                                          {
                                                "text": "Unittest Mock Package Exceptions",
                                                "link": "/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_exceptions"
                                          },
                                          {
                                                "text": "Unittest Mock Package Functions",
                                                "link": "/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_functions"
                                          },
                                          {
                                                "text": "Unittest Mock Package Interfaces",
                                                "link": "/1.0.1/libs/std/unittest_mock/unittest_mock_package_api/unittest_mock_package_interfaces"
                                          }
                                    ]
                              },
                              {
                                    "text": "Unittest Mock Samples",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Mock Framework Basics",
                                                "link": "/1.0.1/libs/std/unittest_mock/unittest_mock_samples/mock_framework_basics"
                                          },
                                          {
                                                "text": "Mock Framework Getting Started",
                                                "link": "/1.0.1/libs/std/unittest_mock/unittest_mock_samples/mock_framework_getting_started"
                                          },
                                          {
                                                "text": "Mock Framework Stubs",
                                                "link": "/1.0.1/libs/std/unittest_mock/unittest_mock_samples/mock_framework_stubs"
                                          },
                                          {
                                                "text": "Mock Framework Verification",
                                                "link": "/1.0.1/libs/std/unittest_mock/unittest_mock_samples/mock_framework_verification"
                                          }
                                    ]
                              },
                              {
                                    "text": "Unittest Mock Package Overview 概述",
                                    "link": "/1.0.1/libs/std/unittest_mock/unittest_mock_package_overview"
                              }
                        ],
                        "link": "/1.0.1/libs/std/unittest_mock/unittest_mock_package_overview"
                  },
                  {
                        "text": "单元测试模拟宏库",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Unittest Mock Mockmacro Package Api",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Unittest Mock Mockmacro Package Macros",
                                                "link": "/1.0.1/libs/std/unittest_mock_mockmacro/unittest_mock_mockmacro_package_api/unittest_mock_mockmacro_package_macros"
                                          }
                                    ]
                              },
                              {
                                    "text": "Unittest Mock Mockmacro Package Overview 概述",
                                    "link": "/1.0.1/libs/std/unittest_mock_mockmacro/unittest_mock_mockmacro_package_overview"
                              }
                        ],
                        "link": "/1.0.1/libs/std/unittest_mock_mockmacro/unittest_mock_mockmacro_package_overview"
                  },
                  {
                        "text": "单元测试属性测试库",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Unittest Prop Test Package Api",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Unittest Prop Test Package Classes",
                                                "link": "/1.0.1/libs/std/unittest_prop_test/unittest_prop_test_package_api/unittest_prop_test_package_classes"
                                          },
                                          {
                                                "text": "Unittest Prop Test Package Functions",
                                                "link": "/1.0.1/libs/std/unittest_prop_test/unittest_prop_test_package_api/unittest_prop_test_package_functions"
                                          },
                                          {
                                                "text": "Unittest Prop Test Package Interfaces",
                                                "link": "/1.0.1/libs/std/unittest_prop_test/unittest_prop_test_package_api/unittest_prop_test_package_interfaces"
                                          },
                                          {
                                                "text": "Unittest Prop Test Package Structs",
                                                "link": "/1.0.1/libs/std/unittest_prop_test/unittest_prop_test_package_api/unittest_prop_test_package_structs"
                                          }
                                    ]
                              },
                              {
                                    "text": "Unittest Prop Test Package Overview 概述",
                                    "link": "/1.0.1/libs/std/unittest_prop_test/unittest_prop_test_package_overview"
                              }
                        ],
                        "link": "/1.0.1/libs/std/unittest_prop_test/unittest_prop_test_package_overview"
                  },
                  {
                        "text": "单元测试宏库",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "Unittest Testmacro Package Api",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Unittest Testmacro Package Macros",
                                                "link": "/1.0.1/libs/std/unittest_testmacro/unittest_testmacro_package_api/unittest_testmacro_package_macros"
                                          }
                                    ]
                              },
                              {
                                    "text": "Unittest Testmacro Package Overview 概述",
                                    "link": "/1.0.1/libs/std/unittest_testmacro/unittest_testmacro_package_overview"
                              }
                        ],
                        "link": "/1.0.1/libs/std/unittest_testmacro/unittest_testmacro_package_overview"
                  }
            ]
      },
      {
            "text": "🛠️ 开发工具",
            "collapsed": true,
            "items": [
                  {
                        "text": "Source Zh Cn",
                        "collapsed": true,
                        "items": [
                              {
                                    "text": "IDE 支持",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Command-Line Tools Integration Community",
                                                "link": "/1.0.1/tools/source_zh_cn/IDE/command-line_tools_integration_community"
                                          },
                                          {
                                                "text": "Compilation And Building Community",
                                                "link": "/1.0.1/tools/source_zh_cn/IDE/compilation_and_building_community"
                                          },
                                          {
                                                "text": "Create Cj Project Community",
                                                "link": "/1.0.1/tools/source_zh_cn/IDE/create_cj_project_community"
                                          },
                                          {
                                                "text": "Debug Service Community",
                                                "link": "/1.0.1/tools/source_zh_cn/IDE/debug_service_community"
                                          },
                                          {
                                                "text": "Ide Plug-In Overview Community",
                                                "link": "/1.0.1/tools/source_zh_cn/IDE/ide_plug-in_overview_community"
                                          },
                                          {
                                                "text": "Install Community",
                                                "link": "/1.0.1/tools/source_zh_cn/IDE/install_community"
                                          },
                                          {
                                                "text": "Language Service Community",
                                                "link": "/1.0.1/tools/source_zh_cn/IDE/language_service_community"
                                          }
                                    ]
                              },
                              {
                                    "text": "开发工具",
                                    "collapsed": true,
                                    "items": [
                                          {
                                                "text": "Cjcov Manual Cjnative",
                                                "link": "/1.0.1/tools/source_zh_cn/tools/cjcov_manual_cjnative"
                                          },
                                          {
                                                "text": "Cjdb Manual Cjnative",
                                                "link": "/1.0.1/tools/source_zh_cn/tools/cjdb_manual_cjnative"
                                          },
                                          {
                                                "text": "Cjfmt Manual",
                                                "link": "/1.0.1/tools/source_zh_cn/tools/cjfmt_manual"
                                          },
                                          {
                                                "text": "Cjlint Manual",
                                                "link": "/1.0.1/tools/source_zh_cn/tools/cjlint_manual"
                                          },
                                          {
                                                "text": "Cjpm Manual Cjnative Community",
                                                "link": "/1.0.1/tools/source_zh_cn/tools/cjpm_manual_cjnative_community"
                                          },
                                          {
                                                "text": "Cjprof Manual Cjnative",
                                                "link": "/1.0.1/tools/source_zh_cn/tools/cjprof_manual_cjnative"
                                          },
                                          {
                                                "text": "Cjtrace Recover Manual Cjnative",
                                                "link": "/1.0.1/tools/source_zh_cn/tools/cjtrace_recover_manual_cjnative"
                                          },
                                          {
                                                "text": "User Manual Cjnative",
                                                "link": "/1.0.1/tools/source_zh_cn/tools/user_manual_cjnative"
                                          }
                                    ]
                              }
                        ]
                  }
            ]
      }
]
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/cangjie-lang' }
    ],

    // 搜索
    search: {
      provider: 'local'
    },

    // 页脚
    footer: {
      message: '基于 VitePress 构建的仓颉文档',
      copyright: 'Copyright © 2024 仓颉编程语言'
    },

    // 编辑链接
    editLink: {
      pattern: 'https://github.com/your-repo/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    // 最后更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    }
  },

  // Markdown 配置
  markdown: {
    // 行号显示
    lineNumbers: true,
    
    // 代码高亮主题
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    
    // 代码块配置
    codeTransformers: [
      // 为 cangjie 语言提供语法高亮支持
      {
        name: 'cangjie-highlighter',
        preprocess(code, options) {
          if (options.lang === 'cangjie' || options.lang === 'cj') {
            // 使用 rust 语法高亮作为 fallback
            options.lang = 'rust'
          }
          return code
        }
      }
    ]
  },

  // 国际化
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN'
    }
  }
})