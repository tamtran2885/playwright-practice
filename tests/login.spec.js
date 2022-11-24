import { test, expect } from "@playwright/test";

test.only("Login Test 1", async ({ page }) => {
  await page.goto("https://demo.applitools.com/");

  // await page.pause();

  await page.locator("[placeholder='Enter your username']").fill("Raghav");
  await page.locator("[placeholder='Enter your password']").fill("1234");

  await page.waitForSelector("text=Sign in", { timeOut: 5000 });
  await page.locator("text=Sign in").click();
});

test("Login Test 2", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  // await page.pause();

  await page.locator("[placeholder='Username']").click();
  await page.locator("[placeholder='Username']").fill("Admin");

  await page.locator("[placeholder='Password']").click();
  await page.locator("[placeholder='Password']").fill("admin123");

  await page.locator("button:has-text('Login')").click();

  await page.waitForURL(
    "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
  );

  await page.locator("p:has-text('Paul Collings')").click();
  await page.locator("text=Logout").click();

  await page.waitForURL(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
});
