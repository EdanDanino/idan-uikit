import React, { ReactNode } from "react";
import { styled } from "@mui/material";
import MuiBox from "@mui/material/Box";

interface CenteredStoryProps {
  children: ReactNode;
}

const Root = styled(MuiBox)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CenteredStory = ({ children }: CenteredStoryProps) => (
  <Root>{children}</Root>
);
export default CenteredStory;
