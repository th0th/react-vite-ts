import React from "react";
import Header from "./Header";

export type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />

      {children}
    </div>
  );
}
