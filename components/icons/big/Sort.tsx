import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgSort({ className = "" }: Props) {
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
        strokeLinejoin="round"
        strokeWidth={2.021}
        d="M26.978 26.805V13.53m0 0-4.643 4.643m4.643-4.643 4.643 4.643M13.978 13.805v13.276m0 0 4.643-4.643m-4.643 4.643-4.643-4.643"
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
