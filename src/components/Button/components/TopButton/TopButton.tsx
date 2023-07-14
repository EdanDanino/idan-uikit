import MuiBox from "@mui/material/Box";
import { keyframes, styled } from "@mui/material/styles";
import { Top } from "../../../../icons";

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const Root = styled(MuiBox)`
  display: flex;
  position: relative;
  width: fit-content;
  cursor: pointer;
  animation: ${pulseAnimation} 2s infinite;
`;

export type TopButtonProps = {
  onClick: () => void;
};

const TopButton = ({ onClick }: TopButtonProps) => {
  return (
    <Root onClick={onClick}>
      <Top />
    </Root>
  );
};

export default TopButton;
