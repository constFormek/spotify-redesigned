import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgPin({ className = "" }: Props) {
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
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="m17.606 10.2.974.974m-.974-.975L13.3 14.503a.5.5 0 0 0-.142.294l-.215 1.768a.5.5 0 0 1-.85.294L9.57 14.335m8.035-4.136-3.9-3.9m-.975-.975.976.975m0 0L9.4 10.603a.5.5 0 0 1-.293.143l-1.769.215a.5.5 0 0 0-.293.85l2.524 2.524m0 0-3.32 3.32"
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
