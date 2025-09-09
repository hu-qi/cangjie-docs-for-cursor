#!/usr/bin/env python3
"""
项目统计脚本 - 显示项目的关键统计数据
"""

import os
from pathlib import Path


def count_files_by_extension(directory, extension):
    """统计指定扩展名的文件数量"""
    count = 0
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(extension):
                count += 1
    return count


def get_directory_size(directory):
    """获取目录大小"""
    total_size = 0
    for root, dirs, files in os.walk(directory):
        for file in files:
            file_path = os.path.join(root, file)
            if os.path.exists(file_path):
                total_size += os.path.getsize(file_path)
    return total_size


def format_size(size_bytes):
    """格式化文件大小"""
    if size_bytes == 0:
        return "0B"
    size_names = ["B", "KB", "MB", "GB"]
    i = 0
    while size_bytes >= 1024 and i < len(size_names) - 1:
        size_bytes /= 1024.0
        i += 1
    return f"{size_bytes:.1f}{size_names[i]}"


def main():
    """主函数"""
    project_root = Path(__file__).parent.parent
    docs_dir = project_root / "docs" / "1.0.1"
    crawler_dir = project_root / "crawler"
    
    print("📊 仓颉文档转换器项目统计")
    print("=" * 50)
    
    # 统计文档文件
    md_files = count_files_by_extension(docs_dir, ".md")
    print(f"📄 Markdown 文档文件: {md_files} 个")
    
    # 统计图片文件
    image_files = count_files_by_extension(docs_dir, (".png", ".jpg", ".jpeg", ".gif", ".svg"))
    print(f"🖼️  图片文件: {image_files} 个")
    
    # 统计爬虫脚本
    py_files = count_files_by_extension(crawler_dir, ".py")
    print(f"🐍 Python 脚本: {py_files} 个")
    
    # 统计配置文件
    config_files = len(list(project_root.glob("*.json"))) + len(list(project_root.glob("*.yml")))
    print(f"⚙️  配置文件: {config_files} 个")
    
    # 项目大小
    project_size = get_directory_size(project_root)
    print(f"💾 项目总大小: {format_size(project_size)}")
    
    # docs 目录大小
    docs_size = get_directory_size(docs_dir)
    print(f"📚 文档目录大小: {format_size(docs_size)}")
    
    print("\n📈 详细统计:")
    print("-" * 30)
    
    # 按目录统计文档
    user_manual_dir = docs_dir / "user_manual"
    libs_dir = docs_dir / "libs"
    tools_dir = docs_dir / "tools"
    
    user_manual_files = count_files_by_extension(user_manual_dir, ".md")
    libs_files = count_files_by_extension(libs_dir, ".md")
    tools_files = count_files_by_extension(tools_dir, ".md")
    
    print(f"📘 用户手册文档: {user_manual_files} 个")
    print(f"📦 标准库文档: {libs_files} 个")
    print(f"🛠️  工具文档: {tools_files} 个")
    
    # 统计主要脚本
    main_scripts = [
        "main.py",
        "generate_sidebar.py",
        "image_downloader.py",
        "check_image_links.py",
        "fix_missing_images.py"
    ]
    
    print(f"\n🔧 主要工具脚本:")
    for script in main_scripts:
        script_path = crawler_dir / script
        if script_path.exists():
            print(f"   ✅ {script}")
        else:
            print(f"   ❌ {script} (未找到)")


if __name__ == "__main__":
    main()