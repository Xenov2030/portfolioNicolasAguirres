import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { normalizePath } from "./data/seo.js";
import "./service-pages.css";
import "./index.css";
import "./editorial.css";

const root = document.getElementById("root");
const app = (
  <React.StrictMode>
    <App path={normalizePath(window.location.pathname)} />
  </React.StrictMode>
);
if (root.hasChildNodes()) ReactDOM.hydrateRoot(root, app);
else ReactDOM.createRoot(root).render(app);

import "./commercial.css";
