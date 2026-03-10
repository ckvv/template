import type { MessageSchema } from '@/i18n/locales/zh-CN'
import { en } from '@/i18n/locales/en'
import { zhCN } from '@/i18n/locales/zh-CN'

export const messages = {
  'zh-CN': zhCN,
  en,
} satisfies Record<string, MessageSchema>

export type AppLocale = keyof typeof messages
