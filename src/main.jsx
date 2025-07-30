import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import { App } from "./App.jsx";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FavoritesProvider } from "./context/FavoritesContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </BrowserRouter>
  </StrictMode>,
);
