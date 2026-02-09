import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // ← JS (includes Popper)
import "bootstrap-icons/font/bootstrap-icons.css";
import { HashRouter } from "react-router-dom";
import App from "./App.tsx";
import "./App.css";
// import PortfolioNavbar from "./components/navbar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
);
