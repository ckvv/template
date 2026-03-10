<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLocale } from '@/composables/useLocale'

const { t } = useI18n()
const { locale, localeOptions } = useLocale()
const localeItems = computed(() =>
  localeOptions.map(option => ({
    label: t(option.labelKey),
    value: option.value,
  })),
)
</script>

<template>
  <div
    class="inline-flex w-full items-center gap-3 sm:w-auto"
    role="group"
  >
    <USelect
      v-model="locale"
      class="min-w-0 flex-1 sm:min-w-36 sm:flex-none"
      size="sm"
      :items="localeItems"
    />
  </div>
</template>
