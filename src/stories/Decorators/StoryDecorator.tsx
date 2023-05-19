import { styled } from "@mui/material";
import MuiBox from "@mui/material/Box";
import MuiTypography from "@mui/material/Typography";
import React from "react";

export type RenderArray<ComponentsProps> = {
  title: string;
  props?: ComponentsProps;
};

type StoryDecoratorProp = {
  Component: React.FunctionComponent;
  items: RenderArray<{}>[];
};

const Root = styled(MuiBox)`
  display: flex;
  flex-direction: column;
`;

const Column = styled(MuiBox)`
  display: flex;
  flex-direction: column;
  > * {
    margin: ${({ theme }) => theme.spacing(2, 0)};
  }
`;

const ItemContainer = styled(MuiBox)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  p {
    color: ${({ theme }) => theme.palette.primary.light};
  }
`;

const StoryDecorator = ({ Component, items }: StoryDecoratorProp) => (
  <Root>
    <Column>
      {items.map(({ title, props }) => (
        <ItemContainer>
          <MuiTypography key={title} variant="body1">
            {title}
          </MuiTypography>
          {React.cloneElement(<Component />, { ...props })}
        </ItemContainer>
      ))}
    </Column>
  </Root>
);

export default StoryDecorator;
