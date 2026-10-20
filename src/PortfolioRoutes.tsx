import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import App from "./App";
import ProjectLayout from "./ProjectLayout";
const Rodan = lazy(() => import("./pages/Rodan"));
const Velos = lazy(() => import("./pages/velos"));
const Iryven = lazy(() => import("./pages/Iryven"));
const NvrhiPathTracer = lazy(() => import("./pages/NvrhiPathTracer"));
const MasterThesis = lazy(() => import("./pages/MasterThesis"));


export default function PortfolioRoutes() {
 return (
      <Suspense fallback={<div role="status" className="p-8 text-stone-400">Loading project…</div>}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route element={<ProjectLayout />}>
        <Route path="/projects/rodan" element={<Rodan />} />
        <Route path="/projects/velos" element={<Velos />} />
        <Route path="/projects/master-thesis" element={<MasterThesis />} />
        <Route path="/projects/iryven" element={<Iryven />} />
        <Route path="/projects/nvrhi-pt" element={<NvrhiPathTracer />} />
        <Route
          path="/projects/procedural-shader-framework"
          element={<Navigate to="/projects/iryven" replace />}
        />
        </Route>
      </Routes>
      </Suspense>
 );
}
