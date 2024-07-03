//bridge btw component created in app.js & browser
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client"; //react library talks to browser
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
