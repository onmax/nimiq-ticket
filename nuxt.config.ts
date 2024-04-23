// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "nuxt-auth-utils",
    "@unocss/nuxt",
    "@vueuse/nuxt",
    "@nuxt/eslint",
    "@nuxthub/core"
  ],
  auth: {},
  hub: {
    database: true,
  }
})
