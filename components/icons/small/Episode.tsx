import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgEpisode({ className = "" }: Props) {
  // Detect if user applies a color class (Tailwind text-*)
  const shouldOverrideColor = /text-|fill-|stroke-/.test(className);
  return React.cloneElement(
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
      <path
        stroke="#898989"
        strokeLinecap="round"
        strokeWidth={1.2}
        d="M10.853 11.5v1.677a2.647 2.647 0 0 0 5.294 0V9.648A2.647 2.647 0 0 0 13.5 7M8.5 13.47s.588 4.707 5 4.707m0 0c4.412 0 5-4.706 5-4.706m-5 4.706v2.058"
      />
      <circle cx={8} cy={7} r={3} fill="#898989" />
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
