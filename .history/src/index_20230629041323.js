import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, createBrowserRouter } from "react-router-dom";
import "./fonts/wotfard-cufonfonts-webfont/style.css";

import "./index.css";
import App from "./App";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
