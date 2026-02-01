// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  runtimeConfig: {
    public: {
      baseURL: import.meta.env.BASE_URL
    }
  },

  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/ui',
    '@nuxtjs/leaflet',
    '@pinia/nuxt',
    'nuxt-countdown'
  ],
  css: ['~/assets/css/main.css'],
  build:{
    transpile:['nuxt-countdown']
  }

})