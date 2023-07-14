import { Meta, StoryObj } from "@storybook/react";
import TopButton from "./TopButton";

const meta = {
  title: "Components/TopButton",
  component: TopButton,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const TopButtonStory: Story = {};
