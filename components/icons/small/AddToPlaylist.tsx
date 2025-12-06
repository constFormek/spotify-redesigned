import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgAddToPlaylist({ className = "" }: Props) {
  // Detect if user applies a color class (Tailwind text-*)
  const shouldOverrideColor = /text-|fill-|stroke-/.test(className);
  return React.cloneElement(
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
      <rect
        width={12}
        height={12}
        stroke="#898989"
        strokeLinejoin="round"
        strokeWidth={1.13}
        rx={1.696}
        transform="matrix(1 0 0 -1 6 18.8)"
      />
      <path
        stroke="#898989"
        strokeLinejoin="round"
        strokeWidth={0.848}
        d="M7.2 6.8h9.6v-.104c0-.936-.76-1.695-1.696-1.695H8.896C7.959 5 7.2 5.76 7.2 6.696z"
      />
      <path
        stroke="#898989"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.142}
        d="M9.6 12.8H12m2.4 0H12m0 0v-2.4m0 2.4v2.4"
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
