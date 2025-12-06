import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgHide({ className = "" }: Props) {
  return React.cloneElement(
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
      <path
        stroke="#898989"
        d="M12 6.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Z"
      />
    </svg>,
    {
      className,
      fill: "currentColor",
    }
  );
}
