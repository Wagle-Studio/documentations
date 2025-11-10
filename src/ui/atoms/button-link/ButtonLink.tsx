"use client";

import "./button-link.scss";
import { ReactNode } from "react";
import clsx from "clsx";
import Link from "next/link";

type NextLinkProps = React.ComponentProps<typeof Link>;

interface ButtonLinkProps extends NextLinkProps {
  children?: ReactNode;
  variant?: string;
  iconSide?: string;
}

export const ButtonLink = ({
  children,
  className,
  variant = "primary",
  iconSide,
  ...props
}: ButtonLinkProps) => {
  return (
    <Link
      className={clsx(
        className,
        "button_link",
        `button_link--variant-${variant}`,
        iconSide ? `button_link--icon-${iconSide}` : undefined
      )}
      {...props}
    >
      {children}
    </Link>
  );
};
