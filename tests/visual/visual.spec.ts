import { test, expect } from '@playwright/test'
test.describe('Visual Regression Testing', () => {
  test('Screenshot of Homepage', async ({ page }) => {
    await page.goto('https://www.example.com/')
    expect(await page.screenshot()).toMatchSnapshot('Homepage.png')
  })
  test('Single Element Screenshot', async ({ page }) => {
    await page.goto('https://www.example.com/')
    const pageElementParagraph = await page.$('p')
    expect(await pageElementParagraph.screenshot()).toMatchSnapshot(
      'paragraph.png'
    )
  })
})
