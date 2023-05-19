import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import MuiBox from "@mui/material/Box";
import MuiTypography from "@mui/material/Typography";

import { styled } from "@mui/material/styles";
// import * as icons from "../../icons";

const Root = styled(MuiBox)`
  display: flex;
  flex-wrap: wrap;
  ${({ theme }) => `
    padding:  ${theme.spacing(1)};
    margin: ${theme.spacing(1)};
  `}
`;

const IconWrapper = styled(MuiBox)`
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Label = styled(MuiTypography)`
  word-break: break-all;
  ${({ theme }) => `
    margin: ${theme.spacing(4, 0, 0, 0)};
  `}
`;

const IconsStory = () => {
  // console.log(icons);

  return (
    <Root>
      {/* {icons.map((a) => {
        return ReactComponent ? (
          <IconWrapper key={name}>
            {React.cloneElement(<ReactComponent />, { width: 20, height: 20 })}
            <Label>{/([A-Z])\w+/g.exec(name)?.[0]}</Label>
          </IconWrapper>
        ) : null;
      })} */}
    </Root>
  );
};

const meta = {
  title: "Token/Icons",
  component: IconsStory,
  argTypes: {},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icons: Story = {};
