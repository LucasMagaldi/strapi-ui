import { createGlobalStyle, css } from "styled-components";
import { theme } from "./themes";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }

  body{
    ${() => css`
      background: ${theme.colors.mainBg};
    `}
  }
  
`;

export default GlobalStyles;
