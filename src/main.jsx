import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@assets/scss/style.scss";
import Loader from "@components/shared-components/Loader";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Suspense fallback={<Loader />}>
    <BrowserRouter basename={import.meta.env.VITE_BASE_PATH}>
      <App />
      </BrowserRouter>
    </Suspense>
  </>
);
