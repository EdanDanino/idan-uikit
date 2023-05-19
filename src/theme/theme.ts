import { createTheme } from "@mui/material/styles";

import basicTheme from "./basicTheme";
import * as overrides from "./overrides";

const theme = createTheme({ components: { ...overrides } }, basicTheme);

export default theme;
