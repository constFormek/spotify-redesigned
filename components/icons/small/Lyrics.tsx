import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgLyrics({ className = "" }: Props) {
  return React.cloneElement(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
    >
      <g clipPath="url(#Lyrics_svg__a)">
        <path
          stroke="currentColor"
          d="M15.052 12.035a3.017 3.017 0 1 0-3.017-3.018m3.017 3.018a3.017 3.017 0 0 1-3.017-3.018m3.017 3.018L8.599 17.76A1.562 1.562 0 0 1 6 16.587c0-.377.136-.744.382-1.03l5.653-6.54"
        />
      </g>
      <defs>
        <clipPath id="Lyrics_svg__a">
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
