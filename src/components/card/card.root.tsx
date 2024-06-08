import React from "react";
import * as S from "./card.styles";
import { ICardRoot } from "./card.types";

export const CardRoot: React.FC<ICardRoot> = ({ children }) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};
