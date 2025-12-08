import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgPrivateFilled({ className = "" }: Props) {
  return React.cloneElement(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 41 41"
    >
      <path
        stroke="#1ED760"
        strokeWidth={1.775}
        d="M13.805 16.186s-1.153-7.1 6.146-7.1c7.3 0 6.147 7.1 6.147 7.1M26.164 16.63H13.738a2.663 2.663 0 0 0-2.662 2.664v9.32a2.663 2.663 0 0 0 2.662 2.662h12.426a2.663 2.663 0 0 0 2.663-2.663v-9.32a2.663 2.663 0 0 0-2.663-2.662Z"
      />
      <circle
        cx={19.951}
        cy={24.174}
        r={2.663}
        stroke="#1ED760"
        strokeWidth={1.775}
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
