import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import "../src/styles/index.scss";

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ["Components", "*"],
      },
    },
  },
};

export default preview;
