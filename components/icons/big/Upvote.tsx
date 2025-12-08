import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgUpvote({ className = "" }: Props) {
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
        d="M11.335 27.423v-7.988c0-.875.71-1.584 1.584-1.584h1.632c.565 0 1.086-.3 1.37-.788l2.992-5.148c.813-1.4 2.953-.822 2.953.796v3.556c0 .875.709 1.584 1.584 1.584h2.122a3.168 3.168 0 0 1 3.087 3.877l-1.106 4.82a3.17 3.17 0 0 1-3.088 2.459H12.92c-.875 0-1.584-.71-1.584-1.584Z"
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
