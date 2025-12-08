import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgDevice({ className = "" }: Props) {
  return React.cloneElement(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 41 41"
    >
      <rect
        width={11.787}
        height={17.68}
        x={17.259}
        y={11.367}
        stroke="currentColor"
        strokeWidth={2.063}
        rx={2.947}
      />
      <circle cx={23.152} cy={23.154} r={2.947} fill="currentColor" />
      <circle cx={23.152} cy={15.786} r={1.473} fill="currentColor" />
      <circle cx={12.839} cy={27.573} r={1.473} fill="currentColor" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.063}
        d="M13.576 22.416h-.737c-.814 0-1.473-.66-1.473-1.474v-5.156c0-.814.66-1.473 1.473-1.473h.736"
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
