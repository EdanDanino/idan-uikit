import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { TypeScript } from "../../icons";
import { CenteredStory } from "../../shared/decorators";
import { SkillCard, SkillCardProps } from ".";

const SkillCardStory = (args: SkillCardProps) => (
  <CenteredStory>
    <SkillCard
      icon={<TypeScript />}
      title={args.title}
      description={args.description}
      learnMore={args.learnMore}
    />
  </CenteredStory>
);

const meta = {
  title: "Components/SkillCard",
  component: SkillCardStory,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const SkillCardExample: Story = {
  args: {
    learnMore: "Learn More!",
    title: "TypeScript",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
};
