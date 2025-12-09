import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgEpisode({ className = "" }: Props) {
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
        d="M10.853 11.5v1.677a2.647 2.647 0 0 0 5.294 0V9.648A2.647 2.647 0 0 0 13.5 7M8.5 13.47s.588 4.707 5 4.707m0 0c4.412 0 5-4.706 5-4.706m-5 4.706v2.058"
      />
      <circle cx={8} cy={7} r={3} fill="currentColor" />
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
