import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgAlbum({ className = "" }: Props) {
  return React.cloneElement(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 41 41"
    >
      <circle
        cx={20.205}
        cy={20.206}
        r={2.755}
        stroke="currentColor"
        strokeWidth={2.021}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2.021}
        d="M20.205 30.309c-5.58 0-10.102-4.523-10.102-10.103s4.523-10.102 10.102-10.102c2.913 0 5.538 1.232 7.381 3.204"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.684}
        d="M29.296 17.58v7.577m0 0v3.763c0 .75-.534 1.403-1.282 1.379-1.239-.039-2.928-.483-2.928-2.616 0-3.368 4.21-2.526 4.21-2.526"
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
