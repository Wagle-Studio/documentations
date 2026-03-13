import "./../ui/globals.scss";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { TemplateApp } from "@/ui";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-primary",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
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
    <html
      lang="fr"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <TemplateApp>{children}</TemplateApp>
      </body>
    </html>
  );
}
