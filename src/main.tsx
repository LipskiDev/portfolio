import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Rodan from "./pages/Rodan";
import Velos from "./pages/velos";
import ProceduralShaderFramework from "./pages/ProceduralShaderFramework";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects/rodan" element={<Rodan />} />
        <Route path="/projects/velos" element={<Velos />} />
        <Route
          path="/projects/procedural-shader-framework"
          element={<ProceduralShaderFramework />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);