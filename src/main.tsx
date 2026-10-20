import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import PortfolioRoutes from "./PortfolioRoutes";

import ScrollToTop from "./ScrollToTop";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop />
      <PortfolioRoutes />
    </BrowserRouter>
  </React.StrictMode>
);

