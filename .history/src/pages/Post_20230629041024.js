import React from "react";
import { useParams } from "react-router-dom";

export default function Post({ postList }) {
  const { id } = useParams();

  console.log("id:", postId);

  return <div>{postId} c:</div>;
}
