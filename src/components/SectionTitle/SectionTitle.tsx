import React from "react";
import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import MuiBox from "@mui/material/Box";

const Root = styled(MuiBox)`
  display: flex;
  width: 1080px;
  height: 205px;
  margin: 0 80px 30px 80px;
  gap: ${({ theme }) => theme.spacing(25)};
  align-items: center;
`;

const Divider = styled(MuiBox)`
  display: flex;
  width: 100%;
  height: 4px;
  background: ${({ theme }) => theme.palette.disabled.main};
  box-shadow: 4px 3px 5px 0px ${({ theme }) => theme.palette.shadow.main};
`;

const LeftSide = styled(MuiBox)`
  display: flex;
  width: 100%;
  gap: ${({ theme }) => theme.spacing(7.5)};
  align-items: center;
  h1 {
    font-size: 150px;
    text-shadow: 5px 2px 5px ${({ theme }) => theme.palette.primary.main};
  }
`;

const RightSide = styled(MuiBox)`
  display: flex;
  align-self: end;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing(11)};
`;

export type SectionTitleProps = {
  title: string;
};

const SectionTitle = ({ title }: SectionTitleProps) => (
  <Root>
    <LeftSide>
      <Divider />
      <Typography variant="h1">{title}</Typography>
    </LeftSide>
    <RightSide>
      <Divider />
    </RightSide>
  </Root>
);

export default SectionTitle;
