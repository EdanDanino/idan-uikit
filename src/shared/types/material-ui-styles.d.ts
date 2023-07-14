import { PaletteColor, PaletteColorOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    disabled: PaletteColor;
    hover: PaletteColor;
    shadow: PaletteColor;
  }

  interface PaletteOptions {
    disabled: PaletteColorOptions;
    hover: PaletteColorOptions;
    shadow: PaletteColorOptions;
  }

  interface TypographyVariants {
    placeholder: React.CSSProperties;
    button2: React.CSSProperties;
    button3: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    placeholder?: React.CSSProperties;
    button2: React.CSSProperties;
    button3: React.CSSProperties;
  }

  declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
      h4: false;
      h5: false;
      h6: false;
      caption: false;
      inherit: false;
    }
  }

  declare module "@mui/material/Button" {
    interface ButtonPropsVariantOverrides {
      primary: false;
      outlined: true;
      contained: false;
    }
  }
}
