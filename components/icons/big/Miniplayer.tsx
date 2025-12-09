import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgMiniplayer({ className = "" }: Props) {
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
        d="M19.364 22.733c0-.93.753-1.684 1.683-1.684h7.577c.93 0 1.684.754 1.684 1.684v4.21c0 .929-.754 1.683-1.684 1.683h-7.577c-.93 0-1.683-.754-1.683-1.684z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.021}
        d="M16.838 27.783h-4.21c-.93 0-1.683-.754-1.683-1.684V14.313c0-.93.753-1.684 1.683-1.684h15.154c.93 0 1.684.754 1.684 1.684v4.21"
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
