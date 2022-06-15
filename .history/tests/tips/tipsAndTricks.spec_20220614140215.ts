import { test, expect } from '@playwright/test'
import { getRandomNumber, getRandomString } from '../../utilis/data-helpers'

test.describe('Digital Automation Hub', () => {
  test('To Verify that user is on the login screen of Digital Automation Hub', async ({
    page,
  }) => {
    await page.goto('https://dah-web-dev.azurewebsites.net/login')
    const welcomeBackMessage = await page.locator('.pb-5')
    await page.pause()
    await expect(welcomeBackMessage).toContainText('Welcome Back')
  })
})
test.describe('Digital Automation Hub', () => {
  test('Login Form --Negative Scenario(No input is entered)', async ({
    page,
  }) => {
    await page.goto('https://dah-web-dev.azurewebsites.net/login')
    //await page.click('type='submit'')
    await page.locator('text=Log in').click()
    const errorMessage = await page.locator('.ant-form-item-control-input')
    await expect(errorMessage).toContainText('email is required!')
  })
  test('Login Form --Positive Scenario', async ({ page }) => {
    await page.goto('https://dah-web-dev.azurewebsites.net/login')
    await page.type('#login_email', 'rwa@ciklum.com') //Targeting with ID
    await page.type('#login_password', 'December2021!')
    await page.locator('text=Log in').click()
    //await page.click('.ant-row ant-form-item') //Targetting with class as there is no ID used.
  })
})
test.describe('Digital Automation Hub', () => {
  test('To Verify that user is able to click Forgot password as per his/her wish', async ({
    page,
  }) => {
    await page.goto('https://dah-web-dev.azurewebsites.net/user-management')
    await page.check('#login_remember')
    await page.click('.login-form-forgot half-field text-right')
  })
})
/*test.describe.only('Digital Automation Hub', () => {
  test('To Verify that user is able to click Forgot password as per his/her wish', async ({
    page
  }) => {
    await page.goto('https://dah-web-dev.azurewebsites.net/user-management')
  })
})*/
test.describe.only('Digital Automation Hub', () => {
  test('To Verify that user is able to click Forgot password as per his/her wish', async ({
    page,
  }) => {
    await page.goto('https://dah-web-dev.azurewebsites.net/login')
    await page.waitForTimeout(5000)
    await page.locator('.login-form-forgot half-field text-right').click()
    await page.pause()
    //.login-form-forgot half-field text-right
  })
})
