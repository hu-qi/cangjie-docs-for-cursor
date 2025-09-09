#!/usr/bin/env python3
"""
修复文档中的图片链接问题 - 简化版本
将相对路径图片链接转换为占位符或移除，以避免404错误
"""

import re
from pathlib import Path

class ImageLinkFixer:
    def __init__(self, docs_dir):
        self.docs_dir = Path(docs_dir)
        self.version_dir = self.docs_dir / "1.0.1"
        
    def fix_markdown_file(self, md_file):
        """修复单个Markdown文件中的图片链接"""
        try:
            # 读取文件内容
            with open(md_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            fixed_count = 0
            
            # 查找所有图片引用
            img_pattern = r'!\[([^\]]*)\]\(([^)]+)\)'
            
            def replace_image(match):
                nonlocal fixed_count
                alt_text = match.group(1)
                img_src = match.group(2)
                
                # 跳过绝对URL
                if img_src.startswith(('http://', 'https://')):
                    return match.group(0)
                
                # 处理相对路径的图片
                if img_src.startswith('./'):
                    fixed_count += 1
                    # 方案1: 转换为文字说明
                    return f"📷 **[图片]** {alt_text}" if alt_text else "📷 **[图片]**"
                    
                    # 方案2: 保留为注释（可选）
                    # return f"<!-- 图片: {alt_text} (原路径: {img_src}) -->"
                
                return match.group(0)
            
            # 替换所有图片链接
            content = re.sub(img_pattern, replace_image, content)
            
            # 如果有修改，写回文件
            if content != original_content:
                with open(md_file, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"🔧 修复文件: {md_file.relative_to(self.version_dir)} ({fixed_count} 个图片)")
                return fixed_count
            
            return 0
            
        except Exception as e:
            print(f"❌ 处理文件出错 {md_file}: {e}")
            return 0

    def fix_all_links(self):
        """修复所有文档中的图片链接"""
        print("🖼️  开始修复文档图片链接...")
        
        # 查找所有Markdown文件
        md_files = list(self.version_dir.rglob("*.md"))
        print(f"📁 找到 {len(md_files)} 个Markdown文件")
        
        total_fixed = 0
        files_fixed = 0
        
        for md_file in md_files:
            fixed_count = self.fix_markdown_file(md_file)
            if fixed_count > 0:
                files_fixed += 1
                total_fixed += fixed_count
        
        print(f"\n🎉 图片链接修复完成!")
        print(f"📊 修复了 {files_fixed} 个文件中的 {total_fixed} 个图片链接")
        print(f"💡 图片已转换为文字占位符，避免404错误")

def main():
    """主函数"""
    script_dir = Path(__file__).parent
    docs_dir = script_dir.parent / "docs"
    
    print("🔧 开始修复文档图片链接...")
    print(f"📁 文档目录: {docs_dir}")
    
    fixer = ImageLinkFixer(docs_dir)
    fixer.fix_all_links()

if __name__ == "__main__":
    main()