import React, { useEffect } from "react";
import "../fonts/Wotfard-Regular-webfont/stylesheet.css";
import postList from "../posts.json";
import "./Home.css";

export default function Home() {
  console.log(postList);

  return (
    <div className="wotfard">
      {postList.map((post) => {
        <div className="post">{post.title}</div>;
      })}
    </div>
  );
}
