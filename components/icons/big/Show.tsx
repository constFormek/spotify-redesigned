import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgShow({ className = "" }: Props) {
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
        strokeWidth={2}
        d="M20.302 12.222c4.386.03 7.966 3.15 10.043 5.5 1.309 1.48 1.287 3.638-.074 5.07-2.062 2.17-5.553 4.958-9.863 4.928-4.331-.03-7.875-2.894-9.962-5.096a3.71 3.71 0 0 1-.087-5.069c2.05-2.318 5.576-5.362 9.943-5.333Z"
      />
      <circle cx={20.38} cy={19.936} r={4.252} fill="currentColor" />
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
