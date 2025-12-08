import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgFullScreen({ className = "" }: Props) {
  return React.cloneElement(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
    >
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        clipPath="url(#Full_Screen_svg__a)"
      >
        <path d="M6.857 10.429V8.5c0-.355.288-.643.643-.643h1.929M17.143 10.429V8.5a.643.643 0 0 0-.643-.643h-1.929M6.857 13.856v1.929c0 .355.288.643.643.643h1.929M17.143 13.856v1.929a.643.643 0 0 1-.643.643h-1.929" />
      </g>
      <defs>
        <clipPath id="Full_Screen_svg__a">
          <path fill="#fff" d="M6 7h12v10.286H6z" />
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
