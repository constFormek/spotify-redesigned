import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgLoop({ className = "" }: Props) {
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
        d="M15.996 26.097H13.47a3.37 3.37 0 0 1-3.367-3.367v-6.735a3.37 3.37 0 0 1 3.367-3.368h13.47a3.37 3.37 0 0 1 3.368 3.367v6.736a3.37 3.37 0 0 1-3.367 3.367h-6.736m0 0 3.368-3.367m-3.368 3.367 3.368 3.368"
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
