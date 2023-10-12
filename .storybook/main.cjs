const { mergeConfig } = require("vite");
const turbosnap = require("vite-plugin-turbosnap");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-coverage",
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  features: {
    storyStoreV7: true,
    previewCsfV3: true,
  },

  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      plugins:
        configType === "PRODUCTION"
          ? [turbosnap({ rootDir: config.root ?? process.cwd() })]
          : [],
    });
  },

  docs: {
    autodocs: true,
  },
};
