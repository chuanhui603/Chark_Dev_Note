<template>
  <div class="resume-about-wrapper">
    <div class="resume-about-card">
      <div class="resume-header">
        <aside class="resume-profile">
          <div class="resume-avatar">
            <img v-if="fm.avatar" :src="avatarSrc" :alt="`${fm.name} 個人照`" class="resume-avatar-image" />
            <div v-else class="resume-avatar-placeholder">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </div>
          <h1 class="resume-name">{{ fm.name }}</h1>
          <p class="resume-role">{{ fm.role }}</p>

          <ul class="resume-contact-list">
            <li v-if="fm.location">
              <span class="resume-contact-icon" v-html="icons.location"></span>
              <span>{{ fm.location }}</span>
            </li>
            <li v-if="fm.birthday">
              <span class="resume-contact-icon" v-html="icons.birthday"></span>
              <span>{{ fm.birthday }}</span>
            </li>
            <li v-if="fm.education">
              <span class="resume-contact-icon" v-html="icons.education"></span>
              <span>{{ fm.education }}</span>
            </li>
            <li v-if="fm.email">
              <span class="resume-contact-icon" v-html="icons.email"></span>
              <a :href="'mailto:' + fm.email">{{ fm.email }}</a>
            </li>
          </ul>

          <div class="resume-social-links">
            <a v-if="fm.github" :href="fm.github" title="GitHub" target="_blank" rel="noopener">
              <span v-html="icons.github"></span>
            </a>
          </div>
        </aside>

        <div class="resume-intro">
          <nav class="resume-breadcrumb">
            <a :href="withBase('/')">首頁</a>
            <span class="resume-breadcrumb-sep">›</span>
            <span>關於</span>
          </nav>
          <h2 class="resume-intro-title">{{ fm.introTitle || '「哈囉，世界！」' }}</h2>
          <div class="resume-intro-body">
            <p v-for="(para, i) in fm.intro" :key="i">{{ para }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="resume-about-card resume-work-card">
      <h2 class="resume-section-heading">工作經歷</h2>
      <div class="resume-role-tags" v-if="fm.workRoles && fm.workRoles.length">
        <span v-for="tag in fm.workRoles" :key="tag" class="resume-role-tag">{{ tag }}</span>
      </div>

      <div class="resume-timeline" v-if="fm.experiences && fm.experiences.length">
        <div class="resume-timeline-item" v-for="(exp, i) in fm.experiences" :key="i">
          <div class="resume-timeline-year">{{ exp.year }}</div>
          <div class="resume-timeline-dot" :class="{ highlight: exp.highlight }"></div>
          <div class="resume-timeline-content">
            <div class="resume-timeline-meta">
              <span class="resume-timeline-company">{{ exp.company }}</span>
              <span v-if="exp.team" class="resume-timeline-team">/ {{ exp.team }}</span>
            </div>
            <h3 class="resume-timeline-title">{{ exp.title }}</h3>
            <ul v-if="exp.details && exp.details.length" class="resume-timeline-details">
              <li v-for="(d, j) in exp.details" :key="j">{{ d }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="resume-bottom-grid">
      <div class="resume-about-card resume-grid-item">
        <h2 class="resume-section-heading">代表專案</h2>
        <ul class="resume-project-list" v-if="fm.projects && fm.projects.length">
          <li v-for="(proj, i) in fm.projects" :key="i">
            <span class="resume-project-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" width="18" height="18">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
              </svg>
            </span>
            <div>
              <strong>{{ proj.name }}</strong>
              <p v-if="proj.desc">{{ proj.desc }}</p>
            </div>
          </li>
        </ul>
      </div>

      <div class="resume-about-card resume-grid-item">
        <h2 class="resume-section-heading">技能</h2>
        <div class="resume-skills-cloud" v-if="fm.skills && fm.skills.length">
          <span v-for="skill in fm.skills" :key="skill" class="resume-skill-pill">{{ skill }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'

const { frontmatter } = useData()
const fm = frontmatter
const avatarSrc = computed(() => (fm.value.avatar ? withBase(fm.value.avatar) : ''))

const icons = {
  location: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
  birthday: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>',
  education: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
}
</script>
