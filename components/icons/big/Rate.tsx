import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgRate({ className = "" }: Props) {
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
        strokeWidth={2}
        d="M19.413 10.983c.346-.81 1.493-.81 1.839 0l1.941 4.54a1 1 0 0 0 .83.602l4.918.444c.876.079 1.23 1.17.568 1.749l-3.718 3.25a1 1 0 0 0-.317.974l1.098 4.815c.196.858-.732 1.532-1.488 1.08l-4.239-2.531a1 1 0 0 0-1.025 0l-4.24 2.532c-.755.45-1.683-.223-1.487-1.081l1.097-4.814a1 1 0 0 0-.316-.976l-3.718-3.25c-.663-.578-.308-1.669.568-1.748l4.918-.444a1 1 0 0 0 .83-.602z"
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
