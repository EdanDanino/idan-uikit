import { createTheme } from "@mui/material";
import palette from "./palette";
import typography from "./typography";

const basicTheme = createTheme({
  palette,
  typography,
  spacing: 4,
});

export default basicTheme;
