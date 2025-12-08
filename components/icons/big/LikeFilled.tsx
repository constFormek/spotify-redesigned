import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgLikeFilled({ className = "" }: Props) {
  return React.cloneElement(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 41 41"
    >
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.021}
        d="m22.07 13.569-1.865 1.805-1.863-1.806a4.81 4.81 0 0 0-6.914.231c-1.77 1.96-2.013 4.895-.41 6.994.196.258.39.505.574.731 1.167 1.43 3.712 3.93 4.987 5.27.942.992 1.789 1.818 2.427 2.42a1.736 1.736 0 0 0 2.388-.013c1.177-1.105 2.98-2.827 4.251-4.163 1.276-1.341 2.007-2.083 3.174-3.514.184-.226.378-.473.574-.731 1.603-2.099 1.36-5.034-.41-6.994a4.81 4.81 0 0 0-6.914-.23"
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
