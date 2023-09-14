import React from "react";
import { Route, Routes } from "react-router-dom";

const pages = import.meta.glob<{ default: React.ComponentType }>("./pages/**/*.tsx", { eager: true });

const routes = Object.keys(pages).map((pagePath) => {
  const Component = pages[pagePath].default;
  let path = pagePath.slice(7, -4);

  if (path.split("/").slice(-1)[0] === "index") {
    path = path.slice(0, -6);
  }

  return { Component, path };
});

export default function App() {
  return (
    <React.StrictMode>
      <Routes>
        {routes.map(({ Component, path }) => (
          <Route element={<Component />} key={path} path={path} />
        ))}
      </Routes>
    </React.StrictMode>
  );
}
