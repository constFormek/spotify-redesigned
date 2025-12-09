import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgAdjust({ className = "" }: Props) {
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
        strokeWidth={2}
        d="M19.827 13.086h-7a2 2 0 0 0 0 4h7"
      />
      <rect
        width={6.231}
        height={6.231}
        x={23.596}
        y={12.086}
        stroke="currentColor"
        strokeWidth={2}
        rx={3.115}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
        d="M20.827 27.316h7a2 2 0 1 0 0-4h-7"
      />
      <rect
        width={6.231}
        height={6.231}
        x={17.058}
        y={28.316}
        stroke="currentColor"
        strokeWidth={2}
        rx={3.115}
        transform="rotate(-180 17.058 28.316)"
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
