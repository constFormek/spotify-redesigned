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
      viewBox="0 0 41 41"
    >
      <rect
        width={20}
        height={20}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={2}
        rx={3}
        transform="matrix(1 0 0 -1 10.076 31.33)"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.076 11.33h16a3 3 0 0 0-3-3h-10a3 3 0 0 0-3 3Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.588 22.286v-5.33c0-.346.28-.626.625-.626h2.117m-2.742 5.956v3.017c0 .555-.394 1.038-.948 1.026-.962-.021-2.31-.355-2.31-2.058 0-2.647 3.258-1.985 3.258-1.985"
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
