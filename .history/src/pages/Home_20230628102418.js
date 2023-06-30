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
    <div className="container max-w-lg font-sans mx-auto border-black-4">
      <HomeHeader />
      <h2 className="uppercase text-base font-semibold tracking-widest text-pink-500">
        Recently Published
      </h2>
      <div className="grid grid-cols-1 gap-1 grid-flow-row border">
        {postList.map((post) => (
          <div key={post.id} className="container border py-2 bg-white">
            {post.title} {post.date} {post.author}
          </div>
        ))}
      </div>
    </div>
  );
}
