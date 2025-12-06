import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgArrowLeft({ className = "" }: Props) {
  return React.cloneElement(
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
      <path
        stroke="#898989"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="M16.5 12H8m0 0 3.5 3.5M8 12l3.5-3.5"
      />
    </svg>,
    {
      className,
      fill: "currentColor",
    }
  );
}
