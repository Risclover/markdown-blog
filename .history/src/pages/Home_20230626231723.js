import React, { useEffect } from "react";
import "../fonts/Wotfard-Regular-webfont/stylesheet.css";
import postList from "../posts.json";

export default function Home() {
  useEffect(() => {
    async function lol() {
      const info = await fetch("./posts.json")
        .then((res) => {
          return res.json();
        })
        .then((data) => console.log("data:", data));

      console.log(info);
    }
    console.log(lol());
  }, []);

  return <div className="wotfard">Home</div>;
}
