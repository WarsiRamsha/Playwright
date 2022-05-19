import { chromium, PlaywrightTestConfig } from '@playwright/test'
const config: PlaywrightTestConfig =
  //Normally a best practice to name the variable as config
  {
    timeout: 60000,
    retries: 0, //it should be small number as it effects the test execution time.
    testDir: 'tests/tips',
    //Greater the retries greater will be the time for test execution
    use: {
      //browser specific actions
      //values are either true or false
      headless: false,
      viewport: { width: 1280, height: 720 },
      actionTimeout: 15000,
      ignoreHTTPSErrors: true,
      //Playwright has a feature it records the video and takes the screenshot
      video: 'retain-on-failure',
      screenshot: 'only-on-failure',
    },
    projects: [
      {
        name: 'chromium',
        use: { browserName: 'chromium' },
      },
      {
        name: 'firefox',
        use: { browserName: 'firefox' },
      },
      {
        name: 'webkit',
        use: { browserName: 'webkit' },
      },
    ],
  }
export default config
