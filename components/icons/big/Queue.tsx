import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgQueue({ className = "" }: Props) {
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
        strokeWidth={2.357}
        d="M11.787 14.592a2.806 2.806 0 0 1 2.806-2.807h11.225a2.806 2.806 0 1 1 0 5.613H14.593a2.806 2.806 0 0 1-2.806-2.806Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.357}
        d="M11.787 23.012h16.837M11.787 28.623h16.837"
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
