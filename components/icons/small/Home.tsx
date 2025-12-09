import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgHome({ className = "" }: Props) {
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
        strokeWidth={1.4}
        d="M15 17h2a1 1 0 0 0 1-1v-4.46a1 1 0 0 0-.354-.763l-5-4.23a1 1 0 0 0-1.292 0l-5 4.23a1 1 0 0 0-.354.764V16a1 1 0 0 0 1 1h2"
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
