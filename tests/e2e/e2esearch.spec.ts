import { test, expect } from '@playwright/test'
test.describe.only('Search Field', () => {
  test('Should Return relevant search results', async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/')
    await page.type('#searchTerm', 'Bank')
    await page.keyboard.press('Enter')

    const searchResults = await page.locator('li > a')
    await expect(searchResults).toHaveCount(2)
  })
})
