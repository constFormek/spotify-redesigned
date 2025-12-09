import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgClose({ className = "" }: Props) {
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
        strokeLinejoin="round"
        strokeWidth={2.021}
        d="m25.257 15.154-5.052 5.052m-5.05 5.051 5.05-5.051m0 0-5.05-5.052m5.05 5.052 5.052 5.051"
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
