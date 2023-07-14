import React, { useMemo } from "react";
import MuiBox from "@mui/material/Box";
import { alpha, styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button, { ButtonProps } from "@mui/material/Button";

type FooterButton = Pick<
  ButtonProps,
  "onClick" | "children" | "startIcon" | "endIcon"
>;
export interface ExperienceCardProps {
  title: React.ReactNode;
  body: React.ReactNode;
  years?: string;
  footerButton?: FooterButton;
  skills: React.ReactNode;
}

const Root = styled(MuiBox)`
  display: flex;
  width: 1080px;
  height: 680px;
  border-radius: 3px;
  box-shadow: -6px -6px 4px ${({ theme }) => theme.palette.shadow.main},
    5px 6px 8px ${({ theme }) => theme.palette.shadow.main};
  border: 6px solid ${({ theme }) => theme.palette.primary.dark};
  background-color: ${({ theme }) => alpha(theme.palette.primary.light, 0.2)};
  color: ${({ theme }) => theme.palette.text.primary};
  padding: ${({ theme }) => theme.spacing(11.5, 8)};
  flex-direction: column;
`;

const Header = styled(MuiBox)`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const Body = styled(MuiBox)`
  display: flex;
  margin: ${({ theme }) => theme.spacing(24, 0, "auto", 0)};
  justify-content: center;
  overflow: auto;
  text-align: center;
  max-height: 249px;
  > * {
    max-height: 290px;
  }
`;
const Footer = styled(MuiBox)`
  display: flex;
  justify-content: space-between;
  height: 85px;
  align-items: center;
`;
const IconsContainer = styled(MuiBox)`
  display: flex;
  gap: 14px;
`;

const ExperienceCard = ({
  body,
  title,
  years,
  skills,
  footerButton,
}: ExperienceCardProps) => {
  const handledTitle = useMemo(
    () =>
      typeof title === "string" ? (
        <Typography variant="h2">{title}</Typography>
      ) : (
        title
      ),
    [title]
  );

  const handledBody = useMemo(
    () =>
      typeof body === "string" ? (
        <Typography variant="body1">{body}</Typography>
      ) : (
        body
      ),
    [body]
  );

  return (
    <Root>
      <Header>
        <MuiBox>{handledTitle}</MuiBox>
        <MuiBox>{years}</MuiBox>
      </Header>
      <Body>{handledBody}</Body>
      <Footer>
        <IconsContainer>{skills}</IconsContainer>
        {footerButton && <Button {...footerButton} />}
      </Footer>
    </Root>
  );
};
export default ExperienceCard;
