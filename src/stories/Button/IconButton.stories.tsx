import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { StoryDecorator } from "../Decorators";
import { RenderArray } from "../Decorators/StoryDecorator";

const STATES: RenderArray<IconButtonProps>[] = [
  { title: "Default", props: { children: "❤" } },
  { title: "Disabled", props: { disabled: true, children: "❤" } },
];

const IconButtonStory = (args: IconButtonProps) => {
  return (
    <StoryDecorator
      Component={(props) => <IconButton {...props} {...args} />}
      items={STATES}
    />
  );
};

const meta = {
  title: "Components/IconButton",
  component: IconButtonStory,
  argTypes: {},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const SmallIconButtons: Story = {
  args: {
    size: "small",
  },
};
export const MediumIconButtons: Story = {
  args: {
    size: "medium",
  },
};
export const LargeIconButtons: Story = {
  args: {
    size: "large",
  },
};
