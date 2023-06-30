import React, { useEffect } from "react";
import "../fonts/Wotfard-Regular-webfont/stylesheet.css";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

export default function Home() {
    useEffect(() => {
        async  {
            const info = fetch("./posts.json")
            .then((res) => {
              return res.json();
            })
            .then((data) => console.log("data:", data));

          console.log(info);
        }
    }, [])

  return <div className="wotfard">Home</div>;
}
