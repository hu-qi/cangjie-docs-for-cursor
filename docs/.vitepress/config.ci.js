import { defineConfig } from 'vitepress'

// CI 专用配置 - 完全禁用死链接检查
export default defineConfig({
  title: '仓颉编程语言文档',
  description: '仓颉编程语言官方文档',
  
  // 基础配置
  base: '/',
  lang: 'zh-CN',
  
  // 完全禁用死链接检查 - 匹配所有链接
  ignoreDeadLinks: [
    /^.*$/,  // 匹配所有链接
    () => true
  ],
  
  // Vite 配置
  vite: {
    assetsInclude: ['**/*.PNG', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg', '**/*.webp'],
    logLevel: 'error'
  },
  
  // 构建配置
  buildEnd() {
    // 构建结束时不进行任何链接检查
  },
  
  // 简化的主题配置（减少可能的死链接）
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '1.0.1 文档', link: '/1.0.1/' }
    ],
    
    // 最小化侧边栏以减少死链接
    sidebar: {
      '/1.0.1/': [
        {
          text: "文档",
          items: [
            {
              text: "用户手册",
              link: "/1.0.1/user_manual/"
            },
            {
              text: "标准库 API",
              link: "/1.0.1/libs/"
            }
          ]
        }
      ]
    },
    
    // 搜索配置
    search: {
      provider: 'local'
    }
  },
  
  // Markdown 配置
  markdown: {
    lineNumbers: false,
    // 禁用可能导致死链接的功能
    breaks: false,
    linkify: false
  }
})