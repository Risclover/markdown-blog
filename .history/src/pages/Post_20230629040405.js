import React from "react";
import { useParams } from "react-router-dom";

export default function Post({ post }) {
  const { id } = useParams();

  console.log("id:", id);
  return <div>Post</div>;
}
