import React, { useEffect } from "react";
import "../fonts/Wotfard-Regular-webfont/stylesheet.css";
import postList from "../posts.json";
import "./Home.css";

export default function Home() {
  console.log(postList);

  return (
    <div className="wotfard">
      <div className="posts">
        {postList.map((post) => (
          <div key={i} className="post">{post.title}</div>
        ))}
      </div>
    </div>
  );
}
