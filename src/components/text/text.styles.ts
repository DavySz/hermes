import styled, { css } from "styled-components/native";
import { colorMapper } from "../../styles/color-mapper";
import { TypographyVariant } from "../../styles/types";
import { typography } from "../../styles/typography";
import { WrapperRoot } from "./text.types";

export const getTypography = (variant: TypographyVariant) => {
  return css`
    font-size: ${typography[variant].size}px;
    font-family: ${typography[variant].family};
    line-height: ${typography[variant].height}px;
  `;
};

export const Wrapper = styled.Text<WrapperRoot>`
  ${({ typography }) => getTypography(typography)};
  color: ${({ color }) => colorMapper(color)};
  text-align: ${({ align }) => align};
`;
