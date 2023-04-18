import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Helmet } from "react-helmet";
import "./assets/scss/style.scss";
import ScriptLoad from "./ScriptLoad";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    
    <App />
    <ScriptLoad />
  </>
);
