import { test, expect } from '@playwright/test'
test.describe('Visual Regression Testing', () => {
  test('Screenshot of Homepage', async ({ page }) => {
    await page.goto('Http:https://example.com/')
    expect(await page.screenshot()).toMatchSnapshot('Homepage.png')
  })
})
