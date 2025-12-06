import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgPlay({ className = "" }: Props) {
  // Detect if user applies a color class (Tailwind text-*)
  const shouldOverrideColor = /text-|fill-|stroke-/.test(className);
  return React.cloneElement(
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
      <circle cx={12} cy={12} r={12} fill="#1ED760" />
      <path
        fill="#000"
        d="M15.636 11.213a.91.91 0 0 1 0 1.574l-4.772 2.756a.91.91 0 0 1-1.364-.787V9.244a.91.91 0 0 1 1.364-.787z"
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
