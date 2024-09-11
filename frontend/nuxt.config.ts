import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  extends: ['nuxt-umami'],
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@primevue/nuxt-module',
    '@nuxt/test-utils/module',
    '@nuxt/icon',
    'nuxt-svgo',
  ],
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  icon: {
    mode: 'css',
    provider: 'iconify',
    size: '100%',
  },
  primevue: {
    autoImport: false,
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.dark-mode',
        },
      },
    },
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          screens: {
            sm: '700px',
          },
        },
      },
    },
  },
})
