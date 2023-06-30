import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

export default function PostHeader({ postList }) {
  const { id } = useParams();

  const post = postList.find((post) => post.id === +id);
  return (
    <div className="h-72 flex flex-col justify-end">
      <div className="mt-20 mb-5 text-slate-200 capitalize">
        <NavLink to="/">
          <span>Home</span>
        </NavLink>
        <span className="mx-5">&gt;</span>
        <span>{post?.category}</span>
      </div>
      <div className="text-4xl font-medium text-gray-50">{post?.title}</div>
      <div className="mt-4 text-lg font-normal text-slate-200 pb-14">
        {post?.subtitle !== "No subtitle given" ? post?.subtitle : ""}
      </div>
    </div>
  );
}
