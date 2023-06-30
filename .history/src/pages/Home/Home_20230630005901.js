import React, { useEffect, useState } from "react";
import postList from "../../posts.json";
import BlogPost from "../../components/BlogPost";
import { Link } from "react-router-dom";
import Categories from "./Categories";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import HomeHeader from "../../components/HomeHeader";
import PostHeader from "../../components/PostHeader";
import { useOutletContext } from "react-router-dom";

export default function Home() {
  console.log(postList);

  const [postPage, setPostPage] = useState(false);

  postList.sort((a, b) => {
    let aPost = a.timestamp;
    let bPost = b.timestamp;

    return bPost - aPost;
  });

  return (
    <main className="container px-12 py-24 font-sans mx-auto max-w-6xl w-full flex flex-col">
      <Header>
        <NavBar />
        <HomeHeader />
        {postPage && <PostHeader setPostPage={setPostPage} />}
      </Header>
      <section className="mr-16">
        <h2 className="uppercase text-base font-medium tracking-widest text-pink-500 mb-9">
          Latest and Greatest
        </h2>
        <div className="grid grid-cols-1 gap-1 grid-flow-row ">
          {postList.map((post) => (
            <Link to={`/posts/${post.id}`} state={{ setPostPage: setPostPage }}>
              <BlogPost post={post} />
            </Link>
          ))}
        </div>
      </section>
      <Categories />
    </main>
  );
}
