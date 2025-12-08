import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgFriends({ className = "" }: Props) {
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
        d="M29.4 14.313a3.368 3.368 0 1 1-6.735 0 3.368 3.368 0 0 1 6.735 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.021}
        d="m19.113 23.417.75-.5a11.12 11.12 0 0 1 12.339 0l.75.5a3.37 3.37 0 0 1 1.5 2.802v1.677c0 .868-.704 1.572-1.572 1.572H19.185a1.57 1.57 0 0 1-1.572-1.572V26.22c0-1.126.563-2.178 1.5-2.802"
      />
      <path
        stroke="currentColor"
        strokeWidth={2.021}
        d="M17.981 14.313a3.368 3.368 0 1 1-6.735 0 3.368 3.368 0 0 1 6.735 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.021}
        d="M14.614 21.049c-2.196 0-4.343.65-6.17 1.868l-.75.5a3.37 3.37 0 0 0-1.5 2.802v1.677c0 .868.704 1.572 1.572 1.572h6.061"
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
