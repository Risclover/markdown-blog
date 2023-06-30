import React from "react";
import { useParams } from "react-router-dom";

export default function PostPage({ postList }) {
  const { id } = useParams();

  console.log("id:", id);

  const post = postList.find((post) => post.id === +id);

  console.log(post?.title);

  if (!post) return null;
  return (
    <div className="mx-auto max-w-6xl w-full px-12">
      <div className="py-50">Breadcrumbs &gt; Breadcrumbs</div>
      <div>{post?.title} c:</div>
      <div>{post?.subtitle}</div>
      <div>{post?.content}</div>
    </div>
  );
}
