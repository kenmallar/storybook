import { Meta, StoryObj } from "@storybook/react";
import { Stack } from "../../stack";
import { Button } from "../../button";
import { Spacing } from "../../../models/spacing";

interface ArgTypes {
  text: string;
  elementCount: number;
  spacing: Spacing;
  grow: boolean;
  wrap: boolean;
}

const meta: Meta = {
  component: Stack,
  title: "Layout/Stack",
  argTypes: {
    spacing: {
      control: "inline-radio",
      options: [
        "0",
        "05",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "8",
        "10",
        "12",
        "16",
        "20",
        "24",
        "31",
      ],
    },
    elementCount: {
      control: { type: "range", min: 1, max: 25, step: 1 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stack>;

export const Default: Story = {
  render: (args: ArgTypes) => {
    return (
      <div className="">
        <Stack {...args}>
          {Array.from(Array(args.elementCount), (i) => {
            return (
              <Button
                key={i}
                size="small"
                label="Button content"
                onClick={() => alert("onClick button")}
              />
            );
          })}
        </Stack>
      </div>
    );
  },
  args: {
    align: "start",
    className: undefined,
    fitContent: false,
    spacing: "2",
    wrap: true,
  },
};
