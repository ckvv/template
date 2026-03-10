import type { AppLocale } from '@/i18n/messages'
import { createI18n } from 'vue-i18n'
import { messages } from '@/i18n/messages'

export const LOCALE_STORAGE_KEY = 'electron-vite:locale'
export const DEFAULT_LOCALE: AppLocale = 'zh-CN'
export const SUPPORTED_LOCALES = Object.freeze(
  Object.keys(messages) as AppLocale[],
)

function isSupportedLocale(value: string): value is AppLocale {
  return SUPPORTED_LOCALES.includes(value as AppLocale)
}

function normalizeLocale(value: string): string[] {
  const normalized = value.trim()
  const language = normalized.split('-')[0]

  return language && language !== normalized
    ? [normalized, language]
    : [normalized]
}

function matchSupportedLocale(value: string): AppLocale | null {
  for (const candidate of normalizeLocale(value)) {
    if (isSupportedLocale(candidate))
      return candidate
  }

  return null
}

function readStoredLocale(): AppLocale | null {
  if (typeof window === 'undefined')
    return null

  try {
    const savedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY)

    return savedLocale ? matchSupportedLocale(savedLocale) : null
  }
  catch {
    return null
  }
}

function resolveNavigatorLocale(): AppLocale | null {
  if (typeof navigator === 'undefined')
    return null

  for (const language of navigator.languages) {
    const matchedLocale = matchSupportedLocale(language)

    if (matchedLocale)
      return matchedLocale
  }

  return matchSupportedLocale(navigator.language)
}

function syncDocumentLanguage(locale: AppLocale) {
  if (typeof document === 'undefined')
    return

  document.documentElement.lang = locale
}

export function resolveLocale(): AppLocale {
  const storedLocale = readStoredLocale()

  if (storedLocale)
    return storedLocale

  const navigatorLocale = resolveNavigatorLocale()

  if (navigatorLocale)
    return navigatorLocale

  return DEFAULT_LOCALE
}

export const i18n = createI18n({
  legacy: false,
  locale: resolveLocale(),
  fallbackLocale: DEFAULT_LOCALE,
  messages,
})

export function setLocale(locale: AppLocale) {
  i18n.global.locale.value = locale
  syncDocumentLanguage(locale)

  if (typeof window === 'undefined')
    return

  try {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale)
  }
  catch {
  }
}

syncDocumentLanguage(i18n.global.locale.value)

export type { AppLocale } from '@/i18n/messages'
