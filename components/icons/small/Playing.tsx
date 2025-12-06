import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgPlaying({ className = "" }: Props) {
  return React.cloneElement(
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
      <path
        stroke="#898989"
        strokeLinecap="round"
        strokeWidth={1.4}
        d="M7 17v-3.793M12 17V7m5 10v-6.207"
      />
    </svg>,
    {
      className,
      fill: "currentColor",
    }
  );
}
