import type { DefaultTheme } from 'vitepress'

const nav: DefaultTheme.NavItem[] = [
  {
    text: 'Get Oribu',
    activeMatch: '^/*?(download|changelogs)/*?$',
    items: [
      {
        text: 'Download',
        link: '/download/',
      },
      {
        text: 'Changelogs',
        link: '/changelogs/',
      },
    ],
  },
  {
    text: 'Privacy',
    link: '/privacy/',
    activeMatch: '/privacy/',
  },
]

export default nav
