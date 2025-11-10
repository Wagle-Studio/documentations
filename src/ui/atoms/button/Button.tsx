"use client";

import "./button.scss";
import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: string;
  iconSide?: string;
}

export const Button = ({
  children,
  className,
  variant = "primary",
  iconSide,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        className,
        "button",
        `button--variant-${variant}`,
        iconSide ? `button--icon-${iconSide}` : undefined
      )}
      {...props}
    >
      {children}
    </button>
  );
};
