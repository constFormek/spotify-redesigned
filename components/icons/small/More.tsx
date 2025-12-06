import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgMore({ className = "" }: Props) {
  return React.cloneElement(
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
      <circle cx={7} cy={12} r={1} fill="#898989" />
      <circle cx={12} cy={12} r={1} fill="#898989" />
      <circle cx={17} cy={12} r={1} fill="#898989" />
    </svg>,
    {
      className,
      fill: "currentColor",
    }
  );
}
