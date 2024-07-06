// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/test-utils/module',
    '@nuxt/icon',
  ],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  icon: {
    mode: 'svg',
  },
})
