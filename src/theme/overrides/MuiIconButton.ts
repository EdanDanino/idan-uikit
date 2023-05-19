import { Components } from "@mui/material/styles/components";

import theme from "../basicTheme";

const iconButtonStyleOverrides: Components["MuiIconButton"] = {
  defaultProps: {
    size: "medium",
  },
  styleOverrides: {
    root: {
      transition: "all 0.2s ease-in-out",
      ":hover": {
        backgroundColor: theme.palette.hover.main,
      },
      ":disabled": {
        color: theme.palette.disabled.main,
        cursor: "not-allowed",
        pointerEvents: "auto",
        ":hover": {
          backgroundColor: "transparent",
        },
      },
    },
    sizeSmall: {
      width: "44px",
      height: "44px",
    },
    sizeMedium: {
      width: "66px",
      height: "66px",
    },
    sizeLarge: {
      width: "88px",
      height: "88px",
    },
  },
};

export default iconButtonStyleOverrides;
