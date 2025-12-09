import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgPause({ className = "" }: Props) {
  return React.cloneElement(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 41 41"
    >
      <circle cx={20.205} cy={20.205} r={20.205} fill="#1ED760" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={3.368}
        d="M16.838 15.154v10.103M23.573 15.154v10.103"
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
