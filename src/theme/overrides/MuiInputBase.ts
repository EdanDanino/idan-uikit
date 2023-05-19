import { Components } from "@mui/material/styles/components";

import theme from "../basicTheme";

const inputStyleOverrides: Components["MuiInputBase"] = {
  defaultProps: {
    size: "medium",
  },
  styleOverrides: {
    root: {
      backgroundColor: "transparent",
      color: theme.palette.text.primary,
      border: `2px solid ${theme.palette.primary.main}`,
      borderRadius: "8px",
      padding: theme.spacing(0, 1),
      transition: "all 0.2s ease-in-out",
      "input::-webkit-input-placeholder": {
        color: theme.palette.text.primary,
        padding: theme.spacing(4, 6),
      },
      "&.Mui-disabled": {
        color: theme.palette.disabled.main,
        border: `2px solid ${theme.palette.disabled.main}`,
        cursor: "not-allowed",
        pointerEvents: "auto",
        ":focus": {
          border: `2px solid ${theme.palette.disabled.main}`,
        },
        "input::-webkit-input-placeholder": {
          color: theme.palette.disabled.main,
        },
      },
      ":hover": {
        backgroundColor: theme.palette.hover.main,
      },
      ":focus-within": {
        border: `2px solid ${theme.palette.text.primary}`,
      },
      "&.Mui-error": {
        border: `2px solid ${theme.palette.error.main}`,
      },
    },
  },
};

export default inputStyleOverrides;
