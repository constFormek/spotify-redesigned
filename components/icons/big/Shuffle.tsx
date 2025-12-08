import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgShuffle({ className = "" }: Props) {
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.021}
        d="M10.103 12.627c1.58 0 3.056.783 3.943 2.09l.835 1.233 1.127 1.662m12.741 8.308h-4.925a5.05 5.05 0 0 1-3.532-1.44l-.929-.908m9.386 2.348-3.492 3.545m3.492-3.545-3.492-3.545M10.103 27.95c1.583 0 3.068-.77 3.98-2.065l6.172-8.766a5.05 5.05 0 0 1 4.13-2.143h4.364m0 0-3.492-3.544m3.492 3.544-3.492 3.545"
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
