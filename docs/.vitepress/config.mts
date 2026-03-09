import { defineConfig } from 'vitepress'


export default defineConfig({
  title: "Chark_Dev_Note",
  description: "一個 C# 工程師的技術筆記。用來分享開發心得。",
  themeConfig: {
    nav: [
      { text: '首頁', link: '/' },
      { text: '筆記心得', link: '/notes/note_Header' },
      { text: '關於我', link: '/about_me' }
    ],

    sidebar: {
      '/notes/note_Header': [
        {
          text: 'AI心得筆記',
          items: [
            { text: 'CopilotCli使用心得', link: '/notes/ai_docs/copilotCli.md' },
          ]
        },
      ],
      '/about_me': [
        {
          text: 'About Me',
          items: [
            { text: '關於我', link: '/about_me.md' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/chuanhui603' }
    ]
  }
})
