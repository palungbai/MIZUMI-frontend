import CapturePage from "@/pages/CapturePage";
import HomePage from "@/pages/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <BrowserRouter basename="">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/capture" element={<CapturePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
