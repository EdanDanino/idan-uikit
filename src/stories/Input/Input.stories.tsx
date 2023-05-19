import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import Input, { InputBaseProps } from "@mui/material/InputBase";
import { StoryDecorator } from "../Decorators";
import { RenderArray } from "../Decorators/StoryDecorator";

const STATES: RenderArray<InputBaseProps>[] = [
  { title: "Default" },
  { title: "Error", props: { error: true } },
  { title: "Disabled", props: { disabled: true } },
];

const InputStory = (args: InputBaseProps) => {
  return (
    <StoryDecorator
      Component={(props) => (
        <Input {...props} size={args.size} placeholder="placeholder" />
      )}
      items={STATES}
    />
  );
};

const meta = {
  title: "Components/Input",
  component: InputStory,
  argTypes: {},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const mediumInpit: Story = {
  args: {
    size: "medium",
  },
};