import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://ecommerce-playground.lambdatest.io/");

  await page.hover(
    "//a[@data-toggle='dropdown']//span[contains(.,'My account')]"
  );

  await page.getByRole("link", { name: "Login" }).click();
  await expect(page).toHaveURL(
    "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"
  );

  await page.getByPlaceholder("E-Mail Address").click();

  await page.getByPlaceholder("Password").click();

  await page.getByPlaceholder("Password").fill("Chau241089!");

  await page.getByRole("button", { name: "Login" }).click();
  await expect(page).toHaveURL(
    "https://ecommerce-playground.lambdatest.io/index.php?route=account/account"
  );

  await page
    .getByRole("link", { name: " Edit your account information" })
    .click();
  await expect(page).toHaveURL(
    "https://ecommerce-playground.lambdatest.io/index.php?route=account/edit"
  );

  await page.getByPlaceholder("First Name").click();

  await page.getByPlaceholder("First Name").fill("Tam Thanh");

  await page.getByRole("button", { name: "Continue" }).click();
  await expect(page).toHaveURL(
    "https://ecommerce-playground.lambdatest.io/index.php?route=account/account"
  );
});
