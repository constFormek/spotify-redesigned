import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgCamera({ className = "" }: Props) {
  return React.cloneElement(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 41 41"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7.578 16.835v9.49a2.78 2.78 0 0 0 2.778 2.778h19.445a2.78 2.78 0 0 0 2.777-2.778v-9.49a2.78 2.78 0 0 0-2.777-2.778h-1.45c-.534 0-1.042-.23-1.393-.632l-1.934-2.209a1.85 1.85 0 0 0-1.394-.631H16.19c-.534 0-1.042.23-1.394.631l-1.934 2.209c-.351.402-.859.632-1.393.632h-1.112a2.78 2.78 0 0 0-2.778 2.778"
      />
      <circle
        cx={20.078}
        cy={20.306}
        r={4.167}
        stroke="currentColor"
        strokeWidth={2}
      />
    </svg>,
    {
      className,
      width: "1em",
      height: "1em",
      fill: "none",
      stroke: "currentColor",
    }
  );
}
