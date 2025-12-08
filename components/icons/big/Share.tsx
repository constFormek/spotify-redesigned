import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgShare({ className = "" }: Props) {
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
        d="M20.69 22.016V10.74m0 0-4.643 4.643m4.643-4.643 4.643 4.643m3.648 4.975v4.643a2.653 2.653 0 0 1-2.653 2.653H15.052a2.653 2.653 0 0 1-2.653-2.653v-4.643"
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
