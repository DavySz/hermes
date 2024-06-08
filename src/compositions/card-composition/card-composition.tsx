import { Card } from "../../components/card";
import { Row } from "../../components/row";
import { ICardComposition } from "./card-composition.types";
import React from "react";

export const CardComposition: React.FC<ICardComposition> = ({ title }) => {
  return (
    <Card.Root>
      <Row.Root>
        <Card.Text color="neutral-strong" typography="body-sm-regular">
          {title}
        </Card.Text>
      </Row.Root>
      <Card.Text color="neutral-strong" typography="body-sm-regular">
        {title}
      </Card.Text>
    </Card.Root>
  );
};
