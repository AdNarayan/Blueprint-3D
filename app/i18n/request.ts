import { getRequestConfig } from 'next-intl/server'
import { routing, SupportedLanguage } from './routing'
import { IntlError } from 'next-intl'

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale
  if (!locale || !routing.locales.includes(locale as SupportedLanguage)) {
    locale = routing.defaultLocale
  }
  const messages = (await import(`../messages/${locale}.json`)).default

  return {
    locale,
    messages,
    onError: (error: IntlError) => {
      if (error.code === 'MISSING_MESSAGE') {
        console.warn(`[next-intl] Missing message: ${error.originalMessage || error.message}`)
      } else {
        console.warn(`[next-intl] Error: ${error.message}`)
      }
    }
  }
})
