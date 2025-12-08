import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgLyrics({ className = "" }: Props) {
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
        d="M11.086 14.076h12M11.086 21.076h8M11.086 28.076h8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M29.086 13.076v8.934m0 0v4.666c0 .75-.532 1.399-1.282 1.4-1.482.003-3.718-.433-3.718-3.088 0-3.97 5-2.978 5-2.978"
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
