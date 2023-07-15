import React from "react";
import { NavLink } from "react-router-dom";

export default function Category({ category }) {
  return (
    <NavLink
      to={`/react-blog/categories/${category.id}`}
      className="flex justify-center items-center mb-2 mr-2 text-sm font-normal font-wotfard rounded-lg bg-sky-100 dark:bg-slate-700 dark:text-white w-fit px-3 py-1.5 cursor-pointer"
    >
      {category.category}
    </NavLink>
  );
}
