import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResultPage from "../pages/ResultPage";
import HomePage from "../pages/Home";
import CapturePage from "../pages/CapturePage";

const AppRouter = () => {
  return (
    <BrowserRouter basename="">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/capture" element={<CapturePage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
