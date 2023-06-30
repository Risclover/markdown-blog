import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, createBrowserRouter } from "react-router-dom";
import "./fonts/wotfard-cufonfonts-webfont/style.css";

import "./index.css";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: 
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
