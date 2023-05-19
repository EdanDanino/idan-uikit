import React from "react";
import type { Preview } from "@storybook/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../src/theme";

export const withMuiTheme = (Story) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Story />
  </ThemeProvider>
);

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [withMuiTheme],
};

export default preview;
