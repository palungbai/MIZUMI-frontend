import { Toaster } from "@/components/ui/toaster";
import { LoadingPage } from "@/pages/LoadingPage";
import { Suspense, lazy } from "react";

import { HashRouter, Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("@/pages/Home"));
const CapturePage = lazy(() => import("@/pages/CapturePage"));
const ResultPage = lazy(() => import("@/pages/ResultPage"));
const DisplayPage = lazy(() => import("@/pages/DisplayPage"));
const AdsPage = lazy(() => import("@/pages/AdsPage"));

const AppRouter = () => {
  return (
    <>
      <HashRouter basename="">
        <Routes>
          <Route path="/" element={
            <Suspense fallback={<LoadingPage />}>
              <HomePage />
            </Suspense>
          } />
          <Route path="/capture" element={
            <Suspense fallback={<LoadingPage />}>
              <CapturePage />
            </Suspense>
          } />
          <Route path="/result" element={
            <Suspense fallback={<LoadingPage />}>
              <ResultPage />
            </Suspense>
          } />
          <Route path="/ads" element={
            <Suspense fallback={<LoadingPage />}>
              <AdsPage />
            </Suspense>
          } />
          <Route path="/display" element={
            <Suspense fallback={<LoadingPage />}>
              <DisplayPage />
            </Suspense>
          } />
        </Routes>
      </HashRouter>
      <Toaster />
    </>
  );
};

export default AppRouter;
