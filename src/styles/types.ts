export interface Typography {
  size: number;
  height: number;
  family: string;
}

export type ColorVariant =
  | "blue-default"
  | "blue-strong"
  | "blue-weak"
  | "neutral-inverted"
  | "neutral-default"
  | "neutral-strong"
  | "neutral-weak";

export type FontVariant = "regular" | "medium" | "semi-bold";

export type TypographyVariant =
  | "display-xl-regular"
  | "display-l-regular"
  | "display-md-regular"
  | "display-sm-regular"
  | "heading-l-regular"
  | "heading-md-regular"
  | "heading-sm-regular"
  | "body-l-regular"
  | "body-md-regular"
  | "body-sm-regular"
  | "caption-regular";
