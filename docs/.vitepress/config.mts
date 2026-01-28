import { defineConfig } from 'vitepress'


export default defineConfig({
  title: "Chark_Dev_Note",
  description: "一個 C# 工程師的技術筆記。用來分享開發心得。",
  themeConfig: {
    nav: [
      { text: '首頁', link: '/' },
      { text: '筆記心得', link: '/markdown-examples' },
      { text: '關於我', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '技術筆記',
        items: [
          { text: '技術架構心得', link: '/markdown-examples' },
          { text: 'Vue學習筆記', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/chuanhui603' }
    ]
  }
})
