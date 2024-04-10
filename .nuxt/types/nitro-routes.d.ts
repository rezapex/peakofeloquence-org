// Generated by nitro
import type { Serialize, Simplify } from 'nitropack'
declare module 'nitropack' {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/api/search.json': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/search.json.get').default>>>>
    }
    '/__nuxt_error': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt/dist/core/runtime/nitro/renderer').default>>>>
    }
    '/api/_mdc/highlight': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxtjs/mdc/dist/runtime/highlighter/event-handler').default>>>>
    }
    '/__site-config__/debug.json': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt-site-config/dist/runtime/nitro/routes/__site-config__/debug').default>>>>
    }
    '/api/og-image-html': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt-og-image/dist/runtime/nitro/routes/html').default>>>>
    }
    '/api/og-image-options': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt-og-image/dist/runtime/nitro/routes/options').default>>>>
    }
    '/api/og-image-svg': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt-og-image/dist/runtime/nitro/routes/svg').default>>>>
    }
    '/api/og-image-vnode': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt-og-image/dist/runtime/nitro/routes/vnode').default>>>>
    }
    '/api/og-image-font': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt-og-image/dist/runtime/nitro/routes/font').default>>>>
    }
    '/api/_content/query/:qid/**:params': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxt/content/dist/runtime/server/api/query').default>>>>
    }
    '/api/_content/query/:qid': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxt/content/dist/runtime/server/api/query').default>>>>
    }
    '/api/_content/query': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxt/content/dist/runtime/server/api/query').default>>>>
    }
    '/api/_content/cache.json': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxt/content/dist/runtime/server/api/cache').default>>>>
    }
    '/api/_content/navigation/:qid/**:params': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxt/content/dist/runtime/server/api/navigation').default>>>>
    }
    '/api/_content/navigation/:qid': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxt/content/dist/runtime/server/api/navigation').default>>>>
    }
    '/api/_content/navigation': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxt/content/dist/runtime/server/api/navigation').default>>>>
    }
    '/_ipx/**': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxt/image/dist/runtime/ipx').default>>>>
    }
  }
}
export {}