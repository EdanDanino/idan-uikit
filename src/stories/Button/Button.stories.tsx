import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import Button, { ButtonProps } from "@mui/material/Button";
import { StoryDecorator } from "../Decorators";
import { RenderArray } from "../Decorators/StoryDecorator";

const STATES: RenderArray<ButtonProps>[] = [
  { title: "Default", props: { children: "default" } },
  { title: "Disabled", props: { disabled: true, children: "disabled" } },
  {
    title: "With Start Icon",
    props: { startIcon: <>❤</>, children: "With Start Icon" },
  },
  {
    title: "With End Icon",
    props: { endIcon: <>❤</>, children: "With End Icon" },
  },
];

const ButtonStory = () => {
  return (
    <StoryDecorator
      Component={(props) => <Button {...props} />}
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

export const Colors: Story = {};
