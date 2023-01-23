// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 css: [ 
    '~/assets/css/base.css',
    '~/assets/css/main.css',
    '~/assets/scss/main.scss',
  ],
 components: {
    global: true,
    dirs: ['~/components']
    },
})
