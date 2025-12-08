import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgAdd({ className = "" }: Props) {
  return React.cloneElement(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle cx={12} cy={12} r={5.5} stroke="currentColor" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.551 11.989H11.99m-2.561 0h2.56m0 0V9.428m0 2.561v2.561"
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
