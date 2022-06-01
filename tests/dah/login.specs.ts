import { test, expect } from '@playwright/test'
test.describe('Login', () => {
  test('Positive Scenario', async ({ page }) => {
    await page.goto('https://dah-web-dev.azurewebsites.net/login')
  })
})
