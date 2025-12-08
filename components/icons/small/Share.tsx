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
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="M12.288 13.075V6.378m0 0L9.53 9.136m2.758-2.758 2.757 2.758m2.167 2.955v2.757c0 .87-.705 1.576-1.576 1.576H8.94c-.87 0-1.575-.706-1.575-1.576V12.09"
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
