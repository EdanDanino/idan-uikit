import { Components } from "@mui/material/styles/components";

import theme from "../basicTheme";
import typography from "../typography";

const buttonStyleOverrides: Components["MuiButton"] = {
  defaultProps: {
    variant: "outlined",
    size: "large",
  },
  styleOverrides: {
    root: {
      backgroundColor: "transparent",
      color: theme.palette.text.primary,
      border: `4px solid ${theme.palette.primary.main}`,
      borderRadius: "4px",
      transition: "all 0.2s ease-in-out",
      ":hover": {
        border: `4px solid ${theme.palette.primary.main}`,
        backgroundColor: theme.palette.hover.main,
      },
      ":disabled": {
        border: `4px solid ${theme.palette.disabled.main}`,
        color: theme.palette.disabled.main,
        cursor: "not-allowed",
        pointerEvents: "auto",
        ":hover": {
          border: `4px solid ${theme.palette.disabled.main}`,
          backgroundColor: "transparent",
        },
      },
    },
    sizeLarge: {
      ...typography.button,
      padding: theme.spacing(4, 16),
    },
    sizeMedium: {
      ...typography.button2,
      padding: theme.spacing(4, 10),
    },
    sizeSmall: {
      ...typography.button3,
      padding: theme.spacing(4, 4),
    },
    startIcon: {
      marginRight: theme.spacing(4),
    },
    endIcon: {
      marginLeft: theme.spacing(4),
    },
  },
};

export default buttonStyleOverrides;
