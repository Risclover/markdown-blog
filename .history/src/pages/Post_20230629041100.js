import React from "react";
import { useParams } from "react-router-dom";

export default function Post({ postList }) {
  const { id } = useParams();

  console.log("id:", id);

  const post = postList.filter((post) => post.id === +id);

  console.log(post);
  return <div>{id} c:</div>;
}
