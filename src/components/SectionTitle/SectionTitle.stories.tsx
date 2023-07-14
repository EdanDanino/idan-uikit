import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { CenteredStory } from "../../shared/decorators";
import SectionTitle, { SectionTitleProps } from "./SectionTitle";

const SectionTitleStory = (args: SectionTitleProps) => (
  <CenteredStory>
    <SectionTitle {...args} />
  </CenteredStory>
);

const meta = {
  title: "Components/SectionTitle",
  component: SectionTitleStory,
  args: {
    title: "Title",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const SectionTitleExample: Story = {};
