import React from "react";

export default function Category({ title }) {
  return (
    <a className="flex justify-center items-center mb-2 mr-2 text-sm font-normal font-wotfard rounded-lg bg-sky-100 w-fit px-3 py-1.5 cursor-pointer">
      {title}
    </a>
  );
}
