import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgAddToQueue({ className = "" }: Props) {
  return React.cloneElement(
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
      <path
        stroke="#898989"
        strokeLinecap="round"
        strokeWidth={1.4}
        d="M11.5 7H8.667a1.667 1.667 0 1 0 0 3.333H11.5"
      />
      <path
        stroke="#898989"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
        d="M7 13.666h10M7 17h10"
      />
      <path
        stroke="#898989"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="M14 8.5h1.5m1.5 0h-1.5m0 0V7m0 1.5V10"
      />
    </svg>,
    {
      className,
      fill: "currentColor",
    }
  );
}
