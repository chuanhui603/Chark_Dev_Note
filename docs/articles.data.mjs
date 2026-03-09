// Auto-discovers all article markdown files from notes/ folder
import { createContentLoader } from 'vitepress'

export default createContentLoader('notes/**/*.md', {
    includeSrc: false,
    transform(rawData) {
        return rawData
            .filter(page => {
                // exclude header/index pages, only keep actual articles
                const url = page.url
                return !url.includes('note_Header')
            })
            .map(page => ({
                title: page.frontmatter.title || '未命名文章',
                description: page.frontmatter.description || '',
                date: page.frontmatter.date || '',
                tags: page.frontmatter.tags || [],
                url: page.url,
            }))
            .sort((a, b) => {
                // sort by date descending (newest first)
                const da = new Date(a.date || 0)
                const db = new Date(b.date || 0)
                return db.getTime() - da.getTime()
            })
    }
})
