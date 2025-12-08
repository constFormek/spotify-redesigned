import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgDiscover({ className = "" }: Props) {
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
        strokeWidth={2}
        d="M20.59 10.823a13 13 0 0 0 9.002 9.002l1.795.504-1.795.504a13 13 0 0 0-9.002 9.002l-.504 1.795-.503-1.795a13 13 0 0 0-9.002-9.002l-1.795-.504 1.795-.504a13 13 0 0 0 9.002-9.002l.503-1.795z"
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
