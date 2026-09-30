import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import App from "./App";
import Rodan from "./pages/Rodan";
import Velos from "./pages/velos";
import Iryven from "./pages/Iryven";
import MasterThesis from "./pages/MasterThesis";

import ScrollToTop from "./ScrollToTop";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects/rodan" element={<Rodan />} />
        <Route path="/projects/velos" element={<Velos />} />
        <Route path="/projects/master-thesis" element={<MasterThesis />} />
        <Route path="/projects/iryven" element={<Iryven />} />
        <Route
          path="/projects/procedural-shader-framework"
          element={<Navigate to="/projects/iryven" replace />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
