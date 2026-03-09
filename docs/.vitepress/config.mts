import { defineConfig } from 'vitepress'

const isGitHubPages =
  (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env?.VITEPRESS_TARGET === 'github-pages'

export default defineConfig({
  base: isGitHubPages ? '/Chark_Dev_Note/' : '/',
  title: "Chark筆記",
  description: "一個 C# 工程師的技術筆記。用來分享開發心得。",
  appearance: false,
  themeConfig: {
    nav: [
      { text: '首頁', link: '/' },
      { text: '筆記心得', link: '/notes/note_Header' },
      { text: '關於我', link: '/about' }
    ],

    sidebar: {
      '/notes/ai_docs/': [
        {
          text: 'AI心得筆記',
          items: [
            { text: 'CopilotCli使用心得', link: '/notes/ai_docs/copilotCli' },
          ]
        },
      ],
      '/about': [
        {
          text: 'About Me',
          items: [
            { text: '關於我', link: '/about' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/chuanhui603' }
    ]
  }
})
