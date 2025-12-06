import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgLibrary({ className = "" }: Props) {
  return React.cloneElement(
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
      <path
        stroke="#898989"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="M6.867 6.867v10.267M10.289 6.867v10.267M13.711 17.134V6.867l3.422 2.37v7.897z"
      />
    </svg>,
    {
      className,
      fill: "currentColor",
    }
  );
}
