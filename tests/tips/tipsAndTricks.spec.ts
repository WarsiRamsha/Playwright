import { test, expect } from '@playwright/test'
test.describe.only('Tips And Tricks', () => {
  test('TestInfoObjects', async ({ page }, TestInfoObjects) => {
    await page.goto('https://example.com/')
    console.log(TestInfoObjects.title) //Dot operator specifies the
    //extract/desired information
  })
  test('Test Skip Browser', async ({ page, browserName }) => {
    //skip is used to
    test.skip(browserName == 'chromium', 'Feature not developed yet')
    await page.goto('https://example.com/')
  })
  test('Test fixme annotation', async ({ page, browserName }) => {
    //fixme is used to revise the test when it is not stable.
    test.fixme(
      browserName == 'chromium',
      'Test is not stable and it needs revision'
    )
    await page.goto('https://example.com/')
  })
  test.only('Parameterized', async ({ page, browserName }) => {
    await page.goto('https/example.com/')
  })
  const people = ['Ross', 'Rachel', 'Phoebe', 'Joey', 'Gunther']
  for (const name of people) {
    test('Parameterized Testing ${name}', async ({ page }) => {
      await page.goto('http://zero.webappsecurity.com/index.html')
      await page.click('#searchTerm', '${name}')
      await page.waitForTimeout(3000)
    })
  }
})
