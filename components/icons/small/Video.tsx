import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgVideo({ className = "" }: Props) {
  return React.cloneElement(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
    >
      <rect
        width={14}
        height={11.333}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.2}
        rx={2.667}
        transform="matrix(1 0 0 -1 5 17.918)"
      />
      <path
        fill="currentColor"
        d="M10.333 10.457v3.588c0 .247.261.409.483.298l3.588-1.794a.333.333 0 0 0 0-.596l-3.588-1.794a.333.333 0 0 0-.483.298"
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
