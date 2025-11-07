import "./../ui/globals.scss";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { TemplateApp } from "@/ui";

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
    <html
      lang="fr"
      className={`${rubik.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <TemplateApp>{children}</TemplateApp>
      </body>
    </html>
  );
}
