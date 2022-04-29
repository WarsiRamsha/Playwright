import { test, expect } from '@playwright/test'

test.describe('Feedback Form', () => {
  //To be run before each test case
  test.beforeEach(async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/')
    await page.click('#feedback')
  })
  //Reset Button
  test('Functionality of Reset button', async ({ page }) => {
    await page.type('#name', 'Ramsha Warsi')
    await page.type('#email', 'email@email.com')
    await page.type('#subject', 'Feedback')
    await page.type('#comment', 'Playwright execution is too fast')
    await page.click('input[name=clear]')

    //Declare a variable and assert it to be empty
    const nameInput = await page.locator('#name')
    const emailInput = await page.locator('#email')
    const subjectInput = await page.locator('#subject')
    const commentInput = await page.locator('#comment')

    await expect(nameInput).toBeEmpty
    await expect(emailInput).toBeEmpty
    await expect(subjectInput).toBeEmpty
    await expect(commentInput).toBeEmpty
  })

  test('Feedback Form--Positive Scenario', async ({ page }) => {
    await page.type('#name', 'Ramsha Warsi')
    await page.type('#email', 'email@email.com')
    await page.type('#subject', 'Feedback')
    await page.type('#comment', 'Playwright execution is too fast')
    await page.click("input[type='submit']")
    const feedbackReceived = await page.locator('h3')
    await expect(feedbackReceived).toBeVisible() //Two assertions to revise the concept
    await expect(feedbackReceived).toContainText('Feedback FAIL')
  })
})
