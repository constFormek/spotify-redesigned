import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgPlaylist({ className = "" }: Props) {
  return React.cloneElement(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
    >
      <rect
        width={12}
        height={12}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.2}
        rx={1.8}
        transform="matrix(1 0 0 -1 6 18.8)"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.9}
        d="M12.235 13.353v-2.978c0-.207.167-.375.375-.375H14m-1.765 3.353v2.021c0 .336-.24.625-.575.626-.662.001-1.66-.19-1.66-1.348 0-1.732 2.235-1.3 2.235-1.3"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={0.9}
        d="M7.2 6.8h9.6A1.8 1.8 0 0 0 15 5H9a1.8 1.8 0 0 0-1.8 1.8Z"
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
