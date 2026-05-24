export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
    '@nuxtjs/i18n',
  ],

  i18n: {
    locales: [
      { code: 'tr', name: 'Türkçe', file: 'tr.json' },
      { code: 'en', name: 'English', file: 'en.json' },
    ],
    defaultLocale: 'tr',
    lazy: true,
    langDir: 'locales',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },

  site: {
    url: 'https://harmonia.dagsolution.com',
    name: 'Harmonia - Frekans Tabanlı Ses Terapi Uygulaması',
  },

  sitemap: {
    siteUrl: 'https://harmonia.dagsolution.com',
    sources: ['/api/__sitemap__/urls'],
    defaults: {
      changefreq: 'weekly',
      priority: 0.8,
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'tr' },
      title: 'Harmonia - Frekans Tabanlı Ses Terapi Uygulaması | Solfeggio, Binaural Beats',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Harmonia, Solfeggio frekanslarını, binaural beats ve isochronic atımları gerçek zamanlı dalga formu senteziyle üreten bir ses terapi uygulamasıdır. Hiçbir ses dosyasına ihtiyaç duymaz — tüm sesler anlık olarak sentezlenir.' },
        { name: 'keywords', content: 'harmonia, solfeggio, binaural beats, isochronic, ses terapisi, frekans terapisi, meditasyon, uyku, odaklanma, rahatlama, müzik terapi' },
        { name: 'theme-color', content: '#0A0812' },
        { name: 'author', content: 'Dagsolution' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:site_name', content: 'Harmonia' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://harmonia.dagsolution.com' },
        { property: 'og:locale', content: 'tr_TR' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap' },
        { rel: 'canonical', href: 'https://harmonia.dagsolution.com' },
        { rel: 'alternate', hreflang: 'tr', href: 'https://harmonia.dagsolution.com' },
        { rel: 'alternate', hreflang: 'en', href: 'https://harmonia.dagsolution.com/en' },
        { rel: 'alternate', hreflang: 'x-default', href: 'https://harmonia.dagsolution.com' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  css: ['~/assets/css/main.css'],

  tailwindcss: {
    configPath: 'tailwind.config.ts',
    exposeConfig: false,
  },

  ssr: true,

  nitro: {
    prerender: {
      routes: ['/', '/privacy-policy'],
    },
    cloudflare: {
      pages: {
        assetBinding: 'ASSETS_NAMESPACE',
      },
    },
  },

  vite: {
    optimizeDeps: {
      include: ['lucide-vue-next'],
    },
  },
})
