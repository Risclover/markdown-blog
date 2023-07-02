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
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import ScrollToTop from "./ScrollToTop";

let pageType = "regular";

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

let categories = postList.map((post) => post.category !== "" && post.category);

const categoriesList = [];

categories.map((category, i) => {
  if (
    categoriesList
      .map((category) => {
        return category.category;
      })
      .indexOf(category) === -1
  ) {
    let obj = {
      id: i + 1,
      category: category,
    };

    if (obj.category !== false) categoriesList.push(obj);
  }
});

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App
        postList={postList}
        categoriesList={categoriesList}
        pageType={pageType}
      />
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home pageType={pageType} categoriesList={categoriesList} />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/blog",
        element: <Home pageType={pageType} categoriesList={categoriesList} />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/blog/posts/:id",
        element: <PostPage postList={postList} />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/blog/categories/:id",
        element: (
          <CategoryPage
            pageType={pageType}
            categories={categoriesList}
            postList={postList}
          />
        ),
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
