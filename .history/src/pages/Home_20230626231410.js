import React from "react";
import "../fonts/Wotfard-Regular-webfont/stylesheet.css";

export default function Home() {
  const info = fetch("./posts.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => console.log("data:", data));
  return <div className="wotfard">Home</div>;
}
