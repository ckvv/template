<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const highlights = [
  {
    titleKey: 'home.highlights.stack.title',
    bodyKey: 'home.highlights.stack.body',
  },
  {
    titleKey: 'home.highlights.desktop.title',
    bodyKey: 'home.highlights.desktop.body',
  },
  {
    titleKey: 'home.highlights.scale.title',
    bodyKey: 'home.highlights.scale.body',
  },
]

const quickStartSteps = [
  'home.quickStart.install',
  'home.quickStart.dev',
  'home.quickStart.package',
]
</script>

<template>
  <section class="grid gap-5">
    <article class="relative grid gap-3 overflow-hidden rounded-3xl border border-slate-300/40 bg-white/88 p-7 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
      <div class="pointer-events-none absolute -right-10 -top-[5.625rem] h-[13.75rem] w-[13.75rem] rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.18)_0%,rgba(20,184,166,0)_68%)]" />
      <p class="m-0 text-xs font-bold uppercase tracking-[0.16em] text-teal-700">
        {{ t('home.eyebrow') }}
      </p>
      <h2 class="m-0 text-[clamp(1.5rem,3vw,2.2rem)] font-bold leading-[1.1] text-slate-900">
        {{ t('home.title') }}
      </h2>
      <p class="m-0 max-w-[60ch] text-base leading-[1.7] text-slate-600">
        {{ t('home.body') }}
      </p>

      <div class="relative z-10 flex flex-wrap gap-2.5">
        <span class="rounded-full border border-teal-700/12 bg-teal-700/8 px-3 py-2 text-[0.85rem] font-bold text-teal-800">{{ t('home.meta.runtime') }}</span>
        <span class="rounded-full border border-teal-700/12 bg-teal-700/8 px-3 py-2 text-[0.85rem] font-bold text-teal-800">{{ t('home.meta.router') }}</span>
        <span class="rounded-full border border-teal-700/12 bg-teal-700/8 px-3 py-2 text-[0.85rem] font-bold text-teal-800">{{ t('home.meta.i18n') }}</span>
      </div>
    </article>

    <div class="grid gap-5 md:grid-cols-2">
      <article class="grid gap-3 rounded-3xl border border-slate-300/40 bg-white/88 p-7 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
        <p class="m-0 text-xs font-bold uppercase tracking-[0.16em] text-teal-700">
          {{ t('home.sections.highlights') }}
        </p>
        <div class="grid gap-6">
          <section
            v-for="item in highlights"
            :key="item.titleKey"
            class="grid gap-1.5"
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
          {{ t('home.sections.quickStart') }}
        </p>
        <h3 class="m-0 text-[1.15rem] font-bold text-slate-900">
          {{ t('home.quickStart.title') }}
        </h3>
        <ol class="m-0 grid gap-2.5 pl-5">
          <li
            v-for="step in quickStartSteps"
            :key="step"
          >
            <code class="inline-block rounded-xl bg-slate-900 px-3 py-2.5 font-mono text-[0.95rem] text-slate-50">{{ t(step) }}</code>
          </li>
        </ol>
        <p class="m-0 max-w-[60ch] text-base leading-[1.7] text-slate-600">
          {{ t('home.quickStart.note') }}
        </p>
      </article>
    </div>
  </section>
</template>
