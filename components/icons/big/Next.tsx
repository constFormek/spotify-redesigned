import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgNext({ className = "" }: Props) {
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
        strokeWidth={2.526}
        d="M25.257 15.152v10.103"
      />
      <path
        fill="currentColor"
        d="M23.248 18.916a1.53 1.53 0 0 1 0 2.576l-7 4.49c-1.018.655-2.357-.077-2.357-1.287v-8.981c0-1.21 1.339-1.942 2.357-1.289z"
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
