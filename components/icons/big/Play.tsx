import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgPlay({ className = "" }: Props) {
  return React.cloneElement(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 41 41"
    >
      <circle cx={20.205} cy={20.205} r={20.205} fill="#1ED760" />
      <path
        fill="currentColor"
        d="M26.328 18.88a1.53 1.53 0 0 1 0 2.652l-8.036 4.64a1.53 1.53 0 0 1-2.296-1.326v-9.28a1.53 1.53 0 0 1 2.296-1.325z"
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
