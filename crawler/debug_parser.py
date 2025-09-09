#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
调试页面结构
"""

import asyncio
import sys
import os
from playwright.async_api import async_playwright
from bs4 import BeautifulSoup

async def debug_page_structure():
    """调试页面结构，查看实际的DOM"""
    url = "https://docs.cangjie-lang.cn/docs/1.0.1/release_notes.html"
    
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(
            user_agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"
        )
        
        page = await context.new_page()
        
        print(f"访问页面: {url}")
        response = await page.goto(url, wait_until="networkidle")
        print(f"状态码: {response.status}")
        
        # 等待页面加载
        await page.wait_for_load_state("networkidle")
        
        # 获取页面HTML
        html_content = await page.content()
        
        # 解析并查看结构
        soup = BeautifulSoup(html_content, 'html.parser')
        
        print("\n页面标题:")
        title = soup.find('title')
        if title:
            print(f"  {title.get_text()}")
        
        print("\n查找可能的内容区域:")
        
        # 查找各种可能的内容容器
        selectors_to_check = [
            'main',
            '.content',
            '.document', 
            '.main-content',
            '.wy-nav-content',
            '.rst-content',
            'article',
            '[role="main"]',
            '.section',
            'body > div',
            'body'
        ]
        
        for selector in selectors_to_check:
            elements = soup.select(selector)
            if elements:
                print(f"  {selector}: 找到 {len(elements)} 个元素")
                for i, elem in enumerate(elements[:2]):  # 只显示前2个
                    text_content = elem.get_text()[:100].strip()
                    print(f"    [{i}] 文本: {text_content}...")
        
        # 查找包含主要内容的div
        print("\n查找包含标题的元素:")
        h1_elements = soup.find_all('h1')
        for i, h1 in enumerate(h1_elements):
            print(f"  H1[{i}]: {h1.get_text().strip()}")
            parent = h1.parent
            while parent and parent.name != 'body':
                class_attr = parent.get('class', [])
                id_attr = parent.get('id', '')
                print(f"    父元素: {parent.name} class={class_attr} id={id_attr}")
                parent = parent.parent
                if len(class_attr) > 0 or id_attr:  # 找到有意义的容器就停止
                    break
        
        await browser.close()

if __name__ == "__main__":
    asyncio.run(debug_page_structure())