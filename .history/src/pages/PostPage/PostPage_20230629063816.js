import React from "react";
import { useParams } from "react-router-dom";

export default function PostPage({ postList }) {
  const { id } = useParams();

  console.log("id:", id);

  const post = postList.find((post) => post.id === +id);

  console.log(post?.title);

  if (!post) return null;
  return (
    <div className="w-96 mx-auto">
      <div>{post?.title} c:</div>
      <div>{post?.content}</div>
    </div>
  );
}
