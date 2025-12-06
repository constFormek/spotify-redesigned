import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgPauseSimple({ className = "" }: Props) {
  return React.cloneElement(
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
      <path
        stroke="#898989"
        strokeLinecap="round"
        strokeWidth={2}
        d="M10 9v6M14 9v6"
      />
    </svg>,
    {
      className,
      fill: "currentColor",
    }
  );
}
