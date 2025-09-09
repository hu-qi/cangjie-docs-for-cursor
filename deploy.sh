#!/bin/bash
# deploy.sh - 部署脚本

echo "📦 构建和部署仓颉文档转换器项目"

# 检查是否在正确的目录
if [ ! -f "package.json" ]; then
    echo "❌ 错误: 请在项目根目录运行此脚本"
    exit 1
fi

echo "🔧 安装依赖..."
npm install

echo "🕷️ 运行爬虫（如果需要更新文档）..."
# 如果需要重新爬取文档，取消注释下面的行
# python run_full_crawl.py

echo "📋 生成侧边栏配置..."
cd crawler
python generate_sidebar.py
cd ..

echo "🏗️ 构建 VitePress 站点..."
npm run build

echo "🚀 部署完成！"
echo "📁 构建文件位于: docs/.vitepress/dist/"
echo ""
echo "💡 要部署到 GitHub Pages，请按照 PUSH_INSTRUCTIONS.md 中的说明操作"

# 如果需要自动部署到 GitHub Pages，可以使用以下命令（需要配置 gh-pages）
# npx gh-pages -d docs/.vitepress/dist