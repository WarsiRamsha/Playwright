import { test, expect } from '@playwright/test'

test.describe.only('To test the SSL issue', () => {
  test('Simple goto Command', async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/bank/transfer-funds.html')
  })
})
