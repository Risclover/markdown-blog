import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./fonts/wotfard-cufonfonts-webfont/style.css";
import postList from "./posts.json";

import "./index.css";
import App from "./App";
import ErrorPage from "./ErrorPage";
import Post from "./pages/Post";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home
      }
      {
        path: "/posts/:id",
        element: <Post postList={postList} />,
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
