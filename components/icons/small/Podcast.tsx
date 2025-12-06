import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgPodcast({ className = "" }: Props) {
  // Detect if user applies a color class (Tailwind text-*)
  const shouldOverrideColor = /text-|fill-|stroke-/.test(className);
  return React.cloneElement(
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
      <path
        stroke="#898989"
        strokeLinecap="round"
        strokeWidth={1.2}
        d="M11.853 7.647v3.53a2.647 2.647 0 0 0 5.294 0V7.648a2.647 2.647 0 1 0-5.294 0ZM9.5 11.47s.588 4.707 5 4.707m0 0c4.412 0 5-4.706 5-4.706m-5 4.706v2.058M4.5 8H8M4.5 12H7M4.5 16H8"
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
