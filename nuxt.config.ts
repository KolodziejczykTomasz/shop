export default defineNuxtConfig({
modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: [
          ['defineStore', 'definePiniaStore'],
        ],
      },
    ],
  ],
  
 css: [   
    '~/assets/css/main.css',
  ],
  vite: {
        css: {
                preprocessorOptions: {
                    scss: {
                        additionalData: '@import "@/assets/scss/main.scss";',
                    },
                },
            },
    },
 components: {
    global: true,
    dirs: ['~/components']
    }
})
