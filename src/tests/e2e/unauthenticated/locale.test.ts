import { allPosts } from 'content-collections'

import en from '@/i18n/messages/en.json' with { type: 'json' }
import zhTW from '@/i18n/messages/zh-TW.json' with { type: 'json' }

import { COMMENT_SUBMIT_AND_VIEW_POST_SLUG } from '../fixtures/posts'
import { expect, test } from '../fixtures/test'

const articlePath = `/blog/${COMMENT_SUBMIT_AND_VIEW_POST_SLUG}`
const localeCases = [
  { locale: 'en', prefix: '', messages: en },
  { locale: 'zh-TW', prefix: '/zh-TW', messages: zhTW },
] as const

test.describe('localized routes', () => {
  for (const { locale, prefix, messages } of localeCases) {
    const post = allPosts.find((entry) => entry.slug === COMMENT_SUBMIT_AND_VIEW_POST_SLUG && entry.locale === locale)

    test(`renders the ${locale} article from its localized URL`, async ({ page }) => {
      expect(post).toBeDefined()

      await page.goto(`${prefix}${articlePath}`)
      await expect(page.locator('html')).toHaveAttribute('lang', locale)
      await expect(page.getByRole('heading', { level: 1 })).toHaveText(post?.title ?? '')
      await expect(page.getByText(messages.blog.header['published-on'], { exact: true })).toBeVisible()

      await page.reload()

      await expect(page).toHaveURL(`${prefix}${articlePath}`)
      await expect(page.locator('html')).toHaveAttribute('lang', locale)
      await expect(page.getByRole('heading', { level: 1 })).toHaveText(post?.title ?? '')
      await expect(page.getByText(messages.blog.header['published-on'], { exact: true })).toBeVisible()
    })
  }
})
