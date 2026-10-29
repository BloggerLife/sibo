import { expect, test } from '../fixtures/test'

test.describe('admin route protection', () => {
  for (const prefix of ['', '/zh-TW']) {
    for (const path of ['/admin', '/admin/users', '/admin/comments']) {
      test(`redirects unauthenticated visitors from ${prefix}${path} to ${prefix || '/'}`, async ({ page }) => {
        await page.goto(`${prefix}${path}`)

        await expect(page).toHaveURL(prefix || '/')
      })
    }
  }

  for (const path of ['user/list', 'comment/list']) {
    test(`rejects direct access to /rpc/admin/${path} without a session`, async ({ request }) => {
      const response = await request.post(`/rpc/admin/${path}`, {
        data: { json: {} },
      })

      expect(response.status()).toBe(401)
      expect(await response.json()).toMatchObject({ json: { code: 'UNAUTHORIZED' } })
    })
  }
})
