import test, { page, expect } from "@playwright/test";

test("assertions demo", async ({ page }) => {
  await page.goto("https://kitchen.applitools.com/");
  // await page.pause();

  /***** Check element present *****/
  // Use expect
  await expect(page.locator("text=The Kitchen")).toHaveCount(1);
  // Use condition
  if (await page.$("text=The Kitchen")) {
    await page.locator("text=The Kitchen").click();
  }

  /***** Check element hidden or visible *****/
  await expect(page.locator("text=The Kitchen")).toBeVisible();
  // await expect.soft(page.locator("text=The Kitchen")).toBeHidden();

  /***** Check element enabled or disabled *****/
  await expect(page.locator("text=The Kitchen")).toBeEnabled();
  await expect(page.locator("text=The Kitchen")).not.toBeDisabled();

  /***** Check text matches values or not *****/
  await expect(page.locator("text=The Kitchen")).toHaveText("The Kitchen");
  await expect(page.locator("text=The Kitchen")).not.toHaveText("TheKitchen");

  /***** Check Element attribute *****/
  await expect(page.locator("text=The Kitchen")).toHaveAttribute(
    "class",
    /.*css-dpmy2a/
  ); // dynamic value
  await expect(page.locator("text=The Kitchen")).toHaveClass(/.*css-dpmy2a/); // dynamic class having other class before

  /****** Check url and page title ******/
  await expect(page).toHaveURL("https://kitchen.applitools.com/");
  await expect(page).toHaveURL(/kitchen.applitools.com/);
  await expect(page).toHaveTitle(/.*Kitchen/); // dynamic title using regular expression

  // await page.pause(); // use Playwright inspector to get the snapshot of the screen

  /***** Visual validation with screenshot ******/
  await expect(page).toHaveScreenshot();
});
