#!/usr/bin/env python3
"""
修复文档中的图片链接问题
1. 从原始网站下载图片资源
2. 修复文档中的图片路径
"""

import os
import re
import asyncio
import aiohttp
import aiofiles
from pathlib import Path
from urllib.parse import urljoin, urlparse

class ImageFixer:
    def __init__(self, docs_dir, base_url="https://docs.cangjie-lang.cn/docs/1.0.1/"):
        self.docs_dir = Path(docs_dir)
        self.base_url = base_url
        self.version_dir = self.docs_dir / "1.0.1"
        
    async def download_image(self, session, img_url, local_path):
        """下载单个图片"""
        try:
            local_path.parent.mkdir(parents=True, exist_ok=True)
            
            async with session.get(img_url) as response:
                if response.status == 200:
                    async with aiofiles.open(local_path, 'wb') as f:
                        await f.write(await response.read())
                    print(f"✅ 下载图片: {img_url} -> {local_path}")
                    return True
                else:
                    print(f"❌ 下载失败 ({response.status}): {img_url}")
                    return False
        except Exception as e:
            print(f"❌ 下载错误: {img_url} - {e}")
            return False

    async def process_markdown_file(self, md_file, session):
        """处理单个Markdown文件中的图片链接"""
        try:
            # 读取文件内容
            with open(md_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # 查找所有图片引用
            img_pattern = r'!\[([^\]]*)\]\(([^)]+)\)'
            images = re.findall(img_pattern, content)
            
            if not images:
                return 0
            
            fixed_count = 0
            original_content = content
            
            for alt_text, img_src in images:
                if img_src.startswith('http'):
                    # 绝对URL，直接使用
                    continue
                    
                # 处理相对路径
                if img_src.startswith('./'):
                    # 计算相对于md文件的实际路径
                    md_relative_path = md_file.relative_to(self.version_dir)
                    md_dir = md_relative_path.parent
                    
                    # 计算原始网站上的图片URL
                    original_url = urljoin(self.base_url + str(md_dir) + "/", img_src)
                    
                    # 计算本地存储路径
                    local_img_path = md_file.parent / img_src[2:]  # 去掉 "./"
                    
                    # 下载图片
                    success = await self.download_image(session, original_url, local_img_path)
                    
                    if success:
                        # 修复VitePress中的图片路径
                        # VitePress使用相对于文档根目录的路径
                        vitepress_path = f"/{md_relative_path.parent}/{img_src[2:]}"
                        
                        # 替换文档中的图片路径
                        old_pattern = f'![{re.escape(alt_text)}]({re.escape(img_src)})'
                        new_pattern = f'![{alt_text}]({vitepress_path})'
                        content = content.replace(old_pattern, new_pattern)
                        fixed_count += 1
                        
                        print(f"🔧 修复链接: {img_src} -> {vitepress_path}")
            
            # 如果有修改，写回文件
            if content != original_content:
                with open(md_file, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"📝 更新文件: {md_file}")
            
            return fixed_count
            
        except Exception as e:
            print(f"❌ 处理文件出错 {md_file}: {e}")
            return 0

    async def fix_all_images(self):
        """修复所有文档中的图片"""
        print("🚀 开始修复文档图片...")
        
        # 查找所有Markdown文件
        md_files = list(self.version_dir.rglob("*.md"))
        print(f"📁 找到 {len(md_files)} 个Markdown文件")
        
        total_fixed = 0
        
        # 创建HTTP会话
        timeout = aiohttp.ClientTimeout(total=30)
        async with aiohttp.ClientSession(timeout=timeout) as session:
            for md_file in md_files:
                fixed_count = await self.process_markdown_file(md_file, session)
                total_fixed += fixed_count
        
        print(f"\n🎉 图片修复完成!")
        print(f"📊 总计修复 {total_fixed} 个图片链接")

def main():
    """主函数"""
    script_dir = Path(__file__).parent
    docs_dir = script_dir.parent / "docs"
    
    print("🖼️  开始修复文档图片链接...")
    print(f"📁 文档目录: {docs_dir}")
    
    fixer = ImageFixer(docs_dir)
    
    # 运行异步修复
    asyncio.run(fixer.fix_all_images())

if __name__ == "__main__":
    main()