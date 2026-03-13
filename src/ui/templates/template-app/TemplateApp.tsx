"use client";
import "./templateApp.scss";
import { ReactNode, useContext } from "react";
import { Header, SidebarMain } from "@/ui";
import AppContextProvider, { AppContext } from "@/ui/AppContext";

const TemplateAppInner = ({ children }: { children: ReactNode }) => {
  const { isDarkMode } = useContext(AppContext);
  return (
    <main className={`template_app${isDarkMode ? " app--dark" : ""}`}>
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

export const TemplateApp = ({ children }: { children: ReactNode }) => (
  <AppContextProvider>
    <TemplateAppInner>{children}</TemplateAppInner>
  </AppContextProvider>
);
