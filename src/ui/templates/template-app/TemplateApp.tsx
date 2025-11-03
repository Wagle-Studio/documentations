import "./templateApp.scss";
import { ReactNode } from "react";
import { Header, SidebarMain } from "@/ui";

interface TemplateAppProps {
  children: ReactNode;
}

export const TemplateApp = ({ children }: TemplateAppProps) => {
  return (
    <main className="template_app">
      <div className="template_app__header">
        <Header />
      </div>
      <div className="template_app__sidebar">
        <SidebarMain />
      </div>
      <div className="template_app__content">{children}</div>
    </main>
  );
};
