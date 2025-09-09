#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
仓颉文档爬虫主程序
"""

import json
import os
import sys
import argparse
import asyncio
from urllib.parse import urljoin
import requests
from playwright.async_api import async_playwright

from html_parser import HTMLParser
from markdown_converter import MarkdownConverter
from image_downloader import ImageDownloader


class CangjieCrawler:
    def __init__(self, version="1.0.1", output_dir="../docs"):
        self.version = version
        self.base_url = f"https://docs.cangjie-lang.cn/docs/{version}/"
        self.search_index_url = f"https://docs.cangjie-lang.cn/docs/{version}/searchindex.json"
        self.output_dir = os.path.abspath(output_dir)
        
        self.html_parser = HTMLParser()
        self.markdown_converter = MarkdownConverter(self.output_dir)
        self.image_downloader = ImageDownloader(self.base_url, self.output_dir, self.version)
        
        # 创建输出目录
        self.version_output_dir = os.path.join(self.output_dir, version)
        os.makedirs(self.version_output_dir, exist_ok=True)
        
    async def get_page_urls(self):
        """从搜索索引获取所有页面URL"""
        try:
            print(f"获取搜索索引: {self.search_index_url}")
            response = requests.get(self.search_index_url, timeout=30)
            response.raise_for_status()
            
            search_data = response.json()
            doc_urls = search_data.get('doc_urls', [])
            
            # 提取唯一的页面URL（移除锚点）
            page_urls = set()
            for doc_url in doc_urls:
                if '#' in doc_url:
                    page_url = doc_url.split('#')[0]
                else:
                    page_url = doc_url
                    
                if page_url and page_url.endswith('.html'):
                    full_url = urljoin(self.base_url, page_url)
                    page_urls.add((page_url, full_url))
            
            print(f"发现 {len(page_urls)} 个页面")
            return list(page_urls)
            
        except Exception as e:
            print(f"获取页面URL失败: {e}")
            return []
    
    async def crawl_page(self, page, page_info):
        """爬取单个页面"""
        relative_url, full_url = page_info
        
        try:
            print(f"正在爬取: {relative_url}")
            
            # 访问页面
            response = await page.goto(full_url, wait_until="networkidle")
            
            if response.status != 200:
                print(f"页面访问失败: {full_url} (状态码: {response.status})")
                return None
                
            # 等待页面加载完成
            await page.wait_for_load_state("networkidle")
            
            # 获取页面HTML
            html_content = await page.content()
            
            # 解析HTML
            parsed_content = self.html_parser.parse_page(html_content, full_url)
            
            if not parsed_content:
                print(f"解析页面失败: {relative_url}")
                return None
            
            # 转换为Markdown
            markdown_file_path = relative_url.replace('.html', '.md')
            markdown_content = self.markdown_converter.convert_to_markdown(
                parsed_content, markdown_file_path, self.version
            )
            
            # 返回页面数据，包含原始HTML用于后续图片下载
            return {
                'url': relative_url,
                'title': parsed_content['title'],
                'file_path': markdown_file_path,
                'markdown_content': markdown_content,
                'html_content': html_content,
                'page_url': full_url
            }
            
        except Exception as e:
            print(f"爬取页面失败 {relative_url}: {e}")
            return None
    
    async def crawl_all_pages(self):
        """爬取所有页面"""
        # 获取页面URL列表
        page_urls = await self.get_page_urls()
        
        if not page_urls:
            print("没有找到页面URL")
            return []
        
        async with async_playwright() as p:
            # 启动浏览器
            browser = await p.chromium.launch(headless=True)
            context = await browser.new_context(
                user_agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"
            )
            
            page = await context.new_page()
            
            # 爬取所有页面
            results = []
            for i, page_info in enumerate(page_urls):
                print(f"进度: {i+1}/{len(page_urls)}")
                result = await self.crawl_page(page, page_info)
                if result:
                    results.append(result)
                
                # 添加延迟避免被限制
                await asyncio.sleep(1)
            
            await browser.close()
        
        # 下载图片
        if results:
            print("\n🖼️  开始下载页面图片...")
            
            # 准备图片下载数据
            image_download_data = []
            for result in results:
                image_download_data.append({
                    'html_content': result['html_content'],
                    'page_url': result['page_url'],
                    'markdown_file_path': result['file_path']
                })
            
            # 下载所有图片
            image_mappings = await self.image_downloader.download_all_images(image_download_data)
            
            # 更新Markdown文件中的图片路径
            for result in results:
                file_path = result['file_path']
                if file_path in image_mappings:
                    print(f"🔄 更新图片路径: {file_path}")
                    updated_content = self.image_downloader.update_markdown_image_paths(
                        result['markdown_content'], 
                        image_mappings[file_path]
                    )
                    result['markdown_content'] = updated_content
                
                # 保存最终的Markdown文件
                full_markdown_path = os.path.join(self.version, file_path)
                self.markdown_converter.save_markdown(result['markdown_content'], full_markdown_path)
            
        return results
    
    def generate_sidebar_config(self, results):
        """根据爬取结果生成侧边栏配置"""
        sidebar_config = {}
        
        # 按目录结构组织文档
        for result in results:
            file_path = result['file_path']
            title = result['title']
            
            # 解析目录结构
            path_parts = file_path.split('/')
            
            if len(path_parts) == 1:
                # 根目录文件
                if 'root' not in sidebar_config:
                    sidebar_config['root'] = []
                sidebar_config['root'].append({
                    'text': title,
                    'link': f'/{self.version}/{file_path}'
                })
            else:
                # 子目录文件
                category = path_parts[0]
                if category not in sidebar_config:
                    sidebar_config[category] = []
                
                sidebar_config[category].append({
                    'text': title,
                    'link': f'/{self.version}/{file_path}'
                })
        
        return sidebar_config
    
    def save_manifest(self, results):
        """保存爬取结果清单"""
        manifest = {
            'version': self.version,
            'total_pages': len(results),
            'pages': results,
            'generated_at': self._get_current_time()
        }
        
        manifest_path = os.path.join(self.version_output_dir, 'manifest.json')
        with open(manifest_path, 'w', encoding='utf-8') as f:
            json.dump(manifest, f, ensure_ascii=False, indent=2)
        
        print(f"保存清单文件: {manifest_path}")
    
    def _get_current_time(self):
        """获取当前时间字符串"""
        from datetime import datetime
        return datetime.now().strftime('%Y-%m-%d %H:%M:%S')


async def main():
    parser = argparse.ArgumentParser(description='仓颉文档爬虫')
    parser.add_argument('--version', '-v', default='1.0.1', help='仓颉版本号')
    parser.add_argument('--output', '-o', default='../docs', help='输出目录')
    
    args = parser.parse_args()
    
    print(f"开始爬取仓颉 {args.version} 版本文档...")
    
    crawler = CangjieCrawler(version=args.version, output_dir=args.output)
    results = await crawler.crawl_all_pages()
    
    if results:
        print(f"\n爬取完成！成功处理 {len(results)} 个页面")
        
        # 保存清单
        crawler.save_manifest(results)
        
        # 生成侧边栏配置
        sidebar_config = crawler.generate_sidebar_config(results)
        print("\n建议的侧边栏配置:")
        print(json.dumps(sidebar_config, ensure_ascii=False, indent=2))
    else:
        print("爬取失败或没有找到页面")


if __name__ == "__main__":
    asyncio.run(main())