import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgShuffle({ className = "" }: Props) {
  return React.cloneElement(
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
      <path
        stroke="#898989"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="M6 7.5c.938 0 1.815.465 2.342 1.242l.496.732.669.987m7.567 4.934H14.15a3 3 0 0 1-2.097-.856L11.5 14m5.574 1.395L15 17.5m2.074-2.105L15 13.29M6 16.6c.94 0 1.822-.458 2.364-1.227l3.666-5.206a3 3 0 0 1 2.453-1.273h2.591m0 0L15 6.79m2.074 2.105L15 11"
      />
    </svg>,
    {
      className,
      fill: "currentColor",
    }
  );
}
