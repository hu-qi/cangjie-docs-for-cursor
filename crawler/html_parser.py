#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
HTML 解析器 - 从仓颉文档页面提取内容
"""

import re
import os
from urllib.parse import urljoin, urlparse
from bs4 import BeautifulSoup, Comment
import requests


class HTMLParser:
    def __init__(self, base_url="https://docs.cangjie-lang.cn/docs/"):
        self.base_url = base_url
        self.session = requests.Session()
        
    def parse_page(self, html_content, page_url):
        """解析HTML页面，提取文档内容"""
        soup = BeautifulSoup(html_content, 'html.parser')
        
        # 移除不需要的元素
        self._remove_unwanted_elements(soup)
        
        # 查找主要内容区域
        content_area = self._find_content_area(soup)
        if not content_area:
            print(f"警告: 无法找到页面内容区域: {page_url}")
            return None
            
        # 处理标题
        title = self._extract_title(soup, content_area)
        
        # 处理内容
        self._process_content(content_area, page_url)
        
        return {
            'title': title,
            'content': content_area,
            'raw_html': str(content_area)
        }
    
    def _remove_unwanted_elements(self, soup):
        """移除不需要的HTML元素"""
        # 移除脚本和样式
        for element in soup(['script', 'style']):
            element.decompose()
            
        # 移除注释
        for comment in soup.find_all(string=lambda text: isinstance(text, Comment)):
            comment.extract()
            
        # 移除其他不需要的类（但不移除导航相关，因为可能会影响主内容）
        unwanted_classes = [
            'headerlink', 'edit-this-page', 'last-updated',
            'prev-next', 'pagination'
        ]
        for class_name in unwanted_classes:
            for element in soup.find_all(class_=class_name):
                element.decompose()
    
    def _find_content_area(self, soup):
        """查找主要内容区域"""
        # 尝试多种选择器找到内容区域
        selectors = [
            'main',
            '.content',
            '.section',
            '.document',
            'article',
            '.main-content',
            '.wy-nav-content-wrap .wy-nav-content',
            '.rst-content'
        ]
        
        for selector in selectors:
            content = soup.select_one(selector)
            if content:
                text_content = content.get_text().strip()
                if text_content and len(text_content) > 50:  # 确保有足够的内容
                    print(f"使用选择器: {selector}, 内容长度: {len(text_content)}")
                    return content
                
        # 如果都找不到，尝试找包含最多段落的div
        divs = soup.find_all('div')
        if divs:
            best_div = max(divs, key=lambda d: len(d.find_all(['p', 'h1', 'h2', 'h3'])))
            if best_div and best_div.get_text().strip():
                print("使用包含最多内容的div")
                return best_div
                
        # 最后尝试body
        body = soup.find('body')
        if body:
            print("使用body作为内容区域")
            return body
            
        return None
    
    def _extract_title(self, soup, content_area):
        """提取页面标题"""
        # 首先尝试从content区域的h1获取
        h1 = content_area.find('h1')
        if h1:
            return h1.get_text().strip()
            
        # 然后尝试页面title
        title_tag = soup.find('title')
        if title_tag:
            title = title_tag.get_text().strip()
            # 移除网站名称部分
            if '—' in title:
                title = title.split('—')[0].strip()
            return title
            
        return "未知标题"
    
    def _process_content(self, content_area, page_url):
        """处理内容，修复链接和图片路径"""
        base_url = '/'.join(page_url.split('/')[:-1]) + '/'
        
        # 处理图片
        for img in content_area.find_all('img'):
            src = img.get('src')
            if src and not src.startswith(('http://', 'https://')):
                # 转换相对路径为绝对路径
                absolute_url = urljoin(base_url, src)
                img['src'] = absolute_url
                
        # 处理链接
        for link in content_area.find_all('a'):
            href = link.get('href')
            if href and not href.startswith(('http://', 'https://', '#', 'mailto:')):
                # 转换相对路径为绝对路径
                absolute_url = urljoin(base_url, href)
                link['href'] = absolute_url
    
    def download_image(self, image_url, save_path):
        """下载图片到本地"""
        try:
            response = self.session.get(image_url, timeout=30)
            response.raise_for_status()
            
            os.makedirs(os.path.dirname(save_path), exist_ok=True)
            with open(save_path, 'wb') as f:
                f.write(response.content)
            return True
        except Exception as e:
            print(f"下载图片失败 {image_url}: {e}")
            return False