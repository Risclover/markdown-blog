import React, { useEffect } from "react";
import { NavLink, useOutletContext, useParams } from "react-router-dom";
import "./CategoryPage.css";
import { HiMiniArrowRight } from "react-icons/hi2";

export default function CategoryPage({ categories, postList, pageType }) {
  const { id } = useParams();
  const [postPage, setPostPage] = useOutletContext();

  pageType = "category";

  useEffect(() => {
    setPostPage();
  }, []);

  return (
    <div className="w-full h-full bg-gray-100 dark:bg-gray-900 min-h-screen pt-16 sm:pt-32 px-8 pb-16">
      <div className="lg:max-w-5xl w-full m-auto">
        <h1 className="text-[38px] font-bold ml-8 mb-4 dark:text-gray-50">
          {categories[id - 1]?.category}
        </h1>
        <div className="categories-page">
          {postList.map(
            (post) =>
              post?.category === categories[id - 1]?.category && (
                <NavLink to={`/react-blog/posts/${post?.id}/#`}>
                  <div className="category-box cursor-pointer group h-full dark:bg-slate-800 dark:text-gray-50">
                    <div className="mb-3">
                      <h2 className="text-[22px] font-bold group-hover:text-sky-700 mb-1">
                        {post.title}
                      </h2>
                      <span className="text-slate-700 dark:text-slate-400 leading-7 font-medium text-[17px]">
                        {post?.subtitle !== "No subtitle given" &&
                          post.subtitle}
                      </span>
                    </div>
                    <p className="leading-7 text-[#0a0c10] dark:text-gray-50">
                      {post.description}
                    </p>
                    <div className="pt-4 leading-7 font-bold flex items-center dark:text-gray-50">
                      Read more{" "}
                      <HiMiniArrowRight className="ml-2 group-hover:text-sky-700 group-hover:block hidden" />
                    </div>
                  </div>
                </NavLink>
              )
          )}
        </div>
      </div>
    </div>
  );
}
