import * as React from "react";
type Props = {
  className?: string,
};
export default function SvgVolume({ className = "" }: Props) {
  return React.cloneElement(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 41 41"
    >
      <g stroke="currentColor" clipPath="url(#Volume_svg__a)">
        <path
          strokeWidth={2.021}
          d="M12.856 23.82c-2.979-1.489-2.979-5.739 0-7.228l8.732-4.366a.673.673 0 0 1 .975.601v14.757c0 .5-.527.826-.975.602z"
        />
        <path
          strokeLinecap="round"
          strokeWidth={1.684}
          d="M26.94 25.258c.79-.215 1.519-.693 2.1-1.388.812-.972 1.268-2.29 1.268-3.664s-.456-2.691-1.268-3.663c-.581-.695-1.31-1.173-2.1-1.388"
        />
        <path
          fill="currentColor"
          strokeWidth={0.842}
          d="M26.099 19.696c0-.183.153-.337.322-.267a.843.843 0 0 1 0 1.556c-.169.07-.322-.084-.322-.267v-1.022Z"
        />
      </g>
      <defs>
        <clipPath id="Volume_svg__a">
          <path fill="#fff" d="M8.419 8.42h23.573v23.573H8.419z" />
        </clipPath>
      </defs>
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
