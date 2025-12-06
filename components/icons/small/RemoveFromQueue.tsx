import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgRemoveFromQueue({ className = "" }: Props) {
  return React.cloneElement(
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
      <path
        stroke="#898989"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.4}
        d="M7 13.666h10M7 17h10"
      />
      <path
        stroke="#898989"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="m10.508 7.508 1.508 1.508m1.508 1.508-1.508-1.508m0 0 1.508-1.508m-1.508 1.508-1.508 1.508"
      />
    </svg>,
    {
      className,
      fill: "currentColor",
    }
  );
}
