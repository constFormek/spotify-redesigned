import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgNotesFilled({ className = "" }: Props) {
  return React.cloneElement(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 41 41"
    >
      <path
        stroke="#1ED760"
        strokeLinecap="round"
        strokeWidth={2}
        d="M14.493 15.553h10.724M14.493 20.77h7.149"
      />
      <path
        stroke="#1ED760"
        strokeWidth={2}
        d="M9.578 23.814v-10.87a2.61 2.61 0 0 1 2.61-2.608H27.97a2.61 2.61 0 0 1 2.608 2.609v10.87a2.61 2.61 0 0 1-2.608 2.608h-3.286c-.793 0-1.543.36-2.038.98l-.986 1.233a1.74 1.74 0 0 1-2.717 0l-.986-1.233a2.6 2.6 0 0 0-2.037-.98h-3.733a2.61 2.61 0 0 1-2.609-2.609Z"
      />
      <circle cx={20.827} cy={35.336} r={2} fill="#1ED760" />
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
