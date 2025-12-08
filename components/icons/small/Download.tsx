import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgDownload({ className = "" }: Props) {
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
        d="M12 9v5.857m0 0 2-2m-2 2-2-2"
      />
      <circle cx={12} cy={12} r={5.5} stroke="currentColor" />
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
