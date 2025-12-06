module.exports = function template({ componentName, jsx }, { tpl }) {
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
      fill: "currentColor"
    }
  );
}
`;
};
