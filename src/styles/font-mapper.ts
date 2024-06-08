import { theme } from "./theme";
import { FontVariant } from "./types";

export function fontMapper(font: FontVariant) {
  const { fonts } = theme;

  const fontsMap: Record<FontVariant, string> = {
    "semi-bold": fonts["semi-bold"],
    regular: fonts.regular,
    medium: fonts.medium,
  };

  return fontsMap[font];
}
