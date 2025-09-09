# GitHub 部署指南

## 第一步：在 GitHub 上创建仓库

1. 访问 https://github.com/new
2. 登录您的 GitHub 账户
3. 填写仓库信息：
   - **Repository name**: `cangjie-docs-for-cursor`
   - **Description**: `仓颉编程语言文档转换器 - 自动将仓颉官方文档转换为 VitePress 格式`
   - **Public**: 选择 Public（公开）
   - **不要**初始化 README、.gitignore 或 license（我们已经有这些文件）
4. 点击 "Create repository"

## 第二步：推送代码到 GitHub

创建仓库后，运行以下命令：

```bash
cd /Users/huqi/Develop/aigc/Vibe/cangjie-docs

# 添加远程仓库
git remote add origin https://github.com/hu-qi/cangjie-docs-for-cursor.git

# 推送到 GitHub
git push -u origin main
```

## 第三步：验证推送

推送完成后，您可以访问 https://github.com/hu-qi/cangjie-docs-for-cursor 查看仓库内容。

## 第四步：配置 GitHub Pages（可选但推荐）

1. 访问仓库的 Settings 页面
2. 点击左侧的 "Pages"
3. 在 "Build and deployment" 部分：
   - Source: 选择 "GitHub Actions"

## 第五步：配置仓库设置

1. 访问仓库的 Settings 页面
2. 在 "General" 部分：
   - 描述: `仓颉编程语言文档转换器 - 自动将仓颉官方文档转换为 VitePress 格式`
3. 在 "Collaborators & teams" 部分：
   - 添加协作者: `qoder`（如果需要）

## 作者信息

本项目由以下作者共同维护：
- **hu-qi** - 项目发起人
- **qoder** - 核心开发者

## 后续更新

以后更新代码时，只需运行：
```bash
git add .
git commit -m "描述您的更改"
git push
```