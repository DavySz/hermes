import React from "react";
import * as S from "./row.styles";
import { IRowRoot } from "./row.types";

export const RowRoot: React.FC<IRowRoot> = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};
