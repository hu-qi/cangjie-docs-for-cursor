# 贡献指南

感谢您对仓颉文档转换器项目的关注！我们欢迎任何形式的贡献。

## 开发环境设置

1. Fork 本仓库
2. 克隆您的 Fork：
   ```bash
   git clone https://github.com/your-username/cangjie-docs-for-cursor.git
   cd cangjie-docs-for-cursor
   ```
3. 安装依赖：
   ```bash
   cd crawler
   pip install -r requirements.txt
   playwright install chromium
   cd ..
   npm install
   ```

## 代码规范

### Python 代码规范
- 遵循 PEP 8 代码风格
- 使用类型提示
- 保持函数简洁，单一职责
- 添加必要的注释和文档字符串

### JavaScript/Node.js 代码规范
- 遵循 StandardJS 或 Airbnb 代码风格
- 使用 ES6+ 特性
- 保持模块化设计

## 提交 Pull Request

1. 从 `main` 分支创建您的特性分支：
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. 进行您的更改
3. 添加测试（如果适用）
4. 确保所有测试通过
5. 提交您的更改：
   ```bash
   git commit -m "Add feature: your feature description"
   ```
6. 推送到您的 Fork：
   ```bash
   git push origin feature/your-feature-name
   ```
7. 在 GitHub 上创建 Pull Request

## 报告问题

如果您发现任何问题，请在 GitHub Issues 中报告：

1. 检查是否已存在相关 Issue
2. 使用清晰的标题
3. 详细描述问题，包括：
   - 问题的复现步骤
   - 预期行为
   - 实际行为
   - 环境信息（操作系统、Python 版本等）
   - 错误日志或截图

## 功能建议

欢迎提出新功能建议！请在 Issues 中创建一个新的话题，描述：

1. 您想要的功能
2. 为什么这个功能有用
3. 可能的实现方式（如果有的话）

## 代码审查流程

所有 Pull Request 都需要通过代码审查。审查者会检查：

- 代码质量和风格
- 功能正确性
- 测试覆盖
- 文档更新
- 是否符合项目架构

## 许可证

通过贡献代码，您同意您的贡献将根据项目的 MIT 许可证进行许可。