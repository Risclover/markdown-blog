import React, { useEffect } from "react";

export default function PostHeader({ setPostPage }) {
  useEffect(() => {
    setPostPage(true);
  });
  return (
    <div className="h-72 flex flex-col justify-end">
      <div>Testing post header</div>
    </div>
  );
}
