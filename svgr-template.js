export default function template(
  { componentName, jsx },
  { tpl }
) {
  return tpl`
import * as React from "react";

type Props = {
  className?: string;
};

export default function ${componentName}({ className = "" }: Props) {
  return React.cloneElement(
    ${jsx},
    {
      className,
      width: "1em",
      height: "1em",
      fill: "none",
      stroke: "currentColor",
    }
  );
}
`;
}
