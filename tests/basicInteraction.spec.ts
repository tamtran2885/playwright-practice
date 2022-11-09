import { expect, test } from "@playwright/test";

test("Interaction with inputs", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/simple-form-demo"
  );
  const messageInput = page.locator("input#user-message");
  await messageInput.scrollIntoViewIfNeeded();

  // console.log(await messageInput.getAttribute("placeholder"));
  expect(messageInput).toHaveAttribute(
    "placeholder",
    "Please enter your Message"
  );
  // console.log(await messageInput.inputValue());
  await messageInput.type("Hi friends");
});

test("Sum of 2 input fields", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/simple-form-demo"
  );

  const input1 = page.locator("#sum1");
  const input2 = page.locator("#sum2");
  const submitBtn = page.locator("//button[text()='Get values']");

  const num1 = 12;
  const num2 = 35;
  await input1.fill("" + num1); // clear the existing data and fill with new data
  await input2.fill("" + num2); // type will append the data
  await submitBtn.click();

  const addMessage = page.locator("#addmessage");
  // console.log(await addMessage.textContent());

  let expectedValue = num1 + num2;
  expect(addMessage).toHaveText("" + expectedValue);
});

test("Checkbox", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/checkbox-demo"
  );

  const singleCheckbox = page.locator("id=isAgeSelected");
  expect(singleCheckbox).not.toBeChecked();

  await singleCheckbox.check();
  expect(singleCheckbox).toBeChecked();
});
