import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./assets/style/Style.css";
import LandingPage from "./pages/LandingPage.jsx";
import ComGen from "./pages/ComGen.jsx";
import CodeRev from "./pages/CodeRev.jsx";
import AppLayout from "./layout/AppLayout.jsx";
import ImageGenerator from "./pages/ImageGenerator.jsx";

const App = () => {

  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/component-generator" element={<ComGen />} />
          <Route path="/image-generator" element={<ImageGenerator />} />
          <Route path="/code-reviwer" element={<CodeRev />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
