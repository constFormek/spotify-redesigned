import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgNext({ className = "" }: Props) {
  return React.cloneElement(
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
      <path
        stroke="#898989"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M15 9v6"
      />
      <path
        fill="#898989"
        d="M13.807 11.235a.91.91 0 0 1 0 1.53L9.65 15.432a.91.91 0 0 1-1.4-.765V9.333a.91.91 0 0 1 1.4-.765z"
      />
    </svg>,
    {
      className,
      fill: "currentColor",
    }
  );
}
