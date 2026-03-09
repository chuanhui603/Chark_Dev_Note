import DefaultTheme from 'vitepress/theme'
import './custom.css'
import ResumeAbout from './components/ResumeAbout.vue'
import ArticleCards from './components/ArticleCards.vue'
import type { App } from 'vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('ResumeAbout', ResumeAbout)
    app.component('ArticleCards', ArticleCards)
  }
}
