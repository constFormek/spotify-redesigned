import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgVariant16({ className = "" }: Props) {
  return React.cloneElement(
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
      <rect
        width={7}
        height={10.5}
        x={10.25}
        y={6.75}
        stroke="#898989"
        strokeWidth={1.225}
        rx={1.75}
      />
      <circle cx={13.75} cy={13.75} r={1.75} fill="#898989" />
      <circle cx={13.75} cy={9.375} r={0.875} fill="#898989" />
      <circle cx={7.625} cy={16.375} r={0.875} fill="#898989" />
      <path
        stroke="#898989"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.225}
        d="M8.063 13.313h-.438a.875.875 0 0 1-.875-.876V9.376c0-.483.392-.875.875-.875h.438"
      />
    </svg>,
    {
      className,
      fill: "currentColor",
    }
  );
}
