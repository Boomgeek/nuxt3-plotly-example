// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['nuxt-plotly'],
  vite: {
    optimizeDeps: {
      include: ['plotly.js-dist-min'],
    },
  },
});
