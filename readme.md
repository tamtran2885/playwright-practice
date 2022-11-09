## Playwright Test Automation

### 1. What is Playwright?

Playwright is a Node.js library to automate Chromium, Firefox, and WebKit with a single API. Playwright is built to enable cross-browser web testing. Playwright was started by Microsoft as a fork of Puppeteer. Puppeteer is a node library to automate the Chromium browsers with the JavaScript API.

### 2. Capabilities:

- It can handle multiple pages, domains, and iframes.
- Intercept network activity for stubbing and mocking network requests.
- Emulate mobile devices, geolocation, permissions.
- Native input events for mouse and keyboard
- Upload & download support files.
- Component based testing assert
- Playwright Test Runner
- Docker support
- Auto-wait APIs (clicks, types, etc)
- Timeout-free automation
- Lean parallelization with browser contexts
- Wide variety of selectors (locators) & shadow-dom support
- Can handle single page application

### 3. Setup:

1. Node JS
2. VS Code Editor
3. Playwright VS Code plugin

### 4. Auto-waiting

Playwright auto-waits for all the relevant checks to pass and only then performs the requested action. If the required checks do not pass within the given timeout, action fails with the TimeoutError.

### 5. Playwright Test Recorder

- Test Recorder helps to create test scripts by capturing the actions on the browser.

```console
npx playwright codegen
```

Note: Test Recorder can not capture all the actions.

### 6. Reports, screenshot & videos

- modify the options config file

Example:

```console
// playwright.config.json

  use: {
    headless: false,
    screenshot: "on", // "only-on-failure"
    video: "on", // "retain-on-failure"
  },
  retries: 2, // number of retry to fail test
  reporter: [
    ["dot"],
    [
      "json",
      {
        outputFile: "jsonReports/jsonReport.json",
      },
    ],
    [
      "html",
      {
        open: "never",
      },
    ],
  ],
```

- run the test command

```console
npx playwright test
```

## Reference:

- [Playwright Official Docs](https://playwright.dev/)
- [Auto-waiting](https://playwright.dev/docs/actionability)
- [LamdaTest](https://ecommerce-playground.lambdatest.io/)
- [LamdaTest Playground](https://www.lambdatest.com/selenium-playground/)
