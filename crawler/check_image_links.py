#!/usr/bin/env python3
"""
图片链接检查脚本 - 检查Markdown文件中的图片链接是否与实际文件匹配
"""

import re
import os
from pathlib import Path


def check_image_links():
    """检查所有图片链接"""
    docs_dir = Path("../docs/1.0.1")
    
    # 收集所有图片引用
    image_references = []
    missing_images = []
    existing_images = []
    
    print("🔍 扫描Markdown文件中的图片引用...")
    
    # 遍历所有md文件
    for md_file in docs_dir.rglob("*.md"):
        try:
            with open(md_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # 查找图片引用
            img_pattern = r'!\[([^\]]*)\]\(([^)]+)\)'
            matches = re.findall(img_pattern, content)
            
            for alt_text, img_src in matches:
                if img_src.startswith('./images/') or img_src.startswith('images/'):
                    # 计算相对于md文件的实际图片路径
                    if img_src.startswith('./'):
                        img_path = md_file.parent / img_src[2:]  # 去掉 "./"
                    else:
                        img_path = md_file.parent / img_src
                    
                    relative_md_path = md_file.relative_to(docs_dir)
                    
                    image_ref = {
                        'md_file': str(relative_md_path),
                        'alt_text': alt_text,
                        'img_src': img_src,
                        'img_path': img_path,
                        'exists': img_path.exists()
                    }
                    
                    image_references.append(image_ref)
                    
                    if image_ref['exists']:
                        existing_images.append(image_ref)
                    else:
                        missing_images.append(image_ref)
                        
        except Exception as e:
            print(f"❌ 处理文件失败 {md_file}: {e}")
    
    # 统计结果
    print(f"\n📊 图片引用统计:")
    print(f"📁 总计图片引用: {len(image_references)} 个")
    print(f"✅ 存在的图片: {len(existing_images)} 个")
    print(f"❌ 缺失的图片: {len(missing_images)} 个")
    
    # 显示缺失的图片
    if missing_images:
        print(f"\n❌ 缺失的图片列表:")
        for img in missing_images:
            print(f"   📝 {img['md_file']}")
            print(f"      🖼️  {img['img_src']} (alt: {img['alt_text']})")
            print(f"      📂 期望路径: {img['img_path']}")
            print()
    else:
        print(f"\n🎉 所有图片都存在!")
    
    # 检查images目录中是否有未引用的图片
    print(f"\n🔍 检查未引用的图片文件...")
    all_image_files = []
    referenced_files = set()
    
    # 收集所有实际的图片文件
    for images_dir in docs_dir.rglob("images"):
        if images_dir.is_dir():
            for img_file in images_dir.iterdir():
                if img_file.is_file() and img_file.suffix.lower() in ['.png', '.jpg', '.jpeg', '.gif', '.svg']:
                    all_image_files.append(img_file)
    
    # 收集所有引用的文件路径
    for img_ref in image_references:
        if img_ref['exists']:
            referenced_files.add(str(img_ref['img_path']))
    
    # 找出未引用的图片
    unreferenced_images = []
    for img_file in all_image_files:
        if str(img_file) not in referenced_files:
            unreferenced_images.append(img_file)
    
    print(f"📊 图片文件统计:")
    print(f"📁 总计图片文件: {len(all_image_files)} 个")
    print(f"🔗 已引用图片: {len(referenced_files)} 个")
    print(f"🤔 未引用图片: {len(unreferenced_images)} 个")
    
    if unreferenced_images:
        print(f"\n🤔 未引用的图片文件:")
        for img_file in unreferenced_images:
            relative_path = img_file.relative_to(docs_dir)
            print(f"   📂 {relative_path}")
    
    return {
        'total_references': len(image_references),
        'existing_images': len(existing_images),
        'missing_images': len(missing_images),
        'missing_list': missing_images,
        'total_files': len(all_image_files),
        'unreferenced_files': len(unreferenced_images),
        'unreferenced_list': unreferenced_images
    }


def main():
    """主函数"""
    print("🖼️  开始检查图片链接...")
    
    script_dir = Path(__file__).parent
    os.chdir(script_dir)
    
    results = check_image_links()
    
    print(f"\n📋 检查完成!")
    if results['missing_images'] > 0:
        print(f"⚠️  发现 {results['missing_images']} 个缺失的图片，需要处理")
        return 1
    else:
        print(f"✅ 所有图片链接都正常!")
        return 0


if __name__ == "__main__":
    exit(main())