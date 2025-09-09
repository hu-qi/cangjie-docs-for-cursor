# 推送到 GitHub 的 instructions

## 1. 在 GitHub 上创建仓库

1. 访问 https://github.com/new
2. 仓库名称: `cangjie-docs-for-cursor`
3. 描述: `仓颉编程语言文档转换器 - 自动将仓颉官方文档转换为 VitePress 格式`
4. 选择 Public（公开）
5. 不要初始化 README、.gitignore 或 license（我们已经有这些文件）
6. 点击 "Create repository"

## 2. 推送现有代码到 GitHub

创建仓库后，运行以下命令：

```bash
cd /Users/huqi/Develop/aigc/Vibe/cangjie-docs

# 添加远程仓库（请将 YOUR_USERNAME 替换为您的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/cangjie-docs-for-cursor.git

# 推送到 GitHub
git push -u origin main
```

## 3. 配置 GitHub Pages（可选但推荐）

1. 访问仓库的 Settings 页面
2. 点击左侧的 "Pages"
3. 在 "Build and deployment" 部分：
   - Source: 选择 "GitHub Actions"
   - 或者选择 "Deploy from a branch"，然后选择：
     - Branch: `main`
     - Folder: `/docs/.vitepress/dist`（构建后的位置）

## 4. 配置仓库设置

1. 访问仓库的 Settings 页面
2. 在 "General" 部分：
   - 描述: `仓颉编程语言文档转换器 - 自动将仓颉官方文档转换为 VitePress 格式`
   - Website: 如果配置了 GitHub Pages，会自动显示链接
3. 在 "Manage access" 部分：
   - 添加协作者: `qoder`（如果需要）

## 5. 验证推送

推送完成后，您可以在 GitHub 上看到所有文件和提交历史。

## 6. 后续更新

以后更新代码时，只需运行：
```bash
git add .
git commit -m "描述您的更改"
git push
```