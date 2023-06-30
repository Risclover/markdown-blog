import React, { useEffect } from "react";

export default function PostHeader({ post }) {
  return (
    <div className="h-72 flex flex-col justify-end">
      <div className="mt-20 mb-10">Breadcrumbs &gt; Breadcrumbs</div>
      <div className="text-4xl font-medium text-gray-800">{post?.title} c:</div>
      <div className="mt-4 text-xl font-medium text-slate-500">
        {post?.subtitle} Exploring the difference between assignment and
        mutation in JavaScript.
      </div>
    </div>
  );
}
