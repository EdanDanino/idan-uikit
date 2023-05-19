import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import Button, { ButtonProps } from "@mui/material/Button";
import { StoryDecorator } from "../Decorators";
import { RenderArray } from "../Decorators/StoryDecorator";
import { ArrowRight } from "../../icons";

const STATES: RenderArray<ButtonProps>[] = [
  { title: "Default", props: { children: "default" } },
  { title: "Disabled", props: { disabled: true, children: "disabled" } },
  {
    title: "With Start Icon",
    props: { startIcon: <ArrowRight />, children: "With Start Icon" },
  },
  {
    title: "With End Icon",
    props: { endIcon: <ArrowRight />, children: "With End Icon" },
  },
];

const ButtonStory = (args: ButtonProps) => {
  return (
    <StoryDecorator
      Component={(props) => <Button {...props} size={args.size} />}
      items={STATES}
    />
  );
};

const meta = {
  title: "Components/Button",
  component: ButtonStory,
  argTypes: {},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const LargeButtons: Story = {
  args: {
    size: "large",
  },
};
export const MediumButtons: Story = {
  args: {
    size: "medium",
  },
};
export const SmallButtons: Story = {
  args: {
    size: "small",
  },
};
