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
      <div className="mt-20 mb-10">Breadcrumbs &gt; Breadcrumbs</div>
      <div className="text-4xl font-medium text-gray-800">{post?.title} c:</div>
      <div className="mt-4 text-xl font-normal text-slate-500">
        {post?.subtitle}
      </div>
      <div>{post?.content}</div>
    </div>
  );
}
