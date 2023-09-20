module.exports = {
  "core": {
    disableTelemetry: true
  },

  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],

  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
  ],

  "framework": {
    name: "@storybook/react-webpack5",
    options: {}
  },

  "staticDirs": ['../dist', '../public'],

  docs: {
    autodocs: true
  }
}