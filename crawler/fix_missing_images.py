#!/usr/bin/env python3
"""
图片链接修复脚本 - 修复文件名不匹配的图片链接
"""

import re
import os
from pathlib import Path


def fix_image_links():
    """修复图片链接"""
    docs_dir = Path("../docs/1.0.1")
    
    # 文件名映射规则
    image_mappings = {
        # 缺失的图片文件名映射到实际存在的文件
        'createProject_2.PNG': 'createProject_2_community.png',
        'compelte1.PNG': 'complete1.png',  # 注意：这里原文就是拼写错误的"compelte"
        'typeHierarchy.PNG': 'typeHierarchy1.png',
        'callHierarchy.PNG': 'callHierarchy1.png', 
        'multi.PNG': 'multiBuild.png',
        'cjpm.PNG': 'cpm.png',
        'setupVsix.PNG': None,  # 这个文件不存在，需要占位符
        'checkVsix.PNG': None,  # 这个文件不存在，需要占位符
    }
    
    fixed_files = 0
    total_fixes = 0
    
    print("🔧 开始修复图片链接...")
    
    # 遍历所有md文件
    for md_file in docs_dir.rglob("*.md"):
        try:
            with open(md_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            file_fixes = 0
            
            # 遍历所有映射规则
            for old_name, new_name in image_mappings.items():
                # 构建搜索模式
                old_pattern = f'./images/{old_name}'
                
                if old_pattern in content:
                    if new_name:
                        # 替换为新的文件名
                        new_pattern = f'./images/{new_name}'
                        content = content.replace(old_pattern, new_pattern)
                        print(f"   ✅ {old_name} -> {new_name}")
                        file_fixes += 1
                    else:
                        # 替换为占位符
                        # 查找完整的图片引用
                        img_pattern = f'!\\[([^\\]]*)\\]\\({re.escape(old_pattern)}\\)'
                        match = re.search(img_pattern, content)
                        if match:
                            alt_text = match.group(1)
                            placeholder = f"📷 **[图片缺失]** {alt_text}"
                            content = re.sub(img_pattern, placeholder, content)
                            print(f"   ⚠️  {old_name} -> 占位符 (文件不存在)")
                            file_fixes += 1
            
            # 如果有修改，写回文件
            if content != original_content:
                with open(md_file, 'w', encoding='utf-8') as f:
                    f.write(content)
                
                relative_path = md_file.relative_to(docs_dir)
                print(f"🔧 修复文件: {relative_path} ({file_fixes} 个图片)")
                fixed_files += 1
                total_fixes += file_fixes
                
        except Exception as e:
            print(f"❌ 处理文件失败 {md_file}: {e}")
    
    print(f"\n🎉 图片链接修复完成!")
    print(f"📊 修复了 {fixed_files} 个文件中的 {total_fixes} 个图片链接")
    
    return fixed_files > 0


def main():
    """主函数"""
    print("🖼️  开始修复图片链接...")
    
    script_dir = Path(__file__).parent
    os.chdir(script_dir)
    
    success = fix_image_links()
    
    if success:
        print(f"\n💡 建议重新运行检查脚本验证修复结果:")
        print(f"   python check_image_links.py")
    else:
        print(f"\n✅ 没有发现需要修复的图片链接")
    
    return 0


if __name__ == "__main__":
    exit(main())