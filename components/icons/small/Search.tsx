import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgSearch({ className = "" }: Props) {
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
        strokeWidth={1.2}
        d="M14.57 14.5a5 5 0 1 0-7.141-7 5 5 0 0 0 7.142 7Zm0 0 2.93 3"
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
