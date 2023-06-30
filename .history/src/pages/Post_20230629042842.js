import React from "react";
import { useParams } from "react-router-dom";

export default function Post({ postList }) {
  const { id } = useParams();

  console.log("id:", id);

  const post = postList.find((post) => post.id === +id);

  console.log(post?.title);

  if (!post) return null;
  return <div><div>{post?.title} c:</div><;
}
