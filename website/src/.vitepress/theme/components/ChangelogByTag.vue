<script setup lang="ts">
import { DateTime } from 'luxon'
import MarkdownIt from 'markdown-it'
import { computed, toRefs } from 'vue'
import { data as changelogs } from '../data/changelogs.data'
import { formatChangelog } from '../utils/formatChangelog'
import Contributors from './Contributors.vue'
import LocalizedDate from './LocalizedDate.vue'

const props = defineProps<{ tag: string }>()
const { tag } = toRefs(props)

const md = new MarkdownIt({ html: true })

function renderMarkdown(string: string | null | undefined) {
  return formatChangelog(md, string, { stripChecksums: true })
}

const release = computed(() => changelogs.find(r => r.tag_name === tag.value))
const latestStableTag = computed(() => {
  const stable = changelogs
    .filter(r => !r.draft && !r.prerelease)
    .toSorted((a, b) => new Date(b.published_at!).getTime() - new Date(a.published_at!).getTime())
  return stable[0]?.tag_name
})
const isLatest = computed(() => latestStableTag.value === tag.value)

function formatBytes(bytes: number) {
  if (bytes === 0 || Number.isNaN(bytes))
    return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB']
  const i = Math.min(Math.floor(Math.log(bytes) / Math.log(k)), sizes.length - 1)
  const val = bytes / k ** i
  return `${val.toFixed(val >= 100 || i === 0 ? 0 : val >= 10 ? 1 : 2)} ${sizes[i]}`
}

function assetDate(dateStr?: string) {
  const date = DateTime.fromISO(dateStr ?? '', { zone: 'utc' }).setLocale('en')
  return {
    relative: date.isValid ? date.toRelative() ?? '' : '',
    exact: date.isValid ? date.toLocaleString(DateTime.DATETIME_FULL) : '',
    iso: dateStr || undefined,
  }
}
</script>

<template>
  <div v-if="release">
    <h1 :id="isLatest ? 'latest' : release.tag_name">
      {{ release.tag_name.substring(1) }}
      <Badge v-if="isLatest" type="tip" text="Latest" />
      <a
        class="header-anchor"
        :href="isLatest ? '#latest' : `#${release.tag_name}`"
        :aria-label="`Permalink to &quot;${release.tag_name}&quot;`"
      />
    </h1>
    <LocalizedDate :value="release!.published_at!" />
    <div v-html="renderMarkdown(release!.body)" />
    <Contributors :body="release!.body!" :author="release!.author.login" />
    <details v-if="release!.assets && release!.assets.length" class="assets mt-4">
      <summary>
        <h3>
          Assets
          <Badge type="info" :text="String(release!.assets.length)" />
        </h3>
      </summary>
      <ul class="asset-list">
        <li v-for="asset in release!.assets" :key="asset.id" class="asset-row">
          <div class="left">
            <a :href="asset.browser_download_url" class="name">{{ asset.name }}</a>
          </div>
          <div class="right">
            <span class="size">{{ formatBytes(asset.size) }}</span>
            <time class="date" :datetime="assetDate(asset.updated_at || asset.created_at).iso" :title="assetDate(asset.updated_at || asset.created_at).exact">
              {{ assetDate(asset.updated_at || asset.created_at).relative }}
            </time>
          </div>
        </li>
      </ul>
    </details>
  </div>
  <div v-else>
    <p>Release not found.</p>
  </div>
</template>

<style lang="stylus" scoped>
h1 {
  display: flex
  align-items: center
  gap: 0.5rem
}

time {
  font-size: 1rem
  color: var(--vp-c-text-2)
}

.assets {
  summary {
    display: list-item
    cursor: pointer
    user-select: none
    list-style: disclosure-closed inside

    &::marker {
      color: var(--vp-c-text-2)
    }

    :where(details[open]) & {
      list-style: disclosure-open inside
    }

    h3 {
      display: inline-flex
      align-items: center
      gap: 0.5rem
      margin: 0
      vertical-align: middle
    }
  }

  .asset-list {
    margin: 0.75rem 0 0
    padding: 0
    list-style: none
    border: 1px solid var(--vp-c-divider)
    border-radius: 8px
    overflow: hidden
  }

  .asset-row {
    display: flex
    align-items: center
    justify-content: space-between
    gap: 0.5rem
    padding: 0.5rem 0.75rem
    border-top: 1px solid var(--vp-c-divider)
    font-size: 0.9375rem

    &:first-child { border-top: none }
  }

  .left {
    display: flex
    align-items: center
    gap: 0.4rem
    min-width: 0

    .name {
      color: var(--vp-c-text-1)
      max-width: 100%
      text-overflow: ellipsis
      overflow: hidden
      white-space: nowrap
    }
  }

  .right {
    display: flex
    align-items: center
    gap: 0.75rem
    color: var(--vp-c-text-3)
    font-variant-numeric: tabular-nums
    flex: 0 0 auto
    white-space: nowrap

    .size {
      min-width: 56px
      text-align: right
    }

    .date {
      min-width: 88px
      text-align: right
    }
  }
}
</style>
