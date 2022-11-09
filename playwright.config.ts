import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  // Run single or multiple files
  testMatch: ["tests/basicInteraction.spec.ts"],
  use: {
    headless: false,
    screenshot: "on", // "only-on-failure"
    video: "on", // "retain-on-failure"
  },
  // retries: 2, // number of retry to fail test
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
};

export default config;
