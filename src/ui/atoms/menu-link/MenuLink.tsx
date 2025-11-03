import "./menuLink.scss";
import Link from "next/link";
import Image from "next/image";
import { clsx } from "clsx";

interface MenuLinkProps {
  href: string;
  label: string;
  emoji?: string;
  selected?: boolean;
  highlight?: boolean;
}

export const MenuLink = ({
  href,
  label,
  emoji,
  selected = false,
  highlight = false,
}: MenuLinkProps) => {
  return (
    <Link
      className={clsx(
        "menu_link",
        { "menu_link--selected": selected },
        { "menu_link--highlight": highlight }
      )}
      href={href}
    >
      {emoji && <Image src={emoji} alt={label} width={16} height={16} />}
      <span className="">{label}</span>
    </Link>
  );
};
