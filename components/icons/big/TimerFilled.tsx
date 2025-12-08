import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgTimerFilled({ className = "" }: Props) {
  return React.cloneElement(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 41 41"
    >
      <circle
        cx={19.827}
        cy={21.336}
        r={10.1}
        stroke="currentColor"
        strokeWidth={1.8}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M19.827 14.336v5M23.827 8.336h-8"
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
