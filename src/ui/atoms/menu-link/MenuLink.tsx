import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

interface MenuLinkProps {
  label: string;
  emoji?: string;
  href: string;
}

export const MenuLink = ({ label, emoji, href }: MenuLinkProps) => {
  return (
    <div className={clsx("p-menuitem-content")}>
      <Link
        className={clsx("p-menuitem-link", "menu_item_link", {
          "menu_item_link--header": emoji,
        })}
        href={href}
      >
        {emoji && <Image src={emoji} alt={label} width={16} height={16} />}
        <span className="p-menuitem-text">{label}</span>
      </Link>
    </div>
  );
};
