import "./templateApp.scss";
import { ReactNode } from "react";
import { Header, MenuSide } from "@/ui";

interface TemplateAppProps {
  children: ReactNode;
}

export const TemplateApp = ({ children }: TemplateAppProps) => {
  return (
    <main className="template--app">
      <Header />
      <MenuSide />
      {children}
    </main>
  );
};
