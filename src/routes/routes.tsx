import CapturePage from "@/pages/CapturePage";
import DisplayPage from "@/pages/DisplayPage";
import HomePage from "@/pages/Home";
import ResultPage from "@/pages/ResultPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

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
