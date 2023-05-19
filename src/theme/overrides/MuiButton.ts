/* eslint-disable @typescript-eslint/ban-ts-comment */
import { alpha } from "@mui/material/styles";
import { Components } from "@mui/material/styles/components";

import theme from "../basicTheme";
import typography from "../typography";

const buttonStyleOverrides: Components["MuiButton"] = {
  defaultProps: {
    disableRipple: true,
    variant: "outlined",
  },
  styleOverrides: {
    root: {
      backgroundColor: "transparent",
      ...typography.button,
      color: theme.palette.text.primary,
      padding: theme.spacing(4, 17),
      border: `4px solid ${theme.palette.primary.main}`,
      borderRadius: "4px",
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
    startIcon: {
      marginRight: theme.spacing(4),
    },
    endIcon: {
      marginLeft: theme.spacing(4),
    },
  },
};

export default buttonStyleOverrides;
