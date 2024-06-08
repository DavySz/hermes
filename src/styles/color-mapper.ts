import { theme } from "./theme";
import { ColorVariant } from "./types";

export function colorMapper(color: ColorVariant) {
  const { colors } = theme;

  const colorsMap: Record<ColorVariant, string> = {
    "blue-default": colors.blue.default,
    "blue-strong": colors.blue.strong,
    "blue-weak": colors.blue.weak,
    "neutral-inverted": colors.neutral.inverted,
    "neutral-default": colors.neutral.default,
    "neutral-strong": colors.neutral.strong,
    "neutral-weak": colors.neutral.weak,
  };

  return colorsMap[color];
}
