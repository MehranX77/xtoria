// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  runtimeConfig:{
    public: {
      baseURL: 'https://xtoria.liara.run/api/v1'
    }
  },

  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/ui',
    '@nuxtjs/leaflet'
  ],
  css: ['~/assets/css/main.css'],

})