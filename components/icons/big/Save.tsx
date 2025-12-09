import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgSave({ className = "" }: Props) {
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
        strokeWidth={2.32}
        d="M12.324 12.402v16.304a1.16 1.16 0 0 0 1.834.943l4.937-3.526a2.32 2.32 0 0 1 2.697 0l4.936 3.526a1.16 1.16 0 0 0 1.834-.944V12.403a2.32 2.32 0 0 0-2.32-2.32H14.645a2.32 2.32 0 0 0-2.32 2.32Z"
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
