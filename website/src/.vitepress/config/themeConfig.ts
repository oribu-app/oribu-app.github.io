import type { DefaultTheme } from 'vitepress'

import nav from './navigation/navbar'

const themeConfig: DefaultTheme.Config = {
  nav,

  outline: [2, 3],

  socialLinks: [
    {
      icon: 'github',
      link: 'https://github.com/oribu-app/oribu-app',
      ariaLabel: 'Project GitHub',
    },
  ],

  footer: {
    message: '<a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Open-source Apache Licensed</a> <span class="divider">|</span> <a href="/privacy/">Privacy policy</a>',
    copyright: `Copyright © ${new Date().getFullYear()} Oribu`,
  },

  editLink: {
    pattern: 'https://github.com/oribu-app/oribu-app.github.io/edit/master/website/src/:path',
    text: 'Help us improve this page',
  },

  lastUpdated: {
    text: 'Last updated',
    formatOptions: {
      forceLocale: true,
      dateStyle: 'long',
      timeStyle: 'short',
    },
  },
}

export default themeConfig
