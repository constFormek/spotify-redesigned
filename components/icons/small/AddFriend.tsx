import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgAddFriend({ className = "" }: Props) {
  return React.cloneElement(
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
      <path
        stroke="#898989"
        strokeWidth={1.2}
        d="M14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
      <path
        stroke="#898989"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="m10 12-2.11 1.406A2 2 0 0 0 7 15.07v.997c0 .515.418.933.933.933H15.5M14 12.5h1.5m1.5 0h-1.5m0 0V11m0 1.5V14"
      />
    </svg>,
    {
      className,
      fill: "currentColor",
    }
  );
}
