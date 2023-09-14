import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const rootElement = document.getElementById("app");

if (rootElement) {
  ReactDOM.hydrateRoot(
    rootElement,
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
}


