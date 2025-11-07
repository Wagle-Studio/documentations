import { SVGAttributes } from "react";

export type IconProps = {
  className?: string;
  size?: "small" | "medium" | "large";
} & SVGAttributes<any>;
