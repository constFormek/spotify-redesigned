import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgArrowUp({ className = "" }: Props) {
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
        d="M20.626 27.361V13.05m0 0-5.893 5.893m5.893-5.893 5.894 5.893"
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
