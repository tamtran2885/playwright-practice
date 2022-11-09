import { chromium, test } from "@playwright/test";

test("Login test demo", async () => {
  // launch Chromium - browser engine
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext(); // launch new browser
  const page = await context.newPage(); // launch a new tab

  await page.goto("https://ecommerce-playground.lambdatest.io/");
  await page.hover(
    "//a[@data-toggle='dropdown']//span[contains(.,'My account')]"
  );
  await page.click("text=Login");

  await page.fill("input[name='email']", "tamtran2885@gmail.com");
  await page.fill("input[name='password']", "Chau241089!");
  await page.click("input[type='submit']");

  await page.waitForTimeout(5000);

  const newContext = await browser.newContext(); // launch another browser
  const newPage = await newContext.newPage(); // launch a new tab in the new browser
  await newPage.goto(
    "https://ecommerce-playground.lambdatest.io/index.php?route=account/account"
  );
});
