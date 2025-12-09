import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgGrid({ className = "" }: Props) {
  return React.cloneElement(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 41 41"
    >
      <rect
        width={8.182}
        height={8.182}
        x={10.335}
        y={10.081}
        stroke="currentColor"
        strokeWidth={2}
        rx={2}
      />
      <rect
        width={8.182}
        height={8.182}
        x={10.335}
        y={21.899}
        stroke="currentColor"
        strokeWidth={2}
        rx={2}
      />
      <rect
        width={8.182}
        height={8.182}
        x={22.153}
        y={10.081}
        stroke="currentColor"
        strokeWidth={2}
        rx={2}
      />
      <rect
        width={8.182}
        height={8.182}
        x={22.153}
        y={21.899}
        stroke="currentColor"
        strokeWidth={2}
        rx={2}
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
