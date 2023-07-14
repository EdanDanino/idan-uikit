import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { StoryDecorator, RenderArray } from "../../shared/decorators";
import { Jest } from "../../icons";

const STATES: RenderArray<IconButtonProps>[] = [
  { title: "Default", props: { children: <Jest /> } },
  { title: "Disabled", props: { disabled: true, children: <Jest /> } },
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
