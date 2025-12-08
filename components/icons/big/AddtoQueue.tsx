import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgAddtoQueue({ className = "" }: Props) {
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
        strokeWidth={2.357}
        d="M19.364 11.787h-4.771a2.806 2.806 0 0 0 0 5.613h4.77"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.357}
        d="M11.787 23.012h16.837M11.787 28.625h16.837"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.021}
        d="M23.573 14.313h2.526m2.525 0H26.1m0 0v-2.526m0 2.526v2.525"
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
