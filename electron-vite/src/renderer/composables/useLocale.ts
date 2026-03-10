import type { WritableComputedRef } from 'vue'
import type { AppLocale } from '@/i18n'
import { computed } from 'vue'
import { i18n, setLocale, SUPPORTED_LOCALES } from '@/i18n'

export type { AppLocale } from '@/i18n'

export interface LocaleOption {
  labelKey: `locale.${AppLocale}`
  value: AppLocale
}

const localeOptions = SUPPORTED_LOCALES.map(locale => ({
  labelKey: `locale.${locale}`,
  value: locale,
})) satisfies LocaleOption[]

export function useLocale() {
  const i18nLocale = i18n.global.locale as WritableComputedRef<AppLocale>

  const locale = computed<AppLocale>({
    get: () => i18nLocale.value,
    set: (value: AppLocale) => {
      setLocale(value)
    },
  })

  return {
    locale,
    localeOptions,
  }
}
