<template>
    <div class="note-list-wrapper">
        <div class="note-list-header">
            <h1 class="note-list-title">📝 筆記心得</h1>
            <p class="note-list-subtitle">記錄學習過程中的每一個心得與發現</p>
        </div>

        <div class="note-list-items" v-if="articles.length">
            <a v-for="(article, i) in articles" :key="i" :href="withBase(article.url)" class="note-list-item">
                <div class="note-list-item-left">
                    <div class="note-list-item-date">
                        <span class="note-date-day">{{ getDay(article.date) }}</span>
                        <span class="note-date-month">{{ getMonthYear(article.date) }}</span>
                    </div>
                </div>
                <div class="note-list-item-body">
                    <div class="note-list-item-tags" v-if="article.tags && article.tags.length">
                        <span v-for="tag in article.tags" :key="tag" class="note-list-tag">{{ tag }}</span>
                    </div>
                    <h2 class="note-list-item-title">{{ article.title }}</h2>
                    <p class="note-list-item-desc" v-if="article.description">{{ article.description }}</p>
                </div>
                <div class="note-list-item-arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" width="20" height="20">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </div>
            </a>
        </div>

        <div v-else class="note-list-empty">
            <p>目前還沒有筆記，快去寫一篇吧！🚀</p>
        </div>
    </div>
</template>

<script setup>
import { withBase } from 'vitepress'
import { data as articles } from '../../../articles.data.mjs'

function getDay(dateStr) {
    if (!dateStr) return '--'
    return String(new Date(dateStr).getDate()).padStart(2, '0')
}

function getMonthYear(dateStr) {
    if (!dateStr) return ''
    const d = new Date(dateStr)
    return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}`
}
</script>
