import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgAddSimple({ className = "" }: Props) {
  return React.cloneElement(
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
      <path
        stroke="#898989"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="M12 7.757V12m0 4.243V12m0 0H7.757M12 12h4.243"
      />
    </svg>,
    {
      className,
      fill: "currentColor",
    }
  );
}
