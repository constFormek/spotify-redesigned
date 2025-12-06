import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgFolder({ className = "" }: Props) {
  return React.cloneElement(
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
      <path
        stroke="#898989"
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="M19 16.227c0 .98-.794 1.773-1.773 1.773H6.773A1.773 1.773 0 0 1 5 16.227V7.773C5 6.793 5.794 6 6.773 6h2.975c.61 0 1.176.313 1.5.829l.304.483c.325.515.891.829 1.5.829h4.175c.98 0 1.773.793 1.773 1.772z"
      />
    </svg>,
    {
      className,
      fill: "currentColor",
    }
  );
}
