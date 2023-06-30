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
    <div className="font-sans">
      <div className="posts">
        {postList.map((post) => (
          <div
            key={post.id}
            className="container border border-solid border-black px-2 py-24"
          >
            {post.title} {post.date}
          </div>
        ))}
      </div>
    </div>
  );
}
