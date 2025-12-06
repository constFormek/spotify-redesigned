import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgClose({ className = "" }: Props) {
  return React.cloneElement(
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
      <path
        stroke="#898989"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="m15 9-3 3m-3 3 3-3m0 0L9 9m3 3 3 3"
      />
    </svg>,
    {
      className,
      fill: "currentColor",
    }
  );
}
