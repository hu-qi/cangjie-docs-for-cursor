#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
运行完整的文档爬取 - 获取仓颉文档的所有页面
"""

import asyncio
import sys
import os

# 切换到crawler目录
os.chdir('crawler')
sys.path.append('.')

from main import CangjieCrawler


async def run_full_crawl():
    """运行完整的文档爬取"""
    print("开始完整爬取仓颉文档...")
    print("这可能需要几分钟时间，请耐心等待...")
    
    crawler = CangjieCrawler(version="1.0.1", output_dir="../docs")
    results = await crawler.crawl_all_pages()
    
    if results:
        print(f"\n✅ 爬取完成！成功处理 {len(results)} 个页面")
        
        # 保存清单
        crawler.save_manifest(results)
        
        # 生成侧边栏配置
        sidebar_config = crawler.generate_sidebar_config(results)
        
        print("\n📄 已生成的文档:")
        for result in results:
            print(f"  - {result['title']} -> {result['file_path']}")
        
        print(f"\n📁 文档保存在: {crawler.version_output_dir}")
        print("🌐 启动 VitePress 查看文档:")
        print("    npm run dev")
        
    else:
        print("❌ 爬取失败或没有找到页面")


if __name__ == "__main__":
    asyncio.run(run_full_crawl())