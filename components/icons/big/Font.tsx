import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgFont({ className = "" }: Props) {
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
        d="M11.825 27.249a1.37 1.37 0 1 1-2.583-.918l4.667-12.924a2 2 0 0 1 1.881-1.321h.074a2 2 0 0 1 1.881 1.32l4.658 12.898a1.391 1.391 0 1 1-2.622.931l-.739-2.115a1 1 0 0 0-.944-.67h-4.586a1 1 0 0 0-.944.67zm3.64-10.367-1.592 4.526a.5.5 0 0 0 .471.666h2.942a.5.5 0 0 0 .47-.668l-1.61-4.524c-.075-.237-.6-.235-.682 0M25.136 27.609a.746.746 0 1 1-1.39-.547l2.5-6.238a1.175 1.175 0 0 1 2.181 0l2.493 6.223a.758.758 0 1 1-1.41.555l-.29-.75a.965.965 0 0 0-.9-.616h-1.992a.965.965 0 0 0-.9.617zm2-5.137-1.008 2.582h2.404l-1.02-2.582c-.044-.128-.327-.127-.376 0"
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
