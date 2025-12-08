import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgMore({ className = "" }: Props) {
  return React.cloneElement(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 41 41"
    >
      <circle cx={11.787} cy={20.207} r={1.684} fill="currentColor" />
      <circle cx={20.205} cy={20.207} r={1.684} fill="currentColor" />
      <circle cx={28.624} cy={20.207} r={1.684} fill="currentColor" />
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
