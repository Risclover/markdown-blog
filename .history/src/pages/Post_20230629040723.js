import React from "react";
import { useParams } from "react-router-dom";

export default function Post({ postList }) {
  const { postId } = useParams();

  console.log("id:", postId);

  console.log(
    postList.map((post) => (post.id === postId ? console.log(post) : ""))
  );
  return <div>Post</div>;
}
