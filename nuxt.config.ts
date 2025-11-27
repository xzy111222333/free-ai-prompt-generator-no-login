export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  app: {
    head: {
      title: 'PromptRule - The Ultimate AI Prompt Generator for ChatGPT, Claude & More',
      meta: [
        {
          name: 'description',
          content:
            'Generate precise and professional AI Prompts for ChatGPT, Claude, Gemini, and more. Enhance output quality and boost your productivity with the best results – no registration required and completely free.'
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#ffffff' },
        
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'PromptRule' },
        { property: 'og:title', content: 'PromptRule - The Ultimate AI Prompt Generator' },
        { property: 'og:description', content: 'Generate precise and professional AI Prompts for ChatGPT, Claude, Gemini, and more. Free & unlimited.' },
        { property: 'og:image', content: 'https://yourdomain.com/apple-touch-icon.png' },
        { property: 'og:url', content: 'https://yourdomain.com' },
        
        // Twitter Card
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'PromptRule - The Ultimate AI Prompt Generator' },
        { name: 'twitter:description', content: 'Generate precise and professional AI Prompts for ChatGPT, Claude, Gemini, and more.' },
        { name: 'twitter:image', content: 'https://yourdomain.com/apple-touch-icon.png' }
      ],
      link: [
        // Favicon
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '48x48', href: '/logo-48x48.png' },
        { rel: 'icon', type: 'image/png', sizes: '64x64', href: '/logo-64x64.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        
        // Fonts
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;600;700&display=swap'
        }
      ],
      script: [
        {
          async: true,
          src: `https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID || 'G-XXXXXXXXXX'}`
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GOOGLE_ANALYTICS_ID || 'G-XXXXXXXXXX'}');
          `
        }
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    doubao: {
      apiKey: process.env.DOUBAO_API_KEY,
      model: process.env.DOUBAO_MODEL || 'doubao-seed-1-6-flash-250828',
      apiBase: process.env.DOUBAO_API_BASE,
      systemPrompt: process.env.DOUBAO_SYSTEM_PROMPT || 'use English all the time.'
    },
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api',
      promptsEndpoint: process.env.NUXT_PUBLIC_PROMPTS_ENDPOINT || '/prompts',
      gtag: {
        id: process.env.GOOGLE_ANALYTICS_ID
      }
    }
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sitemap'],
  sitemap: {
    hostname: 'https://yourdomain.com',
    gzip: true,
  },
  tailwindcss: {
    viewer: false,
    cssPath: '~/assets/css/main.css'
  }
})
