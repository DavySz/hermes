import * as S from "./text.styles";
import { IText } from "./text.types";
import React from "react";

export const TextRoot: React.FC<IText> = (props) => {
  return <S.Wrapper {...props} />;
};
