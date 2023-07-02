import React from "react";
import Category from "./Category";

export default function Categories({ category }) {
  return (
    <section className="mb-20">
      <h2 className="uppercase text-lg font-medium tracking-widest text-pink-500 mb-9">
        Categories
      </h2>{" "}
      <div className="flex flex-wrap">{category}</div>
    </section>
  );
}
