import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgMove2({ className = "" }: Props) {
  return React.cloneElement(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 41 41"
    >
      <circle cx={16.727} cy={12.733} r={1.9} fill="currentColor" />
      <circle cx={24.327} cy={12.733} r={1.9} fill="currentColor" />
      <circle cx={16.727} cy={20.332} r={1.9} fill="currentColor" />
      <circle cx={16.727} cy={27.932} r={1.9} fill="currentColor" />
      <circle cx={24.327} cy={20.332} r={1.9} fill="currentColor" />
      <circle cx={24.327} cy={27.932} r={1.9} fill="currentColor" />
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
