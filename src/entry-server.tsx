import ReactDOMServer from "react-dom/server";
import { StaticRouter, StaticRouterProps } from "react-router-dom/server";
import App from "./App";

export function render(location: StaticRouterProps["location"]) {
  return ReactDOMServer.renderToString(
    <StaticRouter location={location}>
      <App />
    </StaticRouter>,
  );
}
