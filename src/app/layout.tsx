import "./../ui/globals.scss";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { PrimeReactProvider } from "primereact/api";
import { Header, MenuSide } from "@/ui";

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-primary",
});

export const metadata: Metadata = {
  title: "Documentations",
  description: "Documentations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${rubik.variable}`}>
      <body>
        <main className="app">
          <PrimeReactProvider>
            <Header />
            <MenuSide />
            {children}
          </PrimeReactProvider>
        </main>
      </body>
    </html>
  );
}
