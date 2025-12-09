import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgEdit({ className = "" }: Props) {
  return React.cloneElement(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 41 41"
    >
      <mask id="Edit_svg__a" fill="#fff">
        <path d="M17.235 26.428a1 1 0 0 1-1.415 0L13.7 24.306a1 1 0 0 1 0-1.414L27.488 9.104a2.5 2.5 0 1 1 3.535 3.535z" />
      </mask>
      <path
        stroke="currentColor"
        strokeWidth={4}
        d="M17.235 26.428a1 1 0 0 1-1.415 0L13.7 24.306a1 1 0 0 1 0-1.414L27.488 9.104a2.5 2.5 0 1 1 3.535 3.535z"
        mask="url(#Edit_svg__a)"
      />
      <path
        stroke="#E0E0E0"
        strokeLinecap="round"
        strokeOpacity={0.5}
        strokeWidth={2}
        d="m12.58 26.016 1.53 1.529-2.905 1.376z"
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
