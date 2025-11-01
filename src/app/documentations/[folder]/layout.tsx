import MenuManager from "@/core/MenuManager";
import { MenuLesson } from "@/ui/organismes/menu-lesson/MenuLesson";

export default async function FolderLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: {
    folder: string;
  };
}>) {
  const { folder } = await params;
  const menu = MenuManager.buildMenuLesson(folder);

  return (
    <>
      {children}
      <MenuLesson menu={menu} />
    </>
  );
}
