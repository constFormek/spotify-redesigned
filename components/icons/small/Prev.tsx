import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgPrev({ className = "" }: Props) {
  return React.cloneElement(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M9 9v6"
      />
      <path
        fill="currentColor"
        d="M10.193 12.765a.91.91 0 0 1 0-1.53l4.157-2.667a.91.91 0 0 1 1.4.765v5.334a.91.91 0 0 1-1.4.765z"
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
