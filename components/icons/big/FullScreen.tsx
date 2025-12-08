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
      viewBox="0 0 41 41"
    >
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.021}
        clipPath="url(#Full_Screen_svg__a)"
      >
        <path d="M11.546 17.56v-3.247c0-.598.485-1.083 1.082-1.083h3.248M28.865 17.56v-3.247c0-.598-.485-1.083-1.083-1.083h-3.247M11.546 23.332v3.248c0 .598.485 1.082 1.082 1.082h3.248M28.865 23.332v3.248c0 .598-.485 1.082-1.083 1.082h-3.247" />
      </g>
      <defs>
        <clipPath id="Full_Screen_svg__a">
          <path fill="#fff" d="M10.103 11.787h20.205v17.32H10.103z" />
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
