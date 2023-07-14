import React from "react";
import MuiBox from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const Root = styled(MuiBox)`
  display: flex;
  margin: ${({ theme }) => theme.spacing(0, 20)};
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

const ItemsContainer = styled(MuiBox)`
  display: flex;
  gap: ${({ theme }) => theme.spacing(25)};
  > span {
    cursor: pointer;
  }
`;

type itemsType = {
  label: string;
  onClick: () => void;
};

export type HeaderProps = {
  Logo: React.ReactNode;
  items: itemsType[];
};

const Header = ({ Logo, items }: HeaderProps) => {
  return (
    <Root>
      <MuiBox>{Logo}</MuiBox>
      <ItemsContainer>
        {items.map(({ label, onClick }) => (
          <Typography variant="Link" onClick={onClick}>
            {label}
          </Typography>
        ))}
      </ItemsContainer>
    </Root>
  );
};

export default Header;
