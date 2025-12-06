import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgAlbum({ className = "" }: Props) {
  // Detect if user applies a color class (Tailwind text-*)
  const shouldOverrideColor = /text-|fill-|stroke-/.test(className);
  return React.cloneElement(
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
      <circle cx={12} cy={12} r={1.636} stroke="#898989" strokeWidth={1.2} />
      <path
        stroke="#898989"
        strokeLinecap="round"
        strokeWidth={1.2}
        d="M12 18a6 6 0 1 1 4.384-10.097"
      />
      <path
        stroke="#898989"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.399 10.44v4.5m0 0v2.234c0 .445-.317.833-.762.82-.735-.024-1.738-.288-1.738-1.555 0-2 2.5-1.5 2.5-1.5"
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
