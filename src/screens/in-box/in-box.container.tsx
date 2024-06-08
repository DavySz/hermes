import React from "react";

import * as S from "./in-box.styles";
import { CardComposition } from "../../compositions/card-composition/card-composition";

export const InBox: React.FC = () => {
  return (
    <S.Container>
      <CardComposition title="salve" />
    </S.Container>
  );
};
