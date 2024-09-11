const custom = require("../webpack.config");

module.exports = {
  stories: [
    "../src/**/stories.js", // The name should have a prefix for component name like `button.stories.js` instead of `stories.js` like you've done. As you renamed, you can remove this pattern
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  webpackFinal: (config) => {
    return {
      ...config,
      module: {
        rules: custom.module.rules,
      },
      resolve: {
        ...config.resolve,
        ...custom.resolve,
      },
    };
  },

  framework: {
    name: "@storybook/react-webpack5",
  },
  docs: {},
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
  addons: [
    "@storybook/addon-webpack5-compiler-babel",
    "@storybook/addon-essentials",
  ],
};
