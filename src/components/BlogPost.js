import React from "react";
import { HiMiniArrowRight } from "react-icons/hi2";

export default function BlogPost({ post }) {
  return (
    <div key={post.id} className="container py-2 mb-12 group cursor-pointer">
      <h3 className="text-xl font-bold leading-8 text-gray-950 group-hover:text-sky-700 dark:text-gray-50">
        {post.title}
      </h3>
      {post.subtitle !== "No subtitle given" && (
        <div className="text-slate-500 text-base leading-8 font-medium dark:text-gray-50">
          {post.subtitle}
        </div>
      )}
      {post.description !== "No description given" && (
        <div className="mt-4 font-normal text-gray-900 text-base leading-7 dark:text-gray-50">
          {post.description}
        </div>
      )}
      <div className="mt-4 font-bold text-neutral-900 text-base flex items-center dark:text-gray-50">
        <span className="mr-1">Read more</span>{" "}
        <span className="text-lg text-sky-700 hidden group-hover:block">
          <HiMiniArrowRight />
        </span>
      </div>
    </div>
  );
}
