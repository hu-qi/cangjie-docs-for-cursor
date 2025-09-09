#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
增量图片下载脚本 - 为现有文档下载缺失的图片
"""

import asyncio
import re
import sys
from pathlib import Path
from urllib.parse import urljoin

# 添加crawler目录到路径
sys.path.append(str(Path(__file__).parent))

from image_downloader import ImageDownloader
from playwright.async_api import async_playwright


class IncrementalImageDownloader:
    def __init__(self, version="1.0.1", base_url=None, output_dir="../docs"):
        self.version = version
        self.base_url = base_url or f"https://docs.cangjie-lang.cn/docs/{version}/"
        self.output_dir = Path(output_dir)
        self.version_dir = self.output_dir / version
        self.image_downloader = ImageDownloader(self.base_url, str(self.output_dir), version)
    
    def find_markdown_files_with_images(self):
        """查找包含图片引用的Markdown文件"""
        md_files_with_images = []
        
        # 图片引用模式
        img_pattern = r'!\[([^\]]*)\]\(([^)]+)\)'
        
        for md_file in self.version_dir.rglob("*.md"):
            try:
                with open(md_file, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # 查找图片引用
                matches = re.findall(img_pattern, content)
                if matches:
                    # 过滤出相对路径的图片（需要下载的）
                    local_images = []
                    for alt, src in matches:
                        if src.startswith('./') or (not src.startswith('http') and '/' in src):
                            local_images.append((alt, src))
                    
                    if local_images:
                        relative_path = md_file.relative_to(self.version_dir)
                        md_files_with_images.append({
                            'md_file': md_file,
                            'relative_path': str(relative_path),
                            'images': local_images
                        })
                        
            except Exception as e:
                print(f"⚠️  读取文件失败 {md_file}: {e}")
        
        return md_files_with_images
    
    async def download_page_html(self, url):
        """下载指定URL的HTML内容"""
        async with async_playwright() as p:
            browser = await p.chromium.launch(headless=True)
            context = await browser.new_context(
                user_agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"
            )
            
            page = await context.new_page()
            
            try:
                response = await page.goto(url, wait_until="networkidle")
                if response.status == 200:
                    html_content = await page.content()
                    return html_content
                else:
                    print(f"❌ 页面访问失败: {url} (状态码: {response.status})")
                    return None
            except Exception as e:
                print(f"❌ 访问页面出错 {url}: {e}")
                return None
            finally:
                await browser.close()
    
    async def process_files_with_images(self, max_files=None):
        """处理包含图片的文件，下载缺失的图片"""
        
        print("🔍 扫描包含图片的Markdown文件...")
        md_files = self.find_markdown_files_with_images()
        
        if not md_files:
            print("📄 没有找到包含本地图片引用的Markdown文件")
            return
        
        print(f"📄 找到 {len(md_files)} 个包含图片的文件")
        
        if max_files:
            md_files = md_files[:max_files]
            print(f"🎯 限制处理前 {max_files} 个文件")
        
        # 准备下载数据
        download_data = []
        
        for file_info in md_files:
            relative_path = file_info['relative_path']
            images = file_info['images']
            
            print(f"📝 处理文件: {relative_path} ({len(images)} 个图片)")
            
            # 构造对应的HTML页面URL
            html_url = urljoin(self.base_url, relative_path.replace('.md', '.html'))
            
            # 下载HTML内容
            html_content = await self.download_page_html(html_url)
            
            if html_content:
                download_data.append({
                    'html_content': html_content,
                    'page_url': html_url,
                    'markdown_file_path': relative_path
                })
            else:
                print(f"⚠️  跳过文件 {relative_path}：无法获取HTML内容")
        
        # 批量下载图片
        if download_data:
            print(f"\n🖼️  开始批量下载 {len(download_data)} 个页面的图片...")
            
            image_mappings = await self.image_downloader.download_all_images(download_data)
            
            # 更新Markdown文件中的图片路径
            updated_files = 0
            for file_info in md_files:
                relative_path = file_info['relative_path']
                md_file = file_info['md_file']
                
                if relative_path in image_mappings:
                    try:
                        # 读取原文件
                        with open(md_file, 'r', encoding='utf-8') as f:
                            content = f.read()
                        
                        # 更新图片路径
                        updated_content = self.image_downloader.update_markdown_image_paths(
                            content, image_mappings[relative_path]
                        )
                        
                        # 如果有更新，写回文件
                        if updated_content != content:
                            with open(md_file, 'w', encoding='utf-8') as f:
                                f.write(updated_content)
                            
                            print(f"✅ 更新文件: {relative_path}")
                            updated_files += 1
                        
                    except Exception as e:
                        print(f"❌ 更新文件失败 {relative_path}: {e}")
            
            print(f"\n🎉 处理完成!")
            print(f"📊 更新了 {updated_files} 个Markdown文件")
        
        else:
            print("❌ 没有成功获取任何HTML内容，无法下载图片")


async def main():
    """主函数"""
    import argparse
    
    parser = argparse.ArgumentParser(description='增量下载文档图片')
    parser.add_argument('--version', '-v', default='1.0.1', help='仓颉版本号')
    parser.add_argument('--max-files', '-m', type=int, help='最大处理文件数（用于测试）')
    parser.add_argument('--output', '-o', default='../docs', help='输出目录')
    
    args = parser.parse_args()
    
    print(f"🚀 开始增量下载仓颉 {args.version} 版本文档图片...")
    print(f"📁 输出目录: {args.output}")
    
    downloader = IncrementalImageDownloader(
        version=args.version,
        output_dir=args.output
    )
    
    await downloader.process_files_with_images(max_files=args.max_files)


if __name__ == "__main__":
    asyncio.run(main())