import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgArrowRight({ className = "" }: Props) {
  return React.cloneElement(
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
      <path
        stroke="#898989"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="M8 12h8.5m0 0L13 8.5m3.5 3.5L13 15.5"
      />
    </svg>,
    {
      className,
      fill: "currentColor",
    }
  );
}
