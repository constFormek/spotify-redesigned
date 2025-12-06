import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgPlaySimple({ className = "" }: Props) {
  return React.cloneElement(
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
      <path
        fill="#898989"
        d="M15.636 11.213a.91.91 0 0 1 0 1.574l-4.772 2.756a.91.91 0 0 1-1.364-.787V9.244a.91.91 0 0 1 1.364-.787z"
      />
    </svg>,
    {
      className,
      fill: "currentColor",
    }
  );
}
