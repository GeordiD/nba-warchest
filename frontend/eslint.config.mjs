// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 1,
      },
      multiline: {
        max: 1,
      },
    }],
    '@stylistic/semi': 'off',
    '@stylistic/member-delimiter-style': 'off',
    '@stylistic/comma-dangle': 'error',
    '@stylistic/brace-style': ['error', '1tbs'],
  },
})
