import { createRouter, createWebHashHistory } from 'vue-router'
import { handleHotUpdate, routes } from 'vue-router/auto-routes'

export type { RouteLocationRaw, RouteRecordName } from 'vue-router'
export { onBeforeRouteLeave, onBeforeRouteUpdate, useRoute } from 'vue-router'

export type { RouteNamedMap } from 'vue-router/auto-routes'

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// 当前文件确实打包为了 esm 但是 ts config 设置的是
if (import.meta.hot) {
  handleHotUpdate(router)
}
