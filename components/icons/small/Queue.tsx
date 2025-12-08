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
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeWidth={1.4}
        d="M7 8.667C7 7.747 7.746 7 8.667 7h6.666a1.667 1.667 0 1 1 0 3.333H8.667C7.747 10.333 7 9.587 7 8.667Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
        d="M7 13.666h10M7 17h10"
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
