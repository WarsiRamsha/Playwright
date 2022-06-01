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
    await page.waitForTimeout(5000)
    await page.goto('http://zero.webappsecurity.com/bank/transfer-funds.html')
    await page.waitForTimeout(10000)
  })
  test('Transfer Funds', async ({ page }) => {
    await page.click('#transfer_funds_tab')
    await page.selectOption('#tf_fromAccountId', '2') //for dropdowns,using select option
  })
})

//https://www.saucedemo.com/ use this website for training
//use https://letcode.in/dropdowns for this
