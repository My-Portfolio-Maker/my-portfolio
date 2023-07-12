import Home from "@views/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "@views/NotFound";
import { ParallaxProvider } from "react-scroll-parallax";
import { Suspense } from "react";
import Loader from "./components/shared-components/Loader";

function App() {
  return (
    <ParallaxProvider>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/404" element={<NotFound />} />

          <Route path="*" element={<Navigate to="404" replace />} />
        </Routes>
      </Suspense>
    </ParallaxProvider>
  );
}

export default App;
