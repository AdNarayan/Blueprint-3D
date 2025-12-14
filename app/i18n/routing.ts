import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'

export const locales = [
  'en',
  'zh',
  'tw'
  // 'ja', 'de', 'pt', 'es', 'fr', 'ko', 'tw', 'vi'
] as const

// 从数组值推导类型
export type SupportedLanguage = (typeof locales)[number]

export const languageMap: Record<SupportedLanguage, string> = {
  en: 'en-US',
  zh: 'zh-CN',
  tw: 'zh-TW'
}

/**
 * 增加语言只需修改locales数组
 */
export const routing = defineRouting({
  locales,
  defaultLocale: 'en' as SupportedLanguage,
  localePrefix: 'as-needed'
  //localeDetection: false
})

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing)
