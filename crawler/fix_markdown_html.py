#!/usr/bin/env python3
"""
修复Markdown文档中的HTML转义问题
主要解决泛型语法<T>被Vue解析器误认为HTML标签的问题
"""

import os
import re
from pathlib import Path

def fix_generic_syntax(content):
    """
    修复泛型语法转义问题
    将<T>转义为\<T\>，避免被Vue解析器误认为HTML标签
    """
    # 匹配泛型语法模式，例如 <T>, <E>, <K, V> 等
    # 只在表格或代码块外的地方进行替换
    
    # 先保护代码块中的内容
    code_blocks = []
    code_pattern = r'```[\s\S]*?```|`[^`]+`'
    
    def save_code_block(match):
        code_blocks.append(match.group(0))
        return f"__CODE_BLOCK_{len(code_blocks)-1}__"
    
    # 临时替换代码块
    content = re.sub(code_pattern, save_code_block, content)
    
    # 修复泛型语法，匹配类似 <T>, <E>, <K, V> 的模式
    # 但不匹配HTML标签（通常包含空格或/）
    generic_pattern = r'<([A-Z][A-Za-z0-9]*(?:\s*,\s*[A-Z][A-Za-z0-9]*)*)\s*>'
    
    def replace_generic(match):
        return f'\\<{match.group(1)}\\>'
    
    content = re.sub(generic_pattern, replace_generic, content)
    
    # 还原代码块
    for i, block in enumerate(code_blocks):
        content = content.replace(f"__CODE_BLOCK_{i}__", block)
    
    return content

def process_markdown_file(file_path):
    """处理单个Markdown文件"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        content = fix_generic_syntax(content)
        
        # 只有当内容确实发生变化时才写入文件
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
        
    except Exception as e:
        print(f"处理文件 {file_path} 时出错: {e}")
        return False

def main():
    """主函数"""
    docs_dir = Path("../docs/1.0.1")
    
    if not docs_dir.exists():
        print(f"文档目录不存在: {docs_dir}")
        return
    
    fixed_count = 0
    total_count = 0
    
    # 遍历所有markdown文件
    for md_file in docs_dir.rglob("*.md"):
        total_count += 1
        if process_markdown_file(md_file):
            fixed_count += 1
            print(f"✅ 修复: {md_file}")
    
    print(f"\n修复完成!")
    print(f"总计处理文件: {total_count}")
    print(f"修复文件数量: {fixed_count}")

if __name__ == "__main__":
    main()