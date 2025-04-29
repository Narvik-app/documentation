import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Documentation Narvik",
  description: "Plateforme de gestion pour club",
  lang: 'fr',
  head: [
    [ 'link', { rel: 'icon', href: '/favicon.ico' } ]
  ],
  sitemap: {
    hostname: 'https://docs.narvik.app'
  },
  lastUpdated: true,

  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    siteTitle: 'Narvik',
    logo: {
      light: '/logo-nk.png',
      dark: '/logo-nk-white.png'
    },

    outline: {
      label: 'Dans cette page'
    },

    docFooter: {
      prev: 'Précédent',
      next: 'Suivant'
    },
    lastUpdated: {
      text: 'Dernière mise à jour ',
      formatOptions: {} // Empty so time is not displayed
    },

    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Guide', link: '/guide/index' },
      { text: 'Documentation site', link: '/frontend/index' }
    ],

    sidebar: {
      '/guide/': [

      ],
      '/backend/': [
        {
          text: 'Installation',
          items: [
            {
              text: 'Prérequis',
              link: '/backend/docs/installation/01.prerequis'
            },
            {
              text: 'Docker (recommandée)',
              link: '/backend/docs/installation/02.docker'
            },
            {
              text: 'Manuelle',
              link: '/backend/docs/installation/02.manuelle'
            },
            {
              text: 'Post-installation',
              link: '/backend/docs/installation/03.post-installation'
            }
          ]
        },
        {
          text: 'Développement',
          collapsed: true,
          items: [
            {
              text: 'Participer au développement',
              link: '/backend/dev/participer'
            }
          ]
        }
      ],
      '/frontend/': [
        {
          text: 'Premiers pas',
          items: [
            {
              text: 'Association',
              link: '/frontend/premiers-pas/association'
            },
            {
              text: 'Utilisateur',
              link: '/frontend/premiers-pas/utilisateur'
            }
          ]
        },
        {
          text: 'Import / Export',
          collapsed: true,
          items: [
            {
              text: 'Imports supportés',
              link: '/frontend/docs/import'
            },
            {
              text: 'FFTIR - Itac',
              link: '/frontend/docs/import/fftir-itac'
            },
            {
              text: 'FFTIR - Cerbère',
              link: '/frontend/docs/import/fftir-cerbere'
            },
            {
              text: 'Narvik - Présences',
              link: '/frontend/docs/import/narvik-presences'
            },
            {
              text: 'Narvik - Point de vente',
              link: '/frontend/docs/import/narvik-pos'
            },
          ]
        },
        {
          text: 'Membres',
          collapsed: true,
          items: [
            {
              text: 'Gestion des présences',
              link: '/frontend/docs/membres/presences'
            },
            {
              text: 'Administration',
              link: '/frontend/docs/membres/administration'
            },
          ]
        },
        {
          text: 'Activités',
          collapsed: true,
          items: [
            {
              text: 'Administration',
              link: '/frontend/docs/activites/administration'
            },
          ]
        },
        {
          text: 'Point de vente',
          collapsed: true,
          items: [
            {
              text: 'Inventaire',
              link: '/frontend/docs/pos/inventaire'
            },
            {
              text: 'Ventes',
              link: '/frontend/docs/pos/ventes'
            },
          ]
        },
        {
          text: 'Développement',
          collapsed: true,
          items: [
            {
              text: 'Participer au développement',
              link: '/frontend/dev/participer'
            }
          ]
        },
        {
          text: 'Installation',
          collapsed: true,
          items: [
            {
              text: 'Prérequis',
              link: '/frontend/docs/installation/01.prerequis'
            },
            {
              text: 'Docker (recommandée)',
              link: '/frontend/docs/installation/02.docker'
            },
            {
              text: 'Manuelle',
              link: '/frontend/docs/installation/02.manuelle'
            }
          ]
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/froozeify/narvik' }
    ],

    footer: {
      message: '<a href="https://about.narvik.app" target="_blank">À propos de Narvik.</a>',
      copyright: '© 2024 - 2025. Tous droits réservés'
    }
  },
  markdown: {
    lineNumbers: true
  }
})
