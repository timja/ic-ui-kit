/* eslint-disable @typescript-eslint/no-var-requires */
import { defineConfig } from "cypress";
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");

export default defineConfig({
  
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
    setupNodeEvents(on, config) {
      const getCompareSnapshotsPlugin = require("cypress-image-diff-js/dist/plugin");
      getCompareSnapshotsPlugin(on, config);
    },
    supportFile: "./cypress/support/index.ts",
    retries: 1,
  },
  e2e: {
    baseUrl: "http://localhost:6007/",
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser = {}, launchOptions)=> {
        prepareAudit(launchOptions);
      })

      on("task", {
        lighthouse: lighthouse(), // calling the function is important 
           });
      return (config)
    },
  },
});
