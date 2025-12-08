import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgShowFilled({ className = "" }: Props) {
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
        strokeWidth={2}
        d="M20.403 27.003c-1.963-.014-3.759-.632-5.32-1.504m5.32 1.504v3.082m0-3.082c2.019.014 3.852-.614 5.43-1.504m6.035-5.654s-.646.993-1.804 2.24M8.84 19.687s.705 1.073 1.959 2.398m0 0L8.084 24.8m2.715-2.715c1.065 1.124 2.525 2.43 4.285 3.414m0 0-2 3.086m12.749-3.086 1.75 3.086m-1.75-3.086c1.756-.99 3.198-2.303 4.23-3.414m0 0 2.52 2.52"
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
