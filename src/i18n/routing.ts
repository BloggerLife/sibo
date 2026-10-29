import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'zh-TW', 'zh-CN', 'ja', 'es', 'pt-BR'] as const,
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  localeDetection: true,
  localeCookie: {
    secure: true,
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 365,
  },
})
