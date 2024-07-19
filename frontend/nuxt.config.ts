// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/test-utils/module',
    '@nuxt/icon',
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
    mode: 'svg',
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
