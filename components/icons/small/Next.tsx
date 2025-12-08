import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgNext({ className = "" }: Props) {
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
        d="M15 9v6"
      />
      <path
        fill="currentColor"
        d="M13.807 11.235a.91.91 0 0 1 0 1.53L9.65 15.432a.91.91 0 0 1-1.4-.765V9.333a.91.91 0 0 1 1.4-.765z"
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
