import { Meta } from "@storybook/react/*";
import { Stack, Group } from "../../components";
import { highlights, messages, shades } from "./utils";
import { Swatch } from "./swatch";

const meta: Meta = {
  title: "Core/Palettes",
};

export default meta;

export const Palettes = () => (
  <Stack spacing="6">
    <Group align="start" spacing="6">
      <Swatch name="primary" shades={shades} />
      <Swatch name="secondary" shades={shades} />
      <Swatch name="tertiary" shades={shades} />
    </Group>
    <Group align="start" spacing="6">
      <Swatch name="highlight" shades={highlights} />
      <Stack fitContent>
        Messages
        <Swatch shades={messages} />
      </Stack>
    </Group>
  </Stack>
);
