import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgAudiobook({ className = "" }: Props) {
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
        strokeWidth={2}
        d="m20.33 30.33-8.538-2.382a2 2 0 0 1-1.462-1.927V12.85a2 2 0 0 1 2.453-1.948l6 1.395a2 2 0 0 1 1.547 1.948zm0 0 8.537-2.382a2 2 0 0 0 1.463-1.927V12.913a2 2 0 0 0-2.5-1.937l-4.7 1.214"
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
