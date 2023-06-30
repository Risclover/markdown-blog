import React, { useEffect } from "react";
import "../fonts/Wotfard-Regular-webfont/stylesheet.css";
import postList from "../posts.json";
import "./Home.css";

export default function Home() {
  console.log(postList);

  postList.sort((a, b) => {
    let aPost = a.timestamp;
    let bPost = b.timestamp;

    return bPost - aPost;
  });

  return (
    <div className="container lg font-sans">
      <div className="grid grid-cols-2 gap-1 grid-flow-row">
        {postList.map((post) => (
          <div
            key={post.id}
            className="container h-96 border border-solid border-black px-24 py-2"
          >
            {post.title} {post.date}
          </div>
        ))}
      </div>
    </div>
  );
}
