#!/usr/bin/env python3
"""
恢复图片链接脚本 - 将占位符恢复为原始图片链接格式
然后下载真实图片
"""

import re
import asyncio
from pathlib import Path
import sys

# 添加crawler目录到路径
sys.path.append(str(Path(__file__).parent))

from incremental_image_download import IncrementalImageDownloader


class ImageRestorer:
    def __init__(self, docs_dir, version="1.0.1"):
        self.docs_dir = Path(docs_dir)
        self.version = version
        self.version_dir = self.docs_dir / version
        
    def restore_image_placeholders(self):
        """恢复图片占位符为原始图片链接"""
        
        # 占位符模式：📷 **[图片]** filename
        placeholder_pattern = r'📷 \*\*\[图片\]\*\* ([^\s\n]+)'
        
        restored_files = 0
        total_images = 0
        
        print("🔄 开始恢复图片占位符为原始链接...")
        
        for md_file in self.version_dir.rglob("*.md"):
            try:
                # 读取文件内容
                with open(md_file, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                original_content = content
                file_images = 0
                
                def replace_placeholder(match):
                    nonlocal file_images
                    filename = match.group(1)
                    
                    # 恢复为图片链接格式
                    if '.' in filename:  # 有扩展名
                        image_link = f"![{filename}](./images/{filename})"
                    else:  # 没有扩展名，添加常见扩展名
                        image_link = f"![{filename}](./images/{filename}.PNG)"
                    
                    file_images += 1
                    return image_link
                
                # 替换所有占位符
                content = re.sub(placeholder_pattern, replace_placeholder, content)
                
                # 如果有修改，写回文件
                if content != original_content:
                    with open(md_file, 'w', encoding='utf-8') as f:
                        f.write(content)
                    
                    relative_path = md_file.relative_to(self.version_dir)
                    print(f"✅ 恢复文件: {relative_path} ({file_images} 个图片)")
                    restored_files += 1
                    total_images += file_images
                
            except Exception as e:
                print(f"❌ 处理文件失败 {md_file}: {e}")
        
        print(f"\n🎉 图片链接恢复完成!")
        print(f"📊 恢复了 {restored_files} 个文件中的 {total_images} 个图片链接")
        
        return restored_files > 0

async def main():
    """主函数"""
    import argparse
    
    parser = argparse.ArgumentParser(description='恢复图片链接并下载真实图片')
    parser.add_argument('--version', '-v', default='1.0.1', help='仓颉版本号')
    parser.add_argument('--output', '-o', default='../docs', help='输出目录')
    parser.add_argument('--max-files', '-m', type=int, help='最大处理文件数（用于测试）')
    parser.add_argument('--restore-only', action='store_true', help='只恢复链接，不下载图片')
    
    args = parser.parse_args()
    
    print(f"🚀 开始恢复仓颉 {args.version} 版本文档图片...")
    print(f"📁 输出目录: {args.output}")
    
    # 步骤1: 恢复图片链接
    restorer = ImageRestorer(args.output, args.version)
    has_restored = restorer.restore_image_placeholders()
    
    if not has_restored:
        print("❌ 没有找到需要恢复的图片占位符")
        return
    
    # 步骤2: 下载真实图片（如果需要）
    if not args.restore_only:
        print("\n🖼️  开始下载真实图片...")
        
        downloader = IncrementalImageDownloader(
            version=args.version,
            output_dir=args.output
        )
        
        await downloader.process_files_with_images(max_files=args.max_files)
    else:
        print("\n💡 仅恢复了图片链接，请手动运行图片下载脚本下载真实图片")

if __name__ == "__main__":
    asyncio.run(main())