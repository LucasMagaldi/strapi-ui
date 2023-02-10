import styled, { css } from "styled-components";
import { theme } from "../../styles/themes";

export const Heading = styled.h1`
  color: #000;
`;

export const Wrapper = styled.div`
  ${(props) => css`
    background: ${theme.colors.secondaryBg};
  `}

  &:hover {
    background: yellow;
  }

  > ${Heading} {
    color: yellow;
  }
`;
