import styled, { css } from "styled-components";
import { theme } from "../../styles/themes";

export const Title = styled.h1`
  ${() => css`
    background-color: ${theme.colors.mainBg};
  `}
`;
