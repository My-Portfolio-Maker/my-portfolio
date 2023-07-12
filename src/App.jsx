import { useEffect, useState, lazy, Suspense } from "react";
import Navbar from "./components/layout-components/Navbar";
import { useAxios } from "./utils/useFetch";
import { API_BASE_URL, UID } from "./configs/AppConfig";
import Home from "./views/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Loader from "./components/shared-components/Loader";
import NotFound from "./views/NotFound";
import ScriptLoad from "./utils/ScriptLoad";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <ParallaxProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </ParallaxProvider>
  );
}

export default App;
