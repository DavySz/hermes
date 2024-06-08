import { ColorVariant, TypographyVariant } from "../../styles/types";

export type TextAlign = "center" | "justify" | "right" | "left";

export interface WrapperRoot {
  typography: TypographyVariant;
  color: ColorVariant;
  align?: TextAlign;
}

export interface IText extends WrapperRoot {
  children: React.ReactNode;
}
