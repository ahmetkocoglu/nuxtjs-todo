// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        MONGODB_URI: process.env.MONGODB_URI
    },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
