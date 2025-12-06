import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgDownload({ className = "" }: Props) {
  return React.cloneElement(
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
      <path
        stroke="#898989"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="M12 9v5.857m0 0 2-2m-2 2-2-2"
      />
      <circle cx={12} cy={12} r={5.5} stroke="#898989" />
    </svg>,
    {
      className,
      fill: "currentColor",
    }
  );
}
