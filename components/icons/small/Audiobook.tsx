import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgAudiobook({ className = "" }: Props) {
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="m12.187 18.373-5.282-1.474A1.24 1.24 0 0 1 6 15.707V7.558c0-.796.742-1.386 1.518-1.205l3.711.863c.56.13.958.63.958 1.205zm0 0 5.281-1.474c.535-.15.905-.637.905-1.192v-8.11c0-.808-.764-1.4-1.547-1.197l-2.907.751"
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
