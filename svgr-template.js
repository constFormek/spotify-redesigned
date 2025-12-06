module.exports = function template({ componentName, jsx }, { tpl }) {
  return tpl`
import * as React from "react";

type Props = {
  className?: string,
};

export default function ${componentName}({ className = "" }: Props) {
  // Detect if user applies a color class (Tailwind text-*)
  const shouldOverrideColor = /text-|fill-|stroke-/.test(className);

  return React.cloneElement(
    ${jsx},
    {
      className,
      fill: "none",
      // if user apply class text-*, replace stroke with currentColor
      stroke: shouldOverrideColor ? "currentColor" : undefined,
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
    }
  );
}
`;
};
