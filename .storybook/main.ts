import type { StorybookConfig } from "@storybook/react-webpack5";
import { RuleSetRule } from "webpack";

const path = require("path");
const toPath = (filePath) => path.join(process.cwd(), filePath);

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
  webpackFinal: async (config) => {
    const assetRule =
      (((config?.module?.rules as RuleSetRule[])?.find)(({ test }) =>
        test?.test(".svg")
      ) as RuleSetRule) || {};
    const assetLoader = {
      loader: assetRule?.loader,
      options: assetRule?.options,
    };
    config?.module?.rules?.unshift({
      test: /\.svg$/,
      use: ["@svgr/webpack", assetLoader],
    });
    return {
      ...config,

      resolve: {
        ...config.resolve,
        alias: {
          ...config?.resolve?.alias,
          "@emotion/core": toPath("node_modules/@emotion/react"),
          "emotion-theming": toPath("node_modules/@emotion/react"),
          "@emotion/styled": toPath("node_modules/@emotion/styled"),
        },
      },
    };
  },
};
export default config;
