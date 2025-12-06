import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgMiniplayer({ className = "" }: Props) {
  // Detect if user applies a color class (Tailwind text-*)
  const shouldOverrideColor = /text-|fill-|stroke-/.test(className);
  return React.cloneElement(
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
      <g clipPath="url(#Miniplayer_svg__a)">
        <path
          fill="#898989"
          d="M11.5 13.5a1 1 0 0 1 1-1H17a1 1 0 0 1 1 1V16a1 1 0 0 1-1 1h-4.5a1 1 0 0 1-1-1z"
        />
        <path
          stroke="#898989"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          d="M10 16.5H7.5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1V11"
        />
      </g>
      <defs>
        <clipPath id="Miniplayer_svg__a">
          <path fill="#fff" d="M5 6h14v12H5z" />
        </clipPath>
      </defs>
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
