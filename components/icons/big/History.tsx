import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgHistory({ className = "" }: Props) {
  return React.cloneElement(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 41 41"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.324 14.826v5.555l4.683 2.89"
      />
      <path
        stroke="currentColor"
        strokeWidth={2}
        d="M10.324 19.826c0 5.523 4.477 10 10 10s10-4.477 10-10-4.477-10-10-10"
      />
      <path
        stroke="currentColor"
        strokeDasharray="3 3"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.324 19.826c0-5.523 4.477-10 10-10"
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
