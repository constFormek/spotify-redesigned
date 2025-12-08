import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgRate({ className = "" }: Props) {
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
        strokeWidth={1.2}
        d="M11.44 6.309a.609.609 0 0 1 1.12 0l1.181 2.763a.61.61 0 0 0 .505.367l2.994.27c.533.048.749.712.346 1.065l-2.263 1.978a.61.61 0 0 0-.193.593l.668 2.93a.609.609 0 0 1-.905.658l-2.58-1.54a.61.61 0 0 0-.625 0l-2.58 1.54a.609.609 0 0 1-.906-.657l.668-2.93a.61.61 0 0 0-.193-.594l-2.263-1.979A.609.609 0 0 1 6.76 9.71l2.994-.27a.61.61 0 0 0 .505-.367z"
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
