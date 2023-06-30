import React, { useEffect } from "react";
import postList from "../posts.json";
import HomeHeader from "../components/HomeHeader";

export default function Home() {
  console.log(postList);

  postList.sort((a, b) => {
    let aPost = a.timestamp;
    let bPost = b.timestamp;

    return bPost - aPost;
  });

  return (
    <div className="container px-12 py-24 font-sans mx-auto max-w-6xl w-full">
      <h2 className="uppercase text-base font-semibold tracking-widest text-pink-500">
        Recently Published
      </h2>
      <div className="grid grid-cols-1 gap-1 grid-flow-row ">
        {postList.map((post) => (
          <div key={post.id} className="container py-2 bg-white">
            <div className="">{post.title}</div>
            <div>{post.date}</div>
            <div>{post.author}</div>
            <div>
              {post.description !== "No description given" && post.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
