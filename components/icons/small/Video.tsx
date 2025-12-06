import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgVideo({ className = "" }: Props) {
  // Detect if user applies a color class (Tailwind text-*)
  const shouldOverrideColor = /text-|fill-|stroke-/.test(className);
  return React.cloneElement(
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
      <rect
        width={14}
        height={11.333}
        stroke="#898989"
        strokeLinejoin="round"
        strokeWidth={1.2}
        rx={2.667}
        transform="matrix(1 0 0 -1 5 17.918)"
      />
      <path
        fill="#898989"
        d="M10.333 10.457v3.588c0 .247.261.409.483.298l3.588-1.794a.333.333 0 0 0 0-.596l-3.588-1.794a.333.333 0 0 0-.483.298"
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
