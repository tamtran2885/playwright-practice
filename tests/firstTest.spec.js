const { test, expect } = require("@playwright/test");

test("My first test", async ({ page }) => {
  await page.goto("https://www.google.es/");
  await expect(page).toHaveTitle("Google");
});
