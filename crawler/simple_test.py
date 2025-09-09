#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
简单测试，直接检查页面解析
"""

import asyncio
from playwright.async_api import async_playwright
from bs4 import BeautifulSoup

async def simple_test():
    url = "https://docs.cangjie-lang.cn/docs/1.0.1/release_notes.html"
    
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()
        
        print(f"访问: {url}")
        await page.goto(url, wait_until="networkidle")
        html = await page.content()
        
        soup = BeautifulSoup(html, 'html.parser')
        
        # 查看 main 标签内容
        main = soup.select_one('main')
        if main:
            print("找到 main 标签")
            text = main.get_text().strip()
            print(f"文本长度: {len(text)}")
            print(f"前100字符: {text[:100]}")
            
            # 查看是否有子元素
            children = main.find_all(['h1', 'h2', 'p', 'div'])
            print(f"子元素数量: {len(children)}")
        else:
            print("未找到 main 标签")
            
        # 查看 .content
        content = soup.select_one('.content')
        if content:
            print("找到 .content")
            text = content.get_text().strip()
            print(f"文本长度: {len(text)}")
            print(f"前100字符: {text[:100]}")
        else:
            print("未找到 .content")
        
        await browser.close()

if __name__ == "__main__":
    asyncio.run(simple_test())