import React, { useEffect } from "react";
import postList from "../posts.json";
import { HiMiniArrowRight } from "react-icons/hi2";

export default function Home() {
  console.log(postList);

  postList.sort((a, b) => {
    let aPost = a.timestamp;
    let bPost = b.timestamp;

    return bPost - aPost;
  });

  return (
    <main className="container px-12 py-24 font-sans mx-auto max-w-6xl w-full flex">
      <section className="mr-16">
        <h2 className="uppercase text-base font-medium tracking-widest text-pink-500">
          Recently Published
        </h2>
        <div className="grid grid-cols-1 gap-1 grid-flow-row ">
          {postList.map((post) => (
            <div key={post.id} className="container py-2 bg-white mt-12">
              <h3 className="text-xl font-bold leading-8 text-gray-950">
                {post.title}
              </h3>
              {post.subtitle !== "No subtitle given" && (
                <div className="text-slate-500 text-lg leading-8 font-medium">
                  {post.subtitle}
                </div>
              )}
              {post.description !== "No description given" && (
                <div className="mt-4 font-normal text-gray-900 text-base leading-7">
                  {post.description}
                </div>
              )}
              <div className="mt-4 font-bold text-neutral-900 text-base">
                Read more <HiMiniArrowRight />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="w-1/3 border-2 border-black">Testing</section>
    </main>
  );
}
