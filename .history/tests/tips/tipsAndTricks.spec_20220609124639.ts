import { test, expect } from '@playwright/test'
import { getRandomNumber, getRandomString } from '../../utilis/data-helpers'

test.describe.only('Tips And Tricks', () => {
  test('To Verify that user is on the login screen of Digital Automation Hub', async ({
    page,
  }, TestInfoObjects) => {
    await page.goto('https://dah-web-dev.azurewebsites.net/login')
    const welcomeBackMessage = await page.locator('.pb-5')
    await expect(welcomeBackMessage).toContainText('Welcome Back')
  })
  test('', async ({ page }, TestInfoObjects) => {
    await page.goto('https://dah-web-dev.azurewebsites.net/login')
    const welcomeBackMessage = await page.locator('.pb-5')
    await expect(welcomeBackMessage).toContainText('Welcome Back')
  })
})
