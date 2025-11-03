import "./menuLink.scss";
import Link from "next/link";
import Image from "next/image";

interface MenuLinkProps {
  href: string;
  label: string;
  emoji?: string;
}

export const MenuLink = ({ href, label, emoji }: MenuLinkProps) => {
  return (
    <Link className="menu_link" href={href}>
      {emoji && <Image src={emoji} alt={label} width={16} height={16} />}
      <span className="">{label}</span>
    </Link>
  );
};
