<template>
    <div class="article-cards-wrapper">
        <h2 class="article-cards-heading">
            最新文章
            <span class="article-cards-line"></span>
        </h2>

        <div class="article-cards-grid" v-if="articles.length">
            <a v-for="(article, i) in articles" :key="i" :href="withBase(article.url)" class="article-card">
                <!-- Cover placeholder -->
                <div class="article-card-cover">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                        <polyline points="10 9 9 9 8 9" />
                    </svg>
                </div>

                <!-- Tags -->
                <div class="article-card-tags" v-if="article.tags && article.tags.length">
                    <span v-for="(tag, j) in article.tags.slice(0, 2)" :key="j" class="article-card-tag">{{ tag
                    }}</span>
                    <span v-if="article.tags.length > 2" class="article-card-tag-more">
                        +{{ article.tags.length - 2 }}
                    </span>
                </div>

                <!-- Title -->
                <h3 class="article-card-title">{{ article.title }}</h3>

                <!-- Description -->
                <p class="article-card-desc" v-if="article.description">
                    {{ article.description }}
                </p>

                <!-- Date -->
                <time class="article-card-date" v-if="article.date">
                    {{ formatDate(article.date) }}
                </time>
            </a>
        </div>

        <div v-else class="article-cards-empty">
            <p>目前還沒有文章，快去寫一篇吧！🚀</p>
        </div>
    </div>
</template>

<script setup>
import { withBase } from 'vitepress'
import { data as articles } from '../../../articles.data.mjs'

function formatDate(dateStr) {
    if (!dateStr) return ''
    const d = new Date(dateStr)
    const year = d.getFullYear()
    const month = String(d.getMonth() + 1).padStart(2, '0')
    const day = String(d.getDate()).padStart(2, '0')
    return `${year}.${month}.${day}`
}
</script>
