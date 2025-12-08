import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgPlaySimple({ className = "" }: Props) {
  return React.cloneElement(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 41 41"
    >
      <path
        fill="currentColor"
        d="M28.094 18.234c1.257.726 1.257 2.54 0 3.266l-9.897 5.714c-1.257.726-2.828-.181-2.828-1.633V14.153c0-1.452 1.57-2.359 2.828-1.633z"
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
