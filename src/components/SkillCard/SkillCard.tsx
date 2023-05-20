import React, { ReactNode } from "react";
import { styled } from "@mui/material";
import MuiBox from "@mui/material/Box";
import MuiTypography from "@mui/material/Typography";

const Root = styled(MuiBox)`
  display: flex;
  width: 410px;
  height: 490px;
  border: 6px solid ${({ theme }) => theme.palette.text.primary};
  border-radius: 10px;
  align-items: center;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(4)};
`;
const Title = styled(MuiTypography)`
  margin-bottom: ${({ theme }) => theme.spacing(5)};
`;
const Description = styled(MuiTypography)`
  max-height: 180px;
  overflow-y: auto;
  overflow-x: none;
`;
const LearnMore = styled(MuiTypography)`
  margin: auto;
  text-decoration-line: underline;
  cursor: pointer;
`;

export interface SkillCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  learnMore?: ReactNode;
}

const SkillCard = ({ description, icon, title, learnMore }: SkillCardProps) => {
  return (
    <Root>
      {icon}
      <Title variant="h3">{title}</Title>
      <Description variant="body2">{description}</Description>
      {learnMore && <LearnMore variant="overline">{learnMore}</LearnMore>}
    </Root>
  );
};

export default SkillCard;
