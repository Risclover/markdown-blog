import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import "./fonts/Wotfard-Regular-webfont/stylesheet.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
    </div>
  </Router>
);
