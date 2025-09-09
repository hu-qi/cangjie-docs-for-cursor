#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
图片下载器测试脚本 - 测试单个页面的图片下载功能
"""

import asyncio
import sys
from pathlib import Path

# 添加crawler目录到路径
sys.path.append(str(Path(__file__).parent))

from image_downloader import ImageDownloader


async def test_image_download():
    """测试图片下载功能"""
    
    # 测试配置
    base_url = "https://docs.cangjie-lang.cn/docs/1.0.1/"
    output_dir = "../docs"
    version = "1.0.1"
    
    # 创建图片下载器
    downloader = ImageDownloader(base_url, output_dir, version)
    
    # 模拟HTML内容（包含图片）
    test_html = '''
    <html>
    <body>
        <h1>测试页面</h1>
        <img src="./images/start_community.PNG" alt="start" />
        <img src="./images/debug_info.png" alt="debug info" />
        <p>一些其他内容</p>
        <img src="https://example.com/external_image.jpg" alt="external" />
    </body>
    </html>
    '''
    
    # 测试数据
    page_url = "https://docs.cangjie-lang.cn/docs/1.0.1/tools/source_zh_cn/IDE/debug_service_community.html"
    markdown_file_path = "tools/source_zh_cn/IDE/debug_service_community.md"
    
    page_data = [{
        'html_content': test_html,
        'page_url': page_url,
        'markdown_file_path': markdown_file_path
    }]
    
    print("🧪 开始测试图片下载功能...")
    print(f"📄 测试页面: {page_url}")
    print(f"📝 Markdown文件: {markdown_file_path}")
    
    # 下载图片
    try:
        mappings = await downloader.download_all_images(page_data)
        
        if mappings:
            print(f"\n✅ 图片下载测试完成!")
            print(f"📊 URL映射结果:")
            for file_path, url_mapping in mappings.items():
                print(f"  文件: {file_path}")
                for original_url, new_path in url_mapping.items():
                    print(f"    {original_url} -> {new_path}")
        else:
            print("❌ 没有生成URL映射")
            
    except Exception as e:
        print(f"❌ 测试失败: {e}")
        import traceback
        traceback.print_exc()


if __name__ == "__main__":
    asyncio.run(test_image_download())