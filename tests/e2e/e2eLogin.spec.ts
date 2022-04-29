import { test, expect } from '@playwright/test'

test.describe('Login and Logout Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/')
    await page.click('#signin_button')
  })
  test('Negative Scenario', async ({ page }) => {
    await page.type('#user_login', 'invalid username')
    await page.type('#user_password', 'invalid password')
    await page.click('text=Sign in')

    const errorMessage = await page.locator('.alert-error')
    await expect(errorMessage).toContainText('Login and/or password are wrong.')
    //errormessage is checked
  })

  test('Positive Scenario', async ({ page }) => {
    await page.type('#user_login', 'username')
    await page.type('#user_password', 'password')
    await page.click('text=Sign in')
    await page.goto('http://zero.webappsecurity.com/bank/transfer-funds.html')
    const headingTwo = await page.locator('h2') //Assertions
    await expect(headingTwo).toBeVisible() //h2 is correctly displayed on the screen
    await expect(headingTwo).toHaveText('Transfer Money & Make Payments')
  })
})
