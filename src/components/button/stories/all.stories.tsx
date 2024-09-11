import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button";
import { Primary, Secondary, Tertiary } from "./button.stories";
import { Stack } from "../../stack";
import { Group } from "../../group";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components/Button",
};

export default meta;

const sizes = ["xlarge", "large", "medium", "small", "xsmall"] as const;

export const All = () => (
  <Group position="left" spacing="6" fitContent>
    {sizes.map((size, i) => (
      <Stack spacing="2">
        <Button
          size={size}
          label="Button"
          palette="primary"
          onClick={() => {}}
        />
        <Button
          size={size}
          label="Button"
          palette="secondary"
          onClick={() => {}}
        />
        <Button
          size={size}
          label="Button"
          palette="tertiary"
          onClick={() => {}}
        />
      </Stack>
    ))}
  </Group>
);
