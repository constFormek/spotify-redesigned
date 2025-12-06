import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgArrowUp({ className = "" }: Props) {
  return React.cloneElement(
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
      <path
        stroke="#898989"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="M12.25 16.25v-8.5m0 0-3.5 3.5m3.5-3.5 3.5 3.5"
      />
    </svg>,
    {
      className,
      fill: "currentColor",
    }
  );
}
