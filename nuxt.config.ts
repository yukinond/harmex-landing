// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt/icon',
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    '@vueuse/nuxt',
    '@nuxtjs/robots',
    '@bg-dev/nuxt-s3'
  ],

  image: {
    quality: 85, 
    format: ['webp', 'avif'],
    provider: 'ipx', 
    screens: { sm: 640, md: 1024, lg: 1440, xl: 1920 },
  },

  app: {
    head: {
      title: 'Harmex',
      htmlAttrs: {
        lang: 'ru',
      },
      meta: [
        { name: 'robots', content: 'index, follow' },
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          'http-equiv': 'Content-Security-Policy',
          'content': 'upgrade-insecure-requests',
        },
        { name: 'description', content: 'Harmex. Репутация и продажи под вашим контролем! Harmex предоставляет инструменты, которые повысят ваши продажи, узнаваемость и привлекательность на популярных онлайн-площадках.' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },

        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Golos+Text:wght@400..900&family=Inter:wght@100..900&display=swap' },

        { rel: 'preload', href: 'https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/reputationBg.webp', as: 'image', type: 'image/webp' },

        { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      ]
    }
  },

  css: [
    '@/assets/style/global.css',
    '@vuepic/vue-datepicker/dist/main.css',
  ],

  runtimeConfig: {
    MONGODB_URI: process.env.MONGODB_URI,
    VK_ACCESS_KEY: process.env.VK_ACCESS_KEY,
    VK_SECRET_KEY: process.env.VK_SECRET_KEY,
  },

  nitro: {
    plugins: ['~/server/index.ts']
  },

  build: {
    transpile: ['@vuepic/vue-datepicker'],
  },

  s3: {
    driver: 's3',
    secretAccessKey: process.env.VK_SECRET_KEY || '',
    accessKeyId: process.env.VK_ACCESS_KEY || '',
    endpoint: 'https://hb.vkcs.cloud',
    region: 'ru-msk',
    bucket: 'ozonmpportal',

    image: {
      compression: {
        maxSizeMB: 5, 
        maxWidthOrHeight: 2000, 
      },
      cacheControl: 'public, max-age=31536000, immutable', 
    },
  },
});
