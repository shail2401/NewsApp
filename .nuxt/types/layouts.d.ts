import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = string
declare module "../../node_modules/.pnpm/nuxt@3.11.2_@parcel+watcher@2.4.1_@types+node@20.12.7_@unocss+reset@0.46.5_change-case@4.1.2__gltip53y3rotuw3va3yfzoahxy/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}