#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
测试爬虫脚本 - 爬取少量页面进行验证
"""

import asyncio
import sys
import os

# 添加当前目录到 Python 路径
sys.path.append(os.path.dirname(__file__))

from main import CangjieCrawler


async def test_crawler():
    """测试爬虫，只爬取几个示例页面"""
    print("开始测试爬虫...")
    
    crawler = CangjieCrawler(version="1.0.1", output_dir="../docs")
    
    # 手动定义几个测试页面
    test_pages = [
        ("release_notes.html", "https://docs.cangjie-lang.cn/docs/1.0.1/release_notes.html"),
        ("user_manual/source_zh_cn/first_understanding/basic.html", 
         "https://docs.cangjie-lang.cn/docs/1.0.1/user_manual/source_zh_cn/first_understanding/basic.html")
    ]
    
    print(f"测试页面数量: {len(test_pages)}")
    
    from playwright.async_api import async_playwright
    
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(
            user_agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"
        )
        
        page = await context.new_page()
        
        results = []
        for i, page_info in enumerate(test_pages):
            print(f"测试进度: {i+1}/{len(test_pages)}")
            result = await crawler.crawl_page(page, page_info)
            if result:
                results.append(result)
                print(f"✓ 成功: {result['title']}")
            else:
                print(f"✗ 失败: {page_info[0]}")
        
        await browser.close()
    
    if results:
        print(f"\n测试完成！成功处理 {len(results)} 个页面")
        crawler.save_manifest(results)
        
        # 显示结果
        for result in results:
            print(f"- {result['title']} -> {result['file_path']}")
    else:
        print("测试失败，没有成功爬取任何页面")


if __name__ == "__main__":
    asyncio.run(test_crawler())