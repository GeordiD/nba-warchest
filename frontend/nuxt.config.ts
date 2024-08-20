import Aura from '@primevue/themes/aura';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@primevue/nuxt-module',
    '@nuxt/test-utils/module',
    '@nuxt/icon',
    'nuxt-svgo',
  ],
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
  },
  primevue: {
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
