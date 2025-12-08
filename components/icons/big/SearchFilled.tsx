import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgSearchFilled({ className = "" }: Props) {
  return React.cloneElement(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 41 41"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2.021}
        d="M24.738 24.36a8.696 8.696 0 1 0-12.42-12.174 8.696 8.696 0 0 0 12.42 12.175Zm0 0 5.094 5.218"
      />
      <circle cx={18.532} cy={18.278} r={5.7} fill="currentColor" />
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
