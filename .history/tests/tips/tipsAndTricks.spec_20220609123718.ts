import { test, expect } from '@playwright/test'
import { getRandomNumber, getRandomString } from '../../utilis/data-helpers'

test.describe.only('Tips And Tricks', () => {
  test('TestInfoObjects', async ({ page }, TestInfoObjects) => {
    await page.goto('https://dah-web-dev.azurewebsites.net/login')
    const welcomeBackMessage = await page.locator('.Welcome Back')
    await expect(welcomeBackMessage).toContainText('Welcome')
  })
})
