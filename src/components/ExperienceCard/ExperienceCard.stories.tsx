import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { CenteredStory } from "../../shared/decorators";
import ExperienceCard, { ExperienceCardProps } from "./ExperienceCard";
import {
  Redux,
  StyledComponents,
  TypeScript,
  React as ReactIcon,
  ArrowRight,
} from "../../icons";

const LONG_BODY =
  "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.";

const ExperienceCardStory = (args: ExperienceCardProps) => (
  <CenteredStory>
    <ExperienceCard {...args} />
  </CenteredStory>
);

const Skills = () => {
  const icons = [
    <TypeScript />,
    <ReactIcon />,
    <Redux />,
    <StyledComponents />,
  ];
  return <>{icons.map((icon) => icon)}</>;
};

const meta = {
  title: "Components/ExperienceCard",
  component: ExperienceCardStory,
  args: {
    body: LONG_BODY + LONG_BODY,
    skills: <Skills />,
    title: "Title",
    years: "1000-1000",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const SkillCardExample: Story = {};

export const SkillCardWithFooterButton: Story = {
  args: {
    footerButton: {
      onClick: () => console.log("Clicked!"),
      children: "Learn More",
      endIcon: <ArrowRight />,
    },
  },
};
