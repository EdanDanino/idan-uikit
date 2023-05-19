import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Typography, { TypographyProps } from "@mui/material/Typography";

import theme from "../../theme";
import MuiBox from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const variants = Object.keys(theme.typography).filter(
  (k: string) => typeof (theme.typography as any)[k] === "object"
);

const VariantContainer = styled(MuiBox)`
  padding: ${({ theme }) => theme.spacing(1, 0)};
`;

const TypographiesStory = (args: TypographyProps) => (
  <>
    {variants.map((v) => (
      <VariantContainer key={v}>
        <Typography {...args} variant={v as TypographyProps["variant"]}>
          {v}
        </Typography>
      </VariantContainer>
    ))}
  </>
);

const meta = {
  title: "Token/Typography",
  component: TypographiesStory,
  argTypes: {},
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const typographies: Story = {};
