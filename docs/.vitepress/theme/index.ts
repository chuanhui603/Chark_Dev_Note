import DefaultTheme from 'vitepress/theme'
import './custom.css'
import ResumeAbout from './components/ResumeAbout.vue'
import type { App } from 'vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('ResumeAbout', ResumeAbout)
  }
}
