import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgPin({ className = "" }: Props) {
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
        d="m29.32 16.426 1.519 1.518m-1.518-1.518-6.7 6.7a.78.78 0 0 0-.223.457l-.335 2.753a.779.779 0 0 1-1.323.457l-3.929-3.929m12.51-6.438-6.071-6.072m-1.518-1.517 1.518 1.517m0 0-6.7 6.7a.78.78 0 0 1-.457.223l-2.754.335a.779.779 0 0 0-.457 1.324l3.929 3.928m0 0-5.168 5.168"
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
