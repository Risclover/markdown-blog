import React, { useEffect } from "react";
import postList from "../posts.json";
import BlogPost from "../components/BlogPost";

export default function Home() {
  console.log(postList);

  postList.sort((a, b) => {
    let aPost = a.timestamp;
    let bPost = b.timestamp;

    return bPost - aPost;
  });

  return (
    <main className="container px-12 py-24 font-sans mx-auto max-w-6xl w-full flex">
      <section className="mr-16">
        <h2 className="uppercase text-base font-medium tracking-widest text-fuchsia-500">
          Recently Published
        </h2>
        <div className="grid grid-cols-1 gap-1 grid-flow-row ">
          {postList.map((post) => (
            <BlogPost post={post} />
          ))}
        </div>
      </section>
      <section className="w-1/3 border-2 border-black">Testing</section>
    </main>
  );
}
