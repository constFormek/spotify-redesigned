import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgPodcast({ className = "" }: Props) {
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
        strokeWidth={2.016}
        d="M19.931 13.777v5.93a4.447 4.447 0 0 0 8.895 0v-5.929a4.447 4.447 0 0 0-8.895 0ZM15.978 20.201s.989 7.906 8.4 7.906m0 0c7.412 0 8.4-7.906 8.4-7.906m-8.4 7.906v3.459M7.578 14.371h5.88M7.578 21.09h4.2M7.578 27.81h5.88"
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
