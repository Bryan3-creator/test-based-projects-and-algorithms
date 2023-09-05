/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: "ts-jest",
  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node",
  ],
  setupFilesAfterEnv: ["./.test/config/setup-test.config.ts"],
  testEnvironment: "@happy-dom/jest-environment",
};
