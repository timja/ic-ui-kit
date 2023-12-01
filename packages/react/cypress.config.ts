/* eslint-disable @typescript-eslint/no-var-requires */
import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
    fixturesFolder: "./src/component-tests",
    setupNodeEvents(on, config) {
      const getCompareSnapshotsPlugin = require("cypress-image-diff-js/dist/plugin");
      getCompareSnapshotsPlugin(on, config);
    },
    supportFile: "./cypress/support/index.ts",
    retries: 1,
  },
});
