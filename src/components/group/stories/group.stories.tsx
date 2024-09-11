import { Meta, StoryObj } from "@storybook/react";
import { Group, GroupPosition } from "../group";
import { Button } from "../../button";
import { Spacing } from "../../../models/spacing";

interface ArgTypes {
  text: string;
  elementCount: number;
  position: GroupPosition;
  spacing: Spacing;
  grow: boolean;
  wrap: boolean;
}

const meta: Meta = {
  component: Group,
  title: "Layout/Group",
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
type Story = StoryObj<typeof Group>;

export const Default: Story = {
  render: (args: ArgTypes) => {
    return (
      <Group {...args}>
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
      </Group>
    );
  },
  args: {
    align: "start",
    className: undefined,
    fitContent: false,
    grow: false,
    position: "left",
    spacing: "2",
    wrap: true,
  },
};
