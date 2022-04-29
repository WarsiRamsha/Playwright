import { test, expect } from '@playwright/test'
import { loadHomepage, assertTitle } from '../helpers'
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

//Click on Selectors (id and class)

test('Click on Element', async ({ page }) => {
  await page.goto('http://zero.webappsecurity.com/index.html')
  await page.click('#signin_button')
  await page.click('text=Sign in')
  const errorMessage = await page.locator('.alert-error')
  await expect(errorMessage).toContainText('Login and/or password are wrong.')
})

test.skip('Selectors', async ({ page }) => {
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
//Shift alt + A for multi line comment

test('Values sent to input', async ({ page }) => {
  await page.goto('http://zero.webappsecurity.com/index.html')
  await page.click('#signin_button')
  await page.type('#user_login', 'Incorrect Value')
  await page.type('#user_password', 'Incorrect Password')
  await page.click('text=Sign in')
  const errorMessage = await page.locator('.alert-error')
  await expect(errorMessage).toContainText('Login and/or password are wrong.')
})

test.describe('My first Test Suite', () => {
  test('Assertions', async ({ page }) => {
    await page.goto('https://example.com/')
    await expect(page).toHaveURL('https://example.com/') //Good for redirections
    await expect(page).toHaveTitle('Example Domain') //This will also pass
    //Element Assertions

    const headingone = await page.locator('h1')
    await expect(headingone).toBeVisible() //h1 is correctly displayed on the screen
    await expect(headingone).toHaveText('Example Domain')
    await expect(headingone).toHaveCount(1)
    // there is no element of h6 on the website
    const headingsix = await page.locator('h6')
    await expect(headingsix).not.toBeVisible()
  })
})

test.describe.parallel.only('Before and after hooks', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://example.com/')
  })
  //test.afterAll(async ({ page }) => {
  //await page.close()
  //})

  test('Full Page Screenshot', async ({ page }) => {
    //Step 01 go to the website.
    //await page.goto('https://example.com/')
    //Step 02 Take the screenshot
    await page.screenshot({ path: 'screenshot.png', fullPage: true })
  })

  test('Screenshot of Single Element', async ({ page }) => {
    //Step 01 go to the website.
    //await page.goto('https://example.com/')
    //Step 02 Declare a variable
    const element = await page.$('h1')
    await element.screenshot({ path: 'Single_element_screenshot.png' })
  })
})

test('helpers', async ({ page }) => {
  await loadHomepage(page)
  //await page.pause() //it is used for debugging purpose. should be comment out once used
  await assertTitle(page)
})
