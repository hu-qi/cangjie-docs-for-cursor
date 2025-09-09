# 仓颉编程语言文档转换器

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Python](https://img.shields.io/badge/python-3.x-blue.svg)
![VitePress](https://img.shields.io/badge/VitePress-1.0.0-green.svg)
![GitHub](https://img.shields.io/github/stars/hu-qi/cangjie-docs-for-cursor.svg)

一个自动将仓颉编程语言官方文档转换为 VitePress 格式的工具，提供现代化、美观的文档展示体验。

## 📚 项目简介

本项目旨在将仓颉编程语言的官方文档自动转换为基于 VitePress 的现代化文档站点，包括：

- 🕷️ **智能爬虫**：自动爬取官方文档内容
- 🔄 **格式转换**：HTML 到 Markdown 的结构化转换
- 🖼️ **图片处理**：自动下载和本地化图片资源
- 🗂️ **目录生成**：动态生成侧边栏导航结构
- 📱 **响应式设计**：基于 VitePress 的现代化界面

## ✨ 主要特性

### 🚀 核心功能
- ✅ 完整的文档爬取和转换流程
- ✅ 保持原有目录结构和链接关系
- ✅ 自动处理图片资源下载和路径映射
- ✅ 支持版本化文档管理
- ✅ 自动生成完整的侧边栏导航

### 🛠️ 技术特色
- 使用 Playwright 实现高效网页爬取
- 基于管道-过滤器架构的转换流程
- 异步批量图片下载和处理
- 智能的链接修复和路径映射
- 完善的错误处理和日志记录

## 📦 安装与使用

### 环境要求
- Python 3.x
- Node.js 16+
- npm

### 快速开始

1. **克隆项目**
```bash
git clone https://github.com/hu-qi/cangjie-docs-for-cursor.git
cd cangjie-docs-for-cursor
```

2. **安装依赖**
```bash
# 安装 Python 依赖
cd crawler
pip install -r requirements.txt
playwright install chromium

# 安装 Node.js 依赖
cd ..
npm install
```

3. **运行完整爬取**
```bash
# 爬取所有文档
python run_full_crawl.py

# 生成侧边栏配置
cd crawler
python generate_sidebar.py
```

4. **启动本地服务**
```bash
# 启动开发服务器
npm run dev

# 访问 http://localhost:5173
```

### 增量更新

如果只需要更新特定文档或图片：

```bash
# 增量下载图片
cd crawler
python incremental_image_download.py

# 检查图片链接
python check_image_links.py

# 修复缺失的图片链接
python fix_missing_images.py
```

## 🏗️ 项目结构

```
cangjie-docs-for-cursor/
├── crawler/                    # 爬虫和转换工具
│   ├── main.py                # 主爬虫脚本
│   ├── html_parser.py         # HTML 解析器
│   ├── markdown_converter.py  # Markdown 转换器
│   ├── image_downloader.py    # 图片下载器
│   ├── generate_sidebar.py    # 侧边栏生成器
│   ├── check_image_links.py   # 图片链接检查工具
│   ├── fix_missing_images.py  # 图片链接修复工具
│   └── requirements.txt       # Python 依赖
├── docs/                      # VitePress 文档目录
│   ├── .vitepress/
│   │   └── config.js          # VitePress 配置
│   └── 1.0.1/                 # 转换后的文档
├── package.json               # Node.js 配置
├── run_full_crawl.py          # 完整爬取入口
└── README.md                  # 项目文档
```

## 🔧 配置说明

### VitePress 配置

主要配置文件位于 `docs/.vitepress/config.js`，包含：
- 站点基本信息配置
- 主题和样式配置
- 侧边栏导航结构
- 搜索功能配置

### 爬虫配置

在 `crawler/main.py` 中可以配置：
- 目标网站 URL
- 爬取延迟设置
- 输出目录路径
- 用户代理字符串

## 📊 功能模块

### 🕷️ 爬虫模块
- **智能页面发现**：从搜索索引自动发现所有页面
- **结构化内容提取**：精确提取文档内容和元数据
- **链接关系维护**：保持内部链接的正确性

### 🔄 转换模块
- **HTML 解析**：使用 BeautifulSoup 进行结构化解析
- **Markdown 转换**：使用 html2text 进行格式转换
- **代码块处理**：智能识别和处理代码语言
- **表格优化**：确保表格的 Markdown 兼容性

### 🖼️ 图片处理
- **批量下载**：异步高效下载所有图片资源
- **路径映射**：智能计算相对路径关系
- **格式验证**：检查图片链接的有效性
- **错误修复**：自动修复常见的链接问题

### 🗂️ 导航生成
- **目录扫描**：自动扫描文档目录结构
- **层级组织**：按逻辑顺序组织导航层级
- **友好命名**：提供中文友好的导航名称
- **配置输出**：生成完整的 VitePress 配置

## 🛠️ 开发工具

项目包含多个实用的开发和维护工具：

| 工具脚本 | 功能描述 |
|---------|----------|
| `check_image_links.py` | 检查所有图片链接的有效性 |
| `fix_missing_images.py` | 修复缺失或错误的图片链接 |
| `incremental_image_download.py` | 增量下载缺失的图片 |
| `generate_sidebar.py` | 生成完整的侧边栏配置 |
| `update_sidebar.py` | 快速更新侧边栏配置 |

## 📈 项目统计

基于当前版本的统计数据：
- 📄 **文档数量**：411+ 个 Markdown 文件
- 🖼️ **图片资源**：108+ 个图片文件
- 🗂️ **导航项目**：30+ 个主要分类
- 📚 **内容涵盖**：用户手册、API 文档、开发工具

## 🤝 贡献指南

我们欢迎任何形式的贡献！

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📝 更新日志

### v1.0.0 (2024-09-10)
- ✅ 完整的文档爬取和转换功能
- ✅ 图片资源自动下载和处理
- ✅ 侧边栏导航自动生成
- ✅ 错误处理和修复工具
- ✅ VitePress 集成和优化

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 👥 作者

- **hu-qi** - *项目发起人* - [GitHub](https://github.com/hu-qi)
- **qoder** - *核心开发者*

## 🙏 致谢

- 感谢仓颉编程语言团队提供的优质文档
- 感谢 VitePress 团队提供的优秀文档框架
- 感谢所有开源项目的贡献者

## 📞 支持

如果您在使用过程中遇到问题，请：

1. 查看 [Issues](https://github.com/hu-qi/cangjie-docs-for-cursor/issues) 中是否有相似问题
2. 创建新的 Issue 详细描述问题
3. 提供错误日志和环境信息

---

⭐ 如果这个项目对您有帮助，请给我们一个 Star！