import { test, expect } from '@playwright/test'
test.describe.only('Functionality for transfer of Funds', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/')
    await page.click('#signin_button')
  })
  test('Funds are Transfer successfully', async ({ page }) => {
    await page.type('#user_login', 'username')
    await page.type('#user_password', 'password')
    await page.click('text=Sign in')
    await page.waitForURL
    await page.goto('http://zero.webappsecurity.com/bank/transfer-funds.html')
  })
})
