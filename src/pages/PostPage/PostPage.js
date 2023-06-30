import React, { useEffect } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import TableofContents from "./TableofContents";
import Markdown from "react-markdown";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

export default function PostPage({ postList }) {
  const { id } = useParams();
  const [postPage, setPostPage] = useOutletContext();

  useEffect(() => {
    setPostPage(true);
    console.log("post page:", postPage);
  }, []);

  const post = postList.find((post) => post.id === +id);

  const source = post?.content.replace(/\n/gi, "&nbsp; \n\n").slice(7);

  if (!post) return null;
  return (
    <div className="mx-auto max-w-5xl w-full px-12 py-20 flex flex-row-reverse">
      {post.toc === "true" && <TableofContents />}
      <div className="text-slate-900 font-medium text-lg leading-8 font-wotfard">
        <ReactMarkdown source={source} remarkPlugins={[gfm]}>
          {source}
        </ReactMarkdown>
      </div>
    </div>
  );
}
