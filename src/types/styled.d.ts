import "styled-components";
import { theme } from "../styles/theme";

declare module "styled-components" {
  type ApplicationTheme = typeof theme;
  export interface DefaultTheme extends ApplicationTheme {}
}
