"use client";

import { useRouter } from "next/navigation";
import { Menu } from "primereact/menu";
import { MenuItem } from "primereact/menuitem";
import { useGetFetch } from "@/core/hooks";
import { Course } from "@/core/types";
import MenuManager from "@/core/managers/MenuManager";

export const MenuSide = () => {
  const router = useRouter();

  const { result, isLoading, isError } = useGetFetch<Course[]>("documentation");

  const isReady = result && result.success && !isLoading && !isError;

  const menu: MenuItem[] = [
    {
      label: "Documentation",
      items: isReady ? MenuManager.buildMenuSide(router, result.data) : [],
    },
  ];

  return (
    <div className="app__side__menu">{isReady && <Menu model={menu} />}</div>
  );
};
