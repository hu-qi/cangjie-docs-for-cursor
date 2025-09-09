#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
图片下载器 - 下载文档中的图片资源
"""

import os
import asyncio
import aiohttp
import aiofiles
from pathlib import Path
from urllib.parse import urljoin, urlparse
from typing import List, Dict, Set


class ImageDownloader:
    def __init__(self, base_url: str, output_dir: str, version: str):
        self.base_url = base_url
        self.output_dir = Path(output_dir)
        self.version = version
        self.version_dir = self.output_dir / version
        self.downloaded_images: Set[str] = set()
        self.failed_images: Set[str] = set()
        
    async def download_image(self, session: aiohttp.ClientSession, img_url: str, local_path: Path) -> bool:
        """下载单个图片"""
        try:
            # 如果已经下载过，跳过
            if str(local_path) in self.downloaded_images:
                return True
                
            # 创建目录
            local_path.parent.mkdir(parents=True, exist_ok=True)
            
            print(f"📥 下载图片: {img_url}")
            
            async with session.get(img_url) as response:
                if response.status == 200:
                    content = await response.read()
                    async with aiofiles.open(local_path, 'wb') as f:
                        await f.write(content)
                    
                    self.downloaded_images.add(str(local_path))
                    print(f"✅ 下载成功: {local_path.relative_to(self.version_dir)}")
                    return True
                else:
                    print(f"❌ 下载失败 ({response.status}): {img_url}")
                    self.failed_images.add(img_url)
                    return False
                    
        except Exception as e:
            print(f"❌ 下载错误: {img_url} - {e}")
            self.failed_images.add(img_url)
            return False
    
    def extract_images_from_html(self, html_content: str, page_url: str) -> List[Dict[str, str]]:
        """从HTML内容中提取图片信息"""
        from bs4 import BeautifulSoup
        
        soup = BeautifulSoup(html_content, 'html.parser')
        images = []
        
        for img in soup.find_all('img'):
            src = img.get('src')
            alt = img.get('alt', '')
            
            if src:
                # 处理相对路径
                if src.startswith('./') or src.startswith('../'):
                    full_url = urljoin(page_url, src)
                elif src.startswith('/'):
                    # 相对于域名根路径
                    base_domain = '/'.join(page_url.split('/')[:3])
                    full_url = base_domain + src
                elif src.startswith('http'):
                    # 绝对路径
                    full_url = src
                else:
                    # 相对于当前页面
                    full_url = urljoin(page_url, src)
                
                images.append({
                    'src': src,
                    'full_url': full_url,
                    'alt': alt,
                    'page_url': page_url
                })
        
        return images
    
    def get_local_image_path(self, img_info: Dict[str, str], markdown_file_path: str) -> Path:
        """计算图片的本地存储路径"""
        # 获取图片文件名
        parsed_url = urlparse(img_info['full_url'])
        img_filename = os.path.basename(parsed_url.path)
        
        if not img_filename or '.' not in img_filename:
            # 如果没有文件名或扩展名，尝试从URL参数或使用默认
            img_filename = f"image_{hash(img_info['full_url']) % 10000}.png"
        
        # 计算相对于markdown文件的images目录
        md_dir = Path(markdown_file_path).parent
        images_dir = self.version_dir / md_dir / 'images'
        
        return images_dir / img_filename
    
    async def download_images_for_page(self, session: aiohttp.ClientSession, 
                                     html_content: str, page_url: str, 
                                     markdown_file_path: str) -> Dict[str, str]:
        """为单个页面下载所有图片，返回原始URL到本地路径的映射"""
        images = self.extract_images_from_html(html_content, page_url)
        url_mapping = {}
        
        if not images:
            return url_mapping
        
        print(f"🖼️  页面 {markdown_file_path} 包含 {len(images)} 个图片")
        
        for img_info in images:
            local_path = self.get_local_image_path(img_info, markdown_file_path)
            
            # 下载图片
            success = await self.download_image(session, img_info['full_url'], local_path)
            
            if success:
                # 计算相对于markdown文件的相对路径
                md_path = self.version_dir / markdown_file_path
                try:
                    relative_path = os.path.relpath(local_path, md_path.parent)
                    url_mapping[img_info['src']] = relative_path
                except ValueError:
                    # 如果无法计算相对路径，使用绝对路径
                    url_mapping[img_info['src']] = str(local_path)
            else:
                # 下载失败，保持原始路径或生成占位符
                url_mapping[img_info['src']] = f"📷 **[图片缺失]** {img_info['alt']}"
        
        return url_mapping
    
    async def download_all_images(self, page_data: List[Dict]) -> Dict[str, Dict[str, str]]:
        """下载所有页面的图片
        
        Args:
            page_data: 包含页面信息的列表，每个元素包含:
                - html_content: HTML内容
                - page_url: 页面URL
                - markdown_file_path: Markdown文件路径
        
        Returns:
            字典，键为markdown文件路径，值为该页面的URL映射字典
        """
        print("🚀 开始批量下载图片...")
        
        all_mappings = {}
        
        # 创建HTTP会话
        timeout = aiohttp.ClientTimeout(total=30)
        async with aiohttp.ClientSession(
            timeout=timeout,
            headers={'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'}
        ) as session:
            
            for i, data in enumerate(page_data):
                print(f"📄 处理页面 {i+1}/{len(page_data)}: {data['markdown_file_path']}")
                
                mapping = await self.download_images_for_page(
                    session,
                    data['html_content'],
                    data['page_url'],
                    data['markdown_file_path']
                )
                
                if mapping:
                    all_mappings[data['markdown_file_path']] = mapping
                
                # 添加延迟避免过于频繁的请求
                await asyncio.sleep(0.5)
        
        # 输出统计信息
        total_downloaded = len(self.downloaded_images)
        total_failed = len(self.failed_images)
        
        print(f"\n🎉 图片下载完成!")
        print(f"✅ 成功下载: {total_downloaded} 个图片")
        print(f"❌ 下载失败: {total_failed} 个图片")
        
        if self.failed_images:
            print("\n❌ 失败的图片URL:")
            for failed_url in sorted(self.failed_images):
                print(f"   - {failed_url}")
        
        return all_mappings
    
    def update_markdown_image_paths(self, markdown_content: str, url_mapping: Dict[str, str]) -> str:
        """更新Markdown内容中的图片路径"""
        import re
        
        def replace_image(match):
            alt_text = match.group(1)
            img_src = match.group(2)
            
            # 查找是否有新的路径映射
            if img_src in url_mapping:
                new_src = url_mapping[img_src]
                return f"![{alt_text}]({new_src})"
            
            return match.group(0)  # 保持原样
        
        # 替换所有图片引用
        img_pattern = r'!\[([^\]]*)\]\(([^)]+)\)'
        updated_content = re.sub(img_pattern, replace_image, markdown_content)
        
        return updated_content