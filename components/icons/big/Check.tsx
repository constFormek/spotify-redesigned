import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgCheck({ className = "" }: Props) {
  return React.cloneElement(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 41 41"
    >
      <circle
        cx={20.584}
        cy={20.081}
        r={10.1}
        stroke="currentColor"
        strokeWidth={1.8}
      />
    </svg>,
    {
      className,
      width: "1em",
      height: "1em",
      fill: "none",
      stroke: "currentColor",
    }
  );
}
