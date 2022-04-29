export async function loadHomepage(page) {
  await page.goto('https://www.example.com') //exports the function in playwright
}
export async function assertTitle(page) {
  await page.waitForSelector('h5')
}
//Functions can be more than one liners.
