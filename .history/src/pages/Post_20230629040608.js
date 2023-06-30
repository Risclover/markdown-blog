import React from "react";
import { useParams } from "react-router-dom";

export default function Post({ post }) {
  const { postId } = useParams();

  console.log("id:", id);
  return <div>Post</div>;
}
