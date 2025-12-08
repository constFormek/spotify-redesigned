import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgArtist({ className = "" }: Props) {
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
        strokeWidth={2.021}
        d="M23.573 13.47a3.368 3.368 0 1 1-6.735 0 3.368 3.368 0 0 1 6.735 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.021}
        d="m16.838 20.205-3.552 2.368a3.37 3.37 0 0 0-1.5 2.802v1.677c0 .868.704 1.572 1.572 1.572h6.848"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.684}
        d="M27.783 13.469v7.577m0 0v3.763c0 .749-.534 1.402-1.283 1.379-1.238-.04-2.927-.483-2.927-2.616 0-3.368 4.21-2.526 4.21-2.526"
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
