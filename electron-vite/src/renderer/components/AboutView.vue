<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const boundaries = [
  {
    titleKey: 'about.boundaries.main.title',
    bodyKey: 'about.boundaries.main.body',
  },
  {
    titleKey: 'about.boundaries.preload.title',
    bodyKey: 'about.boundaries.preload.body',
  },
  {
    titleKey: 'about.boundaries.renderer.title',
    bodyKey: 'about.boundaries.renderer.body',
  },
]

const scenarios = [
  'about.scenarios.settings',
  'about.scenarios.integrations',
  'about.scenarios.distribution',
]
</script>

<template>
  <section class="grid gap-5">
    <article class="grid gap-3 rounded-3xl border border-slate-300/40 bg-white/88 p-7 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
      <p class="m-0 text-xs font-bold uppercase tracking-[0.16em] text-teal-700">
        {{ t('about.eyebrow') }}
      </p>
      <h2 class="m-0 text-[clamp(1.5rem,3vw,2.2rem)] font-bold leading-[1.1] text-slate-900">
        {{ t('about.title') }}
      </h2>
      <p class="m-0 max-w-[60ch] text-base leading-[1.7] text-slate-600">
        {{ t('about.body') }}
      </p>
    </article>

    <div class="grid gap-5 md:grid-cols-2">
      <article class="grid gap-3 rounded-3xl border border-slate-300/40 bg-white/88 p-7 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
        <p class="m-0 text-xs font-bold uppercase tracking-[0.16em] text-teal-700">
          {{ t('about.sections.boundaries') }}
        </p>
        <div class="grid gap-6">
          <section
            v-for="item in boundaries"
            :key="item.titleKey"
            class="grid gap-1.5 border-t border-slate-300/30 pt-6 first:border-t-0 first:pt-0"
          >
            <h3 class="m-0 text-base font-bold text-slate-900">
              {{ t(item.titleKey) }}
            </h3>
            <p class="m-0 leading-[1.7] text-slate-600">
              {{ t(item.bodyKey) }}
            </p>
          </section>
        </div>
      </article>

      <article class="grid gap-3 rounded-3xl border border-slate-300/40 bg-white/88 p-7 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
        <p class="m-0 text-xs font-bold uppercase tracking-[0.16em] text-teal-700">
          {{ t('about.sections.scenarios') }}
        </p>
        <h3 class="m-0 text-[1.15rem] font-bold text-slate-900">
          {{ t('about.scenariosTitle') }}
        </h3>
        <ul class="m-0 grid list-disc gap-3 pl-5 leading-[1.7] text-slate-700 marker:text-teal-700">
          <li
            v-for="scenario in scenarios"
            :key="scenario"
          >
            {{ t(scenario) }}
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>
