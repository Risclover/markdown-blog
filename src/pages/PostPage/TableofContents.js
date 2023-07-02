import React from "react";
import "./TableofContents.css";

export default function TableofContents({ toc }) {
  function createObserver() {
    const options = {
      rootMargin: "0px 0px -200px 0px",
      threshold: 1,
    };
    const callback = () => {
      console.log("observed something");
    };
    return new IntersectionObserver(callback, options);
  }
  return (
    <div className="toc min-w-fit ml-20">
      <h3 className="uppercase font-medium tracking-widest mb-4">
        Table of Contents
      </h3>
      <ul>
        {toc.map((item) => (
          <a href={`#${item.split(" ").join("-").toLowerCase()}`}>
            <li className="mt-[10px] text-[15px] hover:text-sky-700">{item}</li>
          </a>
        ))}
      </ul>
    </div>
  );
}
