// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "vue3-carousel-nuxt",
    "@vueuse/nuxt",
  ],
  compatibilityDate: "2024-11-26",
  colorMode: {
    preference: 'system' // or 'dark' or 'system'
  },
})