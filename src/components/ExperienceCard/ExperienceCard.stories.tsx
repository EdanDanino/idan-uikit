import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { CenteredStory } from "../../shared/decorators";
import { ExperienceCard, ExperienceCardProps } from ".";

const LONG_BODY =
  "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.";

const ExperienceCardStory = (args: ExperienceCardProps) => (
  <CenteredStory>
    <ExperienceCard {...args} />
  </CenteredStory>
);

const meta = {
  title: "Components/ExperienceCard",
  component: ExperienceCardStory,
  argTypes: {},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const SkillCardExample: Story = {
  args: {
    body: LONG_BODY + LONG_BODY,
    skills: ["TypeScript", "React", "Redux", "StyledComponents"],
    title: "Title",
    years: "1000-1000",
  },
};
