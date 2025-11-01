import "./../ui/globals.scss";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import { PrimeReactProvider } from "primereact/api";
import { MenuSide } from "@/ui";

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-primary",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-secondary",
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
    <html lang="fr" className={`${rubik.variable} ${inter.variable}`}>
      <body>
        <main className="app">
          <PrimeReactProvider>
            <MenuSide />
            {children}
          </PrimeReactProvider>
        </main>
      </body>
    </html>
  );
}
