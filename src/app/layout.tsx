import "./globals.scss";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import type { Metadata } from "next";
import { PrimeReactProvider } from "primereact/api";
import MenuManager from "@/core/MenuManager";
import { MenuSide } from "@/ui/organismes/menu-side/MenuSide";

export const metadata: Metadata = {
  title: "Documentations",
  description: "Documentations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menu = MenuManager.buildMenuSide();

  return (
    <html lang="fr">
      <body>
        <main className="app">
          <MenuSide menu={menu} />
          <PrimeReactProvider>{children}</PrimeReactProvider>
        </main>
      </body>
    </html>
  );
}
