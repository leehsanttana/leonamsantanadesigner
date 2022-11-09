import { createGlobalStyle } from "styled-components";
import Theme from "./defaultTheme";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0; 
    font-family: ${(props) => props.theme.font[0]}, ${(props) =>
  props.theme.font[1]} ;
  }

  h1, h2, h3, h4, h5, h6 {
    letter-spacing: ${(props) => props.theme.letterSpacing};
    line-height: ${(props) => props.theme.lineHeight.size01};
  }

  h1, h5 {
    font-weight: ${(props) => props.theme.fontWeight.bold};
  }

  h2, h4, button {
    font-weight: ${(props) => props.theme.fontWeight.medium};
  }

  h3, h6, p, span, label {
    font-weight: ${(props) => props.theme.fontWeight.regular};
  }

  h1 {
    font-size: ${(props) => props.theme.fontSize.size01};
  }

  h2 {
    font-size: ${(props) => props.theme.fontSize.size02};
  }

  h3 {
    font-size: ${(props) => props.theme.fontSize.size03};
  }

  h4 {
    font-size: ${(props) => props.theme.fontSize.size04};
  }

  h5 {
    font-size: ${(props) => props.theme.fontSize.size05};
  }

  h6 {
    font-size: ${(props) => props.theme.fontSize.size06};
  }
`;
