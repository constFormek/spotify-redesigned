import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgNews({ className = "" }: Props) {
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
        strokeWidth={1.684}
        d="M27.874 24.274H12.818c-1.19 0-1.84-1.387-1.078-2.301l1.255-1.506a1.4 1.4 0 0 0 .32-.921c-.022-2.12.35-10.005 7.03-10.005s7.053 7.885 7.032 10.005a1.4 1.4 0 0 0 .32.921l1.255 1.506c.761.914.111 2.301-1.078 2.301M16.838 27.08s.701 2.105 3.508 2.105 3.508-2.105 3.508-2.105"
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
