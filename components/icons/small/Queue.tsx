import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgQueue({ className = "" }: Props) {
  // Detect if user applies a color class (Tailwind text-*)
  const shouldOverrideColor = /text-|fill-|stroke-/.test(className);
  return React.cloneElement(
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
      <path
        stroke="#898989"
        strokeWidth={1.4}
        d="M7 8.667C7 7.747 7.746 7 8.667 7h6.666a1.667 1.667 0 1 1 0 3.333H8.667C7.747 10.333 7 9.587 7 8.667Z"
      />
      <path
        stroke="#898989"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
        d="M7 13.666h10M7 17h10"
      />
    </svg>,
    {
      className,
      fill: "none",
      // if user apply class text-*, replace stroke with currentColor
      stroke: shouldOverrideColor ? "currentColor" : undefined,
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
    }
  );
}
