import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgHome({ className = "" }: Props) {
  return React.cloneElement(
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
      <path
        stroke="#898989"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
        d="M15 17h2a1 1 0 0 0 1-1v-4.46a1 1 0 0 0-.354-.763l-5-4.23a1 1 0 0 0-1.292 0l-5 4.23a1 1 0 0 0-.354.764V16a1 1 0 0 0 1 1h2"
      />
    </svg>,
    {
      className,
      fill: "currentColor",
    }
  );
}
