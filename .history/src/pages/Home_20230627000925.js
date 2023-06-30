import React, { useEffect } from "react";
import "../fonts/Wotfard-Regular-webfont/stylesheet.css";
import postList from "../posts.json";

export default function Home() {
  console.log(postList);

  return (
    <div className="wotfard">
      {postList.map((post) => {
        <div>{post.title}</div>;
      })}
    </div>
  );
}
