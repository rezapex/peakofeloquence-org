// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Plugins (if needed, uncomment)
  // plugins: [
  //   '~/plugins/vue-spline',
  //   '~/plugins/vue-spline-viewer',
  // ],
  extends: [process.env.NUXT_UI_PRO_PATH || '@nuxt/ui-pro'],
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxthq/studio',
    '@vueuse/nuxt',
    'nuxt-og-image',
    '@nuxtjs/sitemap',
    'nuxt-icon',
    //'nuxt-simple-sitemap',
  ],
  hooks: {
    'components:extend': (components) => {
      const globals = components.filter(c => ['UButton'].includes(c.pascalName))
      globals.forEach(c => c.global = true)
    }
  },
  ui: {
    icons: ['heroicons', 'simple-icons']
  },
  routeRules: {
    '/api/search.json': { prerender: true },
    // '/docs': { redirect: '/docs/getting-started', prerender: false }
  },
  devtools: {
    enabled: true
  },
  typescript: {
    strict: false
  },
  // Sitemap configuration
  sitemap: {
    hostname: 'https://www.peakofeloquence.org',
    gzip: true,
    routes: [
      '/',
      '/about',
      '/courses',
      '/contact',
      '/blog'
    ],
    exclude: [
      '/node_modules/**'
    ],
  }
})

