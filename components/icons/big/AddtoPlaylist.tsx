import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgAddtoPlaylist({ className = "" }: Props) {
  return React.cloneElement(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 41 41"
    >
      <rect
        width={20}
        height={20}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={2}
        rx={3}
        transform="matrix(1 0 0 -1 9.827 31.33)"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.827 11.33h16a3 3 0 0 0-3-3h-10a3 3 0 0 0-3 3Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.021}
        d="M15.827 21.33h4m4 0h-4m0 0v-4m0 4v4"
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
