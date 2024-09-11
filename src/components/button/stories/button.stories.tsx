import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components/Button",
};

export default meta;
type Story = StoryObj<typeof Button>;

const args = { label: "Button", onClick: () => alert("onClick") };

export const Primary = () => <Button {...args} />;
export const Secondary = () => <Button {...args} palette="secondary" />;
export const Tertiary = () => <Button {...args} palette="tertiary" />;
export const XLarge = () => <Button {...args} size="xlarge" />;
export const Large = () => <Button {...args} size="large" />;
export const Medium = () => <Button {...args} size="medium" />;
export const Small = () => <Button {...args} size="small" />;
export const XSmall = () => <Button {...args} size="xsmall" />;

export const Sandbox: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    label: "Button",
    onClick: undefined,
    isFullWidth: false,
    size: "medium",
    palette: "primary",
    className: "",
  },
};
