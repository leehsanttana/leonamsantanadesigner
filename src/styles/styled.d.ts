import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      yellow: string;
      orange: string;
      brown: string;
      white: string;
      black: string;
    };
    font: string[];
    fontSize: {
      size01: string;
      size02: string;
      size03: string;
      size04: string;
      size05: string;
      size06: string;
      size07: string;
      size08: string;
    };
    fontWeight: {
      regular: string;
      medium: string;
      bold: string;
    };
    lineHeight: {
      size01: string;
      size02: string;
    };
    letterSpacing: string;
  }
}
