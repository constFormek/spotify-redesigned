import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgArtist({ className = "" }: Props) {
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
        strokeWidth={1.2}
        d="M14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="m10 12-2.11 1.406A2 2 0 0 0 7 15.07v.997c0 .515.418.933.933.933H12"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 8v4.5m0 0v2.235c0 .445-.317.833-.761.819C15.003 15.53 14 15.267 14 14c0-2 2.5-1.5 2.5-1.5"
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
