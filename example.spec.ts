import { test, expect } from '@playwright/test'
test('simple basic test', async ({ page }) => {
  //Here goes the basic code
  await page.goto('https://www.example.com')
  const pageTitle = await page.locator('h1')
  await expect(pageTitle).toContainText('Example Domain')
})
test('Test is failed because expected output is not equal to the observed one', async ({
  page,
}) => {
  await page.goto('https://www.example.com')
  const pageTitle = await page.locator('h1')
  await expect(pageTitle).toContainText('Example Domain Fail') //So that test is failed
})

//Click on Selectors (id and )

test('Click on Element', async ({ page }) => {
  await page.goto('http://zero.webappsecurity.com/index.html')
  await page.click('#signin_button')
  await page.click('text=Sign in')
  const errorMessage = await page.locator('.alert-error')
  await expect(errorMessage).toContainText('Login and/or password are wrong.')
})

/* test('Selectors', async ({ page }) => {
  //Text
  await page.click('text=sometext')

  //Css Selector
  await page.click('class name')
  await page.click('h1') //elements os html
  await page.click('#id')
  await page.click('.class')
  //Only Visible CSS selectors and it is also a feature of playwright
  await page.click('#button-success=visible') //It will only hit the button with
  //id as success and that is visible.

  //Combinations
  await page.click('#login-form .firstname') //SElect only id as login form and class
  // as first name

  //XPath
  await page.click('//button')
})
 Shift alt + A for multi line comment*/

test('Values sent to input', async ({ page }) => {
  await page.goto('http://zero.webappsecurity.com/index.html')
  await page.click('#signin_button')
  await page.type('#user_login', 'Incorrect Value')
  await page.type('#user_password', 'Incorrect Password')
  await page.click('text=Sign in')
  const errorMessage = await page.locator('.alert-error')
  await expect(errorMessage).toContainText('Login and/or password are wrong.')
})
