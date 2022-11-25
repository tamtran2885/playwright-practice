import { test, expect, chromium } from "@playwright/test";

test("Slow motion and video recording demo", async () => {
  const browser = await chromium.launch({
    slowMo: 500,
    headless: false,
  });

  const context = await browser.newContext({
    recordVideo: {
      dir: "videos/",
      size: {
        width: 800,
        height: 600,
      },
    },
  });

  const page = await context.newPage();

  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  await page.locator("[placeholder='Username']").click();
  await page.locator("[placeholder='Username']").fill("Admin");

  await page.locator("[placeholder='Password']").click();
  await page.locator("[placeholder='Password']").fill("admin123");

  await page.locator("button:has-text('Login')").click();

  await context.close();
});
