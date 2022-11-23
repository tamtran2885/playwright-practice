import { test, expect } from "@playwright/test";
const { chromium } = require("@playwright/test");

test("Test recorded automatically by Playwright inspector", async () => {
  const browser = await chromium.launch({
    headless: true,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.saucedemo.com/");

  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill("standard_user");

  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill("secret_sauce");

  await page.locator('[data-test="login-button"]').click();

  await page.getByRole("button", { name: "Open Menu" }).click();
  await page.getByRole("link", { name: "Logout" }).click();

  await expect(page).toHaveURL("https://www.saucedemo.com/");

  // ---------------------
  await context.close();
  await browser.close();
});
