// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ['@nuxt/eslint', '@nuxt/ui', 'nuxt-auth-sanctum', '@formkit/nuxt'],
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

  formkit: {
    // Experimental support for auto loading
    autoImport: true,
  },

  sanctum: {
    baseUrl: 'http://my-drive.test',
    endpoints: {
      login: '/api/login',
      logout: '/api/logout',
    },
    redirect: {
      onAuthOnly: '/login',
      onGuestOnly: '/',
    },
    globalMiddleware: {
      enabled: true,
    },
  },
})
