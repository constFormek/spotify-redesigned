import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgLike({ className = "" }: Props) {
  // Detect if user applies a color class (Tailwind text-*)
  const shouldOverrideColor = /text-|fill-|stroke-/.test(className);
  return React.cloneElement(
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
      <path
        stroke="#898989"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="M13.107 8.058 12 9.13l-1.107-1.072a2.855 2.855 0 0 0-4.106.137c-1.05 1.164-1.196 2.907-.244 4.153q.176.232.342.435c.692.85 2.204 2.334 2.961 3.13.56.588 1.063 1.08 1.441 1.437.4.377 1.018.369 1.42-.008.698-.656 1.77-1.679 2.524-2.472.757-.797 1.192-1.237 1.884-2.087q.166-.203.342-.434c.952-1.247.807-2.99-.244-4.154a2.855 2.855 0 0 0-4.106-.137"
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
