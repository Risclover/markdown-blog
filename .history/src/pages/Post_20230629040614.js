import React from "react";
import { useParams } from "react-router-dom";

export default function Post({ post }) {
  const { postId } = useParams();

  console.log("id:", postId);
  return <div>Post</div>;
}
