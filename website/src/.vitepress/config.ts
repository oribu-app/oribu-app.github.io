import process from 'node:process'
import { defineConfig, loadEnv } from 'vitepress'

import headConfig from './config/headConfig'
import markdownConfig from './config/markdownConfig'
import { getStableRelease } from './config/releaseData'
import themeConfig from './config/themeConfig'

const title = 'Oribu'
const description = 'Track your games, manga, webtoons, series, movies and books - all in one place, all on your device.'

const env = loadEnv('', process.cwd())
const hostname: string = env.VITE_HOSTNAME || 'http://localhost:4173'

export default defineConfig({
  outDir: '../dist',
  lastUpdated: true,
  cleanUrls: true,
  title,
  description,
  sitemap: {
    hostname,
  },
  head: headConfig,
  markdown: markdownConfig,
  themeConfig,
  transformPageData: async (pageData) => {
    if (pageData.filePath === 'changelogs/[tag].md') {
      const tag = (pageData as any).params?.tag as string | undefined
      if (tag) {
        const version = tag.startsWith('v') ? tag.slice(1) : tag
        pageData.frontmatter ||= {}
        pageData.frontmatter.title = `v${version}`

        const release = await getStableRelease(tag)
        const publishedAt = release?.published_at || release?.created_at || undefined

        const prettyDate = publishedAt
          ? new Date(publishedAt).toLocaleDateString('en', { month: 'short', day: 'numeric', year: 'numeric' })
          : undefined

        const versionLabel = tag
        const desc = prettyDate
          ? `Changelog for Oribu ${versionLabel}, released on ${prettyDate}`
          : `Changelog for Oribu ${versionLabel}`

        pageData.frontmatter.description = pageData.frontmatter.description || desc
        pageData.title = pageData.frontmatter.title
        pageData.description = pageData.frontmatter.description
      }
    }
    return pageData
  },
})
