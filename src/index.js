import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./fonts/wotfard-cufonfonts-webfont/style.css";
import postList from "./posts.json";

import "./index.css";
import App from "./App";
import ErrorPage from "./ErrorBoundary";
import PostPage from "./pages/PostPage/PostPage";
import Home from "./pages/Home/Home";
import ErrorBoundary from "./ErrorBoundary";

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

// Whenever the user explicitly chooses light mode
localStorage.theme = "light";

// Whenever the user explicitly chooses dark mode
localStorage.theme = "dark";

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem("theme");

const router = createBrowserRouter([
  {
    path: "/",
    element: <App postList={postList} />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/posts/:id",
        element: <PostPage postList={postList} />,
        errorElement: <ErrorBoundary />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
