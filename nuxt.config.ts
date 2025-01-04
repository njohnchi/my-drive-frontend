// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ['@nuxt/eslint', '@nuxt/ui', 'nuxt-auth-sanctum'],
  ssr: false,
  devtools: { enabled: true },
  devServer: {
    host: 'my-drive.test',
  },

  future: {
    compatibilityVersion: 4,
  }, compatibilityDate: '2024-11-01',

  eslint: {
    config: {
      stylistic: true,
    },
  },

  sanctum: {
    baseUrl: 'http://my-drive.test',
    endpoints: {
      login: '/api/login',
      logout: '/api/logout',
    },
  },
})
