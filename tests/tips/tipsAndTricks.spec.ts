import { test, expect } from '@playwright/test'
import { getRandomNumber, getRandomString } from '../../utilis/data-helpers'

test.describe('Tips And Tricks', () => {
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
  test('Parameterized', async ({ page, browserName }) => {
    await page.goto('https/example.com/')
  })
  const people = ['Ross', 'Rachel', 'Phoebe', 'Joey', 'Gunther'] //not working. need assistance
  /*for (const name of people) {
    test(`Parameterized Testing ${name}`, async ({ page }) => {
      await page.goto('http://zero.webappsecurity.com/index.html')
      await page.click('#searchTerm', `${name}`)
      await page.waitForTimeout(3000)
    })
  }*/
  test('Mouse Movement Simulation', async ({ page }) => {
    await page.goto('https://www.example.com')
    await page.mouse.move(10, 10) //give cordinates x and y
    await page.mouse.down()
    await page.mouse.move(50, 45) //Real Life usecases are very low.
    //Usecase of this scenario is low
  })
  test('Multiple Browser Tabs in One Browser', async ({ browser }) => {
    const context = await browser.newContext()
    const page1 = await context.newPage()
    const page2 = await context.newPage()
    const page3 = await context.newPage()
    await page1.goto('https://www.example.com')
    await page2.goto('https://www.example.com')
    await page3.goto('https://www.example.com')
    await page1.waitForTimeout(50000)
  })
  test.only('Import File that is having function', async ({ page }) => {
    let newNumber = await getRandomNumber()
    let newString = await getRandomString()
    console.log(newNumber)
    console.log(newString)
  })
})
