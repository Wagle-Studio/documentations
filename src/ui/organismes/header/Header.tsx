"use client";

import Link from "next/link";
import Image from "next/image";
import { Menubar } from "primereact/menubar";
import { GithubIcon, Tag } from "@/ui";

export const Header = () => {
  const start = (
    <div className="app__header__wrapper--start">
      <Link className="app__header__wrapper--start--brand" href="/">
        <Image
          src="/emoji/books.png"
          alt={"Documentation"}
          width={24}
          height={24}
        />
        Documentation
      </Link>
    </div>
  );

  const end = (
    <div className="app__header__wrapper--end">
      <Tag>V 1.0</Tag>
      <a href="https://github.com/Wagle-Studio/documentations" target="_blank">
        <GithubIcon size="medium" />
      </a>
    </div>
  );

  return (
    <div className="app__header">
      <div className="app__header__wrapper">
        <Menubar start={start} end={end} />
      </div>
    </div>
  );
};
