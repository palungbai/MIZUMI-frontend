import { lazy } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("@/pages/Home"));
const CapturePage = lazy(() => import("@/pages/CapturePage"));
const ResultPage = lazy(() => import("@/pages/ResultPage"));
const DisplayPage = lazy(() => import("@/pages/DisplayPage"));

const AppRouter = () => {
  return (
    <BrowserRouter basename="">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/capture" element={<CapturePage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/display" element={<DisplayPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
