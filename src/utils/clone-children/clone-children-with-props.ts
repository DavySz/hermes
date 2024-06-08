import { Children, ReactNode, cloneElement, isValidElement } from "react";

import { ICloneChildren } from "./types";

export function cloneChildrenWithProps<P>({
  props,
  children,
}: ICloneChildren<P>): ReactNode {
  return Children.map<ReactNode, ReactNode>(children, (child) =>
    cloneChild(child, props)
  );
}

function cloneChild(child: ReactNode, props: any): ReactNode {
  if (isValidElement(child)) return cloneElement(child, props);

  return child;
}
