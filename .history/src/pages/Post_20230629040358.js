import React from "react";
import { useParams } from "react-router-dom";

export default function Post({ post }) {
  const { id } = useParams();
  return <div>Post</div>;
}
