import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgAdd({ className = "" }: Props) {
  return React.cloneElement(
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
      <circle cx={12} cy={12} r={5.5} stroke="#898989" />
      <path
        stroke="#898989"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.551 11.989H11.99m-2.561 0h2.56m0 0V9.428m0 2.561v2.561"
      />
    </svg>,
    {
      className,
      fill: "currentColor",
    }
  );
}
