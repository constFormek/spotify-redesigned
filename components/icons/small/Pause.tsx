import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgPause({ className = "" }: Props) {
  return React.cloneElement(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle cx={12} cy={12} r={12} fill="#1ED760" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M10 9v6M14 9v6"
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
