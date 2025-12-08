import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgRadio({ className = "" }: Props) {
  return React.cloneElement(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle cx={12} cy={12.001} r={1.167} fill="currentColor" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.167}
        d="M14.02 9.336a3.24 3.24 0 0 1 1.22 2.535 3.24 3.24 0 0 1-1.22 2.535m-4.04 0a3.24 3.24 0 0 1-1.22-2.535c0-.975.43-1.85 1.111-2.444M15.634 7.334a5.777 5.777 0 0 1 0 9.074m-7.268 0a5.778 5.778 0 0 1-.198-8.91"
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
