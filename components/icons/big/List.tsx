import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgList({ className = "" }: Props) {
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
        d="M16.584 14.08h12M11 14.08h1M16.584 20.08h12M11 20.08h1M16.584 26.08h12M11 26.08h1"
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
