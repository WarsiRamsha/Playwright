import { test, expect } from '@playwright/test'
test.describe.only('Tips And Tricks', () => {
  test('TestInfoObjects', async ({ page }, TestInfoObjects) => {
    await page.goto('https://example.com/')
    console.log(TestInfoObjects.title) //Dot operator specifies the
    //exact/desired information
  })
})
