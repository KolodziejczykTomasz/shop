export default defineNuxtConfig({
  
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Prosto z natury',
      meta: [      
        { name: 'description', content: 'Sklep internetowy' }
      ],
    }
  },
  
modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: [
          ['defineStore', 'definePiniaStore'],
        ],
      },
      
    ]
    
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
