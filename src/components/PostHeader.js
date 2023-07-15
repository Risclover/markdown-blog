import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

export default function PostHeader({ postList, categoriesList }) {
  const { id } = useParams();
  const [category, setCategory] = useState();

  const post = postList.find((post) => post.id === +id);

  console.log(postList);

  console.log("zzz", categoriesList);

  useEffect(() => {
    Object.values(categoriesList).map((category) =>
      category.category === post?.category ? setCategory(category.id) : ""
    );
  });

  console.log("category", category);
  return (
    <div className="sm:h-72 flex flex-col justify-end text-slate-50 z-10">
      <div className="mt-20 mb-5 text-slate-50 capitalize">
        <NavLink to="/react-blog" className="hover:text-gray-400">
          <span>Home</span>
        </NavLink>
        <span className="mx-5">&gt;</span>
        <NavLink
          to={`/react-blog/categories/${category}`}
          className="hover:text-gray-400"
        >
          <span>{post?.category}</span>
        </NavLink>
      </div>
      <div className="text-2xl sm:text-4xl font-medium leading-snug">
        {post?.title}
      </div>
      <div className="mt-2 text-medium sm:text-lg font-normal pb-14 text-slate-400">
        {post?.subtitle !== "No subtitle given" ? post?.subtitle : ""}
      </div>
    </div>
  );
}
