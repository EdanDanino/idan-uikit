// import React from "react";
import { PaletteColor, PaletteColorOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    disabled: PaletteColor;
  }

  interface PaletteOptions {
    disabled: PaletteColorOptions;
  }

  interface TypographyVariants {
    placeholder: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    placeholder?: React.CSSProperties;
  }

  declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
      h3: false;
      h4: false;
      h5: false;
      h6: false;
      caption: false;
      overline: false;
      inherit: false;
    }
  }
}
