<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { router } from '@/router'

interface NavRoute {
  name: string | symbol
  path: string
}

const { t } = useI18n()

const navRoutes = computed<NavRoute[]>(() =>
  router
    .getRoutes()
    .filter(route => !route.redirect)
    .map(route => ({
      name: route.name,
      path: route.path,
    })),
)
</script>

<template>
  <nav
    class="flex flex-wrap gap-3"
    :aria-label="t('navigation.ariaLabel')"
  >
    <RouterLink
      v-for="route in navRoutes"
      :key="route.name"
      :to="route.path"
      class="rounded-full border border-slate-900/8 bg-white/85 px-4 py-2.5 text-[0.95rem] font-semibold text-slate-700 transition duration-150 ease-out hover:-translate-y-px hover:border-teal-700/30 hover:text-teal-700"
      active-class="rounded-full border border-slate-900 bg-slate-900 px-4 py-2.5 text-[0.95rem] font-semibold text-slate-50 transition duration-150 ease-out"
    >
      {{ route.name }}
    </RouterLink>
  </nav>
</template>
