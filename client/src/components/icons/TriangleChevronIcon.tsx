import { SVGProps } from "react";
import classNames from "classnames";

const rotateClass = {
  up: "rotate-180",
  down: "rotate-0",
  left: "rotate-90",
  right: "-rotate-90",
};

type Direction = "up" | "down" | "left" | "right";

function TriangleChevron<
  T extends SVGProps<SVGSVGElement> & { direction?: Direction },
>({ className, direction = "down" }: T) {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames(rotateClass[direction], className)}
    >
      <path
        d="M19.0485 8.32124L5.78575 8.32124C4.90138 8.32124 4.45231 9.38491 5.06912 10.0187L11.7005 16.8325C12.0931 17.2359 12.7411 17.2359 13.1337 16.8325L19.7651 10.0187C20.3819 9.38491 19.9329 8.32124 19.0485 8.32124Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default TriangleChevron;
