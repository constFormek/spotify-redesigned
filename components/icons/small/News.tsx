import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgNews({ className = "" }: Props) {
  return React.cloneElement(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.554 14.416H7.613a.833.833 0 0 1-.64-1.367l.744-.894a.84.84 0 0 0 .19-.547c-.012-1.259.209-5.942 4.176-5.942s4.189 4.683 4.176 5.942c-.002.2.062.394.19.547l.745.894a.833.833 0 0 1-.64 1.367M10 16.084s.417 1.25 2.083 1.25 2.084-1.25 2.084-1.25"
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
