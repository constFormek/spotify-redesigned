import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgVolume({ className = "" }: Props) {
  return React.cloneElement(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
    >
      <g stroke="currentColor" clipPath="url(#Volume_svg__a)">
        <path
          strokeWidth={1.2}
          d="M7.635 14.147c-1.769-.885-1.769-3.409 0-4.293L12.82 7.26a.4.4 0 0 1 .58.357v8.764a.4.4 0 0 1-.58.357z"
        />
        <path
          strokeLinecap="round"
          d="M16 15a2.5 2.5 0 0 0 1.247-.824c.482-.577.753-1.36.753-2.176s-.27-1.599-.753-2.176A2.5 2.5 0 0 0 16 9"
        />
        <path
          fill="currentColor"
          strokeWidth={0.5}
          d="M15.5 11.696c0-.108.091-.2.191-.158a.5.5 0 0 1 0 .924c-.1.041-.191-.05-.191-.158v-.608Z"
        />
      </g>
      <defs>
        <clipPath id="Volume_svg__a">
          <path fill="#fff" d="M5 5h14v14H5z" />
        </clipPath>
      </defs>
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
