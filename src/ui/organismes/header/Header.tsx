"use client";

import "./header.scss";
import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import clsx from "clsx";
import { CrossIcon, DarkModeIcon, GithubIcon, LightModeIcon, MenuIcon, MenuLink, Tag } from "@/ui";
import RegisterManager from "@/core/managers/RegisterManager";
import { AppContext } from "@/ui/AppContext";

export const Header = () => {
  const [menuDisplay, setMenuDisplay] = useState<boolean>(false);
  const { isDarkMode, setIsDarkMode } = useContext(AppContext);

  const params = useParams();

  useEffect(() => {
    if (typeof document === "undefined") return;

    if (menuDisplay) {
      document.body.classList.add("header--mobile-open");
    } else {
      document.body.classList.remove("header--mobile-open");
    }

    return () => {
      document.body.classList.remove("header--mobile-open");
    };
  }, [menuDisplay]);

  return (
    <div
      className={clsx("header", {
        "header--mobile": menuDisplay,
      })}
    >
      <div
        className={clsx("header__wrapper", {
          "header__wrapper--mobile": menuDisplay,
        })}
      >
        <div className="header__wrapper--start">
          <Link className="header__wrapper__brand" href="/">
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
          <div className="header__wrapper--end--mobile">
            {!menuDisplay && (
              <MenuIcon
                size="large"
                onClick={() => setMenuDisplay(!menuDisplay)}
              />
            )}
            {menuDisplay && (
              <CrossIcon
                size="large"
                onClick={() => setMenuDisplay(!menuDisplay)}
              />
            )}
          </div>
          <div className="header__wrapper--end--desktop">
            <button
              className={clsx("header__toggle", {
                "header__toggle--dark": isDarkMode,
              })}
              onClick={() => setIsDarkMode(!isDarkMode)}
              role="switch"
              aria-checked={isDarkMode}
              aria-label="Changer le thème"
            >
              <LightModeIcon />
              <span className="header__toggle__thumb" />
              <DarkModeIcon />
            </button>
            <Tag>V 2.0</Tag>
            <a
              href="https://github.com/Wagle-Studio/documentations"
              target="_blank"
            >
              <GithubIcon size="medium" />
            </a>
          </div>
        </div>
        {menuDisplay && (
          <div className="header__wrapper__menu_mobile">
            <div
              className="header__wrapper__menu_mobile__blur_bg"
              onClick={() => setMenuDisplay(!menuDisplay)}
            />
            <div className="header__wrapper__menu_mobile__wrapper">
              <ul>
                {RegisterManager.getCourses().data.map((course) => (
                  <li
                    key={`header__wrapper__menu_mobile--${course.slug}-${course.id}`}
                  >
                    <MenuLink
                      label={course.label}
                      emoji={course.emoji}
                      href={`/documentations/${course.slug}`}
                      selected={params.course === course.slug}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
