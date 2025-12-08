import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgKaraoke({ className = "" }: Props) {
  return React.cloneElement(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 41 41"
    >
      <g clipPath="url(#Karaoke_svg__a)">
        <path
          stroke="currentColor"
          strokeWidth={1.684}
          d="M25.752 20.677a5.08 5.08 0 1 0-5.08-5.08m5.08 5.08a5.08 5.08 0 0 1-5.08-5.08m5.08 5.08L14.887 30.32a2.63 2.63 0 0 1-1.746.663 2.64 2.64 0 0 1-2.63-2.64c0-.636.228-1.253.643-1.734l9.518-11.012"
        />
      </g>
      <defs>
        <clipPath id="Karaoke_svg__a">
          <path fill="#fff" d="M8.827 8.833H32.4v23.573H8.827z" />
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
