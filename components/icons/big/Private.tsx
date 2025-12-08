import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgPrivate({ className = "" }: Props) {
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
        d="M24.734 12.464a.887.887 0 1 0 1.606-.756zm-10.93 3.722c.877-.142.877-.141.877-.14l-.001-.008-.006-.044-.02-.191a7 7 0 0 1-.028-.718c.006-.605.083-1.388.352-2.154.267-.76.715-1.48 1.455-2.017.737-.535 1.841-.94 3.518-.94V8.198c-1.972 0-3.461.482-4.56 1.279-1.097.795-1.73 1.849-2.087 2.865-.355 1.009-.446 2-.453 2.727a9 9 0 0 0 .062 1.15l.01.075.004.023v.007l.001.003c0 .001 0 .002.877-.14m6.147-6.212c1.505 0 2.547.326 3.275.777a3.93 3.93 0 0 1 1.508 1.713l1.606-.756a5.7 5.7 0 0 0-2.18-2.467c-1.062-.657-2.442-1.043-4.209-1.043z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.775}
        d="M26.164 16.63H13.738a2.663 2.663 0 0 0-2.662 2.664v9.32a2.663 2.663 0 0 0 2.662 2.662h12.426a2.663 2.663 0 0 0 2.663-2.663v-9.32a2.663 2.663 0 0 0-2.663-2.662Z"
      />
      <circle
        cx={19.951}
        cy={24.174}
        r={2.663}
        stroke="currentColor"
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
