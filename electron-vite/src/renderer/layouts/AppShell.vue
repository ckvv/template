<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <main class="min-h-screen px-4 py-8 sm:px-6 sm:py-12">
    <header class="mx-auto mb-6 grid max-w-5xl gap-5">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div class="hidden flex-1 sm:block" />
        <LocaleSwitcher />
      </div>

      <div class="grid gap-2">
        <p class="m-0 text-xs font-bold uppercase tracking-[0.16em] text-teal-700">
          {{ t('shell.eyebrow') }}
        </p>
        <h1 class="m-0 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.05] text-slate-900">
          {{ t('shell.title') }}
        </h1>
        <p class="m-0 max-w-[56ch] text-base text-slate-600">
          {{ t('shell.description') }}
        </p>
      </div>
      <AppNavigation />
    </header>

    <section class="mx-auto max-w-5xl">
      <RouterView />
    </section>
  </main>
</template>
