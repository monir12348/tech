
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'CommonAccordionComponent': typeof import("../components/common/AccordionComponent.vue")['default']
    'CommonBranchCard': typeof import("../components/common/BranchCard.vue")['default']
    'CommonBreadCrumb': typeof import("../components/common/BreadCrumb.vue")['default']
    'CommonButtonComponent': typeof import("../components/common/ButtonComponent.vue")['default']
    'CommonCheckboxComponent': typeof import("../components/common/CheckboxComponent.vue")['default']
    'CommonContainerComponent': typeof import("../components/common/ContainerComponent.vue")['default']
    'CommonHeading': typeof import("../components/common/Heading.vue")['default']
    'CommonHeading2': typeof import("../components/common/Heading2.vue")['default']
    'CommonHeadingComponent': typeof import("../components/common/HeadingComponent.vue")['default']
    'CommonHomelinkComponent': typeof import("../components/common/HomelinkComponent.vue")['default']
    'CommonInputComponent': typeof import("../components/common/InputComponent.vue")['default']
    'CommonPageHeader': typeof import("../components/common/PageHeader.vue")['default']
    'CommonPageHeader2': typeof import("../components/common/PageHeader2.vue")['default']
    'CommonProductCard': typeof import("../components/common/ProductCard.vue")['default']
    'CommonProductInfoView': typeof import("../components/common/ProductInfoView.vue")['default']
    'CommonRatingComponent': typeof import("../components/common/RatingComponent.vue")['default']
    'CommonUseFullPagesComponent': typeof import("../components/common/useFullPagesComponent.vue")['default']
    'HomeProductCardsLayout': typeof import("../components/home/ProductCardsLayout.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyCommonAccordionComponent': LazyComponent<typeof import("../components/common/AccordionComponent.vue")['default']>
    'LazyCommonBranchCard': LazyComponent<typeof import("../components/common/BranchCard.vue")['default']>
    'LazyCommonBreadCrumb': LazyComponent<typeof import("../components/common/BreadCrumb.vue")['default']>
    'LazyCommonButtonComponent': LazyComponent<typeof import("../components/common/ButtonComponent.vue")['default']>
    'LazyCommonCheckboxComponent': LazyComponent<typeof import("../components/common/CheckboxComponent.vue")['default']>
    'LazyCommonContainerComponent': LazyComponent<typeof import("../components/common/ContainerComponent.vue")['default']>
    'LazyCommonHeading': LazyComponent<typeof import("../components/common/Heading.vue")['default']>
    'LazyCommonHeading2': LazyComponent<typeof import("../components/common/Heading2.vue")['default']>
    'LazyCommonHeadingComponent': LazyComponent<typeof import("../components/common/HeadingComponent.vue")['default']>
    'LazyCommonHomelinkComponent': LazyComponent<typeof import("../components/common/HomelinkComponent.vue")['default']>
    'LazyCommonInputComponent': LazyComponent<typeof import("../components/common/InputComponent.vue")['default']>
    'LazyCommonPageHeader': LazyComponent<typeof import("../components/common/PageHeader.vue")['default']>
    'LazyCommonPageHeader2': LazyComponent<typeof import("../components/common/PageHeader2.vue")['default']>
    'LazyCommonProductCard': LazyComponent<typeof import("../components/common/ProductCard.vue")['default']>
    'LazyCommonProductInfoView': LazyComponent<typeof import("../components/common/ProductInfoView.vue")['default']>
    'LazyCommonRatingComponent': LazyComponent<typeof import("../components/common/RatingComponent.vue")['default']>
    'LazyCommonUseFullPagesComponent': LazyComponent<typeof import("../components/common/useFullPagesComponent.vue")['default']>
    'LazyHomeProductCardsLayout': LazyComponent<typeof import("../components/home/ProductCardsLayout.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const CommonAccordionComponent: typeof import("../components/common/AccordionComponent.vue")['default']
export const CommonBranchCard: typeof import("../components/common/BranchCard.vue")['default']
export const CommonBreadCrumb: typeof import("../components/common/BreadCrumb.vue")['default']
export const CommonButtonComponent: typeof import("../components/common/ButtonComponent.vue")['default']
export const CommonCheckboxComponent: typeof import("../components/common/CheckboxComponent.vue")['default']
export const CommonContainerComponent: typeof import("../components/common/ContainerComponent.vue")['default']
export const CommonHeading: typeof import("../components/common/Heading.vue")['default']
export const CommonHeading2: typeof import("../components/common/Heading2.vue")['default']
export const CommonHeadingComponent: typeof import("../components/common/HeadingComponent.vue")['default']
export const CommonHomelinkComponent: typeof import("../components/common/HomelinkComponent.vue")['default']
export const CommonInputComponent: typeof import("../components/common/InputComponent.vue")['default']
export const CommonPageHeader: typeof import("../components/common/PageHeader.vue")['default']
export const CommonPageHeader2: typeof import("../components/common/PageHeader2.vue")['default']
export const CommonProductCard: typeof import("../components/common/ProductCard.vue")['default']
export const CommonProductInfoView: typeof import("../components/common/ProductInfoView.vue")['default']
export const CommonRatingComponent: typeof import("../components/common/RatingComponent.vue")['default']
export const CommonUseFullPagesComponent: typeof import("../components/common/useFullPagesComponent.vue")['default']
export const HomeProductCardsLayout: typeof import("../components/home/ProductCardsLayout.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyCommonAccordionComponent: LazyComponent<typeof import("../components/common/AccordionComponent.vue")['default']>
export const LazyCommonBranchCard: LazyComponent<typeof import("../components/common/BranchCard.vue")['default']>
export const LazyCommonBreadCrumb: LazyComponent<typeof import("../components/common/BreadCrumb.vue")['default']>
export const LazyCommonButtonComponent: LazyComponent<typeof import("../components/common/ButtonComponent.vue")['default']>
export const LazyCommonCheckboxComponent: LazyComponent<typeof import("../components/common/CheckboxComponent.vue")['default']>
export const LazyCommonContainerComponent: LazyComponent<typeof import("../components/common/ContainerComponent.vue")['default']>
export const LazyCommonHeading: LazyComponent<typeof import("../components/common/Heading.vue")['default']>
export const LazyCommonHeading2: LazyComponent<typeof import("../components/common/Heading2.vue")['default']>
export const LazyCommonHeadingComponent: LazyComponent<typeof import("../components/common/HeadingComponent.vue")['default']>
export const LazyCommonHomelinkComponent: LazyComponent<typeof import("../components/common/HomelinkComponent.vue")['default']>
export const LazyCommonInputComponent: LazyComponent<typeof import("../components/common/InputComponent.vue")['default']>
export const LazyCommonPageHeader: LazyComponent<typeof import("../components/common/PageHeader.vue")['default']>
export const LazyCommonPageHeader2: LazyComponent<typeof import("../components/common/PageHeader2.vue")['default']>
export const LazyCommonProductCard: LazyComponent<typeof import("../components/common/ProductCard.vue")['default']>
export const LazyCommonProductInfoView: LazyComponent<typeof import("../components/common/ProductInfoView.vue")['default']>
export const LazyCommonRatingComponent: LazyComponent<typeof import("../components/common/RatingComponent.vue")['default']>
export const LazyCommonUseFullPagesComponent: LazyComponent<typeof import("../components/common/useFullPagesComponent.vue")['default']>
export const LazyHomeProductCardsLayout: LazyComponent<typeof import("../components/home/ProductCardsLayout.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
