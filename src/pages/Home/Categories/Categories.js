import React from "react";
import Category from "./Category";

const categories = [
  "React",
  "Personal",
  "Tutorial",
  "Code Breakdown",
  "Opinion",
];

export default function Categories() {
  return (
    <section className="mb-20">
      <h2 className="uppercase text-base font-medium tracking-widest text-pink-500 mb-8">
        Categories
      </h2>{" "}
      <div className="flex flex-wrap">
        {categories.map((category) => (
          <Category title={category} />
        ))}
      </div>
    </section>
  );
}
