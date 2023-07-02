import React, { useEffect } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import TableofContents from "./TableofContents";
import Markdown from "react-markdown";
import gfm from "remark-gfm";
import toc from "remark-toc";
import parse from "html-react-parser";
import rehypeRaw from "rehype-raw";

export default function PostPage({ postList, postType }) {
  const { id } = useParams();
  const [postPage, setPostPage] = useOutletContext();

  const post = postList.find((post) => post.id === +id);
  const source = post?.content.replace(/\n/gi, "&nbsp; \n\n").slice(7);
  const tocArr = post.toc.split("/");

  useEffect(() => {
    setPostPage(true);

    const headings = document.querySelectorAll("h1");

    headings.forEach((heading) => {
      heading.classList.add("text-3xl", "font-bold", "mt-16", "text-sky-700");
      const replacement = heading.textContent.toLowerCase();
      let split = replacement.split(" ");
      heading.setAttribute("id", split.join("-").slice(0, -1));
    });

    const headings2 = document.querySelectorAll("h2");

    headings2.forEach((heading) => {
      heading.classList.add("text-2xl", "font-semibold", "mt-12");
      const replacement = heading.textContent.toLowerCase();
      let split = replacement.split(" ");
      heading.setAttribute("id", split.join("-").slice(0, -1));
    });

    const images = document.querySelectorAll("img");

    images.forEach((image) => {
      image.classList.add("rounded-2xl");
    });
  }, []);

  if (!post) return null;
  return (
    <div className="mx-auto max-w-5xl w-full px-12 py-20 flex flex-row-reverse dark:text-white">
      {post.toc.length > 0 && <TableofContents toc={tocArr} />}
      <div className="text-slate-900 font-medium text-lg leading-8 font-wotfard dark:text-white">
        <Markdown
          escapeHtml={false}
          children={source}
          rehypePlugins={[rehypeRaw]}
        />
      </div>
    </div>
  );
}
