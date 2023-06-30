import React from "react";
import { useParams } from "react-router-dom";

export default function Post({ postList }) {
  const { postId } = useParams();

  console.log("id:", postId);
  return <div>Post</div>;
}
