import "./header.scss";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon, Tag } from "@/ui";

export const Header = () => {
  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header__wrapper--start">
          <Link className="header__brand" href="/">
            <Image
              src="/emoji/books.png"
              alt={"Documentations"}
              width={24}
              height={24}
            />
            Documentations
          </Link>
        </div>
        <div className="header__wrapper--end">
          <Tag>V 1.0</Tag>
          <a
            href="https://github.com/Wagle-Studio/documentations"
            target="_blank"
          >
            <GithubIcon size="medium" />
          </a>
        </div>
      </div>
    </div>
  );
};
