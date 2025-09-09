#!/bin/bash

echo "🚀 仓颉文档转换器安装脚本"
echo "================================"

# 检查Python
if ! command -v python3 &> /dev/null; then
    echo "❌ Python3 未安装，请先安装Python3"
    exit 1
fi

# 检查Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js 未安装，请先安装Node.js"
    exit 1
fi

echo "✅ 环境检查通过"

# 安装Python依赖
echo "📦 安装Python依赖..."
cd crawler
pip install -r requirements.txt
playwright install chromium

# 返回根目录
cd ..

# 安装Node.js依赖
echo "📦 安装Node.js依赖..."
npm install

echo ""
echo "🎉 安装完成！"
echo ""
echo "使用方法:"
echo "1. 爬取文档: python run_full_crawl.py"
echo "2. 启动文档服务: npm run dev"
echo "3. 访问: http://localhost:5173"