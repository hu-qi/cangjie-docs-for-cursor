#!/usr/bin/env python3
"""
自动生成VitePress侧边栏配置脚本
根据docs/1.0.1目录下的所有文档结构，生成完整的侧边栏配置
"""

import os
import json
from pathlib import Path

class SidebarGenerator:
    def __init__(self, docs_dir, version="1.0.1"):
        self.docs_dir = Path(docs_dir)
        self.version = version
        self.version_dir = self.docs_dir / version
        
        # 目录显示名称映射（中文友好名称）
        self.dir_name_map = {
            # 用户手册分类
            'first_understanding': '初识仓颉',
            'basic_programming_concepts': '基本编程概念',
            'basic_data_type': '基本数据类型',
            'function': '函数进阶',
            'struct': '结构体',
            'enum_and_pattern_match': '枚举和模式匹配',
            'class_and_interface': '类和接口',
            'generic': '泛型',
            'collections': '集合',
            'concurrency': '并发编程',
            'error_handle': '错误处理',
            'package': '包管理',
            'extension': '扩展',
            'reflect_and_annotation': '反射和注解',
            'compile_and_build': '编译和构建',
            'deploy_and_run': '部署和运行',
            'Basic_IO': '基础IO',
            'Net': '网络编程',
            'FFI': 'FFI互操作',
            'Macro': '宏系统',
            'Appendix': '附录',
            
            # 标准库分类
            'core': '核心库 (Core)',
            'math': '数学库 (Math)',
            'collection': '集合库 (Collection)',
            'collection_concurrent': '并发集合 (Concurrent)',
            'net': '网络库 (Net)',
            'regex': '正则表达式 (Regex)',
            'unittest': '单元测试 (UnitTest)',
            'sync': '同步原语 (Sync)',
            'ast': 'AST 库',
            'sort': '排序库 (Sort)',
            'argopt': '命令行参数 (ArgOpt)',
            'io': 'I/O 库',
            'math_numeric': '数值数学库 (Math Numeric)',
            'database_sql': '数据库 SQL',
            'reflect': '反射库 (Reflect)',
            'fs': '文件系统库 (FS)',
            'random': '随机数库 (Random)',
            'console': '控制台库 (Console)',
            'posix': 'POSIX 库',
            'deriving': '派生库 (Deriving)',
            'ref': '引用库 (Ref)',
            'env': '环境库 (Env)',
            'time': '时间库 (Time)',
            'binary': '二进制库 (Binary)',
            'crypto': '加密库 (Crypto)',
            'convert': '转换库 (Convert)',
            'process': '进程库 (Process)',
            'objectpool': '对象池库 (ObjectPool)',
            'overflow': '溢出库 (Overflow)',
            'runtime': '运行时库 (Runtime)',
            'unicode': 'Unicode库',
            'unittest_common': '单元测试通用库',
            'unittest_diff': '单元测试差异库',
            'unittest_mock': '单元测试模拟库',
            'unittest_mock_mockmacro': '单元测试模拟宏库',
            'unittest_prop_test': '单元测试属性测试库',
            'unittest_testmacro': '单元测试宏库',
            
            # 工具分类
            'IDE': 'IDE 支持',
            'tools': '开发工具'
        }
        
        # 文件显示名称映射（去除文件扩展名，转为友好名称）
        self.file_name_map = {
            # 通用映射
            'overview': '概述',
            'basic': '基础介绍',
            'install_Community': '安装工具链',
            'hello_world': '运行第一个程序',
            'identifier': '标识符',
            'program_structure': '程序结构',
            'expression': '表达式',
            'function': '函数',
            'basic_operators': '基本操作符',
            'integer': '整数类型',
            'float': '浮点类型',
            'bool': '布尔类型',
            'characters': '字符类型',
            'strings': '字符串类型',
            'tuple': '元组类型',
            'array': '数组类型',
            'range': '区间类型',
            'unit': 'Unit 类型',
            'nothing': 'Nothing 类型',
            
            # 函数相关
            'define_functions': '定义函数',
            'call_functions': '调用函数',
            'first_class_citizen': '函数类型',
            'nested_functions': '嵌套函数',
            'lambda': 'Lambda 表达式',
            'closure': '闭包',
            'function_call_desugar': '函数调用语法糖',
            'function_overloading': '函数重载',
            'operator_overloading': '操作符重载',
            'const_func_and_eval': 'const 函数和常量求值',
            
            # 结构体相关
            'define_struct': '定义 Struct 类型',
            'create_instance': '创建 Struct 实例',
            'mut': 'mut 函数',
            
            # 枚举相关
            'enum': '枚举类型',
            'option_type': 'Option 类型',
            'match': 'match 表达式',
            
            # 发布说明
            'release_notes': '版本发布说明'
        }

    def get_friendly_name(self, name, is_dir=False):
        """获取友好的显示名称"""
        # 移除文件扩展名
        if not is_dir and name.endswith('.md'):
            name = name[:-3]
        
        # 查找映射
        if name in (self.dir_name_map if is_dir else self.file_name_map):
            return (self.dir_name_map if is_dir else self.file_name_map)[name]
        
        # 处理overview文件
        if name.endswith('_overview'):
            base_name = name.replace('_overview', '')
            if base_name in self.dir_name_map:
                return f"{self.dir_name_map[base_name]} 概述"
            return name.replace('_', ' ').title() + ' 概述'
        
        # 默认处理：下划线转空格，首字母大写
        return name.replace('_', ' ').title()

    def should_skip_file(self, file_path):
        """判断是否应该跳过某个文件"""
        file_name = file_path.name
        
        # 跳过非md文件
        if not file_name.endswith('.md'):
            return True
            
        # 跳过特殊文件
        skip_files = {'index.md', 'manifest.json'}
        if file_name in skip_files:
            return True
            
        return False

    def generate_sidebar_item(self, path, base_path=""):
        """生成单个侧边栏项目"""
        relative_path = path.relative_to(self.version_dir)
        
        if path.is_file():
            if self.should_skip_file(path):
                return None
                
            # 生成文件链接
            link_path = f"/{self.version}/{relative_path}".replace('.md', '')
            return {
                'text': self.get_friendly_name(path.name, False),
                'link': link_path
            }
        
        elif path.is_dir():
            # 生成目录结构
            items = []
            
            # 先收集所有子项
            children = sorted(path.iterdir(), key=lambda x: (x.is_file(), x.name.lower()))
            
            for child in children:
                item = self.generate_sidebar_item(child, base_path)
                if item:
                    items.append(item)
            
            if not items:
                return None
            
            dir_item = {
                'text': self.get_friendly_name(path.name, True),
                'collapsed': True,
                'items': items
            }
            
            # 检查是否有对应的概览文档作为主链接
            overview_files = [
                f"{path.name}_overview.md",
                f"{path.name}_package_overview.md",
                "overview.md"
            ]
            
            for overview_file in overview_files:
                overview_path = path / overview_file
                if overview_path.exists():
                    link_path = f"/{self.version}/{overview_path.relative_to(self.version_dir)}".replace('.md', '')
                    dir_item['link'] = link_path
                    break
            
            return dir_item

    def generate_sidebar_config(self):
        """生成完整的侧边栏配置"""
        sidebar_items = []
        
        # 1. 添加发布说明
        release_notes_path = self.version_dir / "release_notes.md"
        if release_notes_path.exists():
            sidebar_items.append({
                'text': '发布说明',
                'items': [
                    {
                        'text': '版本发布说明',
                        'link': f'/{self.version}/release_notes'
                    }
                ]
            })
        
        # 2. 添加用户手册
        user_manual_dir = self.version_dir / "user_manual" / "source_zh_cn"
        if user_manual_dir.exists():
            user_manual_items = []
            
            # 按照逻辑顺序排列用户手册章节
            ordered_dirs = [
                'first_understanding',
                'basic_programming_concepts', 
                'basic_data_type',
                'function',
                'struct',
                'enum_and_pattern_match',
                'class_and_interface',
                'generic',
                'collections',
                'concurrency',
                'error_handle',
                'package',
                'extension',
                'reflect_and_annotation',
                'compile_and_build',
                'deploy_and_run',
                'Basic_IO',
                'Net',
                'FFI',
                'Macro',
                'Appendix'
            ]
            
            # 添加有序的目录
            for dir_name in ordered_dirs:
                dir_path = user_manual_dir / dir_name
                if dir_path.exists():
                    item = self.generate_sidebar_item(dir_path)
                    if item:
                        # 设置部分章节默认展开
                        if dir_name in ['first_understanding', 'basic_programming_concepts', 'basic_data_type']:
                            item['collapsed'] = False
                        user_manual_items.append(item)
            
            # 添加其他未列出的目录
            for child in sorted(user_manual_dir.iterdir()):
                if child.is_dir() and child.name not in ordered_dirs:
                    item = self.generate_sidebar_item(child)
                    if item:
                        user_manual_items.append(item)
            
            if user_manual_items:
                sidebar_items.append({
                    'text': '用户手册',
                    'collapsed': False,
                    'items': user_manual_items
                })
        
        # 3. 添加标准库 API
        libs_dir = self.version_dir / "libs" / "std"
        if libs_dir.exists():
            libs_items = []
            
            # 按照重要性排序标准库
            ordered_libs = [
                'core', 'math', 'collection', 'collection_concurrent',
                'net', 'io', 'fs', 'time', 'regex', 'unittest',
                'sync', 'ast', 'sort', 'argopt', 'math_numeric',
                'database_sql', 'reflect', 'random', 'console',
                'posix', 'deriving', 'ref', 'env', 'binary',
                'crypto', 'convert', 'process', 'objectpool',
                'overflow', 'runtime', 'unicode'
            ]
            
            # 添加有序的库
            for lib_name in ordered_libs:
                lib_path = libs_dir / lib_name
                if lib_path.exists():
                    item = self.generate_sidebar_item(lib_path)
                    if item:
                        libs_items.append(item)
            
            # 添加其他未列出的库
            for child in sorted(libs_dir.iterdir()):
                if child.is_dir() and child.name not in ordered_libs:
                    item = self.generate_sidebar_item(child)
                    if item:
                        libs_items.append(item)
            
            if libs_items:
                sidebar_items.append({
                    'text': '📦 标准库 API',
                    'collapsed': True,
                    'items': libs_items
                })
        
        # 4. 添加开发工具
        tools_dir = self.version_dir / "tools"
        if tools_dir.exists():
            tools_item = self.generate_sidebar_item(tools_dir)
            if tools_item:
                tools_item['text'] = '🛠️ 开发工具'
                tools_item['collapsed'] = True
                sidebar_items.append(tools_item)
        
        return sidebar_items

    def generate_config_js(self, output_path):
        """生成完整的VitePress配置文件"""
        sidebar_config = self.generate_sidebar_config()
        
        config_template = '''import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '仓颉编程语言文档',
  description: '仓颉编程语言官方文档',
  
  // 基础配置
  base: '/',
  lang: 'zh-CN',
  
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
      '/1.0.1/': SIDEBAR_CONFIG
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/hu-qi/cangjie-docs-for-cursor' }
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
    }
  },

  // 国际化
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN'
    }
  }
})'''

        # 将侧边栏配置转换为格式化的JSON字符串
        sidebar_json = json.dumps(sidebar_config, ensure_ascii=False, indent=6)
        
        # 替换配置模板中的占位符
        config_content = config_template.replace('SIDEBAR_CONFIG', sidebar_json)
        
        # 写入配置文件
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(config_content)
        
        print(f"✅ VitePress配置已生成: {output_path}")
        print(f"📊 生成了 {len(sidebar_config)} 个主要分类")
        
        # 统计总文档数量
        total_docs = self.count_total_docs(sidebar_config)
        print(f"📚 总计包含 {total_docs} 个文档链接")

    def count_total_docs(self, items):
        """递归统计文档数量"""
        count = 0
        for item in items:
            if 'link' in item:
                count += 1
            if 'items' in item:
                count += self.count_total_docs(item['items'])
        return count

def main():
    """主函数"""
    script_dir = Path(__file__).parent
    docs_dir = script_dir.parent / "docs"
    config_output = script_dir.parent / "docs" / ".vitepress" / "config.js"
    
    print("🚀 开始生成VitePress侧边栏配置...")
    print(f"📁 文档目录: {docs_dir}")
    print(f"⚙️  配置输出: {config_output}")
    
    generator = SidebarGenerator(docs_dir)
    generator.generate_config_js(config_output)
    
    print("\n🎉 配置生成完成!")
    print("💡 提示: 重启VitePress开发服务器以应用新配置")

if __name__ == "__main__":
    main()