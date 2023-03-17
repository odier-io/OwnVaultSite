import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "OwnVault",
  description: "Open source vault and password manager",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: '/logo-light.svg',
      dark: '/logo-dark.svg',
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get started', link: '/get-started' },
      { text: 'Go to my vault', link: 'http://ownvault.odier.io/app/' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/get-started' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/odier-io/' }
    ],

    footer: {
      copyright: `Copyright © 2022-${ new Date().getFullYear() } odier.io. All right reserved.`
    }
  }
})
