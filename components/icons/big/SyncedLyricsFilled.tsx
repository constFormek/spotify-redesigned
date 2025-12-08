import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgSyncedLyricsFilled({ className = "" }: Props) {
  return React.cloneElement(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 41 41"
    >
      <path
        stroke="#1ED760"
        strokeLinecap="round"
        strokeWidth={2}
        d="M11.076 12.826h4.656M11.076 19.049h4.656"
      />
      <path
        stroke="#1ED760"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.965 10.826a9.11 9.11 0 1 1 0 18.221s-5.333 0-8-4.442"
      />
      <path
        stroke="#1ED760"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21.171 14.383v5.555l4.683 2.89"
      />
      <circle cx={20.076} cy={35.826} r={2} fill="#1ED760" />
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
