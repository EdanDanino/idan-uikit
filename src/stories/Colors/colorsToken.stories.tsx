import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import MuiBox from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import flat from "flat";

//TODO change to absloute path
import palette from "../../theme/palette";
import MuiTypography from "@mui/material/Typography";

const ColorListItem = styled(MuiBox)`
  display: flex;
  margin: ${({ theme }) => theme.spacing(1)};
  align-items: center;
`;

const Label = styled(MuiTypography)`
  width: 275px;
  color: ${({ theme }) => theme.palette.text.primary};
  padding: ${({ theme }) => theme.spacing(1)};
  text-align: center;
`;

const Hex = styled(MuiTypography)`
  width: 200px;
  color: ${({ theme }) => theme.palette.primary.light};
  padding: ${({ theme }) => theme.spacing(1)};
  text-align: center;
`;

const CircleHexContainer = styled(MuiBox)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ColorContainer = styled(MuiBox)<{ colorHex: string }>`
  padding: ${({ theme }) => theme.spacing(1)};
  text-align: center;
  width: 150px;
  display: flex;
  height: 150px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.palette.text.primary};
  text-align: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ colorHex }) => colorHex};
`;

const ColorListContainer = styled(MuiBox)`
  display: flex;
  flex-wrap: wrap;
`;

const ColorList = ({ colors }: { colors: Record<string, string> }) => {
  return (
    <ColorListContainer>
      {Object.keys(colors).map((key: string) => (
        <ColorListItem key={key}>
          <Label variant={"body1"}>{key}</Label>
          <CircleHexContainer>
            <ColorContainer colorHex={colors[key]}></ColorContainer>
            <Hex variant={"body2"}>
              {colors?.[key]?.toUpperCase() as string}
            </Hex>
          </CircleHexContainer>
        </ColorListItem>
      ))}
    </ColorListContainer>
  );
};

const ColorsStory = () => {
  const colors = flat(palette) as Record<string, string>;
  delete colors.mode;

  return <ColorList colors={colors} />;
};

const meta = {
  title: "Token/Colors",
  component: ColorsStory,
  argTypes: {},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Colors: Story = {};
