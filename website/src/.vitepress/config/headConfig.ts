import type { HeadConfig } from 'vitepress'

const headConfig: HeadConfig[] = [
  ['meta', { name: 'darkreader-lock' }],
  ['meta', { name: 'theme-color', content: '#1976d2' }],
  ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
  ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],
  ['meta', { name: 'twitter:card', content: 'summary' }],
  ['meta', { property: 'og:site_name', content: 'Oribu' }],
  ['meta', { property: 'og:description', content: 'Track your games, manga, webtoons, series, movies and books - all in one place, all on your device.' }],
  ['meta', { property: 'og:locale', content: 'en_US' }],
  ['meta', { property: 'og:type', content: 'website' }],
]

export default headConfig
