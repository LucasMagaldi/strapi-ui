import styled, { css } from "styled-components";
import { theme } from "../../styles/themes";

export const Wrapper = styled.div`
  ${(props) => css`
    background: ${theme.colors.secondaryBg};
  `}
`;
