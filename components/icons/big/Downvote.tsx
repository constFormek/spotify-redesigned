import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgDownvote({ className = "" }: Props) {
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
        strokeWidth={2}
        d="M29.55 13.417v7.987c0 .875-.71 1.584-1.585 1.584h-1.632c-.564 0-1.086.3-1.37.788l-2.991 5.148c-.813 1.4-2.953.823-2.953-.795v-3.557c0-.875-.71-1.584-1.584-1.584h-2.122a3.168 3.168 0 0 1-3.088-3.877l1.107-4.82a3.17 3.17 0 0 1 3.087-2.458h11.546c.875 0 1.584.709 1.584 1.583Z"
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
