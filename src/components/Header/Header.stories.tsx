import { Meta, StoryObj } from "@storybook/react";
import { CenteredStory } from "../../shared/decorators";
import Header, { HeaderProps } from "./Header";
import { Logo } from "../../icons";

const HeaderStory = (args: HeaderProps) => (
  <CenteredStory>
    <Header {...args} />
  </CenteredStory>
);

const meta = {
  title: "Components/Header",
  component: HeaderStory,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderExample: Story = {
  args: {
    Logo: <Logo />,
    items: [
      { label: "skills", onClick: () => console.log("onClick") },
      { label: "experience", onClick: () => console.log("onClick") },
      { label: "aboutme", onClick: () => console.log("onClick") },
    ],
  },
};
