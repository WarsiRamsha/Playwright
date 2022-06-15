import { test, expect } from '@playwright/test'
import { getRandomNumber, getRandomString } from '../../utilis/data-helpers'

test.describe.only('Tips And Tricks', () => {
  test('To Verify that user is on the login screen of Digital Automation Hub', async ({
    page,
  }) => {
    await page.goto('https://dah-web-dev.azurewebsites.net/login')
    const welcomeBackMessage = await page.locator('.pb-5')
    await expect(welcomeBackMessage).toContainText('Welcome Back')
  })
  test('Login Form --Negative Scenario(No input is entered)', async ({
    page,
  }) => {
    await page.goto('https://dah-web-dev.azurewebsites.net/login')
    await page.click('.ant-btn ant-btn-primary')
    const errorMessage = await page.locator('.ant-form-item-control-input')
    await expect(errorMessage).toContainText('email is required!')
  })
  test('Login Form --Positive Scenario', async ({ page }) => {
    await page.goto('https://dah-web-dev.azurewebsites.net/login')
    await page.type('#login_email', 'rwa@ciklum.com')
    await page.type(
      '.ant-input-affix-wrapper ant-input-password',
      'December2021!'
    )
    await page.click('.ant-btn ant-btn-primary')
  })
})
