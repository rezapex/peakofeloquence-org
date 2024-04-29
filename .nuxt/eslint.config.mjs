// ESLint config generated by Nuxt
/// <reference path="./eslint-typegen.d.ts" />

import { composer } from '../node_modules/eslint-flat-config-utils/dist/index.mjs';
import typegen from '../node_modules/eslint-typegen/dist/index.mjs';
import { createConfigForNuxt, defineFlatConfigs, resolveOptions } from '../node_modules/@nuxt/eslint-config/dist/flat.mjs';

export { defineFlatConfigs }

export const configs = composer()

export const options = resolveOptions({
  "features": {
    "standalone": true
  },
  "dirs": {
    "pages": [
      "pages",
      "node_modules/@nuxt/ui-pro/pages"
    ],
    "composables": [
      "composables",
      "utils",
      "node_modules/@nuxt/ui-pro/composables",
      "node_modules/@nuxt/ui-pro/utils"
    ],
    "components": [
      "components"
    ],
    "layouts": [
      "layouts",
      "node_modules/@nuxt/ui-pro/layouts"
    ],
    "plugins": [
      "plugins",
      "node_modules/@nuxt/ui-pro/plugins"
    ],
    "middleware": [
      "middleware",
      "node_modules/@nuxt/ui-pro/middleware"
    ],
    "modules": [
      "modules",
      "node_modules/@nuxt/ui-pro/modules"
    ],
    "servers": [],
    "root": [
      "/Users/rezajafar/peakofeloquence-app"
    ],
    "src": [
      "",
      "node_modules/@nuxt/ui-pro"
    ]
  }
})

configs.append(
// Nuxt Configs
createConfigForNuxt(options),

// Set globals from imports registry
{"name":"nuxt/import-globals","languageOptions":{"globals":{"isVue2":"readonly","isVue3":"readonly","defineNuxtLink":"readonly","useNuxtApp":"readonly","tryUseNuxtApp":"readonly","defineNuxtPlugin":"readonly","definePayloadPlugin":"readonly","useRuntimeConfig":"readonly","defineAppConfig":"readonly","requestIdleCallback":"readonly","cancelIdleCallback":"readonly","setInterval":"readonly","useAppConfig":"readonly","updateAppConfig":"readonly","defineNuxtComponent":"readonly","useAsyncData":"readonly","useLazyAsyncData":"readonly","useNuxtData":"readonly","refreshNuxtData":"readonly","clearNuxtData":"readonly","useHydration":"readonly","callOnce":"readonly","useState":"readonly","clearNuxtState":"readonly","clearError":"readonly","createError":"readonly","isNuxtError":"readonly","showError":"readonly","useError":"readonly","useFetch":"readonly","useLazyFetch":"readonly","useCookie":"readonly","refreshCookie":"readonly","prerenderRoutes":"readonly","useRequestHeader":"readonly","useRequestHeaders":"readonly","useRequestEvent":"readonly","useRequestFetch":"readonly","setResponseStatus":"readonly","onNuxtReady":"readonly","preloadComponents":"readonly","prefetchComponents":"readonly","preloadRouteComponents":"readonly","abortNavigation":"readonly","addRouteMiddleware":"readonly","defineNuxtRouteMiddleware":"readonly","setPageLayout":"readonly","navigateTo":"readonly","useRoute":"readonly","useRouter":"readonly","isPrerendered":"readonly","loadPayload":"readonly","preloadPayload":"readonly","definePayloadReducer":"readonly","definePayloadReviver":"readonly","useLoadingIndicator":"readonly","getAppManifest":"readonly","getRouteRules":"readonly","reloadNuxtApp":"readonly","useRequestURL":"readonly","usePreviewMode":"readonly","useId":"readonly","onBeforeRouteLeave":"readonly","onBeforeRouteUpdate":"readonly","withCtx":"readonly","withDirectives":"readonly","withKeys":"readonly","withMemo":"readonly","withModifiers":"readonly","withScopeId":"readonly","onActivated":"readonly","onBeforeMount":"readonly","onBeforeUnmount":"readonly","onBeforeUpdate":"readonly","onDeactivated":"readonly","onErrorCaptured":"readonly","onMounted":"readonly","onRenderTracked":"readonly","onRenderTriggered":"readonly","onServerPrefetch":"readonly","onUnmounted":"readonly","onUpdated":"readonly","computed":"readonly","customRef":"readonly","isProxy":"readonly","isReactive":"readonly","isReadonly":"readonly","isRef":"readonly","markRaw":"readonly","proxyRefs":"readonly","reactive":"readonly","readonly":"readonly","ref":"readonly","shallowReactive":"readonly","shallowReadonly":"readonly","shallowRef":"readonly","toRaw":"readonly","toRef":"readonly","toRefs":"readonly","triggerRef":"readonly","unref":"readonly","watch":"readonly","watchEffect":"readonly","watchPostEffect":"readonly","watchSyncEffect":"readonly","isShallow":"readonly","effect":"readonly","effectScope":"readonly","getCurrentScope":"readonly","onScopeDispose":"readonly","defineComponent":"readonly","defineAsyncComponent":"readonly","resolveComponent":"readonly","getCurrentInstance":"readonly","h":"readonly","inject":"readonly","hasInjectionContext":"readonly","nextTick":"readonly","provide":"readonly","defineModel":"readonly","defineOptions":"readonly","defineSlots":"readonly","mergeModels":"readonly","toValue":"readonly","useModel":"readonly","useAttrs":"readonly","useCssModule":"readonly","useCssVars":"readonly","useSlots":"readonly","useTransitionState":"readonly","Component":"readonly","ComponentPublicInstance":"readonly","ComputedRef":"readonly","ExtractPropTypes":"readonly","ExtractPublicPropTypes":"readonly","InjectionKey":"readonly","PropType":"readonly","Ref":"readonly","MaybeRef":"readonly","MaybeRefOrGetter":"readonly","VNode":"readonly","computedAsync":"readonly","asyncComputed":"readonly","computedEager":"readonly","eagerComputed":"readonly","computedInject":"readonly","computedWithControl":"readonly","controlledComputed":"readonly","createEventHook":"readonly","createGlobalState":"readonly","createInjectionState":"readonly","createReusableTemplate":"readonly","createSharedComposable":"readonly","createTemplatePromise":"readonly","createUnrefFn":"readonly","extendRef":"readonly","injectLocal":"readonly","isDefined":"readonly","makeDestructurable":"readonly","onClickOutside":"readonly","onKeyStroke":"readonly","onLongPress":"readonly","onStartTyping":"readonly","provideLocal":"readonly","reactify":"readonly","createReactiveFn":"readonly","reactifyObject":"readonly","reactiveComputed":"readonly","reactiveOmit":"readonly","reactivePick":"readonly","refAutoReset":"readonly","autoResetRef":"readonly","refDebounced":"readonly","useDebounce":"readonly","debouncedRef":"readonly","refDefault":"readonly","refThrottled":"readonly","useThrottle":"readonly","throttledRef":"readonly","refWithControl":"readonly","controlledRef":"readonly","syncRef":"readonly","syncRefs":"readonly","templateRef":"readonly","toReactive":"readonly","resolveRef":"readonly","resolveUnref":"readonly","tryOnBeforeMount":"readonly","tryOnBeforeUnmount":"readonly","tryOnMounted":"readonly","tryOnScopeDispose":"readonly","tryOnUnmounted":"readonly","unrefElement":"readonly","until":"readonly","useActiveElement":"readonly","useAnimate":"readonly","useArrayDifference":"readonly","useArrayEvery":"readonly","useArrayFilter":"readonly","useArrayFind":"readonly","useArrayFindIndex":"readonly","useArrayFindLast":"readonly","useArrayIncludes":"readonly","useArrayJoin":"readonly","useArrayMap":"readonly","useArrayReduce":"readonly","useArraySome":"readonly","useArrayUnique":"readonly","useAsyncQueue":"readonly","useAsyncState":"readonly","useBase64":"readonly","useBattery":"readonly","useBluetooth":"readonly","useBreakpoints":"readonly","useBroadcastChannel":"readonly","useBrowserLocation":"readonly","useCached":"readonly","useClipboard":"readonly","useClipboardItems":"readonly","useCloned":"readonly","useConfirmDialog":"readonly","useCounter":"readonly","useCssVar":"readonly","useCurrentElement":"readonly","useCycleList":"readonly","useDark":"readonly","useDateFormat":"readonly","useDebouncedRefHistory":"readonly","useDebounceFn":"readonly","useDeviceMotion":"readonly","useDeviceOrientation":"readonly","useDevicePixelRatio":"readonly","useDevicesList":"readonly","useDisplayMedia":"readonly","useDocumentVisibility":"readonly","useDraggable":"readonly","useDropZone":"readonly","useElementBounding":"readonly","useElementByPoint":"readonly","useElementHover":"readonly","useElementSize":"readonly","useElementVisibility":"readonly","useEventBus":"readonly","useEventListener":"readonly","useEventSource":"readonly","useEyeDropper":"readonly","useFavicon":"readonly","useFileDialog":"readonly","useFileSystemAccess":"readonly","useFocus":"readonly","useFocusWithin":"readonly","useFps":"readonly","useFullscreen":"readonly","useGamepad":"readonly","useGeolocation":"readonly","useIdle":"readonly","useInfiniteScroll":"readonly","useIntersectionObserver":"readonly","useInterval":"readonly","useIntervalFn":"readonly","useKeyModifier":"readonly","useLastChanged":"readonly","useLocalStorage":"readonly","useMagicKeys":"readonly","useManualRefHistory":"readonly","useMediaControls":"readonly","useMediaQuery":"readonly","useMemoize":"readonly","useMemory":"readonly","useMounted":"readonly","useMouse":"readonly","useMouseInElement":"readonly","useMousePressed":"readonly","useMutationObserver":"readonly","useNavigatorLanguage":"readonly","useNetwork":"readonly","useNow":"readonly","useObjectUrl":"readonly","useOffsetPagination":"readonly","useOnline":"readonly","usePageLeave":"readonly","useParallax":"readonly","useParentElement":"readonly","usePerformanceObserver":"readonly","usePermission":"readonly","usePointer":"readonly","usePointerLock":"readonly","usePointerSwipe":"readonly","usePreferredColorScheme":"readonly","usePreferredContrast":"readonly","usePreferredDark":"readonly","usePreferredLanguages":"readonly","usePreferredReducedMotion":"readonly","usePrevious":"readonly","useRafFn":"readonly","useRefHistory":"readonly","useResizeObserver":"readonly","useScreenOrientation":"readonly","useScreenSafeArea":"readonly","useScriptTag":"readonly","useScroll":"readonly","useScrollLock":"readonly","useSessionStorage":"readonly","useShare":"readonly","useSorted":"readonly","useSpeechRecognition":"readonly","useSpeechSynthesis":"readonly","useStepper":"readonly","useStorageAsync":"readonly","useStyleTag":"readonly","useSupported":"readonly","useSwipe":"readonly","useTemplateRefsList":"readonly","useTextareaAutosize":"readonly","useTextDirection":"readonly","useTextSelection":"readonly","useThrottledRefHistory":"readonly","useThrottleFn":"readonly","useTimeAgo":"readonly","useTimeout":"readonly","useTimeoutFn":"readonly","useTimeoutPoll":"readonly","useTimestamp":"readonly","useToggle":"readonly","useToNumber":"readonly","useToString":"readonly","useTransition":"readonly","useUrlSearchParams":"readonly","useUserMedia":"readonly","useVibrate":"readonly","useVirtualList":"readonly","useVModel":"readonly","useVModels":"readonly","useWakeLock":"readonly","useWebNotification":"readonly","useWebSocket":"readonly","useWebWorker":"readonly","useWebWorkerFn":"readonly","useWindowFocus":"readonly","useWindowScroll":"readonly","useWindowSize":"readonly","watchArray":"readonly","watchAtMost":"readonly","watchDebounced":"readonly","debouncedWatch":"readonly","watchDeep":"readonly","watchIgnorable":"readonly","ignorableWatch":"readonly","watchImmediate":"readonly","watchOnce":"readonly","watchPausable":"readonly","pausableWatch":"readonly","watchThrottled":"readonly","throttledWatch":"readonly","watchTriggerable":"readonly","watchWithFilter":"readonly","whenever":"readonly","createGenericProjection":"readonly","createProjection":"readonly","logicAnd":"readonly","logicNot":"readonly","logicOr":"readonly","useAbs":"readonly","useAverage":"readonly","useCeil":"readonly","useClamp":"readonly","useFloor":"readonly","useMath":"readonly","useMax":"readonly","useMin":"readonly","usePrecision":"readonly","useProjection":"readonly","useRound":"readonly","useSum":"readonly","useTrunc":"readonly","injectHead":"readonly","useHead":"readonly","useSeoMeta":"readonly","useHeadSafe":"readonly","useServerHead":"readonly","useServerSeoMeta":"readonly","useServerHeadSafe":"readonly","useResizable":"readonly","useScrollspy":"readonly","useSharedMouse":"readonly","useSharedMouseInElement":"readonly","useUIState":"readonly","mapContentNavigation":"readonly","findPageHeadline":"readonly","findPageBreadcrumb":"readonly","defineShortcuts":"readonly","useProvideButtonGroup":"readonly","useInjectButtonGroup":"readonly","useCarouselScroll":"readonly","useCopyToClipboard":"readonly","useFormGroup":"readonly","modalInjectionKey":"readonly","useModal":"readonly","createPopper":"readonly","usePopper":"readonly","_useShortcuts":"readonly","useShortcuts":"readonly","slidOverInjectionKey":"readonly","useSlideover":"readonly","useTimer":"readonly","useToast":"readonly","useUI":"readonly","updateSiteConfig":"readonly","useNitroOrigin":"readonly","useSiteConfig":"readonly","createSitePathResolver":"readonly","withSiteTrailingSlash":"readonly","withSiteUrl":"readonly","queryContent":"readonly","useContentHelpers":"readonly","useContentHead":"readonly","useContentPreview":"readonly","withContentBase":"readonly","useUnwrap":"readonly","fetchContentNavigation":"readonly","useContentState":"readonly","useContent":"readonly","unwrapSlot":"readonly","parseMarkdown":"readonly","useImage":"readonly","useColorMode":"readonly","defineOgImage":"readonly","defineOgImageComponent":"readonly","defineOgImageScreenshot":"readonly","useNuxtDevTools":"readonly","definePageMeta":"readonly","useLink":"readonly"}}}
)

export function withNuxt(...customs) {
  return configs
    .clone()
    .append(...customs)
    .onResolved(configs => typegen(configs, { dtsPath: new URL("./eslint-typegen.d.ts", import.meta.url), augmentFlatConfigUtils: true }))
}

export default withNuxt