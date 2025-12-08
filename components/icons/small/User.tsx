import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgUser({ className = "" }: Props) {
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
        d="m7.89 13.406.446-.297a6.605 6.605 0 0 1 7.328 0l.445.297A2 2 0 0 1 17 15.07v.997a.933.933 0 0 1-.933.933H7.933A.933.933 0 0 1 7 16.067v-.997a2 2 0 0 1 .89-1.664"
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
