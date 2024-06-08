import { Text } from "../text";
import { ICardText } from "./card.types";
import React from "react";

export const CardText: React.FC<ICardText> = (props) => {
  return <Text.Root {...props} />;
};
