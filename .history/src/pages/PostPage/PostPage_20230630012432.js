import React, { useEffect } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import TableofContents from "./TableofContents";

export default function PostPage({ postList }) {
  const { id } = useParams();
  const [postPage, setPostPage] = useOutletContext();

  useEffect(() => {
    setPostPage(true);
    console.log("post page:", postPage);
  }, []);

  const post = postList.find((post) => post.id === +id);

  if (!post) return null;
  return (
    <div className="mx-auto bg-slate-50 max-w-6xl w-full px-12 py-20 flex flex-row-reverse">
      <TableofContents />
      <div className="text-gray-700 font-medium text-lg leading-8">
        {post?.content}
      </div>
    </div>
  );
}
