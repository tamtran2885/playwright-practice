# :mrs_claus: Playwright-Practice

## :mx_claus: Project Setup:

1. Node JS
2. VS Code Editor
3. Playwright VS Code plugin

## :elf: Installation

- Using the repository

```console
git clone <repo>
npm install
```

- Create a new node project with playwright package

```console
npm init playwright@latest
```

## :fairy: Commands with options

- Runs the end-to-end tests

```console
npx playwright test
```

- Runs the Tests only on specific browser in headed mode, from specific line

```console
npx playwright test --project=chromium --headed
```

- Runs the tests in a specific file from specific line

```console
npx playwright test <test_file>:21
```

- Runs the tests in debug mode

```console
npx playwright test --debug
```

- Auto generate tests with Codegen

```console
npx playwright codegen
```

## :mermaid: Reference:

- [Playwright Official Docs](https://playwright.dev/)
- [Auto-waiting](https://playwright.dev/docs/actionability)
- [LamdaTest](https://ecommerce-playground.lambdatest.io/)
- [LamdaTest Playground](https://www.lambdatest.com/selenium-playground/)
