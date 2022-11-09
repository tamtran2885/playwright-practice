import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  // Run single or multiple files
  testMatch: ["tests/login.spec.ts"],
};

export default config;
