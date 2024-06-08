import { theme } from "./theme";
import { Typography, TypographyVariant } from "./types";

function calculateHeightValueBySize(size: number, heightPercentage: number) {
  return size * (heightPercentage / 100);
}

export const typography: Record<TypographyVariant, Typography> = {
  "display-xl-regular": {
    size: 96,
    family: theme.fonts.regular,
    height: calculateHeightValueBySize(96, 100),
  },

  "display-l-regular": {
    size: 64,
    family: theme.fonts.regular,
    height: calculateHeightValueBySize(64, 110),
  },
  "display-md-regular": {
    size: 48,
    family: theme.fonts.regular,
    height: calculateHeightValueBySize(48, 110),
  },
  "display-sm-regular": {
    size: 40,
    family: theme.fonts.regular,
    height: calculateHeightValueBySize(40, 110),
  },
  "heading-l-regular": {
    size: 32,
    family: theme.fonts.regular,
    height: calculateHeightValueBySize(32, 130),
  },
  "heading-md-regular": {
    size: 24,
    family: theme.fonts.regular,
    height: calculateHeightValueBySize(24, 130),
  },
  "heading-sm-regular": {
    size: 20,
    family: theme.fonts.regular,
    height: calculateHeightValueBySize(20, 130),
  },
  "body-l-regular": {
    size: 18,
    family: theme.fonts.medium,
    height: calculateHeightValueBySize(18, 150),
  },
  "body-md-regular": {
    size: 16,
    family: theme.fonts.medium,
    height: calculateHeightValueBySize(16, 150),
  },
  "body-sm-regular": {
    size: 14,
    family: theme.fonts.medium,
    height: calculateHeightValueBySize(14, 150),
  },
  "caption-regular": {
    size: 12,
    family: theme.fonts.medium,
    height: calculateHeightValueBySize(12, 160),
  },
};
